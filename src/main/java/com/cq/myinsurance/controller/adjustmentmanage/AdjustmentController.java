package com.cq.myinsurance.controller.adjustmentmanage;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.vo.CaseVo;
import com.cq.myinsurance.service.AdjustmentService;
import com.cq.myinsurance.utils.BeanUtil;
import com.cq.myinsurance.utils.enums.CaseStatus;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

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
    public String adjustment(HttpServletRequest request){

        PageInfo<CaseVo> casePage = adjustmentService.getCasePage(1,10);

        request.setAttribute("casePage",casePage.getList());

        return "/pages/adjustmentmanager/adjustment";
    }

    /**
     * 核赔处理
     * @return
     */
    @GetMapping("nuclear")
    public String nuclear(){
        System.out.println("----nuclear--------");
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
