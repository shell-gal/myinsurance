package com.cq.myinsurance.pojo.vo;

import java.util.List;
import java.util.Set;

public class Authorization {
    private List<String> roles;

    private List<String> rights;


    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public List<String> getRights() {
        return rights;
    }

    public void setRights(List<String> rights) {
        this.rights = rights;
    }
}
