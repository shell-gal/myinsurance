package com.cq.myinsurance.controller.casemanager;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.vo.CaseLoad;
import com.cq.myinsurance.service.CaseService;
import com.cq.myinsurance.service.InsuranceService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/report")
public class CaseController {

    @Resource
    InsuranceService insuranceService;

    @Resource
    CaseService caseService;

    @RequestMapping("/reportquery")
    public String reportquery(){
        return "pages/casemanager/report_query";
    }

//    查询保单
    @RequestMapping("/QueryPolicy")
    @ResponseBody
    public PageInfo QueryPolicy(CaseLoad caseLoad){
        PageInfo pageInfo = caseService.loadallWarranty(caseLoad);
        return pageInfo;
    }

//    报案
    @RequestMapping("/reportinsert")
    public String reportinsert(Integer warranty_number, HttpServletRequest request){
        request.setAttribute("warranty_number",warranty_number);
        return "pages/casemanager/report_insert";
    }

//    查询一个保单
    @RequestMapping("/Asingle")
    @ResponseBody
    public List<Object> Asingle(Integer warranty_number){
        List<Object> objectList = insuranceService.loadInsuranceOne(warranty_number);
        return objectList;
    }

//    新增报案信息
    @RequestMapping("/ReportInsert")
    @ResponseBody
    public String ReportInsert(@RequestBody Case c){
        boolean b = caseService.addCase(c);
        if (b){
            return "true";
        }
        return "false";
    }

//    查询我处理的案件
    @RequestMapping("/reportmyquery")
    public String reportmyquery(){
        return "pages/casemanager/report_myquery";
    }

//   查询我处理的案件
    @RequestMapping("/myQuery")
    @ResponseBody
    public PageInfo myQuery(Map<String,Object> map){
        PageInfo pageInfo = caseService.loadCase(map);
        return pageInfo;
    }

//    查询所有的案件
    @RequestMapping("/reportallquery")
    public String reportallquery(){
        return "pages/casemanager/report_allquery";
    }

    @RequestMapping("/AllQuery")
    @ResponseBody
    public PageInfo AllQuery(Map<String,Object> map){
        PageInfo pageInfo = caseService.loadcase(map);
        return pageInfo;
    }


}
