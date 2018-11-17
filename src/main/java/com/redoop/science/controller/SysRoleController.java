package com.redoop.science.controller;

import com.redoop.science.entity.*;
import com.redoop.science.service.*;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import com.redoop.science.utils.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.sound.midi.Soundbank;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * <p>
 * 系统权限 前端控制器
 * </p>
 *
 * @author Alan
 * @since 2018-10-29
 */
@Controller
@RequestMapping("/sys/role")
public class SysRoleController {


    @Autowired
    ISysRoleService roleService;

    @Autowired
    ISysRolePermissionService rolePermissionService;

    @Autowired
    ISysRoleDeptService roleDeptService;

    @Autowired
    ISysDeptService sysDeptServicel;

    @Autowired
    ISysPermissionService sysPermissionService;

    /**
     * 角色列表
     */
    @GetMapping("/list")
    public String index(Map map,HttpServletRequest request) {

        List<SysRole> list = roleService.list(null);
        List<SysPermission> permissionList = sysPermissionService.getTpyeList();
        map.put("page", list);
        map.put("permissionList",permissionList);
        map.put("nickName", SessionUtils.getUserNickName(request));

        return "/sys/role";
    }

    /**
     * 角色列表
     */
    @RequestMapping("/select")
    @ResponseBody
    public Map select(){
        List<SysRole> list = roleService.list(null);
        Map<String, Object> map = new HashMap<>();
        map.put("list",list);
        return map;
    }



    @RequestMapping("/lists")
    @ResponseBody
    public Map<String, Object> lists() {

        List<SysRole> pages = roleService.list(null);

        for (SysRole sysRole : pages) {
            SysDept sysDept = sysDeptServicel.getById(sysRole.getDeptId());
            if (sysDept != null) {
                sysRole.setDeptName(sysDept.getName());
            }
        }
        Map<String, Object> page = new HashMap<>();
        page.put("currPage", 1);
        page.put("totalPage", 100);
        page.put("pageSize", 100);
        page.put("totalCount", 100);
        page.put("list", pages);


        Map<String, Object> map = new HashMap<>();
        map.put("page", page);

        return map;
    }


    /**
     * 角色信息
     */
    @RequestMapping("/info/{id}")
    @ResponseBody
    public Map info(@PathVariable("id") Long id) {
        SysRole role = roleService.getById(id);

        //查询角色对应的菜单

        List<Long> permissionIdList = rolePermissionService.queryMenuIdList(id);
        role.setPermissionIdList(permissionIdList);
        System.out.println("查询角色对应的菜单>>>>>>" + permissionIdList);

        //查询角色对应的部门
        List<Long> deptIdList = roleDeptService.queryDeptIdList(new Long[]{id});
        role.setDeptIdList(deptIdList);
        System.out.println("查询角色对应的部门>>>>>>>>" + deptIdList);
        Map map = new HashMap();
        map.put("role", role);

        return map;
    }


    /**
     * 保存角色
     */
    @RequestMapping("/save")
    @ResponseBody
    public Result save(@RequestBody SysRole role) {

        role.setCreateTime(new Date());
        System.out.println("role=========" + role);
        if (roleService.save(role)) {

            //保存角色与部门关系
            List<SysRoleDept> list = new ArrayList<>(role.getDeptIdList().size());
            for (Long deptId : role.getDeptIdList()) {
                SysRoleDept sysRoleDeptEntity = new SysRoleDept();
                sysRoleDeptEntity.setDeptId(deptId.intValue());
                sysRoleDeptEntity.setRoleId(role.getId());

                list.add(sysRoleDeptEntity);
            }
            roleDeptService.saveBatch(list);


            // 保存角色与菜单关系
            List<SysRolePermission> permissionList = new ArrayList<>(role.getPermissionIdList().size());
            for (Long permissionId : role.getPermissionIdList()) {
                SysRolePermission sysRolePermission = new SysRolePermission();
                sysRolePermission.setPermissionId(permissionId.intValue());
                sysRolePermission.setRoleId(role.getId());
                permissionList.add(sysRolePermission);
            }
            rolePermissionService.saveBatch(permissionList);

            return new Result<String>(ResultEnum.SECCUSS);
        } else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

    /**
     * 修改角色
     */
    @RequestMapping("/update")
    @ResponseBody
    public Result update(@RequestBody SysRole role) {

        if (roleService.saveOrUpdate(role)) {

            Long  a =  role.getId().longValue();


            roleDeptService.deleteBatch(new Long[]{a});
            //保存角色与部门关系
            List<SysRoleDept> list = new ArrayList<>(role.getDeptIdList().size());
            for (Long deptId : role.getDeptIdList()) {
                SysRoleDept sysRoleDeptEntity = new SysRoleDept();
                sysRoleDeptEntity.setDeptId(deptId.intValue());
                sysRoleDeptEntity.setRoleId(role.getId());

                list.add(sysRoleDeptEntity);
            }
            roleDeptService.saveBatch(list);


            rolePermissionService.deleteBatch(new Long[]{a});
            // 保存角色与菜单关系
            List<SysRolePermission> permissionList = new ArrayList<>(role.getPermissionIdList().size());
            for (Long permissionId : role.getPermissionIdList()) {
                SysRolePermission sysRolePermission = new SysRolePermission();
                sysRolePermission.setPermissionId(permissionId.intValue());
                sysRolePermission.setRoleId(role.getId());
                permissionList.add(sysRolePermission);
            }
            rolePermissionService.saveBatch(permissionList);



            return new Result<String>(ResultEnum.SECCUSS);
        } else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }


    /**
     * 删除角色
     */
    @RequestMapping("/delete")
    @ResponseBody
    public Result delete(@RequestBody Long[] roleIds){


        if (roleService.removeByIds(Arrays.asList(roleIds))){

            //删除角色与菜单关联
            rolePermissionService.deleteBatch(roleIds);

            //删除角色与部门关联
            roleDeptService.deleteBatch(roleIds);

            //删除角色与用户关联
        //    sysUserRoleService.deleteBatch(roleIds);

            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }






}
