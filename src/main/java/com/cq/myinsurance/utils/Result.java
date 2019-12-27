package com.cq.myinsurance.utils;

public class Result {
    private  Integer resultstatus;
    private String message;

    public Result() {
    }

    public Result(Integer resultstatus, String message) {
        this.resultstatus = resultstatus;
        this.message = message;
    }

    public Integer getResultstatus() {
        return resultstatus;
    }

    public void setResultstatus(Integer resultstatus) {
        this.resultstatus = resultstatus;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
