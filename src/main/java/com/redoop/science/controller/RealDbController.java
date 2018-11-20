package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.SysPermission;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.service.ISysPermissionService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import com.redoop.science.utils.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
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
    @Autowired
    ISysPermissionService sysPermissionService;
    /**
     * 数据源列表分类
     * @param model
     * @return
     */
    @GetMapping("/{num}")
    public ModelAndView index(Model model,@PathVariable Long num,HttpServletRequest request){
        Page<RealDb> page = new Page<>();
        page.setSize(11L);
        page.setCurrent(num);
        page.setDesc("ID");
        IPage<RealDb> pages = realDbService.page(page,null);
        List<SysPermission> permissionList = sysPermissionService.findByUserNamePermission(SessionUtils.getUserNickName(request));
        model.addAttribute("permissionList",permissionList);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        model.addAttribute("list", pages.getRecords());
        model.addAttribute("activeType", 2);
        model.addAttribute("pageNum", num);
        model.addAttribute("real", new RealDb());
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
    public ModelAndView form( Model model,HttpServletRequest request) {
        List<SysPermission> permissionList = sysPermissionService.findByUserNamePermission(SessionUtils.getUserNickName(request));
        model.addAttribute("permissionList",permissionList);
        model.addAttribute("realDb", new RealDb());
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
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
        return new ModelAndView("redirect:/real/1");
    }

    /**
     * 去修改
     * @param model
     * @param id
     * @return
     */
    @RequestMapping(value = "/toEdit/{id}",method = RequestMethod.GET)
    public ModelAndView toEdit(Model model,@PathVariable(value = "id") String id,HttpServletRequest request) {
        List<SysPermission> permissionList = sysPermissionService.findByUserNamePermission(SessionUtils.getUserNickName(request));
        model.addAttribute("permissionList",permissionList);
        RealDb realDb = realDbService.getById(id);
        if (realDb!=null){
            model.addAttribute("realDb", realDb);
            model.addAttribute("nickName", SessionUtils.getUserNickName(request));
            return new ModelAndView("/realDb/update");
        }else {
            return new ModelAndView("/error/500");
        }
    }

    /**
     * 查看单个数据源信息-不能修改
     * @param model
     * @param id
     * @return
     */
    @RequestMapping(value = "/toList/{id}",method = RequestMethod.GET)
    public ModelAndView toList(Model model,@PathVariable(value = "id") String id,HttpServletRequest request) {

        List<SysPermission> permissionList = sysPermissionService.findByUserNamePermission(SessionUtils.getUserNickName(request));
        model.addAttribute("permissionList",permissionList);

        RealDb realDb = realDbService.getById(id);
        if (realDb!=null){
            model.addAttribute("realDb", realDb);
            model.addAttribute("nickName", SessionUtils.getUserNickName(request));
            return new ModelAndView("/realDb/update");
        }else {
            return new ModelAndView("/error/500");
        }
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
        realDb.setLogo(" /img/realDb/"+realDb.getDbType()+".jpg");
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

        return new ModelAndView("redirect:/real/1");
    }

    /**
     * 删除
     * @param id
     * @return
     */
    @RequestMapping("/delete/{id}")
    public String delete(@PathVariable(value = "id")  Integer id){
        if (id!=null){
            realDbService.removeById(id);
            return "redirect:/real/1";
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
    public List<RealDb> selectDatabase(Model model,HttpServletRequest request){

        List<SysPermission> permissionList = sysPermissionService.findByUserNamePermission(SessionUtils.getUserNickName(request));
        List<RealDb> list =  realDbService.selectDatabase();
        model.addAttribute("permissionList",permissionList);
        model.addAttribute("list" ,list);
        return list;
    }

}
