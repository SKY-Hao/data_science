package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.RealDb;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;


/**
 * <p>
 * 实体数据源库 前端控制器
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */
@Controller
@RequestMapping("/real-db")
public class RealDbController {
    @Autowired
    private IRealDbService realDbService;

    /**
     * 数据源列表分类
     * @param model
     * @return
     */
    @GetMapping
    public ModelAndView index(Model model,Page page){
      /*  LambdaQueryWrapper<RealDb> wrapper = new LambdaQueryWrapper<>();
        //按照数据库种类分类
        wrapper.groupBy(RealDb::getDbType);
        List<RealDb> list = realDbService.list(wrapper);
        model.addAttribute("list", list);*/
        LambdaQueryWrapper<RealDb> wrapper = new LambdaQueryWrapper<>();
//        IPage<VirtualTables> page = new Page<>();
        IPage<RealDb> pages = realDbService.page(page,null);
        model.addAttribute("list", pages.getRecords());
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());

        return new ModelAndView("/realDb/index");
    }






    /**
     * 去添加(修改)数据源
     * @param id
     * @param model
     * @return
     */
    @RequestMapping(value = "/form/{id}", method = RequestMethod.GET)
    public String form(@PathVariable String id, Model model) {
        //id不为null则修改
        if(id != null){
            RealDb realDb = realDbService.findById(id);
            model.addAttribute("form", realDb);
        }
        return "/realDb/form";
    }



    @PostMapping("/save")
    public String save(@RequestBody RealDb realDb, HttpSession session){

        realDbService.save(realDb);

        System.out.println("保存后的信息==="+realDb.toString());

        session.setAttribute("message","<script>toastr.success(\\\"数据源保存成功\\\")</script>");
        return "/real-db";
    }

    /*@PostMapping("/save")
    public Result<String> save(RealDb realDb){
        if (realDbService.save(realDb)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }*/
    @PostMapping("/update")
    public Result<String> update(RealDb realDb){
        if (realDbService.updateById(realDb)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/delete")
    public Result<String> delete(Long id){
        if (realDbService.removeById(id)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

}
