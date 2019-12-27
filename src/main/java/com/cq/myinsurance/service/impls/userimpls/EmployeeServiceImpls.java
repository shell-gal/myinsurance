package com.cq.myinsurance.service.impls.userimpls;

import com.cq.myinsurance.dao.AuthorizationMapper;
import com.cq.myinsurance.dao.RoleMapper;
import com.cq.myinsurance.dao.UserMapper;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.UserLoad;
import com.cq.myinsurance.pojo.vo.UserRole;
import com.cq.myinsurance.service.EmployeeService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestBody;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class EmployeeServiceImpls implements EmployeeService {

    @Resource
    UserMapper userMapper;

    @Resource
    RoleMapper roleMapper;

    @Resource
    AuthorizationMapper authorizationMapper;

    @Override
    public PageInfo loademployee(UserLoad userLoad) {
        if (userLoad.getIndexpage()==null){
            userLoad.setIndexpage(1);
        }
        if (userLoad.getPagesize()==null){
            userLoad.setPagesize(10);
        }
        if (userLoad.getFlag()!=null&&userLoad.getParam()!=null){
            if (userLoad.getFlag()==1){
//                根据用户名查
                 userLoad.setUserName(userLoad.getParam());
            }
            if (userLoad.getFlag()==2){
//                根据用户编号查
                userLoad.setUserId(Integer.valueOf(userLoad.getParam()));
            }
            if (userLoad.getFlag()==3){
//                根据部门查
                userLoad.setDepart(userLoad.getParam());
            }
        }
        PageHelper.startPage(userLoad.getIndexpage(),userLoad.getPagesize());
        List<User> userList = userMapper.selectall(userLoad);
        PageInfo pageInfo=new PageInfo(userList);
        if (pageInfo!=null){
            return pageInfo;
        }
        return null;
    }

    @Override
    public User loadone(Integer userid) {
        if (userid!=null)
        {
            User user = userMapper.selectByPrimaryKey(userid);
            if (user!=null)
                return user;
        }
        return null;
    }

    @Override
    public boolean addemployee(UserRole userRole) {
        if (userRole!=null){
            User user=new User();
            user.setUserName(userRole.getUserName());
            user.setUserSex(userRole.getUserSex());
            user.setAddress(userRole.getAddress());
            user.setBirthday(userRole.getBirthday());
            user.setDepart(userRole.getDepart());
            user.setEducation(userRole.getEducation());
            user.setEmployeeDate(userRole.getEmployeeDate());
            user.setUserCardid(userRole.getUserCardid());
            user.setUserPhone(userRole.getUserPhone());
            user.setUserEmail(userRole.getUserEmail());
            user.setCreatetime(new Date());
            user.setUserStatus(1);
            user.setAccountNumber(userRole.getUserEmail());
            user.setAccountPwd("123456");
            int i = userMapper.insertSelective(user);
            if (i>0){
                userRole.setUserId(user.getUserId());
                int j = authorizationMapper.insertSelective(userRole);
                if (j>0)
                return true;
            }
        }
        return false;
    }

//    删除用户，将用户的状态设置为0
    @Override
    public boolean deleteemployee(Integer userId) {
        User user=new User();
        user.setUserId(userId);
        user.setUserStatus(0);
        int i = userMapper.updateuserByPrimaryKeySelective(user);
        if (i>0){
            return true;
        }
        return false;
    }


//    修改用户信息的同时，可能会修改用户的角色
    @Override
    @Transactional
    public boolean updateemployee(UserRole userRole) {
        if (userRole==null)
            return false;
        int i = userMapper.updateByPrimaryKeySelective(userRole);
        int j = authorizationMapper.updateByPrimaryKeySelective(userRole);
        if (i>0&&j>0)
            return true;
        else
            return false;
    }
}
