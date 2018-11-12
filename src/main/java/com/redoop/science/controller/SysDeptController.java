package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.Analysis;
import com.redoop.science.service.ISysDeptService;
import com.redoop.science.utils.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * @author admin
 * @since 2018年11月6日15:27:30
 *
 *   部门Controller
 */
@Controller
@RequestMapping("/sys-dept")
public class SysDeptController {

    @Autowired
    ISysDeptService deptService;

    @GetMapping("/")
    public ModelAndView index(Model model){

        model.addAttribute("activeType", 7);

        return new ModelAndView("/dept/sys");
    }

}
