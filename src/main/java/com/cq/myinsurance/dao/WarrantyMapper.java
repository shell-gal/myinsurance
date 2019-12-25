package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Warranty;

public interface WarrantyMapper {
    int deleteByPrimaryKey(Integer warrantyId);

    int insert(Warranty record);

    int insertSelective(Warranty record);

    Warranty selectByPrimaryKey(Integer warrantyId);

    int updateByPrimaryKeySelective(Warranty record);

    int updateByPrimaryKey(Warranty record);
}