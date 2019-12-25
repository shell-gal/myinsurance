package com.cq.myinsurance.dao;

import java.util.List;


public interface AuthorizationMapper {
    List<String> selectRolesByuserid(Integer userid);

    List<String> selectRightByuserid(Integer userid);
}
