package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Right;

import java.util.List;

public interface RightMapper {
    int deleteByPrimaryKey(Integer rightId);

    int insert(Right record);

    int insertSelective(Right record);


    List<String> selectRights();

    List<Right> selectallRights();

    Right selectByPrimaryKey(Integer rightId);

    int updateByPrimaryKeySelective(Right record);

    int updateByPrimaryKey(Right record);
}