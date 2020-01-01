package com.cq.myinsurance.controller.settlement;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Message:调度管理控制器
 * @Author：Cheirmin
 * @Date: 2019/12/30 18:27
 * @Version 1.0
 */
@Controller
@RequestMapping("dispacth")
public class DispatchController {

    @GetMapping("queryAllReported")
    @ResponseBody
    private String queryAllReported(){
        System.out.println("queryAllReported--");
        return null;
    }

}
