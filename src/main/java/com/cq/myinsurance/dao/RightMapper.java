package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Right;

public interface RightMapper {
    int deleteByPrimaryKey(Integer rightId);

    int insert(Right record);

    int insertSelective(Right record);

    Right selectByPrimaryKey(Integer rightId);

    int updateByPrimaryKeySelective(Right record);

    int updateByPrimaryKey(Right record);
}