package com.cq.myinsurance.service.impls;

import com.cq.myinsurance.dao.ImgMapper;
import com.cq.myinsurance.pojo.Img;
import com.cq.myinsurance.service.ImgService;
import com.cq.myinsurance.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImgServiceImpl implements ImgService {

    @Autowired
    private ImgMapper imgMapper;

    @Override
    public Result addImg(Img img) {
        Result result = new Result();
        int i = imgMapper.insertSelective(img);
        if (i > 0){
            result.setMessage("添加成功");
            result.setResultstatus(200);
        }else {
            result.setMessage("添加失败！");
            result.setResultstatus(500);
        }
        return null;
    }
}
