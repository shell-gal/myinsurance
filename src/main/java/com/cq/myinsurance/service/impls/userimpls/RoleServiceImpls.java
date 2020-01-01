package com.cq.myinsurance.service.impls.userimpls;

import com.cq.myinsurance.dao.AuthorizationMapper;
import com.cq.myinsurance.dao.RoleMapper;
import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.service.RoleService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RoleServiceImpls implements RoleService {
    @Resource
    RoleMapper roleMapper;

    @Resource
    AuthorizationMapper authorizationMapper;

    @Override
    public List<String> loadroles() {
        List<String> roles = roleMapper.selectRoles();
        if (CollectionUtils.isEmpty(roles))
        return null;
        return roles;
    }

    @Override
    public List<Role> loadall() {
        List<Role> roleList = roleMapper.selectallroles();
        if (CollectionUtils.isEmpty(roleList))
            return null;
        return roleList;
    }

    @Override
    public Role loadone(Integer roleid) {
        Role role = roleMapper.selectByPrimaryKey(roleid);
        if (role==null){
            return null;
        }
        return role;
    }

    @Override
    public PageInfo loadroles(Integer indexpage, Integer pagesize) {
        if (indexpage==null)
            indexpage=1;
        if (pagesize==null)
            pagesize=10;
        PageHelper.startPage(indexpage,pagesize);
        List<Role> roleList = roleMapper.selectallroles();
        PageInfo pageInfo=new PageInfo(roleList);
        if (pageInfo==null){
            return null;
        }
        return pageInfo;
    }


//    查询角色权限
    @Override
    public  List<Right> loadroleright(Integer roleid) {
        if (roleid==null){
            return null;
        }
        List<Right> rightList = authorizationMapper.selectRightByRoleid(roleid);
        return rightList;
    }

//    查询角色未拥有权限
    @Override
    public  List<Right> loadroleunright(Integer roleid) {
        if (roleid==null){
            return null;
        }
        List<Right> rights = authorizationMapper.selectunRightByRoleid(roleid);
        return rights;
    }

    @Override
    public boolean updaterole(Role role) {
        if (role!=null){
            int i = roleMapper.updateByPrimaryKeySelective(role);
            if (i>0){
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean addrole(Role role) {
        if (role!=null){
            if(role.getRoleStatus()==null){
                role.setRoleStatus(1);
            }
            int i = roleMapper.insertSelective(role);
            if (i>0){
                return true;
            }
        }
        return false;
}

//添加角色
    @Override
    public boolean add(String rolename) {
        if (rolename==null){
            return false;
        }
        Role role=new Role();
        role.setRoleName(rolename);
        role.setRoleStatus(1);
        int i = roleMapper.insertSelective(role);
        if (i>0){
            return true;
        }
        return false;
    }

    @Override
    public boolean deleterole(Integer roleid) {
//        删除角色时，将角色的状态改为0
        if (roleid!=null){
            Role role=new Role();
            role.setRoleId(roleid);
            role.setRoleStatus(0);
            int i = roleMapper.updateByPrimaryKeySelective(role);
            if (i>0) {
//               将此角色拥有的权限删除
                int j = authorizationMapper.deleteallRightByroleid(roleid);
                if (j>0){
                    return true;
                }
            }
        }
        return false;
    }


//    给角色设置权限
    @Override
    public boolean insertRoleAndRight(Integer roleid, Integer rightid) {
        if (rightid==null){
            return false;
        }
        if (roleid==null){
            return false;
        }
        int i = authorizationMapper.insert(roleid,rightid);
        if (i>0){
            return true;
        }
        return false;
    }

//    给角色取消权限
    @Override
    public boolean delteRoleAndRight(Integer roleid, Integer rightid) {
        if (rightid==null){
            return false;
        }
        if (roleid==null){
            return false;
        }
        int i = authorizationMapper.deleteRightByroleid(roleid, rightid);
        if (i>0){
            return true;
        }
        return false;
    }
}
