package com.cq.myinsurance.service.impls.userimpls;

import com.cq.myinsurance.dao.RightMapper;
import com.cq.myinsurance.pojo.Right;
import com.cq.myinsurance.pojo.Role;
import com.cq.myinsurance.service.RightService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RightServiceImpls implements RightService {

    @Resource
    RightMapper rightMapper;

//    查询权限名称
    @Override
    public List<String> loadrights() {
        List<String> rights = rightMapper.selectRights();
        if (CollectionUtils.isEmpty(rights))
            return null;
        return rights;
    }

//    查询一个权限
    @Override
    public Right loadone(Integer rightid) {
        Right right = rightMapper.selectByPrimaryKey(rightid);
        if (right==null){
            return null;
        }
        return right;
}

//分页查询权限
    @Override
    public PageInfo loadroles(Integer indexpage, Integer pagesize) {
        if (indexpage==null)
            indexpage=1;
        if (pagesize==null)
            pagesize=10;
        PageHelper.startPage(indexpage,pagesize);
        List<Right> rightList = rightMapper.selectallRights();
        PageInfo pageInfo=new PageInfo(rightList);
        if (pageInfo==null){
            return null;
        }
        return pageInfo;
    }


//    修改权限
    @Override
    public boolean updateright(Right right) {
        if (right!=null){
            int i = rightMapper.updateByPrimaryKeySelective(right);
            if (i>0){
                return true;
            }
        }
        return false;
    }

//    增加权限
    @Override
    public boolean addright(Right right) {
        if (right!=null){
            int i = rightMapper.insertSelective(right);
            if (i>0){
                return true;
            }
        }
        return false;
    }

//    删除权限
    @Override
    public boolean deleteright(Integer rightid) {
        if (rightid!=null){
            int i = rightMapper.deleteByPrimaryKey(rightid);
            if (i>0){
                return true;
            }
        }
        return false;
    }
}
