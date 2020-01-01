package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Img;
import com.cq.myinsurance.utils.Result;

import java.util.List;

public interface ImgService {

    /**
     * 上传图片
     * @param img
     * @return
     */
    int addImg(Img img);

    /**
     * 查询勘察图片
     * @param prospectId
     * @return
     */
    List<Img> selectImg(Integer prospectId);

}
