package com.cq.myinsurance.service;

import com.cq.myinsurance.pojo.Warranty;
import com.cq.myinsurance.pojo.vo.WarrantyLoad;
import com.github.pagehelper.PageInfo;

import java.util.List;
import java.util.Map;

public interface InsuranceService {

    PageInfo loadInsurance(WarrantyLoad warrantyLoad);
    List<Object> loadInsuranceOne(Integer warranty_number);

    boolean updateInsurance(Warranty warranty);
    boolean deleteInsurance(WarrantyLoad warrantyLoad);
    boolean addInsuracne(Warranty warranty);

}
