package com.cq.myinsurance.service.impls;

import com.cq.myinsurance.dao.ImgMapper;
import com.cq.myinsurance.pojo.Img;
import com.cq.myinsurance.service.ImgService;
import com.cq.myinsurance.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImgServiceImpl implements ImgService {

    @Autowired
    private ImgMapper imgMapper;

    @Override
    public int addImg(Img img) {
        int i = imgMapper.insertSelective(img);
        if (i > 0){
            System.out.println("上传成功！");
            return i;
        }
        return 0;
    }

    @Override
    public List<Img> selectImg(Integer prospectId) {
        List<Img> imgList = imgMapper.selectImg(prospectId);
        return imgList;
    }
}
