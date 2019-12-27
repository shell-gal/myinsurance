package com.cq.myinsurance.test;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {
    public static void main(String[] args) {
        Date date= new Date();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMddhhmmss");
        String s = sdf.format(date);
        System.out.println(s);
    }
}
