package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Right;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface RightService {
    List<String> loadrights();
    Right loadone(Integer rightid);
    PageInfo loadroles(Integer indexpage, Integer pagesize);
    boolean updateright(Right right);
    boolean  addright(Right right);
    boolean deleteright(Integer rightid);
}
