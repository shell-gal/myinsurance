package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.pojo.Role;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface RoleService {
    List<String> loadroles();
    List<Role> loadall();
    Role loadone(Integer roleid);
    PageInfo loadroles(Integer indexpage,Integer pagesize);
    List<Right> loadroleright(Integer roleid);
    List<Right> loadroleunright(Integer roleid);

    boolean updaterole(Role role);
    boolean  addrole(Role role);
    boolean add(String rolename);
    boolean deleterole(Integer roleid);

    boolean insertRoleAndRight(Integer roleid,Integer rightid);
    boolean delteRoleAndRight(Integer roleid,Integer rightid);
}
