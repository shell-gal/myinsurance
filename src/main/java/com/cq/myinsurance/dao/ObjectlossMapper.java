package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Objectloss;

public interface ObjectlossMapper {
    int deleteByPrimaryKey(Integer objectlossId);

    int insert(Objectloss record);

    int insertSelective(Objectloss record);

    Objectloss selectByPrimaryKey(Integer objectlossId);

    int updateByPrimaryKeySelective(Objectloss record);

    int updateByPrimaryKey(Objectloss record);
}