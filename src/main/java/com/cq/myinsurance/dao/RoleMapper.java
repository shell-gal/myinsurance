package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Role;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface RoleMapper {
    int deleteByPrimaryKey(Integer roleId);

    int insert(Role record);

    int insertSelective(Role record);

    Role selectByPrimaryKey(Integer roleId);

    List<String> selectRoles();

    List<Role> selectallroles();

    int updateByPrimaryKeySelective(Role record);

    int updateByPrimaryKey(Role record);
}