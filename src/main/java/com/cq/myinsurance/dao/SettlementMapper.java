package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Settlement;

public interface SettlementMapper {
    int deleteByPrimaryKey(Integer settlementId);

    int insert(Settlement record);

    int insertSelective(Settlement record);

    Settlement selectByPrimaryKey(Integer settlementId);

    int updateByPrimaryKeySelective(Settlement record);

    int updateByPrimaryKey(Settlement record);
}