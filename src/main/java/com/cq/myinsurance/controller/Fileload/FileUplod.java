package com.cq.myinsurance.controller.Fileload;

import org.apache.commons.io.FileUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;


@Controller
@RequestMapping("/file")
public class FileUplod {

    // produces={"text/html;charset=UTF-8"}produces = {"application/json;charset=UTF-8"}
    @RequestMapping(value = "images",method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<List<String>> upload(@RequestParam("file") MultipartFile file)throws IOException {
     List<String> url=new ArrayList<>();
        String aStatic = URLDecoder.decode(this.getClass().getClassLoader().getResource("static").getFile(), "utf-8");
        String dir=aStatic+File.separator+"upload"+File.separator;;
        System.out.println(dir);
        String type=file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+ 1, file.getOriginalFilename().length());
        SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMdd_HHmmss");
        Random r=new Random();String imgName = "";
        if ("jpg".equals(type.toLowerCase())) {
            imgName = sdf.format(new Date()) + r.nextInt(100) + ".jpg";
        } else if ("png".equals(type.toLowerCase())) {
            imgName = sdf.format(new Date()) + r.nextInt(100) + ".png";
        } else if ("jpeg".equals(type.toLowerCase())) {
            imgName = sdf.format(new Date()) + r.nextInt(100) + ".jpeg";
        } else if ("gif".equals(type.toLowerCase())) {
            imgName = sdf.format(new Date()) + r.nextInt(100) + ".gif";
        } else {
           // return ResponseEntity.status(500).body("格式错误");
            url.add("格式错误");
            return ResponseEntity.status(404).body(url);
        }
        // 2)校验图片内容
        BufferedImage image = ImageIO.read(file.getInputStream());
        if (image == null) {
            url.add("不是图片文件");
            return ResponseEntity.status(404).body(url);
        }
        if (!new File(dir,imgName).getParentFile().exists()) new File(dir,imgName).getParentFile().mkdirs();

        //写入文件
        file.transferTo(new File(dir, imgName));
        url.add("/upload/"+imgName);
        return ResponseEntity.ok(url);
       // return "upload/"+imgName;
    }



    @RequestMapping("/file")
    @ResponseBody
    public ResponseEntity<String> upExccle(@RequestParam("file") MultipartFile file, HttpServletRequest request){

        String type=file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+1,file.getOriginalFilename().length());
        String fileName = null;
        //*******
        UploadFileTypeEnum uploadFileTypeEnum = UploadFileTypeEnum.getFileEnumByType(type);
        if (uploadFileTypeEnum == UploadFileTypeEnum.ERROR_TYPE) {
            //格式错误则不允许上传，直接返回错误提示
            return ResponseEntity.status(500).body("格式错误");
        } else {
            //生成文件名称通用方法
            SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMdd_HHmmss");
            Random rd=new Random();
            StringBuilder stringBuilder=new StringBuilder();
            stringBuilder.append(sdf.format(new Date())).append(rd.nextInt(100)).append(".").append(type);
            fileName=stringBuilder.toString();
        }
        try {
            String aStatic = URLDecoder.decode(this.getClass().getClassLoader().getResource("static").getFile(), "utf-8");
            String dir=aStatic+File.separator+"upload"+File.separator;; //将虚拟路径转化为实际路径并在定位的子目录当中
            //
            FileUtils.writeByteArrayToFile(new File(dir, fileName), file.getBytes());
            return ResponseEntity.ok("/upload/"+fileName);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(500).body("文件上传失败");
        }

    }




}
