package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import com.sun.org.apache.xpath.internal.SourceTree;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;
import org.thymeleaf.spring5.context.SpringContextUtils;

import javax.sound.midi.Soundbank;
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
@RequestMapping("/real")
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
        LambdaQueryWrapper<RealDb> wrapper = new LambdaQueryWrapper<>();
        //IPage<VirtualTables> page = new Page<>();
        IPage<RealDb> pages = realDbService.page(page,null);
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
    public ModelAndView save(@Validated RealDb realDb , BindingResult rs,Model model ){

        if(rs.hasErrors()){
            for (ObjectError error : rs.getAllErrors()) {
                System.out.println(">>>>>>>>新增Real-db信息时-验证表单错误提示>>>>>>>"+error.getDefaultMessage());
            }
            return new ModelAndView("/realDb/add");
        }
        RealDb dataReal =  realDbService.findByNikeName(realDb.getNikeName());
        if(dataReal != null){
            model.addAttribute("hintMessage","数据源名已经存在");
            return new ModelAndView("/realDb/add");
        }else{
            realDbService.saveForm(realDb);
        }
        return new ModelAndView("redirect:/real");
    }

    /**
     * 去修改
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
    public ModelAndView  update(@Validated RealDb realDb ,BindingResult rs,Model model ){

        if(rs.hasErrors()){
            for (ObjectError error : rs.getAllErrors()) {
                System.out.println(">>>>>>>>修改Real-db信息提交时-验证表单错误提示>>>>>>>"+error.getDefaultMessage());
            }
            return new ModelAndView("/realDb/update");
        }
        //根据id查询之前的nikeName
        RealDb realDb1 = realDbService.getById(realDb.getId());
        //查数据源别名
        RealDb dataReal =  realDbService.findByNikeName(realDb.getNikeName());

       /* if(dataReal != null || realDb1.getNikeName() == realDb.getNikeName()){
            model.addAttribute("hintMessage","数据源名已经存在");
            return new ModelAndView("/realDb/update");
        }else{
            realDbService.updateById(realDb);
        }*/

       if(realDb.getNikeName().equals( realDb1.getNikeName()) || dataReal==null){
           realDbService.updateById(realDb);
       }else {
           model.addAttribute("hintMessage","数据源名已经存在");
           return new ModelAndView("/realDb/update");
       }

        return new ModelAndView("redirect:/real");
    }

    /**
     * 删除
     * @param id
     * @return
     */
    @RequestMapping("/delete")
    public String delete(Integer id){
        if (id!=null){
            realDbService.removeById(id);
            return "redirect:/real";
        } else {
            return String.valueOf(new Result<String>(ResultEnum.FAIL));
        }
    }


    /**
     * 查看库中的表信息
     * @param model
     * @return
     */
    @RequestMapping("/selectDatabase")
    @ResponseBody
    public List<RealDb> selectDatabase(Model model){

        List<RealDb> list =  realDbService.selectDatabase();
        model.addAttribute("list" ,list);

        return list;
    }

}
