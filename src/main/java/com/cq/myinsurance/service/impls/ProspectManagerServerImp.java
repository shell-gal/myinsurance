package com.cq.myinsurance.service.impls;

import com.cq.myinsurance.dao.*;
import com.cq.myinsurance.pojo.*;
import com.cq.myinsurance.service.ProspectManagerServer;
import com.cq.myinsurance.utils.APIRequest;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @Filename
 * @auther 吴星辰;
 * @data 2019/12/27 14:52;
 * @Descripion
 * @Version 1.1.1
 * @Function
 * @History
 */

@Service
public class ProspectManagerServerImp implements ProspectManagerServer {

     @Autowired
    CaseMapper caseMapper;

     @Autowired
     SelfcarlossMapper selfcarlossMapper;



     @Autowired
     OthercarlossMapper othercarlossMapper;


     @Autowired
     ObjectlossMapper objectlossMapper;
     @Autowired
     PeoplelossMapper peoplelossMapper;


     @Autowired
     LossMapper lossMapper;

    @Override
    public APIRequest ReoprtQuery(Long w, Integer page) {
       User u= (User) SecurityUtils.getSubject().getPrincipal();
        APIRequest api=new APIRequest();
        PageHelper.startPage(page,5);
        List<Case> list=new ArrayList<Case>();
        list= caseMapper.selectCasePage(w,u.getUserId());
        PageInfo<Case> pg=new PageInfo<Case>(list);
        if(list.size()!=0){
            api.setSingerData(pg);
            api.setResult(true);
        }else{
            api.setMessage("没有这条数据");
            api.setResult(false);
        }
        return api;
    }

    @Override
    public APIRequest LoseQuery(Long reported_number, Integer page) {
//初始化页面当前页与大小
        PageHelper.startPage(page, 5);
        List<Map<String,String>> list=lossMapper.losequery(reported_number);

        System.out.println(list.size());
        //创建api
        APIRequest api=new APIRequest();
        //将集合放入pageInfo里进行自动分页
        PageInfo<Map<String,String>> pi=new PageInfo<Map<String,String>>(list);
        //setSingerData
        api.setSingerData(pi);
          api.setResult(true);
        return api;
    }


    @Override
    public APIRequest CompensateQuery(Long reported_number, Integer page) {
        User u= (User) SecurityUtils.getSubject().getPrincipal();
        //初始化页面当前页与大小
        PageHelper.startPage(page, 5);
        List<Map<String,String>> list=lossMapper.CompensateQuery(reported_number,u.getUserId());

        System.out.println(list.size());
        //创建api
        APIRequest api=new APIRequest();
        //将集合放入pageInfo里进行自动分页
        PageInfo<Map<String,String>> pi=new PageInfo<>(list);
        //setSingerData
        api.setSingerData(pi);
        api.setResult(true);
        return api;
    }




    @Override
    public APIRequest queryHeLose(Long reported_number) {
       Othercarloss othercarloss= othercarlossMapper.selectByPrimaryKey(Integer.valueOf(reported_number.toString()));
       APIRequest apiRequest=new APIRequest();
       apiRequest.setResult(true);
       apiRequest.setSingerData(othercarloss);
        return apiRequest;
    }

    @Override
    public APIRequest queryMyLose(Long reported_number) {
        Selfcarloss othercarloss= selfcarlossMapper.selectByPrimaryKey(Integer.valueOf(reported_number.toString()));
        APIRequest apiRequest=new APIRequest();
        apiRequest.setResult(true);
        apiRequest.setSingerData(othercarloss);
        return apiRequest;
    }

    @Override
    public APIRequest thingLose(Long reported_number) {
        Objectloss othercarloss= objectlossMapper.selectByPrimaryKey(Integer.valueOf(reported_number.toString()));
        APIRequest apiRequest=new APIRequest();
        apiRequest.setResult(true);
        apiRequest.setSingerData(othercarloss);
        return apiRequest;
    }

    @Override
    public APIRequest peopleLose(Long reported_number) {
        Peopleloss othercarloss= peoplelossMapper.selectByPrimaryKey(Integer.valueOf(reported_number.toString()));
        APIRequest apiRequest=new APIRequest();
        apiRequest.setResult(true);
        apiRequest.setSingerData(othercarloss);
        return apiRequest;
    }

