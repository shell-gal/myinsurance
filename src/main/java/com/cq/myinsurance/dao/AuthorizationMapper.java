package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.UserRole;

import java.util.List;
import java.util.Map;


public interface AuthorizationMapper {
    List<String> selectRolesByuserid(Integer userid);

    List<String> selectRightByuserid(Integer userid);

    List<User> selectUserByrolename(String rolename);

    List<Right> selectRightByRoleid(Integer roleid);
    List<Right> selectunRightByRoleid(Integer roleid);

    int deleteallRightByroleid(Integer roleid);
    int deleteRightByroleid(Integer roleId,Integer rightId);
    int deleteByrightid(Integer rightid);

    int updateByPrimaryKeySelective(UserRole role);

    int  insertSelective(UserRole userRole);
    int insert(Integer roleId,Integer rightId);

}
