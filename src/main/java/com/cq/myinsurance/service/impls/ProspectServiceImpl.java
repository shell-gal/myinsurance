package com.cq.myinsurance.service.impls;

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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class ProspectServiceImpl implements ProspectService {
    @Autowired
    private ProspectMapper prospectMapper;

    @Override
    public PageInfo selectAchieveCaseMessage(HttpSession session, Integer indexpage) {
        if (indexpage == null){
            indexpage = 1;
        }
        PageHelper.startPage(indexpage,1);
//        PageInfo pageInfo = prospectMapper.selectAchieveProspect(c);
//        return pageInfo;
        return null;
    }

//    @Autowired
//    private ProspectMapper prospectMapper;
//
//    @Override
//    public int addProspect(Prospect prospect, HttpSession session) {
//        int i = prospectMapper.insertSelective(prospect);
//        session.setAttribute("kancaId",prospect.getProspectId());
//        return i;
//    }
}
