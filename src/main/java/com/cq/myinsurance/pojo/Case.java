package com.cq.myinsurance.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class Case {
    private Integer caseId;

    private String reporterName;

    private String reporterPhone;

    private String dangerCause;

    private String dangerAddressProvince;

    private String dangerAddressCity;

    private String detailAddress;

    private String roadDirection;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date dangerDate;

    private String dangerType;

    private String caseStatus;

    private Integer warrantyId;

    private Integer jieanId;

    private Integer kancaId;

    private Integer dingsunId;

    private Integer hesunId;

    private Integer lisuanId;

    private Integer hepeiId;

    private Integer lipeiId;

    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "GMT+8")
    private Date createtime;

    @Override
    public String toString() {
        return "Case{" +
                "caseId=" + caseId +
                ", reporterName='" + reporterName + '\'' +
                ", reporterPhone='" + reporterPhone + '\'' +
                ", dangerCause='" + dangerCause + '\'' +
                ", dangerAddressProvince='" + dangerAddressProvince + '\'' +
                ", dangerAddressCity='" + dangerAddressCity + '\'' +
                ", detailAddress='" + detailAddress + '\'' +
                ", roadDirection='" + roadDirection + '\'' +
                ", dangerDate=" + dangerDate +
                ", dangerType='" + dangerType + '\'' +
                ", caseStatus='" + caseStatus + '\'' +
                ", warrantyId=" + warrantyId +
                ", jieanId=" + jieanId +
                ", kancaId=" + kancaId +
                ", dingsunId=" + dingsunId +
                ", hesunId=" + hesunId +
                ", lisuanId=" + lisuanId +
                ", hepeiId=" + hepeiId +
                ", lipeiId=" + lipeiId +
                ", createtime=" + createtime +
                '}';
    }

    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
    }

    public String getReporterName() {
        return reporterName;
    }

    public void setReporterName(String reporterName) {
        this.reporterName = reporterName == null ? null : reporterName.trim();
    }

    public String getReporterPhone() {
        return reporterPhone;
    }

    public void setReporterPhone(String reporterPhone) {
        this.reporterPhone = reporterPhone == null ? null : reporterPhone.trim();
    }

    public String getDangerCause() {
        return dangerCause;
    }

    public void setDangerCause(String dangerCause) {
        this.dangerCause = dangerCause == null ? null : dangerCause.trim();
    }

    public String getDangerAddressProvince() {
        return dangerAddressProvince;
    }

    public void setDangerAddressProvince(String dangerAddressProvince) {
        this.dangerAddressProvince = dangerAddressProvince == null ? null : dangerAddressProvince.trim();
    }

    public String getDangerAddressCity() {
        return dangerAddressCity;
    }

    public void setDangerAddressCity(String dangerAddressCity) {
        this.dangerAddressCity = dangerAddressCity == null ? null : dangerAddressCity.trim();
    }

    public String getDetailAddress() {
        return detailAddress;
    }

    public void setDetailAddress(String detailAddress) {
        this.detailAddress = detailAddress == null ? null : detailAddress.trim();
    }

    public String getRoadDirection() {
        return roadDirection;
    }

    public void setRoadDirection(String roadDirection) {
        this.roadDirection = roadDirection == null ? null : roadDirection.trim();
    }

    public Date getDangerDate() {
        return dangerDate;
    }

    public void setDangerDate(Date dangerDate) {
        this.dangerDate = dangerDate;
    }

    public String getDangerType() {
        return dangerType;
    }

    public void setDangerType(String dangerType) {
        this.dangerType = dangerType == null ? null : dangerType.trim();
    }

    public String getCaseStatus() {
        return caseStatus;
    }

    public void setCaseStatus(String caseStatus) {
        this.caseStatus = caseStatus == null ? null : caseStatus.trim();
    }

    public Integer getWarrantyId() {
        return warrantyId;
    }

    public void setWarrantyId(Integer warrantyId) {
        this.warrantyId = warrantyId;
    }

    public Integer getJieanId() {
        return jieanId;
    }

    public void setJieanId(Integer jieanId) {
        this.jieanId = jieanId;
    }

    public Integer getKancaId() {
        return kancaId;
    }

    public void setKancaId(Integer kancaId) {
        this.kancaId = kancaId;
    }

    public Integer getDingsunId() {
        return dingsunId;
    }

    public void setDingsunId(Integer dingsunId) {
        this.dingsunId = dingsunId;
    }

    public Integer getHesunId() {
        return hesunId;
    }

    public void setHesunId(Integer hesunId) {
        this.hesunId = hesunId;
    }

    public Integer getLisuanId() {
        return lisuanId;
    }

    public void setLisuanId(Integer lisuanId) {
        this.lisuanId = lisuanId;
    }

    public Integer getHepeiId() {
        return hepeiId;
    }

    public void setHepeiId(Integer hepeiId) {
        this.hepeiId = hepeiId;
    }

    public Integer getLipeiId() {
        return lipeiId;
    }

    public void setLipeiId(Integer lipeiId) {
        this.lipeiId = lipeiId;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}