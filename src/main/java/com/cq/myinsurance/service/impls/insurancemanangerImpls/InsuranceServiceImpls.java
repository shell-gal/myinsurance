package com.cq.myinsurance.service.impls.insurancemanangerImpls;

import com.cq.myinsurance.dao.PolicyholderMapper;
import com.cq.myinsurance.dao.RecognizeeMapper;
import com.cq.myinsurance.dao.WarrantyMapper;
import com.cq.myinsurance.pojo.Policyholder;
import com.cq.myinsurance.pojo.Recognizee;
import com.cq.myinsurance.pojo.Warranty;
import com.cq.myinsurance.pojo.vo.WarrantyLoad;
import com.cq.myinsurance.service.InsuranceService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class InsuranceServiceImpls implements InsuranceService {

    @Resource
    WarrantyMapper warrantyMapper;

    @Resource
    PolicyholderMapper policyholderMapper;

    @Resource
    RecognizeeMapper recognizeeMapper;


//    查询保单信息
    @Override
    public PageInfo loadInsurance(WarrantyLoad warrantyLoad) {
        if (warrantyLoad.getIndexpage()==null){
            warrantyLoad.setIndexpage(1);
        }
        if (warrantyLoad.getPagesize()==null){
            warrantyLoad.setPagesize(10);
        }
        Map<String,Object> map=new HashMap<>();
        map.put("warranty_number",warrantyLoad.getWarranty_number());
        map.put("policyholders_name",warrantyLoad.getPolicyholders_name());
        map.put("recognizee_name",warrantyLoad.getRecognizee_name());
        PageHelper.startPage(warrantyLoad.getIndexpage(),warrantyLoad.getPagesize());
        List<Object> objectList = warrantyMapper.selectWarranty(map);
        PageInfo pageInfo=new PageInfo(objectList);
        if (CollectionUtils.isEmpty(objectList)){
            return null;
        }
        return pageInfo;
    }

    @Override
    public List<Object> loadInsuranceOne(Integer warranty_number) {
        if (warranty_number==null){
            return null;
        }
        List<Object> objectList = warrantyMapper.selectWarantyOne(warranty_number);
        if (CollectionUtils.isEmpty(objectList)){
            return null;
        }
        return objectList;
    }

    @Override
    @Transactional
    public boolean updateInsurance(Warranty warranty) {
        if (warranty==null){
            return false;
        }
        Policyholder policyholder= warranty.getPolicyholders();
        Recognizee recognizee = warranty.getRecognizee();
        int i = warrantyMapper.updateByPrimaryKeySelective(warranty);
        int j = recognizeeMapper.updateByPrimaryKeySelective(recognizee);
        int k = policyholderMapper.updateByPrimaryKeySelective(policyholder);
        if (i>0&&j>0&&k>0){
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteInsurance(WarrantyLoad warrantyLoad) {
        return false;
    }

    @Override
    public boolean addInsuracne(Warranty warranty) {
        return false;
    }
}
