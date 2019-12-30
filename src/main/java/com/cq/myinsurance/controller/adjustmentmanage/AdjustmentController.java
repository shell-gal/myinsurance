package com.cq.myinsurance.controller.adjustmentmanage;

import com.cq.myinsurance.pojo.vo.CaseVo;
import com.cq.myinsurance.service.AdjustmentService;
import com.github.pagehelper.PageInfo;
import netscape.javascript.JSObject;
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
public class AdjustmentController {

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

    @PostMapping("adjustment")
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

//        System.out.println("casePage--"+casePage.getList());

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
        System.out.println("----caseQuery--------");
        return "/pages/welcome/case_query";
    }
}
