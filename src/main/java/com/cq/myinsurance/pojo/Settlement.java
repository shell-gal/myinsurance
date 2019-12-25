package com.cq.myinsurance.pojo;

import java.util.Date;

public class Settlement {
    private Integer settlementId;

    private Integer otherCarlossMoney;

    private Integer selfCarlossMoney;

    private Integer objectlossMoney;

    private Integer peoplelossMoney;

    private Integer settlementMoney;

    private String recognizeeName;

    private String recognizeeAccount;

    private Integer caseId;

    private Date createtime;

    public Integer getSettlementId() {
        return settlementId;
    }

    public void setSettlementId(Integer settlementId) {
        this.settlementId = settlementId;
    }

    public Integer getOtherCarlossMoney() {
        return otherCarlossMoney;
    }

    public void setOtherCarlossMoney(Integer otherCarlossMoney) {
        this.otherCarlossMoney = otherCarlossMoney;
    }

    public Integer getSelfCarlossMoney() {
        return selfCarlossMoney;
    }

    public void setSelfCarlossMoney(Integer selfCarlossMoney) {
        this.selfCarlossMoney = selfCarlossMoney;
    }

    public Integer getObjectlossMoney() {
        return objectlossMoney;
    }

    public void setObjectlossMoney(Integer objectlossMoney) {
        this.objectlossMoney = objectlossMoney;
    }

    public Integer getPeoplelossMoney() {
        return peoplelossMoney;
    }

    public void setPeoplelossMoney(Integer peoplelossMoney) {
        this.peoplelossMoney = peoplelossMoney;
    }

    public Integer getSettlementMoney() {
        return settlementMoney;
    }

    public void setSettlementMoney(Integer settlementMoney) {
        this.settlementMoney = settlementMoney;
    }

    public String getRecognizeeName() {
        return recognizeeName;
    }

    public void setRecognizeeName(String recognizeeName) {
        this.recognizeeName = recognizeeName == null ? null : recognizeeName.trim();
    }

    public String getRecognizeeAccount() {
        return recognizeeAccount;
    }

    public void setRecognizeeAccount(String recognizeeAccount) {
        this.recognizeeAccount = recognizeeAccount == null ? null : recognizeeAccount.trim();
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