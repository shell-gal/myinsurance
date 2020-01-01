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
        PageHelper.startPage(Integer.valueOf(map.get("indexpage").toString()) ,10);
        List<Case> case_state = caseMapper.selectCaseByEx(map);
        PageInfo p=new PageInfo(case_state);
        if (CollectionUtils.isEmpty(case_state)){
            return null;
        }
        return p;
    }


//    查询勘察人员
    @Override
    public List<User> loadKanca(String rolename) {
        List<User> users = authorizationMapper.selectUserByrolename(rolename);
        if (CollectionUtils.isEmpty(users)){
            return null;
        }
        System.out.println(users);
        return users;
    }

    @Override
    public boolean diaodu(Map<String, Object> map) {
        String chakan = (String) map.get("chakan");
        String[] s=chakan.split(":");
        map.put("chakanid",s[0]);

//

        Case c=new Case();
        c.setCaseId((Integer.valueOf(map.get("reported_number").toString())) );

        String rolename = map.get("rolename").toString();
        if (rolename=="接案员"){
            c.setKancaId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("勘察中");
        }
        if (rolename=="定损经理"){
            c.setDingsunId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("定损中");
        }
        if (rolename=="核损经理"){
            c.setHesunId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("核损中");
        }
        if (rolename=="理算经理"){
            c.setLisuanId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("理算中");
        }
        if (rolename=="核赔经理"){
            c.setHepeiId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("核赔中");
        }
        if (rolename=="理赔经理"){
            c.setLipeiId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("理赔中");
        }

        int i = caseMapper.updateByPrimaryKeySelective(c);
        if (i>0){
            return true;
        }
        return false;
    }
}
