package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.User;
import com.github.pagehelper.PageInfo;

import java.util.List;
import java.util.Map;

public interface DispatchService {

//    根据案件状态查询案件
    PageInfo loadCasebyStatus(Map<String,Object> map);

//    查询勘察人员
    List<User> loadKanca();

//    调度
    boolean diaodu(Map<String,Object> map);
}
