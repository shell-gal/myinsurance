package com.cq.myinsurance.shiro;

import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MyRealm extends AuthorizingRealm {

    @Resource(type = UserService.class)
    UserService userService;

     public  static User loginuser;
//执行授权逻辑
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        SimpleAuthorizationInfo info=new SimpleAuthorizationInfo();
        Subject subject = SecurityUtils.getSubject();
        User user= (User) subject.getPrincipal();
        System.out.println(user.getUserId());
        loginuser=user;
        List<String> roles = userService.loadRoleByid(user.getUserId());
        List<String> rights = userService.loadRightByid(user.getUserId());
        System.out.println(roles);
        info.addStringPermissions(rights);
        info.addRoles(roles);
        return info;
    }

//    执行认证逻辑
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
//        String name="cq";
//        String password="123456";

        UsernamePasswordToken token= (UsernamePasswordToken) authenticationToken;
        User user = userService.login(token.getUsername());
        System.out.println("getAccountPwd:"+user.getAccountPwd());
        if (user==null){
            return null;
        }
        return new SimpleAuthenticationInfo(user,user.getAccountPwd(),"");
    }
}
