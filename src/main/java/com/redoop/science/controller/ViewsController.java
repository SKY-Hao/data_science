package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.*;
import com.redoop.science.service.IViewsService;
import com.redoop.science.service.IViewsTablesService;
import com.redoop.science.utils.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

/**
 * <p>
 *  视图库 前端控制器
 * </p>
 *
 * @author admin
 * @since 2018-09-26
 */
@Controller
@RequestMapping("/views")
public class ViewsController {
    @Autowired
    private IViewsTablesService viewsTablesService;

    @Autowired
    private IViewsService viewsService;

    @GetMapping("/{num}")
    public ModelAndView index(Model model, @PathVariable Long num, HttpServletRequest request){
        Page<Views> page = new Page<>();
        page.setSize(11L);
        page.setCurrent(num);
        page.setDesc("ID");
        IPage<Views> pages = viewsService.page(page,null);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        model.addAttribute("items", pages.getRecords());
        model.addAttribute("activeType", 5);
        model.addAttribute("pageNum", num);
        model.addAttribute("views", new Views());
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());

        return new ModelAndView("/views/viewsIndex");
    }



    @GetMapping("/addView")
    public ModelAndView addView(Model model,HttpServletRequest request){

        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        return new ModelAndView("/views/viewsAdd");
    }

    /**
     * 保存视图库
     * @param request
     * @param id
     * @param viewsName
     * @return
     */
    @PostMapping("/saveView")
    @ResponseBody
    public Result saveView(HttpServletRequest request,@RequestParam(name = "id",required = false) Long id,  @RequestParam(value = "viewsName") String viewsName) {

        Views views = null;
        SysUser sysUser = SessionUtils.getUser(request);
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("NAME",viewsName);

        if(id!=null){
            views = viewsService.getById(id);
        }else{
            Views virtualTable  = viewsService.getOne(queryWrapper);
            if(virtualTable!=null){
                return new Result(ResultEnum.REPEAT_VIEW,"名称已存在，请使用其他名称");
            }else{
                views = new Views();
                views.setName(viewsName);
                views.setCreateDate(LocalDateTime.now());
                views.setCreatorId(sysUser.getId());
                views.setCreatorName(sysUser.getNickName());
            }
        }

        if (viewsService.save(views)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }


    }
    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public Result<String> delete(@PathVariable Integer id){
        if (viewsService.removeById(id)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @RequestMapping(value = "/edit/{id}",method = RequestMethod.GET)
    public ModelAndView edit(Model model,@PathVariable(value = "id") String id,HttpServletRequest request) {

        Views views = viewsService.getById(id);
        if (views!=null){
            model.addAttribute("views", views);
            model.addAttribute("nickName", SessionUtils.getUserNickName(request));
            return new ModelAndView("/views/viewsUpdate");
        }else {
            return new ModelAndView("/error/500");
        }
    }



}
