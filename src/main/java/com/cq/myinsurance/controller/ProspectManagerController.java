package com.cq.myinsurance.controller;

import com.cq.myinsurance.service.ProspectManagerServer;
import com.cq.myinsurance.utils.APIRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * @Filename
 * @auther 吴星辰;
 * @data 2019/12/27 9:21;
 * @Descripion
 * @Version 1.1.1
 * @Function
 * @History
 */

@Controller
@RequestMapping("prospect_lyt")
public class ProspectManagerController {


    @Autowired
    ProspectManagerServer prospectManagerServer;

    @ResponseBody
    @RequestMapping("Query")
    public APIRequest Query(@RequestBody Map<String,String> map){
        Long reported_number=null;
        try {
            reported_number=Long.valueOf(map.get("reported_number"));
        }catch (NumberFormatException e){
            System.out.println(e.toString());
        }

        Integer page=Integer.valueOf(map.get("page"));
        APIRequest api=prospectManagerServer.ReoprtQuery(reported_number,page);
        System.out.println(api.toString());
        return api;
    }


    @ResponseBody
    @RequestMapping("LoseQuery")
    public APIRequest LoseQuery(@RequestBody Map<String,String> map){
        Long reported_number=null;
        try {
            reported_number=Long.valueOf(map.get("reported_number"));
        }catch (NumberFormatException e){
            System.out.println(e.toString());
        }

        Integer page=Integer.valueOf(map.get("page"));
        APIRequest api=prospectManagerServer.LoseQuery(reported_number,page);
        System.out.println(api.toString());
        return api;
    }

    @ResponseBody
    @RequestMapping("CompensateQuery")
    public APIRequest CompensateQuery(@RequestBody Map<String,String> map){
        Long reported_number=null;
        try {
            reported_number=Long.valueOf(map.get("reported_number"));
        }catch (NumberFormatException e){
            System.out.println(e.toString());
        }

        Integer page=Integer.valueOf(map.get("page"));
        APIRequest api=prospectManagerServer.CompensateQuery(reported_number,page);
        System.out.println(api.toString());
        return api;
    }



    @ResponseBody
    @RequestMapping("queryheLose")
    public APIRequest queryHeLose(@RequestBody Map<String,Long> map){
        Long reported_number=map.get("reported_number");
        if (reported_number==null){
           APIRequest apiRequest=new APIRequest();
           apiRequest.setResult(false);apiRequest.setMessage("参数出错");
        }
        APIRequest api=prospectManagerServer.queryHeLose(reported_number);
        return api;
    }

    @ResponseBody
    @RequestMapping("querymyLose")
    public APIRequest querymyLose(@RequestBody Map<String,Long> map){
        Long reported_number=map.get("reported_number");
        if (reported_number==null){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);apiRequest.setMessage("参数出错");
        }
        APIRequest api=prospectManagerServer.queryMyLose(reported_number);
        return api;
    }

    @ResponseBody
    @RequestMapping("thingLose")
    public APIRequest thingLose(@RequestBody Map<String,Long> map){
        Long reported_number=map.get("reported_number");
        if (reported_number==null){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);apiRequest.setMessage("参数出错");
        }
        APIRequest api=prospectManagerServer.thingLose(reported_number);
        return api;
    }


    @ResponseBody
    @RequestMapping("peopleLose")
    public APIRequest peopleLose(@RequestBody Map<String,Long> map){
        Long reported_number=map.get("reported_number");
        if (reported_number==null){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);apiRequest.setMessage("参数出错");
        }
        APIRequest api=prospectManagerServer.peopleLose(reported_number);
        return api;
    }

    @ResponseBody
    @RequestMapping("upCaseloss")
    public APIRequest upCaseloss(@RequestBody Map<String,Long> map){
        Long reported_number=map.get("reported_number");
        if (reported_number==null){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);apiRequest.setMessage("参数出错");
        }
        APIRequest api=prospectManagerServer.upCaseloss(reported_number);
        return api;
    }



    @ResponseBody
    @RequestMapping("upCaselossToOk")
    public APIRequest upCaselossToOk(@RequestBody Map<String,Long> map){
        Long reported_number=map.get("reported_number");
        if (reported_number==null){
            APIRequest apiRequest=new APIRequest();
            apiRequest.setResult(false);apiRequest.setMessage("参数出错");
        }
        APIRequest api=prospectManagerServer.upCaselossToOk(reported_number);
        return api;
    }

    //我方车辆定损
     @RequestMapping("/mychesunadd")
     @ResponseBody
     public APIRequest myCheSunAdd(@RequestBody Map<String,String> map) {


      return prospectManagerServer.myCheSunAdd(map);
    }

    //他方车辆定损
    @ResponseBody
    @RequestMapping("/otherchesunadd")
    public APIRequest otherCheSunAdd(@RequestBody Map<String,String> map) {


        return prospectManagerServer.otherCheSunAdd(map);
    }


    //定物损
    @ResponseBody
    @RequestMapping("/Thingadd")
    public APIRequest thingAdd(@RequestBody Map<String,String> map) {


        return prospectManagerServer.ThingAdd(map);
    }


    //定人损
    @ResponseBody
    @RequestMapping("/Manadd")
    public APIRequest manAdd(@RequestBody Map<String,String> map) {

       return prospectManagerServer.manAdd(map);
    }




    @RequestMapping("dinsuninfo")
    public String dinsuninfo(@RequestParam("caseId") Integer caseId, HttpServletRequest request){
        System.out.println(caseId);
        request.setAttribute("caseId",caseId);
        return "pages/lossmanager/dinsuninfo.html";
    }


    @RequestMapping("hesuninfo")
    public String hesuninfo(@RequestParam("caseId") Integer caseId, HttpServletRequest request){
        System.out.println(caseId);
        request.setAttribute("caseId",caseId);
        return "pages/lossmanager/hesuninfo.html";
    }
        @RequestMapping("loss_car")
    public String carLoss(@RequestParam("caseId") Integer caseId, HttpServletRequest request){
            System.out.println(caseId);
            request.setAttribute("caseId",caseId);
            return "pages/section/loss_car.html";
    }
    @RequestMapping("loss_thing")
    public String lossThing(@RequestParam("caseId") Integer caseId, HttpServletRequest request){
        System.out.println(caseId);
        request.setAttribute("caseId",caseId);
        return "pages/section/loss_thing.html";
    }

    @RequestMapping("loss_man")
    public String lossMan(@RequestParam("caseId") Integer caseId, HttpServletRequest request){
        System.out.println(caseId);
        request.setAttribute("caseId",caseId);
        System.out.println("请求成功");
        return "pages/section/loss_man.html";
    }

     @RequestMapping("Dispatch")
     public String diaoduManager(){

        return "pages/dispatchmentmanager/Dispatch.html";
    }
    @RequestMapping("loss_carinfo")
    public String chesunduManager(){

        return "pages/prospectmanager/loss_carinfo.html";
    }

    @RequestMapping("loss_resinfo")
    public String chesunManager(){

        return "pages/prospectmanager/loss_resinfo.html";
    }

    @RequestMapping("loss_peopleinfo")
    public String renshangManager(){

        return "pages/prospectmanager/loss_peopleinfo.html";
    }

    @RequestMapping("loss_info")
    public String mydingsunManager(){

        return "pages/prospectmanager/loss_info.html";
    }

    @RequestMapping("Dispatch2")
    public String hesundiaoduManager(){

        return "pages/dispatchmentmanager/Dispatch.html";
    }

    @RequestMapping("hesun_info")
    public String hesunshenheManager(){

        return "pages/lossmanager/hesun_info.html";
    }






}
