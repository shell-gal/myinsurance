package com.cq.myinsurance.controller.employee;

import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.UserLoad;
import com.cq.myinsurance.pojo.vo.UserRole;
import com.cq.myinsurance.service.EmployeeService;
import com.cq.myinsurance.service.RoleService;
import com.cq.myinsurance.service.UserService;
import com.cq.myinsurance.utils.Result;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/pages/welcome")
public class EmployeeController {

    @Resource
    EmployeeService employeeService;

    @Resource
    RoleService roleService;

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
        return pageInfo;
    }

//    根据用户id，查询用户信息以及所拥有的角色（职位）
    @RequestMapping("/loadone")
    public String loadone(@RequestParam("userid") Integer userId,HttpServletRequest request){
        User user = employeeService.loadone(userId);
        List<Role> roles = roleService.loadall();
        request.setAttribute("user",user);
        request.setAttribute("roles",roles);
        return "/pages/welcome/employees_upd";
    }

//    修改员工信息
  @RequestMapping("/updateEmployee")
  @ResponseBody
    public Result update(@RequestBody UserRole userRole){
      boolean b = employeeService.updateemployee(userRole);
      if (b){
          return  new Result(200,"修改成功");
      }
      return new Result(500,"failed");
  }

//  跳转增加员工页面
  @RequestMapping("/add")
    public String add(HttpServletRequest request){
      List<Role> roles = roleService.loadall();
      request.setAttribute("roles",roles);
      return "/pages/welcome/employees_add.html";
  }

//  增加员工
    @RequestMapping("/addemployee")
    @ResponseBody
    public Result addemployee(@RequestBody UserRole userRole,HttpServletRequest request){
        boolean b = employeeService.addemployee(userRole);
        if (b){
            return  new Result(200,"增加成功！");
        }
        return new Result(500,"failed");
    }

//    删除员工
    @RequestMapping("/delete")
    @ResponseBody
    public Result deleteemployee(Integer id){
        boolean b = employeeService.deleteemployee(id);
        if (b){
            return  new Result(200,"删除成功");
        }
        return new Result(500,"failed");
    }
}
