package com.cq.myinsurance.pojo;

import java.util.Date;

public class Peopleloss {
    private Integer peoplelossId;

    private Integer lossId;

    private String medicalPro;

    private String medicalAddress;

    private Integer medicalPrice;

    private Integer sumPrice;

    private Integer caseId;

    private Date createtime;

    public Integer getPeoplelossId() {
        return peoplelossId;
    }

    public void setPeoplelossId(Integer peoplelossId) {
        this.peoplelossId = peoplelossId;
    }

    public Integer getLossId() {
        return lossId;
    }

    public void setLossId(Integer lossId) {
        this.lossId = lossId;
    }

    public String getMedicalPro() {
        return medicalPro;
    }

    public void setMedicalPro(String medicalPro) {
        this.medicalPro = medicalPro == null ? null : medicalPro.trim();
    }

    public String getMedicalAddress() {
        return medicalAddress;
    }

    public void setMedicalAddress(String medicalAddress) {
        this.medicalAddress = medicalAddress == null ? null : medicalAddress.trim();
    }

    public Integer getMedicalPrice() {
        return medicalPrice;
    }

    public void setMedicalPrice(Integer medicalPrice) {
        this.medicalPrice = medicalPrice;
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