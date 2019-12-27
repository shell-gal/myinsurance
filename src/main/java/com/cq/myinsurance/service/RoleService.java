package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Role;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface RoleService {
    List<String> loadroles();
    List<Role> loadall();
    Role loadone(Integer roleid);
    PageInfo loadroles(Integer indexpage,Integer pagesize);
    boolean updaterole(Role role);
    boolean  addrole(Role role);
    boolean deleterole(Integer roleid);
}
