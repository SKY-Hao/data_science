package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.redoop.science.entity.SysUser;
import com.redoop.science.service.ISysUserService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;

import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */
@Controller
@RequestMapping("/sys-user")
public class SysUserController {
    @Autowired
    private ISysUserService sysUserService;

    /**
     * 数据源列表分类
     * @param model
     * @return
     */
    @GetMapping
    public String index(Model model){
        LambdaQueryWrapper<SysUser> wrapper = new LambdaQueryWrapper<>();
        List<SysUser> list = sysUserService.list(wrapper);
        model.addAttribute("list", list);
        return "";
    }

    @PostMapping("/save")
    public Result<String> save(SysUser sysUser){
        if (sysUserService.save(sysUser)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/update")
    public Result<String> update(SysUser sysUser){
        if (sysUserService.updateById(sysUser)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/delete")
    public Result<String> delete(Long id){
        if (sysUserService.removeById(id)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
}