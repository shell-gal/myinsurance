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
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Service
public class ProspectServiceImpl implements ProspectService {
    @Autowired
    private ProspectMapper prospectMapper;

    @Resource
    CaseMapper caseMapper;

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
//        User user = (User) session.getAttribute(UserStatus.CURRENT_USER);

        User u= (User) SecurityUtils.getSubject().getPrincipal();

//        Integer userId = user.getUserId();
        if (indexpage == null){
            indexpage = 1;
        }
        PageHelper.startPage(indexpage,1);
        List<Prospect> prospectList = prospectMapper.selectUnAchieveProspect(u.getUserId());
        PageInfo<Prospect> pageInfo = new PageInfo<>(prospectList);
        System.out.println(pageInfo);
        return pageInfo;
    }

    @Override
    public Prospect selectProspectMessage(Integer caseId) {
        Prospect prospect = prospectMapper.selectProspectMessage(caseId);
        if (prospect != null){
            return prospect;
        }
        return null;
    }

    @Override
    public int addProspect(Prospect prospect,HttpSession session) {
//        User user = (User) session.getAttribute(UserStatus.CURRENT_USER);
//        Integer userId = user.getUserId();
//        session.setAttribute("prospectId",userId);
        Case c=new Case();
        c.setCaseId(prospect.getCaseId());
        c.setCaseStatus("定损中");
        int j = caseMapper.updateByPrimaryKeySelective(c);
        int i = prospectMapper.insert(prospect);
        if (i > 0 && j>0){
            System.out.println("添加成功！");
            return i;
        }
        return 0;
    }

    @Override
    public int updateProspect(Prospect prospect, HttpSession session) {
        int i = prospectMapper.updateByPrimaryKey(prospect);
        if (i > 0){
            System.out.println("修改成功！");
            return i;
        }
        return 0;
    }

    @Override
    public PageInfo selectAllProspect(Integer caseId,Integer indexpage) {
        if (indexpage == null){
            indexpage = 1;
        }
        PageHelper.startPage(indexpage,2);
        List<Prospect> prospectList = prospectMapper.selectAllProspect(caseId);
        PageInfo<Prospect> pageInfo = new PageInfo<>(prospectList);
        return pageInfo;
    }


}
