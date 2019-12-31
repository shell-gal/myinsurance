package com.cq.myinsurance.dao;


import com.cq.myinsurance.pojo.Case;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CaseMapper   {

    int deleteByPrimaryKey(Integer caseId);

    int insert(Case record);

    int insertSelective(Case record);

    Case selectByPrimaryKey(Integer caseId);

    int updateByPrimaryKeySelective(Case record);

    int updateByPrimaryKey(Case record);

    List<Case> selectCaseByStatus(@Param("status") String status, @Param("search") String search);


    List<Case>  selectCasePage(@Param("caseId") Long caseId);
    Integer selectCount();

}