package com.redoop.science.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author admin
 * @since 2018年11月12日09:05:21
 *
 *   sysController
 */
@Controller
@RequestMapping("/sys")
public class SysController {

    @GetMapping("/manage")
    public ModelAndView index(Model model){

        model.addAttribute("activeType", 7);

        return new ModelAndView("/sys/sys");
    }


}
