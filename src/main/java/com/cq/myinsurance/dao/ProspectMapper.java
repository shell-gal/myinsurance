package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Prospect;

public interface ProspectMapper {
    int deleteByPrimaryKey(Integer prospectId);

    int insert(Prospect record);

    int insertSelective(Prospect record);

    Prospect selectByPrimaryKey(Integer prospectId);

    int updateByPrimaryKeySelective(Prospect record);

    int updateByPrimaryKey(Prospect record);
}