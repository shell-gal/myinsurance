package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.vo.CaseLoad;
import com.cq.myinsurance.pojo.vo.WarrantyLoad;
import com.github.pagehelper.PageInfo;

import java.util.Map;

public interface CaseService {
    PageInfo loadallcase(WarrantyLoad warrantyLoad);
    PageInfo loadallWarranty(CaseLoad caseLoad);
    PageInfo loadCase(Map<String,Object> map);
    PageInfo loadcase(Map<String,Object> map);

    boolean addCase(Case c);
}
