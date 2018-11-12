package com.redoop.science.controller;


import com.redoop.science.entity.SysDeptRole;
import com.redoop.science.service.ISysDeptRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author admin
 * @since 2018年11月6日15:27:30
 *
 *   部门---角色Controller
 */
@Controller
@RequestMapping("/sys-dept-role")
public class SysDeptRoleController {

    @Autowired
    ISysDeptRoleService deptRoleService;

}
