package com.redoop.science.controller;


import com.redoop.science.entity.SysDept;
import com.redoop.science.entity.SysPermission;
import com.redoop.science.service.ISysPermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author Alan
 * @since 2018-11-05
 */
@Controller
@RequestMapping("/sys/permission")
public class SysPermissionController {

    @Autowired
    ISysPermissionService sysPermissionService;

    @GetMapping("/list")
    public String index(Map map){
        List<SysPermission> permissionList = sysPermissionService.list(null);
        map.put("permissionList",permissionList);
        return "/sys/permission";
    }

}
