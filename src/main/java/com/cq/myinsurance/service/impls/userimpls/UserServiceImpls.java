package com.cq.myinsurance.service.impls.userimpls;

import com.cq.myinsurance.dao.AuthorizationMapper;
import com.cq.myinsurance.dao.UserMapper;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.jws.soap.SOAPBinding;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
