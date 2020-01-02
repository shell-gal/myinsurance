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
        String rolename = map.get("rolename").toString();
        String case_status="";

        if (rolename.equals("'接案员'")){
            case_status ="已报案";
            map.put("kancaid",1);
//            rname ="勘察员";
        }else if (rolename.equals("'定损经理'")){
            map.put("dingsunid",1);
            case_status="定损中";
//            rname="定损员";
        }else if (rolename.equals("'核损经理'")){
            map.put("hesunid",1);
            case_status="核损中";
//            rname="核损员";
        }else if (rolename.equals("'理算经理'")){
            map.put("lisuanid",1);
            case_status="理算中";
//            rname="理算员";
        }else if (rolename.equals("核赔经理")){
            map.put("hepeiid",1);
            case_status="核算中";
//            rname="核赔员";
        }else if (rolename.equals("'理赔经理'")){
            map.put("lipeiid",1);
            case_status="理赔中";
//            rname="理赔员";
        }

       map.put("case_state",case_status);
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
        String rname="";
        System.out.println("rolename:"+rolename);
        if (rolename.equals("'接案员'")){
//            case_status ="已报案";
            rname ="勘察员";
        }else if (rolename.equals("'定损经理'")){
            System.out.println("定损经理:");
//            case_status="定损中";
            rname="定损员";
        }else if (rolename.equals("'核损经理'")){
//            case_status="核损中";
            rname="核损员";
        }else if (rolename.equals("'理算经理'")){
//            case_status="理算中";
            rname="理算员";
        }else if (rolename.equals("'核赔经理'")){
//            case_status="核算中";
            rname="核赔员";
        }else if (rolename.equals("'理赔经理'")){
//            case_status="理赔中";
            rname="理赔员";
        }

        List<User> users = authorizationMapper.selectUserByrolename(rname);
        if (CollectionUtils.isEmpty(users)){
            return null;
        }

        return users;
    }

    @Override
    public boolean diaodu(Map<String, Object> map) {
        String chakan = (String) map.get("chakan");
        String[] s=chakan.split(":");
        map.put("chakanid",s[0]);
        System.out.println("s[0]:"+s[0]);
//
        Case c=new Case();
        c.setCaseId((Integer.valueOf(map.get("reported_number").toString())) );

        String rolename = map.get("rolename").toString();
        if (rolename.equals("'接案员'")){
            c.setKancaId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("勘察中");
        }else if (rolename.equals("'定损经理'")){
            c.setDingsunId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("定损中");
        }else if (rolename.equals("'核损经理'")){
            c.setHesunId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("核损中");
        }else if (rolename.equals("'理算经理'")){
            c.setLisuanId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("理算中");
        }else if (rolename.equals("'核赔经理'")){
            c.setHepeiId(Integer.valueOf( map.get("chakanid").toString()));
            c.setCaseStatus("核赔中");
        }else if (rolename.equals("'理赔经理'")){
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
