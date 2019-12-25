package com.cq.myinsurance.pojo;

import java.util.Date;

public class Recognizee {
    private Integer recognizeeId;

    private String recognizeeName;

    private String recognizeePhone;

    private String recognizeeSex;

    private String recognizeeEmail;

    private String recognizeeCardid;

    private String recognizeeAccount;

    private String recognizeeAddressProvince;

    private String recognizeeAddressCity;

    private String recognizeeDriverlicense;

    private Date createtime;

    public Integer getRecognizeeId() {
        return recognizeeId;
    }

    public void setRecognizeeId(Integer recognizeeId) {
        this.recognizeeId = recognizeeId;
    }

    public String getRecognizeeName() {
        return recognizeeName;
    }

    public void setRecognizeeName(String recognizeeName) {
        this.recognizeeName = recognizeeName == null ? null : recognizeeName.trim();
    }

    public String getRecognizeePhone() {
        return recognizeePhone;
    }

    public void setRecognizeePhone(String recognizeePhone) {
        this.recognizeePhone = recognizeePhone == null ? null : recognizeePhone.trim();
    }

    public String getRecognizeeSex() {
        return recognizeeSex;
    }

    public void setRecognizeeSex(String recognizeeSex) {
        this.recognizeeSex = recognizeeSex == null ? null : recognizeeSex.trim();
    }

    public String getRecognizeeEmail() {
        return recognizeeEmail;
    }

    public void setRecognizeeEmail(String recognizeeEmail) {
        this.recognizeeEmail = recognizeeEmail == null ? null : recognizeeEmail.trim();
    }

    public String getRecognizeeCardid() {
        return recognizeeCardid;
    }

    public void setRecognizeeCardid(String recognizeeCardid) {
        this.recognizeeCardid = recognizeeCardid == null ? null : recognizeeCardid.trim();
    }

    public String getRecognizeeAccount() {
        return recognizeeAccount;
    }

    public void setRecognizeeAccount(String recognizeeAccount) {
        this.recognizeeAccount = recognizeeAccount == null ? null : recognizeeAccount.trim();
    }

    public String getRecognizeeAddressProvince() {
        return recognizeeAddressProvince;
    }

    public void setRecognizeeAddressProvince(String recognizeeAddressProvince) {
        this.recognizeeAddressProvince = recognizeeAddressProvince == null ? null : recognizeeAddressProvince.trim();
    }

    public String getRecognizeeAddressCity() {
        return recognizeeAddressCity;
    }

    public void setRecognizeeAddressCity(String recognizeeAddressCity) {
        this.recognizeeAddressCity = recognizeeAddressCity == null ? null : recognizeeAddressCity.trim();
    }

    public String getRecognizeeDriverlicense() {
        return recognizeeDriverlicense;
    }

    public void setRecognizeeDriverlicense(String recognizeeDriverlicense) {
        this.recognizeeDriverlicense = recognizeeDriverlicense == null ? null : recognizeeDriverlicense.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}