package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.pojo.User;

import javax.servlet.http.HttpSession;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public interface UserService {
    User login(String username);
    User finduser(String accountNumber,String accountPwd);
    boolean updatepwd(String pwd,String accountPwd);
    List<String> loadRoleByid(Integer userid);
    List<String> loadRightByid(Integer userid);
}
