package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.Prospect;
import com.cq.myinsurance.utils.Result;
import com.github.pagehelper.PageInfo;
import org.apache.ibatis.annotations.Param;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

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
    PageInfo<Prospect> selectAchieveCaseMessage(HttpSession session, Integer indexpage);

    /**
     * 未勘察的案件
     * @param session
     * @param indexpage
     * @return
     */
    PageInfo<Prospect> selectUnAchieveCaseMessage(HttpSession session,Integer indexpage);

    /**
     * 查询勘察报告
     * @param caseId
     * @return
     */
    Prospect selectProspectMessage(Integer caseId);

    /**
     * 添加勘察信息
     * @param prospect
     * @return
     */
    int addProspect(Prospect prospect,HttpSession session);

    /**
     * 修改勘察信息
     * @param prospect
     * @param session
     * @return
     */
    int updateProspect(Prospect prospect,HttpSession session);

    PageInfo<Prospect> selectAllProspect(Integer caseId,Integer indexpage);
}
