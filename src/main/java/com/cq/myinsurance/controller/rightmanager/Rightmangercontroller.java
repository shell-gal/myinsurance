package com.cq.myinsurance.controller.rightmanager;

import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.service.RightService;
import com.cq.myinsurance.service.RoleService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@RequestMapping("/Jurisdiction")
@Controller
public class Rightmangercontroller {

    @Resource
    RightService rightService;

    @RequestMapping("/loadJurisdiction")
    public String loadJurisdiction(){
        return "pages/prospectmanager/jurisdiction";
    }

//    分页查询权限信息
    @RequestMapping("/jurisdictionQuery")
    @ResponseBody
    public  PageInfo jurisdictionQuery(Integer rightid,Integer page){
        PageInfo pageInfo = rightService.loadright(page, null);
        if (pageInfo==null){
            return null;
        }
        return pageInfo;
    }

//    修改权限信息
    @RequestMapping("/jurisdictionUpd")
    @ResponseBody
    public String jurisdictionUpd(String rightname,Integer rightid){
        boolean b = rightService.updateright(rightname,rightid);
        if (b){
            return "true";
        }else {
            return "false";
        }
    }

//    添加权限信息
    @RequestMapping("/jurisdictionAdd")
   @ResponseBody
    public String jurisdictionAdd(String rightname){
        boolean b = rightService.addright(rightname);
        if (b){
            return "true";
        }else {
            return "false";
        }
    }

//    删除权限信息
   @RequestMapping("/deleteRights")
    public String deleteRights(Integer rightid){
       boolean b = rightService.deleteright(rightid);
       if (b){
           return "true";
       }else {
           return "false";
       }
   }
}
