package com.cq.myinsurance.service.impls;

import com.cq.myinsurance.dao.CaseMapper;
import com.cq.myinsurance.dao.ProspectMapper;
import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.Prospect;
import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.service.ProspectService;
import com.cq.myinsurance.utils.Result;
import com.cq.myinsurance.utils.enums.CaseStatus;
import com.cq.myinsurance.utils.enums.UserStatus;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class ProspectServiceImpl implements ProspectService {
    @Autowired
    private ProspectMapper prospectMapper;

    @Override
    public PageInfo<Prospect> selectAchieveCaseMessage(HttpSession session, Integer indexpage) {
        User user= (User) session.getAttribute(UserStatus.CURRENT_USER);
        Integer userId = user.getUserId();
        if (indexpage == null){
            indexpage = 1;
        }
        PageHelper.startPage(indexpage,1);
        List<Prospect> prospectList = prospectMapper.selectAchieveProspect(userId);
        System.out.println(prospectList);
        return new PageInfo(prospectList);
    }

    @Override
    public PageInfo<Prospect> selectUnAchieveCaseMessage(HttpSession session, Integer indexpage) {
        User user = (User) session.getAttribute(UserStatus.CURRENT_USER);
        Integer userId = user.getUserId();
        if (indexpage == null){
            indexpage = 1;
        }
        PageHelper.startPage(indexpage,1);
        List<Prospect> prospectList = prospectMapper.selectUnAchieveProspect(userId);
        PageInfo<Prospect> pageInfo = new PageInfo<>(prospectList);
        System.out.println(pageInfo);
        return pageInfo;
    }


}
