package com.cq.myinsurance.service.impls.userimpls;

import com.cq.myinsurance.dao.UserMapper;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.UserLoad;
import com.cq.myinsurance.service.EmployeeService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.List;

@Service
public class EmployeeServiceImpls implements EmployeeService {

    @Resource
    UserMapper userMapper;

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
    public boolean addemployee(User user) {
        if (user!=null){
            int i = userMapper.insert(user);
            if (i>0){
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean deleteemployee(Integer userId) {
        return false;
    }

    @Override
    public boolean updateemployee(User user) {
        return false;
    }
}
