package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.dto.ViewsDto;
import com.redoop.science.entity.SysPermission;
import com.redoop.science.entity.SysUserDetails;
import com.redoop.science.entity.Views;
import com.redoop.science.entity.ViewsTables;
import com.redoop.science.service.ISysPermissionService;
import com.redoop.science.service.IViewsService;
import com.redoop.science.service.IViewsTablesService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import com.redoop.science.utils.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/process")
public class G6Controller {
    @Autowired
    private IViewsTablesService viewsTablesService;

    @Autowired
    private IViewsService viewsService;

    @Autowired
    ISysPermissionService sysPermissionService;

    @GetMapping("/{num}")
    public ModelAndView index(Model model, @PathVariable Long num, HttpServletRequest request) {

        model.addAttribute("activeType", 6);

        return new ModelAndView("/sys/g6");
    }



}
