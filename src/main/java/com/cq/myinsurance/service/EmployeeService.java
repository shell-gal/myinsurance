package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.pojo.vo.UserLoad;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface EmployeeService {
        PageInfo loademployee(UserLoad userLoad);
        User loadone(Integer userid);
        boolean addemployee(User user);
        boolean deleteemployee(Integer userId);
        boolean updateemployee(User user);
}
