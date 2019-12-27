package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.UserRole;

import java.util.List;


public interface AuthorizationMapper {
    List<String> selectRolesByuserid(Integer userid);

    List<String> selectRightByuserid(Integer userid);

    int updateByPrimaryKeySelective(UserRole role);

    int  insertSelective(UserRole userRole);
}
