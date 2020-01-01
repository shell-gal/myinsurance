package com.cq.myinsurance.service.impls.casemanagerimlpls;

import com.cq.myinsurance.dao.CaseMapper;
import com.cq.myinsurance.dao.WarrantyMapper;
import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.CaseLoad;
import com.cq.myinsurance.pojo.vo.WarrantyLoad;
import com.cq.myinsurance.service.CaseService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CaseServiceImpls implements CaseService {

    @Resource
    CaseMapper caseMapper;

    @Resource
    WarrantyMapper warrantyMapper;

//    查询保单拥有的案件
    @Override
    public PageInfo loadallcase(WarrantyLoad warrantyLoad) {
        if (warrantyLoad.getWarranty_number()==null){
            return null;
        }
        if (warrantyLoad.getIndexpage()==null){
            warrantyLoad.setIndexpage(1);
        }
        if (warrantyLoad.getPagesize()==null){
            warrantyLoad.setPagesize(10);
        }
        PageHelper.startPage(warrantyLoad.getIndexpage(),warrantyLoad.getPagesize());
        List<Case> caseList = caseMapper.selectByWarantyid(warrantyLoad.getWarranty_number());
        PageInfo pageInfo=new PageInfo(caseList);
        if (pageInfo==null){
            return null;
        }
        return pageInfo;
    }


//    查询所有的保单信息
    @Override
    public PageInfo loadallWarranty(CaseLoad caseLoad) {
        if (caseLoad.getIndexpage()==null){
            caseLoad.setIndexpage(1);
        }
        if (caseLoad.getPagesize()==null){
            caseLoad.setPagesize(10);
        }
        PageHelper.startPage(caseLoad.getIndexpage(),caseLoad.getPagesize());
        List<Object> objectList = warrantyMapper.selectWarranty(null);
        PageInfo pageInfo=new PageInfo(objectList);
        if (CollectionUtils.isEmpty(objectList)){
            return null;
        }
        return pageInfo;
    }


//    查询我处理的案件信息
    @Override
    public PageInfo loadCase(Map<String, Object> map) {
        if (CollectionUtils.isEmpty(map)){
            return null;
        }
        User user= (User) SecurityUtils.getSubject().getPrincipal();
        map.put("jieanid",user.getUserId());
        Integer indexpage = (Integer) map.get("indexpage");
        PageHelper.startPage(indexpage,10);
        List<Object> objectList = caseMapper.selectcase(map);
        PageInfo pageInfo=new PageInfo(objectList);
        if (CollectionUtils.isEmpty(objectList)){
            return null;
        }
        return pageInfo;
    }

//    查询所有的案件
    @Override
    public PageInfo loadcase(Map<String, Object> map) {
        if (CollectionUtils.isEmpty(map)){
            return null;
        }
        Integer indexpage = (Integer) map.get("indexpage");
        PageHelper.startPage(indexpage,10);
        List<Object> objectList = caseMapper.selectcase(map);
        PageInfo pageInfo=new PageInfo(objectList);
        if (CollectionUtils.isEmpty(objectList)){
            return null;
        }
        return pageInfo;
    }


    //    新增案件
    @Override
    public boolean addCase(Case c) {
        if (c==null){
            return false;
        }
        Subject subject = SecurityUtils.getSubject();
        User user= (User) subject.getPrincipal();
        c.setJieanId(user.getUserId());
        c.setCreatetime(new Date());
        int i = caseMapper.insertSelective(c);
        if (i>0){
            return true;
        }
        return false;
    }
}
