package com.cq.myinsurance.dao;


import com.cq.myinsurance.pojo.Case;
import org.apache.ibatis.annotations.Param;

import java.util.List;

import java.util.Map;

public interface CaseMapper   {


    int deleteByPrimaryKey(Integer caseId);

    int insert(Case record);

    int insertSelective(Case record);

    Case selectByPrimaryKey(Integer caseId);

    int updateByPrimaryKeySelective(Case record);

    int updateByPrimaryKey(Case record);

    List<Case> selectByStatus(String status);

//    根据保单id查询案件
    List<Case> selectByWarantyid(Integer warrantyid);
    List<Case> selectCaseByEx(Map<String,Object> map);

//    查询案件
    List<Object> selectcase(Map<String,Object> map);

//    List<Case> selectCaseByStatus(@Param("status") String status, @Param("search") String search);


    List<Case> selectCaseByStatus(@Param("status") String status, @Param("search") String search);

    List<Case>  selectCasePage(@Param("caseId") Long caseId);

    Integer selectCount();

}