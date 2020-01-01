package com.cq.myinsurance.service.impls.userimpls;

import com.cq.myinsurance.dao.AuthorizationMapper;
import com.cq.myinsurance.dao.UserMapper;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.jws.soap.SOAPBinding;
import javax.servlet.http.HttpSession;
import java.util.*;

@Service
public class UserServiceImpls implements UserService {

    @Resource(type = UserMapper.class)
    UserMapper userMapper;

    @Resource
    AuthorizationMapper authorizationMapper;

    @Override
    public User login(String accountNumber) {
        if (accountNumber!=null){
            User user = userMapper.selectByusernameandpwd(accountNumber);
            return user;
        }
      return null;
    }

//根据用户名和密码查询用户
    @Override
    public User finduser(String accountNumber, String accountPwd) {
        Map<String,Object> map=new HashMap<>();
        if (accountNumber!=null&&accountPwd!=null){
            map.put("accountNumber",accountNumber);
            map.put("accountPwd",accountPwd);
        }
        User user = userMapper.finduser(map);
        if (user!=null){
            return user;
        }
        return null;
    }

//    修改密码
    @Override
    public boolean updatepwd(String pwd, String accountPwd) {

        if (pwd==null){
              return false;
        }

        if (accountPwd==null){
            return false;
        }
            User u= (User) SecurityUtils.getSubject().getPrincipal();
//            User currentuser = (User) session.getAttribute("currentuser");
            User finduser = finduser(u.getAccountNumber(), pwd);
            if(finduser==null) {
                return false;
            }
                User user=new User();
                user.setUserId(u.getUserId());
                user.setAccountPwd(accountPwd);
                int i = userMapper.updateuserByPrimaryKeySelective(user);
                if (i>0){
                    return true;
                }

        return false;
    }

    @Override
    public List<String> loadRoleByid(Integer userid) {
        if (userid!=null){
            List<String> roles = authorizationMapper.selectRolesByuserid(userid);
            if (roles!=null&&roles.size()>0){
                return roles;
            }
        }
     return null;
    }

    @Override
    public List<String> loadRightByid(Integer userid) {
        if (userid!=null){
            List<String> rights = authorizationMapper.selectRightByuserid(userid);
            if (rights!=null&&rights.size()>0){
                return rights;
            }
        }
        return null;
    }
}
