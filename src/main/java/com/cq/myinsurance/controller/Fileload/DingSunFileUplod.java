package com.cq.myinsurance.controller.Fileload;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

/**
 * @Filename
 * @auther 吴星辰;
 * @data 2019/12/30 11:44;
 * @Descripion
 * @Version 1.1.1
 * @Function
 * @History
 */
@Controller
@RequestMapping("/file")
public class DingSunFileUplod {


    @RequestMapping(value = "image", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<List<String>> upload(@RequestParam("myhead") MultipartFile file) throws IOException {
        List<String> url = new ArrayList<>();
        String aStatic = URLDecoder.decode(this.getClass().getClassLoader().getResource("static").getFile(), "utf-8");
        String dir = aStatic + File.separator + "upload" + File.separator;
        ;


        String type = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1, file.getOriginalFilename().length());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd_HHmmss");
        Random r = new Random();
        String imgName = file.getOriginalFilename();
        if ("jpg".equals(type.toLowerCase())) {
        } else if ("png".equals(type.toLowerCase())) {
        } else if ("jpeg".equals(type.toLowerCase())) {
        } else if ("gif".equals(type.toLowerCase())) {
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
        if (!new File(dir, imgName).getParentFile().exists()) new File(dir, imgName).getParentFile().mkdirs();

        //写入文件
        file.transferTo(new File(dir, imgName));
        url.add("/upload/" + imgName);
        return ResponseEntity.ok(url);

    }

}