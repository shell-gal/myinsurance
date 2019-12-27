package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.UserLoad;
import com.cq.myinsurance.pojo.vo.UserRole;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

    User  finduser(Map<String,Object> map);

    List<User> selectall(UserLoad userLoad);

    int updateByPrimaryKeySelective(UserRole userRole);

    int updateuserByPrimaryKeySelective(User user);

    int updateByPrimaryKey(User record);



    User selectByusernameandpwd(String accountNumber);
}