package com.cq.myinsurance.controller;

import com.cq.myinsurance.service.UserService;
import com.cq.myinsurance.shiro.MyRealm;
import com.cq.myinsurance.utils.Result;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Resource
    UserService userService;

    @RequestMapping("/login")
    public String web(){
        return "login";
    }

    @RequestMapping("/login.do")
    public String login(String username, String password, Model model, HttpSession session) {
//        使用shiro编写认证操作
//        1.获取subject
//        2.封装用户数据
//        3.执行登录方法
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        try {
            subject.login(token);
            session.setAttribute("currentuser",MyRealm.loginuser);
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

//    跳转修改密码页面
    @RequestMapping("/update")
    public  String update(){
        return "pages/welcome/updatepwd";
    }


//    修改密码
    @RequestMapping("/updatepwd")
    @ResponseBody
    public Result updatepwd(String pwd,String newPwd,HttpSession session){
        boolean b = userService.updatepwd(pwd, newPwd, session);
        if (b){
            return new Result(200,"修改成功");
        }
        return  new Result(500,"修改失败");
    }

//   退出登录
     @RequestMapping("loginout")
     @ResponseBody
    public Result loginout(){
        SecurityUtils.getSubject().logout();
        return new Result(200,"退出登录");
     }

}
