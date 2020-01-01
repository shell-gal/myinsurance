package com.cq.myinsurance.utils;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;

/**
 * 文件下载工具
 */
public class FileUtils {
    public static void FileDown(String realName, File fileName, HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setHeader("content-disposition","attachment;filename=" + URLEncoder.encode(realName,"UTF-8"));
        FileInputStream inputStream = new FileInputStream(fileName);
        OutputStream outputStream = response.getOutputStream();
        byte buffer[] = new byte[1024];
        int length = 0;
        while ((length = inputStream.read(buffer)) > 0) {
            outputStream.write(buffer,0,length);
        }
        inputStream.close();
        outputStream.close();
    }
}
