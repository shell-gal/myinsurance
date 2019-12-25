package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.pojo.User;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User selectByusernameandpwd(String accountNumber);
}