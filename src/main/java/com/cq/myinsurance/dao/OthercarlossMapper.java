package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Othercarloss;

public interface OthercarlossMapper {
    int deleteByPrimaryKey(Integer otherCarlossId);

    int insert(Othercarloss record);

    int insertSelective(Othercarloss record);

    Othercarloss selectByPrimaryKey(Integer otherCarlossId);

    int updateByPrimaryKeySelective(Othercarloss record);

    int updateByPrimaryKey(Othercarloss record);
}