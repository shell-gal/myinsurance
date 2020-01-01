package com.cq.myinsurance.controller.dispatchManager;

import com.cq.myinsurance.pojo.User;
import com.cq.myinsurance.service.DispatchService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/DispatchManagement")
public class DispatchController {

    @Resource
    DispatchService dispatchService;


//
    @RequestMapping("/Dispatch")
    public String Dispatch(String rolename, HttpServletRequest request){
        request.setAttribute("rolename",rolename);
        return "pages/dispatchmentmanager/Dispatch";
    }

//    查询所有已报案的案件(未勘察的案件)
    @RequestMapping("/queryAllReported")
    @ResponseBody
    public PageInfo queryAllReported(@RequestBody Map<String,Object> map){
        PageInfo pageInfo = dispatchService.loadCasebyStatus(map);
        return pageInfo;
    }


//    获取勘察人员
    @RequestMapping("/getEmployeeOfType")
    @ResponseBody
    public List<User> getEmployeeOfType(String rolename){
        List<User> userList = dispatchService.loadKanca(rolename);
        System.out.println(userList);
        return userList;
    }

//    调度
    @RequestMapping("/diaodu")
    @ResponseBody
    public String diaodu(@RequestBody Map<String,Object> map){
        System.out.println(map.get("chakan"));
        boolean b = dispatchService.diaodu(map);
        if (b){
            return "true";
        }
        return "false";
    }
}
