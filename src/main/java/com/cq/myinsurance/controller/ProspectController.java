package com.cq.myinsurance.controller;

import com.cq.myinsurance.pojo.Prospect;
import com.cq.myinsurance.service.ProspectService;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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

    /**
     * 跳转已勘察详情
     * @param caseId
     * @param request
     * @return
     */
    @RequestMapping("/getProspectDetail")
    public String getProspectDetail(Integer caseId,HttpServletRequest request){
        request.setAttribute("caseId",caseId);
        return "pages/prospectmanager/minu_prospect2";
    }

    /**
     * 获取勘察报告数据
     * @param caseId
     * @return
     */
    @RequestMapping("/selectProspectMessage.do")
    @ResponseBody
    public Prospect selectProspectMessage(Integer caseId){
        Prospect prospect = prospectService.selectProspectMessage(caseId);
//        System.out.println(prospect.toString());
        return prospect;
    }

    /**
     * 跳转添加勘察页面
     * @return
     */
    @RequestMapping("/addProspectMessage")
    public String addProspectMessage(Integer caseId,HttpServletRequest request){
        request.setAttribute("caseId",caseId);
        return "pages/prospectmanager/add_prospect";
    }

    /**
     * 获取添加勘察页面数据
     * @param prospect
     * @param session
     * @return
     */
    @RequestMapping("/addProspectMessage.do")
    @ResponseBody
    public int addProspectMessage(@RequestBody Prospect prospect, HttpSession session){
        int i = prospectService.addProspect(prospect, session);
        return i;
    }

    /**
     * 获取修改勘察页面数据
     * @param prospect
     * @param session
     * @return
     */
    @RequestMapping("/updateProspectMessage.do")
    @ResponseBody
    public int updateProspectMessage(Prospect prospect,HttpSession session){
        int i = prospectService.updateProspect(prospect, session);
        return i;
    }

    /**
     * 跳转查询所有已勘察案件页面
     * @return
     */
    @RequestMapping("/selectAllProspect")
    public String selectAllProspect(){
        return "pages/prospectmanager/prospectAll";
    }

    /**
     * 获取查询所有已勘察数据
     * @param caseId
     * @param indexpage
     * @return
     */
    @RequestMapping("/selectAllProspect.do")
    @ResponseBody
    public PageInfo<Prospect> selectAllProspect(Integer caseId,Integer indexpage){
        PageInfo<Prospect> pageInfo = prospectService.selectAllProspect(caseId, indexpage);
        System.out.println(pageInfo);
        return pageInfo;
    }
}
