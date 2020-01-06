package com.cq.myinsurance.controller.settlement;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.vo.CaseVo;
import com.cq.myinsurance.service.AdjustmentService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @Message:
 * @Author：Cheirmin
 * @Date: 2019/12/27 9:46
 * @Version 1.0
 */
@Controller
@RequestMapping("lisuan")
public class SettlementController {

    @Resource
    AdjustmentService adjustmentService;

    /**
     * 理算处理
     * @return
     */
    @GetMapping("adjustment")
    public String adjustment(){
        return "/pages/adjustmentmanager/adjustment";
    }

    /**
     * 案件详情接口
     * @param request
     * @return
     */
    @RequestMapping("caseInfo")
    @ResponseBody
    public PageInfo<CaseVo> adjustment(HttpServletRequest request){

        String pageNumStr = request.getParameter("pageNum");
        String search = request.getParameter("search");
        String status = request.getParameter("status");

//        System.out.println("pageNumStr--"+pageNumStr+"  --search--"+search+" --status--"+status);

        Integer pageNum = 1;

        if (pageNumStr != null && !pageNumStr.trim().isEmpty()){
            pageNum = Integer.valueOf(pageNumStr.trim());
        }

        PageInfo<CaseVo> casePage = adjustmentService.getCasePage(pageNum,10 ,status,search);

        return casePage;
    }

    /**
     * 核赔处理
     * @return
     */
    @GetMapping("nuclear")
    public String nuclear(){
        return "/pages/nuclearmanager/Nuclear";
    }

    /**
     * 理赔处理
     * @return
     */
    @GetMapping("settle")
    public String settle(){
        return "/pages/settlemanager/settle";
    }

    /**
     * 结案查询
     * @return
     */
    @GetMapping("caseQuery")
    public String caseQuery(){
        return "/pages/welcome/case_query";
    }

    @RequestMapping("changeCaseStatus")
    public String changeCaseStatus(HttpServletRequest request){
        String caseId = request.getParameter("caseId");
        String caseStatus = request.getParameter("caseStatus");

        if (caseId==null)  return "false";

        Case mycase = new Case();
        mycase.setCaseId(Integer.valueOf(caseId));
        mycase.setCaseStatus(caseStatus);

        return adjustmentService.changeCaseStatus(mycase).toString();
    }

    /**
     * 调度管理
     * @return
     */
    @GetMapping("Dispatch")
    public String dispatch(){
        return "/pages/dispatchmentmanager/Dispatch";
    }

    /**
     * 理算详情
     * @return
     */
    @GetMapping("lisuanInfo")
    public String lisuanInfo(){
        return "/pages/adjustmentmanager/lisuan_info";
    }

    /**
     * 核赔详情
     * @return
     */
    @GetMapping("heuanInfo")
    public String heuan_info(){
        return "/pages/nuclearmanager/heuan_info";
    }
}
