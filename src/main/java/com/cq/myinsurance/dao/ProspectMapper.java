package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.Prospect;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProspectMapper {
    int deleteByPrimaryKey(Integer prospectId);

    int insert(Prospect record);

    int insertSelective(Prospect record);

    Prospect selectByPrimaryKey(Integer prospectId);

    int updateByPrimaryKeySelective(Prospect record);

    int updateByPrimaryKey(Prospect record);

    List<Prospect> selectAchieveProspect(Integer kancaId);

    List<Prospect> selectUnAchieveProspect(Integer kancaId);

    Prospect selectProspectMessage(Integer caseId);
}