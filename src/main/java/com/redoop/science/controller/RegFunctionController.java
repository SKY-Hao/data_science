package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.RegFunction;
import com.redoop.science.entity.SysUser;
import com.redoop.science.service.IRegFunctionService;
import com.redoop.science.utils.*;
import okhttp3.HttpUrl;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;

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
    @GetMapping("/{num}")
    public ModelAndView index(Model model, @PathVariable Long num, HttpServletRequest request) {
        Page<RegFunction> page = new Page<>();
        page.setSize(11L);
        page.setCurrent(num);
        page.setDesc("ID");
        IPage<RegFunction> pages = regFunctionService.page(page, null);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        model.addAttribute("items", pages.getRecords());
        model.addAttribute("activeType", 6);
        model.addAttribute("pageNum", num);
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());
        return new ModelAndView("/function/index");
    }

    @GetMapping("/edit/{id}")
    public ModelAndView edit(Model model, @PathVariable(value = "id") String id, HttpServletRequest request) {

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

        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        return new ModelAndView("/function/edit");
    }

    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public Result<String> delete(@PathVariable Integer id) {
        if (regFunctionService.removeById(id)) {
            return new Result<String>(ResultEnum.SECCUSS);
        } else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

   @PostMapping("/save")
   @ResponseBody
   public Result<String> save(@RequestParam(name = "id",required = false) Long id,
                              @RequestParam(name = "code") String code,
                              @RequestParam(value = "name") String  name,
                              HttpServletRequest request) {
       RegFunction regFunction = null;
       SysUser loginUser = SessionUtils.getUser(request);

       QueryWrapper<RegFunction> wrapper = new QueryWrapper<>();
       wrapper.eq("NAME", name);
       RegFunction regFunctionCheckName = regFunctionService.getOne(wrapper);
       if (regFunctionCheckName != null) {
           //名称重复
           return new Result<String>(ResultEnum.REPEAT);
       }
       regFunction  = new RegFunction();
       regFunction.setCreateDate(LocalDateTime.now());
       regFunction.setCreatorId(loginUser.getId());
       regFunction.setCreatorName(loginUser.getNickName());
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
