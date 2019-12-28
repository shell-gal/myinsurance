package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.vo.CaseVo;
import com.github.pagehelper.PageInfo;

/**
 * @Message:
 * @Author：Cheirmin
 * @Date: 2019/12/27 12:28
 * @Version 1.0
 */
public interface AdjustmentService {
    /**
     * 案件渲染页面
     * @param pageNum
     * @param pageSize
     * @return
     */
    PageInfo<CaseVo> getCasePage(int pageNum, int pageSize,String search);
}
