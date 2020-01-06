package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Loss;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface LossMapper {
    int deleteByPrimaryKey(Integer lossId);
    List<Map<String,String>>  losequery(@Param("reported_number")Long reported_number);
    int insert(Loss record);

    int insertSelective(Loss record);

    Loss selectByPrimaryKey(Integer lossId);

    int updateByPrimaryKeySelective(Loss record);

    int updateByPrimaryKey(Loss record);

    List<Map<String, String>> CompensateQuery(@Param("reported_number") Long reported_number,@Param("hesun_id")Integer id);
}