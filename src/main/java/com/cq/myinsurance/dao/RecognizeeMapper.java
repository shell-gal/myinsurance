package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Recognizee;

public interface RecognizeeMapper {
    int deleteByPrimaryKey(Integer recognizeeId);

    int insert(Recognizee record);

    int insertSelective(Recognizee record);

    Recognizee selectByPrimaryKey(Integer recognizeeId);

    int updateByPrimaryKeySelective(Recognizee record);

    int updateByPrimaryKey(Recognizee record);
}