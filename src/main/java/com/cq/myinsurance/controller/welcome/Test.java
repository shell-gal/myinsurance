package com.cq.myinsurance.controller.welcome;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Test {
    @RequestMapping("/hello")		//访问地址映射
    @ResponseBody                    //相应体 ——return "success";
    public Object hello() {
        System.out.println("test------");
        return "success";
    }}
