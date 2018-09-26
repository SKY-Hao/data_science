package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.Analysis;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.service.IAnalysisService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import com.redoop.science.utils.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * <p>
 *  分析 前端控制器
 * </p>
 *
 * @author admin
 * @since 2018-09-26
 */
@Controller
@RequestMapping("/analysis")
public class AnalysisController {
    @Autowired
    private IAnalysisService analysisService;


    /**
     * 分析列表List
     * @param model
     * @param num
     * @param request
     * @return
     */
    @GetMapping("/{num}")
    public ModelAndView index(Model model, @PathVariable Long num, HttpServletRequest request){
        Page<Analysis> page = new Page<>();
        page.setSize(11L);
        page.setCurrent(num);
        page.setDesc("ID");
        IPage<Analysis> pages = analysisService.page(page,null);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        model.addAttribute("list", pages.getRecords());
        model.addAttribute("activeType", 3);
        model.addAttribute("pageNum", num);
        model.addAttribute("analysis", new Analysis());
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());
        return new ModelAndView("/analysis/index");
    }




    @GetMapping("/add")
    public ModelAndView add(Model model,HttpServletRequest request){

        //getZtree(model);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        return new ModelAndView("/analysis/update");
    }


    @PostMapping("/save")
    public Result<String> save(Analysis analysis){
        if (analysisService.save(analysis)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/update")
    public Result<String> update(Analysis analysis){
        if (analysisService.updateById(analysis)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

    /**
     * 删除
     * @param id
     * @return
     */
    @RequestMapping("/delete/{id}")
    public String delete(@PathVariable(value = "id")  Integer id){
        if (id!=null){
            analysisService.removeById(id);
            return "redirect:/analysis/1";
        } else {
            return String.valueOf(new Result<String>(ResultEnum.FAIL));
        }
    }
}
