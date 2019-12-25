package com.cq.myinsurance.pojo;

import java.util.Date;

public class Warranty {
    private Integer warrantyId;

    private Integer policyholderId;

    private Integer recognizeeId;

    private Date insuranceBeginDate;

    private Date insuranceEndDate;

    private Integer policyMoney;

    private Integer premiumMoney;

    private Date paymentTime;

    private Date signTime;

    private String carNumber;

    private String factoryNumber;

    private String engineNumber;

    private String frameNumber;

    private String dirveingLicense;

    private String carOwnerName;

    private Date createtime;

    public Integer getWarrantyId() {
        return warrantyId;
    }

    public void setWarrantyId(Integer warrantyId) {
        this.warrantyId = warrantyId;
    }

    public Integer getPolicyholderId() {
        return policyholderId;
    }

    public void setPolicyholderId(Integer policyholderId) {
        this.policyholderId = policyholderId;
    }

    public Integer getRecognizeeId() {
        return recognizeeId;
    }

    public void setRecognizeeId(Integer recognizeeId) {
        this.recognizeeId = recognizeeId;
    }

    public Date getInsuranceBeginDate() {
        return insuranceBeginDate;
    }

    public void setInsuranceBeginDate(Date insuranceBeginDate) {
        this.insuranceBeginDate = insuranceBeginDate;
    }

    public Date getInsuranceEndDate() {
        return insuranceEndDate;
    }

    public void setInsuranceEndDate(Date insuranceEndDate) {
        this.insuranceEndDate = insuranceEndDate;
    }

    public Integer getPolicyMoney() {
        return policyMoney;
    }

    public void setPolicyMoney(Integer policyMoney) {
        this.policyMoney = policyMoney;
    }

    public Integer getPremiumMoney() {
        return premiumMoney;
    }

    public void setPremiumMoney(Integer premiumMoney) {
        this.premiumMoney = premiumMoney;
    }

    public Date getPaymentTime() {
        return paymentTime;
    }

    public void setPaymentTime(Date paymentTime) {
        this.paymentTime = paymentTime;
    }

    public Date getSignTime() {
        return signTime;
    }

    public void setSignTime(Date signTime) {
        this.signTime = signTime;
    }

    public String getCarNumber() {
        return carNumber;
    }

    public void setCarNumber(String carNumber) {
        this.carNumber = carNumber == null ? null : carNumber.trim();
    }

    public String getFactoryNumber() {
        return factoryNumber;
    }

    public void setFactoryNumber(String factoryNumber) {
        this.factoryNumber = factoryNumber == null ? null : factoryNumber.trim();
    }

    public String getEngineNumber() {
        return engineNumber;
    }

    public void setEngineNumber(String engineNumber) {
        this.engineNumber = engineNumber == null ? null : engineNumber.trim();
    }

    public String getFrameNumber() {
        return frameNumber;
    }

    public void setFrameNumber(String frameNumber) {
        this.frameNumber = frameNumber == null ? null : frameNumber.trim();
    }

    public String getDirveingLicense() {
        return dirveingLicense;
    }

    public void setDirveingLicense(String dirveingLicense) {
        this.dirveingLicense = dirveingLicense == null ? null : dirveingLicense.trim();
    }

    public String getCarOwnerName() {
        return carOwnerName;
    }

    public void setCarOwnerName(String carOwnerName) {
        this.carOwnerName = carOwnerName == null ? null : carOwnerName.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}