package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Loss;

public interface LossMapper {
    int deleteByPrimaryKey(Integer lossId);

    int insert(Loss record);

    int insertSelective(Loss record);

    Loss selectByPrimaryKey(Integer lossId);

    int updateByPrimaryKeySelective(Loss record);

    int updateByPrimaryKey(Loss record);
}