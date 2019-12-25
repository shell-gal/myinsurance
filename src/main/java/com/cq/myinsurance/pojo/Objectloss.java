package com.cq.myinsurance.pojo;

import java.util.Date;

public class Objectloss {
    private Integer objectlossId;

    private Integer lossId;

    private String objectlossName;

    private Integer objectlossNumber;

    private Integer objectlossPrice;

    private String objectlossDepart;

    private String objectlossImg;

    private Integer caseId;

    private Integer sumPrice;

    private Date createtime;

    public Integer getObjectlossId() {
        return objectlossId;
    }

    public void setObjectlossId(Integer objectlossId) {
        this.objectlossId = objectlossId;
    }

    public Integer getLossId() {
        return lossId;
    }

    public void setLossId(Integer lossId) {
        this.lossId = lossId;
    }

    public String getObjectlossName() {
        return objectlossName;
    }

    public void setObjectlossName(String objectlossName) {
        this.objectlossName = objectlossName == null ? null : objectlossName.trim();
    }

    public Integer getObjectlossNumber() {
        return objectlossNumber;
    }

    public void setObjectlossNumber(Integer objectlossNumber) {
        this.objectlossNumber = objectlossNumber;
    }

    public Integer getObjectlossPrice() {
        return objectlossPrice;
    }

    public void setObjectlossPrice(Integer objectlossPrice) {
        this.objectlossPrice = objectlossPrice;
    }

    public String getObjectlossDepart() {
        return objectlossDepart;
    }

    public void setObjectlossDepart(String objectlossDepart) {
        this.objectlossDepart = objectlossDepart == null ? null : objectlossDepart.trim();
    }

    public String getObjectlossImg() {
        return objectlossImg;
    }

    public void setObjectlossImg(String objectlossImg) {
        this.objectlossImg = objectlossImg == null ? null : objectlossImg.trim();
    }

    public Integer getCaseId() {
        return caseId;
    }

    public void setCaseId(Integer caseId) {
        this.caseId = caseId;
    }

    public Integer getSumPrice() {
        return sumPrice;
    }

    public void setSumPrice(Integer sumPrice) {
        this.sumPrice = sumPrice;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}