package com.cq.myinsurance.service.impls.adjustmentmanage;

import com.cq.myinsurance.dao.CaseMapper;
import com.cq.myinsurance.dao.WarrantyMapper;
import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.Warranty;
import com.cq.myinsurance.pojo.vo.CaseVo;
import com.cq.myinsurance.service.AdjustmentService;
import com.cq.myinsurance.utils.BeanUtil;
import com.cq.myinsurance.utils.enums.CaseStatus;;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Message:
 * @Author：Cheirmin
 * @Date: 2019/12/27 12:29
 * @Version 1.0
 */
@Service
public class AdjustmentServiceImpl implements AdjustmentService {
    @Resource
    CaseMapper caseMapper;

    @Resource
    WarrantyMapper warrantyMapper;

    @Override
    public PageInfo<CaseVo> getCasePage(int pageNum, int pageSize ,String search) {

        PageHelper.startPage(pageNum, pageSize);
        //service里面的代码
        List<Case> caseList = caseMapper.selectCaseByStatus(CaseStatus.CASE_ADJUST,search);

        PageInfo<Case> casePageInfo = new PageInfo<>(caseList);

        PageInfo<CaseVo> caseVos = new PageInfo<>();
        caseVos.setPageNum(casePageInfo.getPageNum());
        caseVos.setPageSize(casePageInfo.getPageSize());
        caseVos.setSize(casePageInfo.getSize());
        caseVos.setStartRow(casePageInfo.getStartRow());
        caseVos.setEndRow(casePageInfo.getEndRow());
        caseVos.setTotal(casePageInfo.getTotal());
        caseVos.setPages(casePageInfo.getPages());
        caseVos.setList(BeanUtil.copyList(caseList,CaseVo.class));

        for (int i = 0; i < casePageInfo.getSize(); i++) {
            //地区拼接
            caseVos.getList().get(i).setDangerAddress(caseList.get(i).getDangerAddressProvince(),caseList.get(i).getDangerAddressCity(),caseList.get(i).getDetailAddress());

            //获取车牌号
            Warranty warranty = warrantyMapper.selectByPrimaryKey(caseList.get(i).getWarrantyId());
            String carNumber = (warranty ==null?"":warranty.getCarNumber());
            caseVos.getList().get(i).setCarNumber(carNumber);
        }

        System.out.println("caseVoPageInfo---"+caseVos);

        return caseVos;
    }
}
