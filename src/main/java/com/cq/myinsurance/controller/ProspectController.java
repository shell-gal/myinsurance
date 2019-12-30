package com.cq.myinsurance.controller;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.Prospect;
import com.cq.myinsurance.service.ProspectService;
import com.cq.myinsurance.utils.Result;
import com.github.pagehelper.PageInfo;
import com.sun.org.apache.regexp.internal.RE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/prospect")
public class ProspectController{

    @Autowired
    private ProspectService prospectService;

    /**
     * 跳转已勘察案件页面
     * @return
     */
    @RequestMapping("/getProspected")
    public String  getProspected(){
        return "pages/prospectmanager/prospected";
    }

    /**
     * 获取已勘察案件页面数据
     * @param session
     * @param indexpage
     * @return
     */
    @RequestMapping("/selectAchieveCaseMessage.do")
    @ResponseBody
    public PageInfo selectAchieveCaseMessage(HttpSession session, Integer indexpage){
        PageInfo pageInfo = prospectService.selectAchieveCaseMessage(session,indexpage);
        System.out.println(pageInfo);
        return pageInfo;
    }

    /**
     * 跳转未勘察案件页面
     * @return
     */
    @RequestMapping("/getProspect")
    public String getProspect(){
        return "pages/prospectmanager/prospect";
    }

    /**
     * 获取未勘察案件页面数据
     * @param session
     * @param indexpage
     * @return
     */
    @RequestMapping("/selectUnAchieveCaseMessage.do")
    @ResponseBody
    public PageInfo<Prospect> selectUnAchieveCaseMessage(HttpSession session, Integer indexpage){
        PageInfo<Prospect> pageInfo = prospectService.selectUnAchieveCaseMessage(session, indexpage);
        System.out.println(pageInfo);
        return pageInfo;
    }
}
