package com.cq.myinsurance.controller.employee;

import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.UserLoad;
import com.cq.myinsurance.service.EmployeeService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/pages/welcome")
public class EmployeeController {

    @Resource
    EmployeeService employeeService;

//    加载所有职员信息
    @RequestMapping("/loademployee")
    public String  loademployee(UserLoad userLoad, HttpServletRequest request){
        PageInfo pageInfo = employeeService.loademployee(userLoad);
        request.setAttribute("pageInfo",pageInfo);
        System.out.println(pageInfo);
        return "/pages/welcome/employees_query";
    }

//    局部刷新---根据员工编号，员工姓名，员工部门进行查询
    @RequestMapping("/ajaxload")
    @ResponseBody
    public PageInfo ajaxload(UserLoad userLoad){
        PageInfo pageInfo = employeeService.loademployee(userLoad);
        System.out.println(pageInfo);
        return pageInfo;
    }

    @RequestMapping("/loadone/{id}")
    public String loadone(@PathVariable("id") Integer userId,HttpServletRequest request){
        User user = employeeService.loadone(userId);
        request.setAttribute("user",user);
        return "/pages/welcome/employees_upd";
    }
}
