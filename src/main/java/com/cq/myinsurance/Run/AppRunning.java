package com.cq.myinsurance.Run;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableScheduling
@EnableTransactionManagement
@MapperScan("com.cq.myinsurance.dao")
@ComponentScan("com")
@SpringBootApplication
public class AppRunning {
    public static void main(String[] args) {
        SpringApplication.run(AppRunning.class,args);
    }
}

