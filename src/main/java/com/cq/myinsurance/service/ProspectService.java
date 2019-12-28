package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.Prospect;
import com.cq.myinsurance.utils.Result;
import com.github.pagehelper.PageInfo;

import javax.servlet.http.HttpSession;

public interface ProspectService {

//    /**
//     * 添加勘察信息
//     * @param prospect
//     * @param session
//     * @return
//     */
//    int addProspect(Prospect prospect,HttpSession session);

    /**
     * 已勘察的案件
     * @param session
     * @param indexpage
     * @return
     */
    PageInfo selectAchieveCaseMessage(HttpSession session,Integer indexpage);
}
