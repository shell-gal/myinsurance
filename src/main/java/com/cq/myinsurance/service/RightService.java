package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Right;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface RightService {
    List<String> loadrights();
    Right loadone(Integer rightid);
    PageInfo loadright(Integer indexpage, Integer pagesize);
    boolean updateright(String rightname,Integer rightid);
    boolean  addright(String rightname);
    boolean deleteright(Integer rightid);
}
