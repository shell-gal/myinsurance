package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Img;
import com.cq.myinsurance.utils.Result;

public interface ImgService {

    /**
     * 上传图片
     * @param img
     * @return
     */
    Result addImg(Img img);
}
