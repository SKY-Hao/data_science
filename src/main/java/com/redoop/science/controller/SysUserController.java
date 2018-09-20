package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.SysUser;
import com.redoop.science.service.ISysUserService;
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

import javax.validation.Valid;
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


    @GetMapping("/tologin")
    public ModelAndView login(ModelAndView modelAndViewm){
        return new ModelAndView("/login");
    }

    @PostMapping("/login")

    public ModelAndView login(ModelAndView modelAndView, @RequestParam(name = "username")String username,@RequestParam(name = "password")String password, BindingResult rs){

   /* public ModelAndView login(ModelAndView modelAndView, @Valid SysUser sysUser, BindingResult rs){*/


        if(rs.hasErrors()){
            modelAndView.addObject("error",rs.getFieldError().getDefaultMessage());
            modelAndView.setViewName("/login");
           return modelAndView;
        }


        SysUser user = sysUserService.select(username,password);
        if(user==null){
            modelAndView.addObject("error","用户名密码不对！");
            modelAndView.setViewName("/login");
            return modelAndView;
        }

        /*if(!"admin".equals(userName)){
            modelAndView.addObject("error","无此用户！");
            modelAndView.setViewName("/login");
            return modelAndView;
        }
        if(!"admin".equals(password)){
            modelAndView.addObject("error","密码错误！");
            modelAndView.setViewName("/login");
            return modelAndView;
        }*/
        modelAndView.addObject("nickName",user.getNickName());
        modelAndView.setViewName("/select/index");
        return modelAndView;
}
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
