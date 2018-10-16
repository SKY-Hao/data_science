package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.redoop.science.entity.Views;
import com.redoop.science.service.IViewsService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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
    private IViewsService iViewsService;

    @GetMapping
    public String index(Model model){
        LambdaQueryWrapper<Views> wrapper = new LambdaQueryWrapper<>();
        List<Views> list = iViewsService.list(wrapper);
        model.addAttribute("list", list);
        return "";
    }

    @PostMapping("/save")
    public Result<String> save(Views Views){
        if (iViewsService.save(Views)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/update")
    public Result<String> update(Views Views){
        if (iViewsService.updateById(Views)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/delete")
    public Result<String> delete(Long id){
        if (iViewsService.removeById(id)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
}
