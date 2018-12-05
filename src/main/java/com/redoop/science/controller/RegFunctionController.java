package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.RegFunction;
import com.redoop.science.entity.SysPermission;
import com.redoop.science.entity.SysUserDetails;
import com.redoop.science.service.IRegFunctionService;
import com.redoop.science.service.ISysPermissionService;
import com.redoop.science.service.ISysRoleFunService;
import com.redoop.science.utils.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 注册函数 前端控制器
 * </p>
 *
 * @author Alan
 * @since 2018-10-16
 */
@Controller
@RequestMapping("/function")
public class RegFunctionController {
    Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private IRegFunctionService regFunctionService;

    @Autowired
    ISysPermissionService sysPermissionService;

    @Autowired
    ISysRoleFunService roleFunService;

    @GetMapping("/{num}")
    public ModelAndView index(Model model, @PathVariable Long num, HttpServletRequest request) {

        Integer id = SessionUtils.getUserId(request);

        Page<RegFunction> page = new Page<>();
        page.setSize(11L);
        page.setCurrent(num);
        page.setDesc("ID");

        Map<String, Object> params = new HashMap();
        params.put("id", id);

        IPage<RegFunction> pages = regFunctionService.pageList(page, params);
        List<SysPermission> permissionList = sysPermissionService.findByPermission(SessionUtils.getUserId(request));
        model.addAttribute("permissionList", permissionList);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        model.addAttribute("items", pages.getRecords());
        // model.addAttribute("activeType", 6);
        model.addAttribute("pageNum", num);
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());
        return new ModelAndView("/function/index");
    }


    @RequestMapping("/lists")
    @ResponseBody
    public List<Map<String, Object>> list() {
        //函数树
        List<Map<String, Object>> funZList = new ArrayList<>();
        Map<String, Object> fMap = new HashMap<>();
        fMap.put("pId", 0);
        fMap.put("name", "函数库");
        fMap.put("icon", "/img/icon/db.png");
        fMap.put("id", 1);
        funZList.add(fMap);
        List<RegFunction> regFunctionList = regFunctionService.list(null);
        for (RegFunction regFunction : regFunctionList) {
            Map<String, Object> fMap2 = new HashMap<>();
            fMap2.put("pId", 1);
            fMap2.put("name", regFunction.getName());
            fMap2.put("icon", "/img/icon/table.png");
            fMap2.put("id", regFunction.getId());
            funZList.add(fMap2);
        }
        return funZList;
    }

    @GetMapping("/edit/{id}")
    public ModelAndView edit(Model model, @PathVariable(value = "id") String id, HttpServletRequest request) {
        List<SysPermission> permissionList = sysPermissionService.findByPermission(SessionUtils.getUserId(request));
        model.addAttribute("permissionList", permissionList);
        RegFunction regFunction = regFunctionService.getById(id);
        if (regFunction != null) {
            model.addAttribute("virtual", regFunction);
            //返回值
            model.addAttribute("nickName", SessionUtils.getUserNickName(request));
            return new ModelAndView("/function/edit");
        } else {
            model.addAttribute("message", "不存在查询信息");
            return new ModelAndView("/error/404");
        }

    }

    @GetMapping("/add")
    public ModelAndView add(Model model, HttpServletRequest request) {
        List<SysPermission> permissionList = sysPermissionService.findByPermission(SessionUtils.getUserId(request));
        model.addAttribute("permissionList", permissionList);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        return new ModelAndView("/function/edit");
    }

    @RequestMapping("/delete/{id}")
    @ResponseBody
    public Result<String> delete(@PathVariable Integer id) {
        if (regFunctionService.removeById(id)) {
            roleFunService.deleteFunId(id);
            return new Result<String>(ResultEnum.SECCUSS);
        } else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

    @PostMapping("/save")
    @ResponseBody
    public Result<String> save(@RequestParam(name = "id", required = false) Long id,
                               @RequestParam(name = "code") String code,
                               @RequestParam(value = "name") String name,
                               HttpServletRequest request) {
        RegFunction regFunction = null;
        SysUserDetails loginUser = SessionUtils.getUser(request);

        QueryWrapper<RegFunction> wrapper = new QueryWrapper<>();
        wrapper.eq("NAME", name);
        RegFunction regFunctionCheckName = regFunctionService.getOne(wrapper);
        if (regFunctionCheckName != null) {
            //名称重复
            return new Result<String>(ResultEnum.REPEAT);
        }

        if(id!=null){
            regFunction = regFunctionService.getById(id);
        }else{
            RegFunction analy  = regFunctionService.getOne(wrapper);
            if(analy!=null){
                return new Result(ResultEnum.REPEAT);
            }else{
                regFunction = new RegFunction();
                regFunction.setCreateDate(LocalDateTime.now());
                regFunction.setCreatorId(loginUser.getId());
                regFunction.setCreatorName(loginUser.getNickname());
            }
        }

        regFunction = new RegFunction();
        regFunction.setCreateDate(LocalDateTime.now());
        regFunction.setCreatorId(loginUser.getId());
        regFunction.setCreatorName(loginUser.getNickname());
        regFunction.setCode(code);
        regFunction.setName(name);
        if (regFunctionService.saveOrUpdate(regFunction)) {
            //注册函数
            return new Result<String>(ResultEnum.SECCUSS);
        } else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
}
