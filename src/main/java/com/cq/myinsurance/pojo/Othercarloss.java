package com.cq.myinsurance.pojo;

import java.util.Date;

public class Othercarloss {
    private Integer otherCarlossId;

    private Integer lossId;

    private String carlossName;

    private Integer carlossNumber;

    private Integer carlossPrice;

    private String carlossFix;

    private String carlossImg;

    private Integer sumPrice;

    private Integer caseId;

    private Date createtime;

    public Integer getOtherCarlossId() {
        return otherCarlossId;
    }

    public void setOtherCarlossId(Integer otherCarlossId) {
        this.otherCarlossId = otherCarlossId;
    }

    public Integer getLossId() {
        return lossId;
    }

    public void setLossId(Integer lossId) {
        this.lossId = lossId;
    }

    public String getCarlossName() {
        return carlossName;
    }

    public void setCarlossName(String carlossName) {
        this.carlossName = carlossName == null ? null : carlossName.trim();
    }

    public Integer getCarlossNumber() {
        return carlossNumber;
    }

    public void setCarlossNumber(Integer carlossNumber) {
        this.carlossNumber = carlossNumber;
    }

    public Integer getCarlossPrice() {
        return carlossPrice;
    }

    public void setCarlossPrice(Integer carlossPrice) {
        this.carlossPrice = carlossPrice;
    }

    public String getCarlossFix() {
        return carlossFix;
    }

    public void setCarlossFix(String carlossFix) {
        this.carlossFix = carlossFix == null ? null : carlossFix.trim();
    }

    public String getCarlossImg() {
        return carlossImg;
    }

    public void setCarlossImg(String carlossImg) {
        this.carlossImg = carlossImg == null ? null : carlossImg.trim();
    }

    public Integer getSumPrice() {
        return sumPrice;
    }

    public void setSumPrice(Integer sumPrice) {
        this.sumPrice = sumPrice;
    }

    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}