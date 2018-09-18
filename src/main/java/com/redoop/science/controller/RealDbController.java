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
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;


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
      /* LambdaQueryWrapper<RealDb> wrappers= new LambdaQueryWrapper<>();
        //按照数据库种类分类
        wrappers.groupBy(RealDb::getDbType);
        List<RealDb> list = realDbService.list(wrappers);
        model.addAttribute("list", list);*/

        LambdaQueryWrapper<RealDb> wrapper = new LambdaQueryWrapper<>();

        // IPage<VirtualTables> page = new Page<>();

        IPage<RealDb> pages = realDbService.page(page,null);
        //列表
        model.addAttribute("list", pages.getRecords());
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());

        return new ModelAndView("/realDb/index");
    }

    /**
     * 去添加数据源
     * @param model
     * @return
     */
    @RequestMapping(value = "/toAdd", method = RequestMethod.GET)
    public ModelAndView form( Model model) {
        model.addAttribute("realDb", new RealDb());
        return new ModelAndView("/realDb/add");
    }


    /**
     * 保存
     * @param realDb
     * @return
     */
    @PostMapping("/save")
    public String save(@Validated RealDb realDb ,BindingResult rs){

        if(rs.hasErrors()){
            for (ObjectError error : rs.getAllErrors()) {
                System.out.println("错误信息>>>>>>>"+error.getDefaultMessage());
            }
            return "/realDb/add";
        }
        realDbService.saveForm(realDb);
        System.out.println("保存后的信息>>>>>>>"+realDb.toString());
        return "redirect:/real-db";
    }

    /**
     * 去修改界面
     * @param model
     * @param id
     * @return
     */
    @RequestMapping(value = "/toEdit")
    public ModelAndView toEdit(Model model,String id) {

        RealDb realDb = realDbService.getById(id);
        model.addAttribute("realDb", realDb);

        return new ModelAndView("/realDb/update");
    }


    /**
     * 修改提交
     * @param realDb
     * @return
     */
    @PostMapping("/update")
    public String  update(RealDb realDb){

        realDbService.updateById(realDb);
        System.out.println("修改完后的信息>>>>>>>>>"+realDb);
        return "redirect:/real-db";

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
