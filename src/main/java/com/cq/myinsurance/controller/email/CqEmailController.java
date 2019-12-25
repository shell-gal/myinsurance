package com.cq.myinsurance.controller.email;

import com.cq.myinsurance.service.impls.email.CqEmailService;
import com.cq.myinsurance.utils.enums.CaseStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.Random;

@Controller()
@RequestMapping("email")
public class CqEmailController {
    @Resource
    private CqEmailService malUtiliService;

    @RequestMapping("getCheckCode")
    @ResponseBody
    public String getCheckCode(String email){
        email="2350470353@qq.com";
//        String checkCode = String.valueOf(new Random().nextInt(899999) + 100000);
//        String message = "您的验证码为："+checkCode;
        String message="您的案件正在："+ CaseStatus.CASE_REPORT;
        try {
            System.out.println(message);
            malUtiliService.sendSimpleMail(email, "您目前的案件处于:", message);
        }catch (Exception e){
            return "";
        }
        return null;
    }

}
