package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Peopleloss;

public interface PeoplelossMapper {
    int deleteByPrimaryKey(Integer peoplelossId);

    int insert(Peopleloss record);

    int insertSelective(Peopleloss record);

    Peopleloss selectByPrimaryKey(Integer peoplelossId);

    int updateByPrimaryKeySelective(Peopleloss record);

    int updateByPrimaryKey(Peopleloss record);
}