package com.cq.myinsurance.controller.insurancemanager;

import com.cq.myinsurance.pojo.Warranty;
import com.cq.myinsurance.pojo.vo.WarrantyLoad;
import com.cq.myinsurance.service.CaseService;
import com.cq.myinsurance.service.InsuranceService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/insurance")
public class InsuranceController {

    @Resource
    InsuranceService insuranceService;

    @Resource
    CaseService caseService;

    @RequestMapping("/Insurancequerying")
    public String Insurancequerying(){
        return "pages/insurancemanager/Insurance_querying";
    }

//    查询保单信息
//    需要查保单表，以及投保人信息表和被保人信息表
    @RequestMapping("/insurancequery")
    @ResponseBody
    public PageInfo insurancequery(WarrantyLoad warrantyLoad){
        PageInfo pageInfo = insuranceService.loadInsurance(warrantyLoad);
        System.out.println(pageInfo);
        return pageInfo;
    }

//    根据保单id，查询保单
    @RequestMapping("/querysingleauto")
    @ResponseBody
    public List<Object> querysingleauto(Integer warranty_number){
        List<Object> objectList = insuranceService.loadInsuranceOne(warranty_number);
        System.out.println(objectList);
        return  objectList;
    }

//    续保,修改保单日期
    @RequestMapping("/insurancedate")
    public String insurancedate(WarrantyLoad warrantyLoad){
         return null;
    }

//    修改保单,跳转页面
    @RequestMapping("/Modificationinsurance")
    public String Modification_insurance(Integer warranty_number, Integer pageNum, HttpServletRequest request){
        request.setAttribute("warranty_number",warranty_number);
        request.setAttribute("pageNum",pageNum);
        return "pages/insurancemanager/Modification_insurance";
    }

//修改保单
    @RequestMapping("/modificationinsuranceinfo")
    @ResponseBody
    public  String modificationinsuranceinfo(Warranty warranty){
        boolean b = insuranceService.updateInsurance(warranty);
        if (b){
            return "true";
        }
        return "false";
    }


//    查询保单拥有的案件
    @RequestMapping("/Casemessage")
    public  String Casemessage(Integer warranty_number,HttpServletRequest request){
        request.setAttribute("warranty_number",warranty_number);
        return "pages/insurancemanager/Case_message";
    }

//    查询此保单所有的案件
   @RequestMapping("/reportedinfo")
   @ResponseBody
    public  PageInfo reportedinfo(WarrantyLoad warrantyLoad){
       System.out.println("getIndexpage:"+warrantyLoad.getIndexpage());
       System.out.println("getWarranty_number:"+warrantyLoad.getWarranty_number());
       PageInfo pageInfo = caseService.loadallcase(warrantyLoad);
       return pageInfo;
   }

//    添加保单,跳转页面
    @RequestMapping("/Userinsure")
    public String Userinsure(){
        return "pages/insurancemanager/User_insure";
    }
//    添加保单
    @RequestMapping("/addinsuranceinfo")
    public String addinsuranceinfo(Map<String,Object> map){
         return null;
    }

//    查询投保人,跳转页面
    @RequestMapping("/Policyholder")
    public String Policyholder(){
        return "pages/dispatchmentmanager/Policy-holder";
    }

//    查询投保人
    @RequestMapping("/queryPolicyholder")
    public String queryPolicyholder(){
        return null;
    }

//    删除投保人

}
