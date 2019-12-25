package com.cq.myinsurance.pojo;

import java.util.Date;

public class Policyholder {
    private Integer policyholderId;

    private String policyholderName;

    private String policyholderAddressProvince;

    private String policyholderAddressCity;

    private String policyholderPhone;

    private String policyholderSex;

    private String policyholderCardid;

    private Date createtime;

    public Integer getPolicyholderId() {
        return policyholderId;
    }

    public void setPolicyholderId(Integer policyholderId) {
        this.policyholderId = policyholderId;
    }

    public String getPolicyholderName() {
        return policyholderName;
    }

    public void setPolicyholderName(String policyholderName) {
        this.policyholderName = policyholderName == null ? null : policyholderName.trim();
    }

    public String getPolicyholderAddressProvince() {
        return policyholderAddressProvince;
    }

    public void setPolicyholderAddressProvince(String policyholderAddressProvince) {
        this.policyholderAddressProvince = policyholderAddressProvince == null ? null : policyholderAddressProvince.trim();
    }

    public String getPolicyholderAddressCity() {
        return policyholderAddressCity;
    }

    public void setPolicyholderAddressCity(String policyholderAddressCity) {
        this.policyholderAddressCity = policyholderAddressCity == null ? null : policyholderAddressCity.trim();
    }

    public String getPolicyholderPhone() {
        return policyholderPhone;
    }

    public void setPolicyholderPhone(String policyholderPhone) {
        this.policyholderPhone = policyholderPhone == null ? null : policyholderPhone.trim();
    }

    public String getPolicyholderSex() {
        return policyholderSex;
    }

    public void setPolicyholderSex(String policyholderSex) {
        this.policyholderSex = policyholderSex == null ? null : policyholderSex.trim();
    }

    public String getPolicyholderCardid() {
        return policyholderCardid;
    }

    public void setPolicyholderCardid(String policyholderCardid) {
        this.policyholderCardid = policyholderCardid == null ? null : policyholderCardid.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}