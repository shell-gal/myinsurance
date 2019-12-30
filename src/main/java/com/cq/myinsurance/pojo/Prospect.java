package com.cq.myinsurance.pojo;

import java.util.Date;

public class Prospect {
    private Integer prospectId;

    private Integer caseId;

    private Integer imgId;

    private String prospectAddress;

    private String accidentType;

    private Date prospectDate;

    private String dangerPass;

    private String lossInfo;

    private String duty;

    private String policeDuty;

    private String driverName;

    private String driverPhone;

    private String driverLicense;

    private String driveingLicense;

    private Date createtime;

    private Case aCase;

    public Case getaCase() {
        return aCase;
    }

    public void setaCase(Case aCase) {
        this.aCase = aCase;
    }

    public Integer getProspectId() {
        return prospectId;
    }

    public void setProspectId(Integer prospectId) {
        this.prospectId = prospectId;
    }

    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
    }

    public Integer getImgId() {
        return imgId;
    }

    public void setImgId(Integer imgId) {
        this.imgId = imgId;
    }

    public String getProspectAddress() {
        return prospectAddress;
    }

    public void setProspectAddress(String prospectAddress) {
        this.prospectAddress = prospectAddress == null ? null : prospectAddress.trim();
    }

    public String getAccidentType() {
        return accidentType;
    }

    public void setAccidentType(String accidentType) {
        this.accidentType = accidentType == null ? null : accidentType.trim();
    }

    public Date getProspectDate() {
        return prospectDate;
    }

    public void setProspectDate(Date prospectDate) {
        this.prospectDate = prospectDate;
    }

    public String getDangerPass() {
        return dangerPass;
    }

    public void setDangerPass(String dangerPass) {
        this.dangerPass = dangerPass == null ? null : dangerPass.trim();
    }

    public String getLossInfo() {
        return lossInfo;
    }

    public void setLossInfo(String lossInfo) {
        this.lossInfo = lossInfo == null ? null : lossInfo.trim();
    }

    public String getDuty() {
        return duty;
    }

    public void setDuty(String duty) {
        this.duty = duty == null ? null : duty.trim();
    }

    public String getPoliceDuty() {
        return policeDuty;
    }

    public void setPoliceDuty(String policeDuty) {
        this.policeDuty = policeDuty == null ? null : policeDuty.trim();
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName == null ? null : driverName.trim();
    }

    public String getDriverPhone() {
        return driverPhone;
    }

    public void setDriverPhone(String driverPhone) {
        this.driverPhone = driverPhone == null ? null : driverPhone.trim();
    }

    public String getDriverLicense() {
        return driverLicense;
    }

    public void setDriverLicense(String driverLicense) {
        this.driverLicense = driverLicense == null ? null : driverLicense.trim();
    }

    public String getDriveingLicense() {
        return driveingLicense;
    }

    public void setDriveingLicense(String driveingLicense) {
        this.driveingLicense = driveingLicense == null ? null : driveingLicense.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}