    @Override
    public APIRequest upCaseloss(Long reported_number) {
        APIRequest apiRequest=new APIRequest();
        Case ca=new Case();
        ca.setCaseId(Integer.valueOf(reported_number.toString()));
        ca.setCaseStatus("核损中");
          if (caseMapper.updateByPrimaryKeySelective(ca)>0){
              apiRequest.setResult(true);
             return apiRequest;
          };
        apiRequest.setResult(false);
        apiRequest.setMessage("更新失败");
        return apiRequest;
    }

    @Override
    public APIRequest upCaselossToOk(Long reported_number) {
        APIRequest apiRequest=new APIRequest();
        Case ca=new Case();
        ca.setCaseId(Integer.valueOf(reported_number.toString()));
        ca.setCaseStatus("理算中");
        if (caseMapper.updateByPrimaryKeySelective(ca)>0){
            apiRequest.setResult(true);
            return apiRequest;
        };
        apiRequest.setResult(false);
        apiRequest.setMessage("更新失败");
        return apiRequest;
    }


    @Override
    public APIRequest myCheSunAdd(Map<String, String> map) {
        if (StringUtils.isEmpty(map.get("condition_info_name"))||StringUtils.isEmpty(map.get("loss_assessment_price"))||
                StringUtils.isEmpty(map.get("maintenance_point"))||StringUtils.isEmpty(map.get("loss_number"))||
                StringUtils.isEmpty(map.get("loss_assessment_sum"))||StringUtils.isEmpty(map.get("reported_number"))||
                StringUtils.isEmpty(map.get("loss_picture"))){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);
            apiRequest.setMessage("请求参数错误");
            return apiRequest;
        }
        String carlossName=map.get("condition_info_name");
        Integer carlossNumber=Integer.valueOf(map.get("loss_number"));
        Integer carlossPrice=Integer.valueOf(map.get("loss_assessment_price"));
        String carlossFix=map.get("maintenance_point");
        String carlossImg=map.get("loss_picture");
        Integer sumPrice=Integer.valueOf(map.get("loss_assessment_sum"));
        Integer caseId=Integer.valueOf(map.get("reported_number"));
        Selfcarloss selfcarloss = new Selfcarloss();
        selfcarloss.setCarlossName(carlossName); selfcarloss.setCarlossFix(carlossFix);
        selfcarloss.setCarlossNumber(carlossNumber); selfcarloss.setCarlossImg("/upload/"+carlossImg);
        selfcarloss.setCarlossPrice(carlossPrice); selfcarloss.setSumPrice(sumPrice);
        selfcarloss.setCaseId(caseId);
        APIRequest apiRequest=new APIRequest();
       if (selfcarlossMapper.insertSelective(selfcarloss)>0){
           apiRequest.setResult(true);
           apiRequest.setMessage("ok");
           return apiRequest;
       };
        apiRequest.setResult(false);
        apiRequest.setMessage("服务器错误");
        return apiRequest;
    }

    @Override
    public APIRequest otherCheSunAdd(Map<String, String> map) {
        if (StringUtils.isEmpty(map.get("condition_info_name"))||StringUtils.isEmpty(map.get("loss_assessment_price"))||
                StringUtils.isEmpty(map.get("maintenance_point"))||StringUtils.isEmpty(map.get("loss_number"))||
                StringUtils.isEmpty(map.get("loss_assessment_sum"))||StringUtils.isEmpty(map.get("reported_number"))||
                StringUtils.isEmpty(map.get("loss_picture"))){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);
            apiRequest.setMessage("请求参数错误");
            return apiRequest;
        }
        String carlossName=map.get("condition_info_name");
        Integer carlossNumber=Integer.valueOf(map.get("loss_number"));
        Integer carlossPrice=Integer.valueOf(map.get("loss_assessment_price"));
        String carlossFix=map.get("maintenance_point");
        String carlossImg=map.get("loss_picture");
        Integer sumPrice=Integer.valueOf(map.get("loss_assessment_sum"));
        Integer caseId=Integer.valueOf(map.get("reported_number"));
        Othercarloss selfcarloss = new Othercarloss();
        selfcarloss.setCarlossName(carlossName); selfcarloss.setCarlossFix(carlossFix);
        selfcarloss.setCarlossNumber(carlossNumber); selfcarloss.setCarlossImg("/upload/"+carlossImg);
        selfcarloss.setCarlossPrice(carlossPrice); selfcarloss.setSumPrice(sumPrice);
        selfcarloss.setCaseId(caseId);
        APIRequest apiRequest=new APIRequest();
        if (othercarlossMapper.insertSelective(selfcarloss)>0){
            apiRequest.setResult(true);
            apiRequest.setMessage("ok");
            return apiRequest;
        };
        apiRequest.setResult(false);
        apiRequest.setMessage("服务器错误");
        return apiRequest;
    }

    @Override
    public APIRequest ThingAdd(Map<String, String> map) {
        if (StringUtils.isEmpty(map.get("object_info_name"))||StringUtils.isEmpty(map.get("loss_number"))||
                StringUtils.isEmpty(map.get("price"))||StringUtils.isEmpty(map.get("compensate"))||
                StringUtils.isEmpty(map.get("loss_assessment_sum"))||StringUtils.isEmpty(map.get("reported_number"))||
                StringUtils.isEmpty(map.get("loss_picture"))){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);
            apiRequest.setMessage("请求参数错误");
            return apiRequest;
        }
        String carlossName=map.get("object_info_name");
        Integer carlossNumber=Integer.valueOf(map.get("loss_number"));
        Integer carlossPrice=Integer.valueOf(map.get("price"));
        String carlossFix=map.get("compensate");
        String carlossImg=map.get("loss_picture");
        Integer sumPrice=Integer.valueOf(map.get("loss_assessment_sum"));
        Integer caseId=Integer.valueOf(map.get("reported_number"));
        Objectloss objectloss=new Objectloss();
        objectloss.setObjectlossName(carlossName);objectloss.setObjectlossNumber(carlossNumber);
        objectloss.setObjectlossPrice(carlossPrice);objectloss.setObjectlossDepart(carlossFix);
        objectloss.setObjectlossImg(carlossImg);objectloss.setSumPrice(sumPrice);
        objectloss.setCaseId(caseId);
        APIRequest apiRequest=new APIRequest();
        if (objectlossMapper.insertSelective(objectloss)>0){
            apiRequest.setResult(true);
            apiRequest.setMessage("ok");
            return apiRequest;
        };
        apiRequest.setResult(false);
        apiRequest.setMessage("服务器错误");
        return apiRequest;

    }

    @Override
    public APIRequest manAdd(Map<String, String> map) {
        if (StringUtils.isEmpty(map.get("wounded_name"))||
                StringUtils.isEmpty(map.get("wounded_site"))||
                StringUtils.isEmpty(map.get("wounded_money"))
                ||StringUtils.isEmpty(map.get("subtotal_costs"))||
                StringUtils.isEmpty(map.get("reported_number"))){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);
            apiRequest.setMessage("请求参数错误");
            return apiRequest;
        }
        String  medicalPro=map.get("wounded_name");
        Integer medicalPrice=Integer.valueOf(map.get("wounded_money"));
        Integer sumPrice=Integer.valueOf(map.get("subtotal_costs"));
        String medicalAddress=map.get("wounded_site");
        Integer caseId=Integer.valueOf(map.get("reported_number"));
        Peopleloss peopleloss=new Peopleloss();
        peopleloss.setMedicalAddress(medicalAddress);
       peopleloss.setSumPrice(sumPrice);peopleloss.setMedicalPrice(medicalPrice);
        peopleloss.setCaseId(caseId); peopleloss.setMedicalPro(medicalPro);
        APIRequest apiRequest=new APIRequest();
        if (peoplelossMapper.insertSelective(peopleloss)>0){
            apiRequest.setResult(true);
            apiRequest.setMessage("ok");
            return apiRequest;
        };
        apiRequest.setResult(false);
        apiRequest.setMessage("服务器错误");
        return apiRequest;

    }




}
