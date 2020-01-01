package com.cq.myinsurance.controller.rightmanager;


import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.service.RoleService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/rightmanager")
public class RolemanagerController {

    @Resource
    RoleService roleService;

    @RequestMapping("/loadroleright")
    public String  loadroleright(Integer indexpage, HttpServletRequest request){
//        request.setAttribute("pageInfo",pageInfo);
        return "pages/prospectmanager/quanxian";
    }

//    查询角色
    @RequestMapping("/rolesmanageQuery")
    @ResponseBody
    public PageInfo rolesmanageQuery(Integer page){
        PageInfo pageInfo = roleService.loadroles(page, null);
        if (pageInfo==null) {
            return null;
        }
        System.out.println(pageInfo);
        return pageInfo;
    }

//    查询角色拥有的权限
    @RequestMapping("/getQxOfRoleId")
    @ResponseBody
    public List<Right> getQxOfRoleId(Integer roleId){
        List<Right> rightList = roleService.loadroleright(roleId);
        if (rightList==null){
            return null;
        }
        return rightList;
    }

//    查询角色未拥有的权限
    @RequestMapping("/getAllRight")
    @ResponseBody
    public List<Right> getAllRight(Integer roleId){
        List<Right> rightList = roleService.loadroleunright(roleId);
        if (rightList==null){
            return null;
        }
        return rightList;
    }

//    删除角色，并删除角色所拥有的权限
    @RequestMapping("/rolesmanageDel")
    @ResponseBody
    public String rolesmanageDel(Integer roleid){
        boolean b = roleService.deleterole(roleid);
        return "true";
    }

//    批量删除角色拥有的权限
    @RequestMapping("/delRoleAndRight")
    @ResponseBody
    public String delRoleAndRight(Integer roleId,Integer rightId){
        boolean b = roleService.delteRoleAndRight(roleId, rightId);
        if (b){
            return "true";
        }
        return "false";
    }

    //    批量设置角色拥有的权限
    @RequestMapping("/setRoleAndRight")
    @ResponseBody
    public String setRoleAndRight(Integer roleId,Integer rightId){
        boolean b = roleService.insertRoleAndRight(roleId, rightId);
        if (b){
            return "true";
        }
        return "false";
    }

//    添加角色
        @RequestMapping("/rolesmanageAdd")
        @ResponseBody
        public String rolesmanageAdd(String rolename){
            boolean b = roleService.add(rolename);
            if (b){
            return "true";
            }
             return "false";
        }
}
