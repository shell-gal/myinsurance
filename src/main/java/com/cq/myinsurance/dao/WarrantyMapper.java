package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Warranty;

import java.util.List;
import java.util.Map;

public interface WarrantyMapper {
    int deleteByPrimaryKey(Integer warrantyId);

    int insert(Warranty record);

    int insertSelective(Warranty record);

    Warranty selectByPrimaryKey(Integer warrantyId);

    int updateByPrimaryKeySelective(Warranty record);

    int updateByPrimaryKey(Warranty record);

//    查询所有的保单信息
    List<Object> selectWarranty(Map<String,Object> map);

//    查询一条保单信息
    List<Object> selectWarantyOne(Integer warrantyId);
}