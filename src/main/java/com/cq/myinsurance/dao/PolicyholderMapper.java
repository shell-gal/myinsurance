package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Policyholder;

public interface PolicyholderMapper {
    int deleteByPrimaryKey(Integer policyholderId);

    int insert(Policyholder record);

    int insertSelective(Policyholder record);

    Policyholder selectByPrimaryKey(Integer policyholderId);

    int updateByPrimaryKeySelective(Policyholder record);

    int updateByPrimaryKey(Policyholder record);
}