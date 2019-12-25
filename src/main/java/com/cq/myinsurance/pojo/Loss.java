package com.cq.myinsurance.pojo;

import java.util.Date;

public class Loss {
    private Integer lossId;

    private Integer caseId;

    private Date lossDate;

    private Integer lossMoney;

    private Integer objectlossMoney;

    private String objectlossImg;

    private String objectlossInvoiceImg;

    private Integer selfCarlossMoney;

    private String selfCarlossImg;

    private String selfCarlossInvoiceImg;

    private Integer otherCarlossMoney;

    private String otherCarlossImg;

    private String otherCarlossInvoiceImg;

    private Integer peoplelossMoney;

    private String peoplelossImg;

    private String peoplelossInvoiceImg;

    private Date createtime;

    public Integer getLossId() {
        return lossId;
    }

    public void setLossId(Integer lossId) {
        this.lossId = lossId;
    }

    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
    }

    public Date getLossDate() {
        return lossDate;
    }

    public void setLossDate(Date lossDate) {
        this.lossDate = lossDate;
    }

    public Integer getLossMoney() {
        return lossMoney;
    }

    public void setLossMoney(Integer lossMoney) {
        this.lossMoney = lossMoney;
    }

    public Integer getObjectlossMoney() {
        return objectlossMoney;
    }

    public void setObjectlossMoney(Integer objectlossMoney) {
        this.objectlossMoney = objectlossMoney;
    }

    public String getObjectlossImg() {
        return objectlossImg;
    }

    public void setObjectlossImg(String objectlossImg) {
        this.objectlossImg = objectlossImg == null ? null : objectlossImg.trim();
    }

    public String getObjectlossInvoiceImg() {
        return objectlossInvoiceImg;
    }

    public void setObjectlossInvoiceImg(String objectlossInvoiceImg) {
        this.objectlossInvoiceImg = objectlossInvoiceImg == null ? null : objectlossInvoiceImg.trim();
    }

    public Integer getSelfCarlossMoney() {
        return selfCarlossMoney;
    }

    public void setSelfCarlossMoney(Integer selfCarlossMoney) {
        this.selfCarlossMoney = selfCarlossMoney;
    }

    public String getSelfCarlossImg() {
        return selfCarlossImg;
    }

    public void setSelfCarlossImg(String selfCarlossImg) {
        this.selfCarlossImg = selfCarlossImg == null ? null : selfCarlossImg.trim();
    }

    public String getSelfCarlossInvoiceImg() {
        return selfCarlossInvoiceImg;
    }

    public void setSelfCarlossInvoiceImg(String selfCarlossInvoiceImg) {
        this.selfCarlossInvoiceImg = selfCarlossInvoiceImg == null ? null : selfCarlossInvoiceImg.trim();
    }

    public Integer getOtherCarlossMoney() {
        return otherCarlossMoney;
    }

    public void setOtherCarlossMoney(Integer otherCarlossMoney) {
        this.otherCarlossMoney = otherCarlossMoney;
    }

    public String getOtherCarlossImg() {
        return otherCarlossImg;
    }

    public void setOtherCarlossImg(String otherCarlossImg) {
        this.otherCarlossImg = otherCarlossImg == null ? null : otherCarlossImg.trim();
    }

    public String getOtherCarlossInvoiceImg() {
        return otherCarlossInvoiceImg;
    }

    public void setOtherCarlossInvoiceImg(String otherCarlossInvoiceImg) {
        this.otherCarlossInvoiceImg = otherCarlossInvoiceImg == null ? null : otherCarlossInvoiceImg.trim();
    }

    public Integer getPeoplelossMoney() {
        return peoplelossMoney;
    }

    public void setPeoplelossMoney(Integer peoplelossMoney) {
        this.peoplelossMoney = peoplelossMoney;
    }

    public String getPeoplelossImg() {
        return peoplelossImg;
    }

    public void setPeoplelossImg(String peoplelossImg) {
        this.peoplelossImg = peoplelossImg == null ? null : peoplelossImg.trim();
    }

    public String getPeoplelossInvoiceImg() {
        return peoplelossInvoiceImg;
    }

    public void setPeoplelossInvoiceImg(String peoplelossInvoiceImg) {
        this.peoplelossInvoiceImg = peoplelossInvoiceImg == null ? null : peoplelossInvoiceImg.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}