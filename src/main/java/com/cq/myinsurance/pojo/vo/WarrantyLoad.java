package com.cq.myinsurance.pojo.vo;

import java.util.Date;

public class WarrantyLoad {
    Integer indexpage;
    Integer pagesize;
    Integer warranty_number;
    String policyholders_name;
    String recognizee_name;
    Date insurance_end_date;

    public Integer getIndexpage() {
        return indexpage;
    }

    public void setIndexpage(Integer indexpage) {
        this.indexpage = indexpage;
    }

    public Integer getPagesize() {
        return pagesize;
    }

    public void setPagesize(Integer pagesize) {
        this.pagesize = pagesize;
    }

    public Integer getWarranty_number() {
        return warranty_number;
    }

    public void setWarranty_number(Integer warranty_number) {
        this.warranty_number = warranty_number;
    }

    public String getPolicyholders_name() {
        return policyholders_name;
    }

    public void setPolicyholders_name(String policyholders_name) {
        this.policyholders_name = policyholders_name;
    }

    public String getRecognizee_name() {
        return recognizee_name;
    }

    public void setRecognizee_name(String recognizee_name) {
        this.recognizee_name = recognizee_name;
    }

    public Date getInsurance_end_date() {
        return insurance_end_date;
    }

    public void setInsurance_end_date(Date insurance_end_date) {
        this.insurance_end_date = insurance_end_date;
    }
}
