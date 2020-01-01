package com.cq.myinsurance.service.impls.Diapatchmanagerimpls;

import com.cq.myinsurance.dao.AuthorizationMapper;
import com.cq.myinsurance.dao.CaseMapper;
import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.service.DispatchService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class DispatchServiceImpls implements DispatchService {

    @Resource
    CaseMapper caseMapper;

    @Resource
    AuthorizationMapper authorizationMapper;



//    查询案件
    @Override
    public PageInfo loadCasebyStatus(Map<String, Object> map) {
        PageHelper.startPage((Integer) map.get("indexpage"),10);
        List<Case> case_state = caseMapper.selectCaseByEx(map);
        PageInfo p=new PageInfo(case_state);
        if (CollectionUtils.isEmpty(case_state)){
            return null;
        }
        return p;
    }


//    查询勘察人员
    @Override
    public List<User> loadKanca() {
        List<User> users = authorizationMapper.selectUserByrolename();
        if (CollectionUtils.isEmpty(users)){
            return null;
        }
        System.out.println(users);
        return users;
    }

    @Override
    public boolean diaodu(Map<String, Object> map) {
         Case c=new Case();
        c.setCaseId((Integer) map.get("reported_number"));
        c.setKancaId((Integer) map.get("chakan"));
        int i = caseMapper.updateByPrimaryKeySelective(c);
        if (i>0){
            return true;
        }
        return false;
    }
}
