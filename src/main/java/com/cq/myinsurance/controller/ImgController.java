package com.cq.myinsurance.controller;

import com.cq.myinsurance.pojo.Img;
import com.cq.myinsurance.service.ImgService;
import com.cq.myinsurance.utils.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

@Controller
@RequestMapping("/img")
public class ImgController {

    @Autowired
    private ImgService imgService;

    /**
     * 获取图片数据
     * @param prospectId
     * @return
     */
    @RequestMapping("/selectImg.do")
    @ResponseBody
    public List<Img> selectImg(Integer prospectId){
        List<Img> imgs = imgService.selectImg(prospectId);
        return imgs;
    }

    /**
     * 文件下载
     * @param policyDuty
     * @param request
     * @param response
     * @throws IOException
     */
    @RequestMapping("/download.do")
    public void downLoad(@RequestParam("policyDuty") String policyDuty, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //文件格式
        policyDuty = new String(policyDuty.getBytes("iso8859-1"),"UTF-8");
        //文件下载地址
        String fileSaveRootPath = request.getSession().getServletContext().getRealPath("js/static/policeFile/");
        //获取文件
        File fileName = new File(fileSaveRootPath + policyDuty);
        //判断文件是否存在
        if (!fileName.exists()){
            System.out.println("文件不存在");
            return;
        }
        //下载文件名
        String realName = "交警责任判断书";
        FileUtils.FileDown(realName,fileName,request,response);
    }

}
