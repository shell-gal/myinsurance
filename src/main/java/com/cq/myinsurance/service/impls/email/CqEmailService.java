package com.cq.myinsurance.service.impls.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;
import java.io.File;
import java.util.List;

@Service
public class CqEmailService {
    @Value("${spring.mail.username}")
    private String from;   //设置发件人的邮箱地址

    @Autowired
    private JavaMailSenderImpl mailSender;

    //发送普通邮件
    public void sendSimpleMail(String to,String title,String content){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        System.out.println(from);
        message.setTo(to);    //设置收件人的地址
        message.setSubject(title);  //设置邮件主题，头部
        message.setText(content);   //设置发送内容
        mailSender.send(message);   //发送消息
    }

    //发送带有附件的邮件
    public void sendAttachmentsMail(String to, String title, String cotent, List<File> fileList) {
        MimeMessage message = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(title);
            helper.setText(cotent);
            String fileName = null;
            for (File file : fileList) {
                fileName = MimeUtility.encodeText(file.getName(), "GB2312", "B");
                helper.addAttachment(fileName, file);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        mailSender.send(message);
    }

}
