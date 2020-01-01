package com.cq.myinsurance.pojo.vo;

import java.io.Serializable;
import java.util.Date;

/**
 * @Message:
 * @Author：Cheirmin
 * @Date: 2019/12/27 11:07
 * @Version 1.0
 */
public class CaseVo implements Serializable {
    //报案编号
    private Integer caseId;
    //报案人
    private String reporterName;
    //车牌号
    private String carNumber;
    //联系电话
    private String reporterPhone;
    //报案时间
    private Date dangerDate;
    //出险地点
    private String dangerAddress;
    //出险原因
    private String dangerCause;
    //路段方向
    private String roadDirection;
    //事故类型
    private String dangerType;
    //案件状态
    private String caseStatus;

    public String getRoadDirection() {
        return roadDirection;
    }

    public void setRoadDirection(String roadDirection) {
        this.roadDirection = roadDirection;
    }

    public String getCarNumber() {
        return carNumber;
    }

    public void setCarNumber(String carNumber) {
        this.carNumber = carNumber;
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
        this.reporterName = reporterName;
    }

    public String getReporterPhone() {
        return reporterPhone;
    }

    public void setReporterPhone(String reporterPhone) {
        this.reporterPhone = reporterPhone;
    }

    public Date getDangerDate() {
        return dangerDate;
    }

    public void setDangerDate(Date dangerDate) {
        this.dangerDate = dangerDate;
    }

    public String getDangerAddress() {
        return dangerAddress;
    }

    public void setDangerAddress(String province,String city,String dangerAddress) {
        this.dangerAddress = province.concat(city).concat(dangerAddress);
    }

    public void setDangerAddress(String dangerAddress) {
        this.dangerAddress = dangerAddress;
    }

    public String getDangerCause() {
        return dangerCause;
    }

    public void setDangerCause(String dangerCause) {
        this.dangerCause = dangerCause;
    }

    public String getDangerType() {
        return dangerType;
    }

    public void setDangerType(String dangerType) {
        this.dangerType = dangerType;
    }

    public String getCaseStatus() {
        return caseStatus;
    }

    public void setCaseStatus(String caseStatus) {
        this.caseStatus = caseStatus;
    }
}
