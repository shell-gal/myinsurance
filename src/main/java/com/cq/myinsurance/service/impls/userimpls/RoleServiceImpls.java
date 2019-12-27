package com.cq.myinsurance.service.impls.userimpls;

import com.cq.myinsurance.dao.RoleMapper;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.service.RoleService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RoleServiceImpls implements RoleService {
    @Resource
    RoleMapper roleMapper;

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

    @Override
    public boolean deleterole(Integer roleid) {
//        删除角色时，将角色的状态改为0
        if (roleid!=null){
            Role role=new Role();
            role.setRoleId(roleid);
            role.setRoleStatus(0);
            int i = roleMapper.updateByPrimaryKeySelective(role);
            if (i>0)
                return true;
        }
        return false;
    }
}
