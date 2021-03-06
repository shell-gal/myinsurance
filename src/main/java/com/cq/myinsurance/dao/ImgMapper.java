package com.cq.myinsurance.dao;

import com.cq.myinsurance.pojo.Img;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImgMapper {
    int deleteByPrimaryKey(Integer imgId);

    int insert(Img record);

    int insertSelective(Img record);

    Img selectByPrimaryKey(Integer imgId);

    int updateByPrimaryKeySelective(Img record);

    int updateByPrimaryKey(Img record);

    List<Img> selectImg(Integer prospectId);
}