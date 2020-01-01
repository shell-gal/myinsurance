package com.cq.myinsurance.pojo.vo;

public class CaseLoad {
    public Integer indexpage;
    public  Integer pagesize;

    public Integer warranty_number;
    public String license_number;
    public String credentials_number;

    public Integer jieanid;
    public Integer reported_number;

    public Integer getJieanid() {
        return jieanid;
    }

    public void setJieanid(Integer jieanid) {
        this.jieanid = jieanid;
    }

    public Integer getReported_number() {
        return reported_number;
    }

    public void setReported_number(Integer reported_number) {
        this.reported_number = reported_number;
    }

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

    public String getLicense_number() {
        return license_number;
    }

    public void setLicense_number(String license_number) {
        this.license_number = license_number;
    }

    public String getCredentials_number() {
        return credentials_number;
    }

    public void setCredentials_number(String credentials_number) {
        this.credentials_number = credentials_number;
    }
}
