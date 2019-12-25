package com.cq.myinsurance.controller;

import com.cq.myinsurance.shiro.MyRealm;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class LoginController {

    @RequestMapping("/login")
    public String web(){
        return "login";
    }

    @RequestMapping("/login.do")
    public String login(String username, String password, Model model) {
//        使用shiro编写认证操作
//        1.获取subject
//        2.封装用户数据
//        3.执行登录方法
        System.out.println("username:  "+username);
        System.out.println("password:  "+password);
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        try {
            subject.login(token);
            model.addAttribute("user", MyRealm.loginuser);
            return "pages/welcome/index";
        } catch (UnknownAccountException e) {
            model.addAttribute("msg", "用户名不存在");
            return "login";
        } catch (IncorrectCredentialsException e){
            model.addAttribute("msg","密码错误");
            return "login";
        }

    }
}
