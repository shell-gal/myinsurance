package com.cq.myinsurance.pojo.vo;


//加载用户时，判断条件
public class UserLoad {
    private Integer indexpage;
    private  Integer pagesize;
    private    String userName;
    private  Integer userId;
    private  String depart;
    private String param;
    private Integer flag;

    public String getParam() {
        return param;
    }

    public void setParam(String param) {
        this.param = param;
    }

    public Integer getFlag() {
        return flag;
    }

    public void setFlag(Integer flag) {
        this.flag = flag;
    }

    public Integer getIndexpage() {
        return indexpage;
    }

    public void setIndexpage(Integer indexpage) {
        this.indexpage = indexpage;
    }

    public Integer getPagesize() {
        return pagesize;
    }

    public void setPagesize(Integer pagesize) {
        this.pagesize = pagesize;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getDepart() {
        return depart;
    }

    public void setDepart(String depart) {
        this.depart = depart;
    }
}
