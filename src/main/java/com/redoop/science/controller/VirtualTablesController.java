package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.service.IVirtualTablesService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * <p>
 * 虚拟表 前端控制器
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */
@Controller
@RequestMapping("/virtual")
public class VirtualTablesController {
    @Autowired
    private IVirtualTablesService virtualTablesService;
    @Autowired
    private IRealDbService realDbService;

    /**
     * 数据源列表分类
     * @param model
     * @return
     */
    @GetMapping
    public ModelAndView index(Model model,Page page){
        LambdaQueryWrapper<VirtualTables> wrapper = new LambdaQueryWrapper<>();
//        IPage<VirtualTables> page = new Page<>();
        IPage<VirtualTables> pages = virtualTablesService.page(page,null);
        model.addAttribute("items", pages.getRecords());
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());
        return new ModelAndView("/select/index");
    }
    @GetMapping("/edit")
    public ModelAndView edit(Model model,Long id){
    //  获取ztree json
    // 获取真实库ztreejson

    // 获取虚拟库ztreejson

    // 判断id是否为空，若为空直接返回页面不做操作，否则查询虚拟表编辑

        return new ModelAndView("/select/edit");
    }

    @PostMapping("/save")
    public Result<String> save(VirtualTables virtualTables){
        if (virtualTablesService.save(virtualTables)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/update")
    public Result<String> update(VirtualTables virtualTables){
        if (virtualTablesService.updateById(virtualTables)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/delete")
    public Result<String> delete(Long id){
        if (virtualTablesService.removeById(id)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
}
