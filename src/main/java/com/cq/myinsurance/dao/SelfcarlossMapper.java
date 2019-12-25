package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Selfcarloss;

public interface SelfcarlossMapper {
    int deleteByPrimaryKey(Integer selfCarlossId);

    int insert(Selfcarloss record);

    int insertSelective(Selfcarloss record);

    Selfcarloss selectByPrimaryKey(Integer selfCarlossId);

    int updateByPrimaryKeySelective(Selfcarloss record);

    int updateByPrimaryKey(Selfcarloss record);
}