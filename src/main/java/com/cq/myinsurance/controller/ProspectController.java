package com.cq.myinsurance.controller;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.Prospect;
import com.cq.myinsurance.service.ProspectService;
import com.cq.myinsurance.utils.Result;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/prospect")
public class ProspectController{

    @Autowired
    private ProspectService prospectService;

//    @RequestMapping("/getProspect.do")
//    public String  getProspect(HttpServletRequest request, HttpSession session, Integer indexpage){
//        PageInfo pageInfo = prospectService.selectCaseMessage(session, indexpage);
//        System.out.println(pageInfo);
//        request.setAttribute("pageInfo",pageInfo);
//        return "pages/prospectmanager/prospect";
//    }

//    public String addProspect(Prospect prospect,HttpSession session){
//        int i = prospectService.addProspect(prospect, session);
//    }
    @RequestMapping("/selectAchieveCaseMessage.do")
    public String selectAchieveCaseMessage(HttpSession session,Integer indexpage){
        PageInfo pageInfo = prospectService.selectAchieveCaseMessage(session, indexpage);
        session.setAttribute("pageInfo",pageInfo);
        System.out.println(pageInfo);
        return "pages/prospectmanager/prospected";
    }
}
