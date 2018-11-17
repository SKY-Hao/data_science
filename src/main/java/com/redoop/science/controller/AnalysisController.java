package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.Analysis;
import com.redoop.science.entity.SysPermission;
import com.redoop.science.entity.SysUserDetails;
import com.redoop.science.service.IAnalysisService;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.service.ISysPermissionService;
import com.redoop.science.utils.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * <p>
 *  分析 前端控制器
 * </p>
 *
 * @author admin
 * @since 2018-09-26
 */
@Controller
@RequestMapping("/analysis")
public class AnalysisController {
    Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    private IAnalysisService analysisService;
    @Autowired
    private IRealDbService realDbService;
    @Autowired
    ISysPermissionService sysPermissionService;
    /**
     * 分析列表List
     * @param model
     * @param num
     * @param request
     * @return
     */
    @GetMapping("/{num}")
    public ModelAndView index(Model model, @PathVariable Long num, HttpServletRequest request){
        Page<Analysis> page = new Page<>();
        page.setSize(11L);
        page.setCurrent(num);
        page.setDesc("ID");
        IPage<Analysis> pages = analysisService.page(page,null);

        List<SysPermission> permissionList = sysPermissionService.getTpyeList();

        model.addAttribute("permissionList",permissionList);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        model.addAttribute("list", pages.getRecords());
        model.addAttribute("activeType", 3);
        model.addAttribute("pageNum", num);
        model.addAttribute("analysis", new Analysis());
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());
        return new ModelAndView("/analysis/index");
    }

    @GetMapping("/add")
    public ModelAndView add(Model model,HttpServletRequest request){
        //getZtree(model);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        return new ModelAndView("/analysis/update");
    }

    /**
     * 保存
     * @param request
     * @param id
     * @param sql
     * @param sqlName
     * @return
     */
    @PostMapping("/save")
    @ResponseBody
    public Result saveOrUpdate(HttpServletRequest request, @RequestParam(name = "id",required = false) Long id,
                       @RequestParam(name = "sql") String sql,
                       @RequestParam(value = "sqlName") String  sqlName) {
        Analysis analysis = null;
        SysUserDetails sysUser = SessionUtils.getUser(request);
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("NAME",sqlName);

        if(id!=null){
            analysis = analysisService.getById(id);
        }else{
            Analysis analy  = analysisService.getOne(queryWrapper);
            if(analy!=null){
                return new Result(ResultEnum.REPEAT);
            }else{
                analysis = new Analysis();
                analysis.setCreateDate(new Date());
                analysis.setCreatorId(sysUser.getId());
                analysis.setCreatorName(sysUser.getNickname());
            }
        }
        analysis.setCode(ParseSql.parse(sql));
        System.out.println("分析analysis.getCode()====="+analysis.getCode());
        analysis.setName(sqlName);
        analysis.setFinallyCode(sql);
        analysis.setOperationTime(new Date());
        analysis.setOperationId(sysUser.getId());
        if (analysisService.saveOrUpdate(analysis)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

    /**
     * 修改
     * @param model
     * @param id
     * @param request
     * @return
     */
    @GetMapping("/edit/{id}")
    public ModelAndView edit(Model model,@PathVariable(value = "id") String id,HttpServletRequest request){

        Analysis analysis = analysisService.getById(id);
        if(analysis!=null){
            model.addAttribute("analysis", analysis);
            //返回值
            //getZtree(model);
            model.addAttribute("nickName", SessionUtils.getUserNickName(request));
            return new ModelAndView("/analysis/update");
        }else{
            model.addAttribute("message","不存在查询信息");
            return new ModelAndView("/error/500");
        }

    }


    /**
     * 删除
     * @param id
     * @return
     */
    @RequestMapping("/delete/{id}")
    public String delete(@PathVariable(value = "id")  Integer id){
        if (id!=null){
            analysisService.removeById(id);
            return "redirect:/analysis/1";
        } else {
            return String.valueOf(new Result<String>(ResultEnum.FAIL));
        }
    }


    /**
     * 执行sql查询
     * @param sql
     * @return
     */
  /*  @PostMapping("/script")
    @ResponseBody
    public Result<String> script(@RequestParam(value = "sql") String sql) {
        Result<String> stringResult = new Result<>(ResultEnum.FAIL);
        String result = "";
        try {
            String runSql = ParseSql.parseSql(sql);
            HttpUrl url = new HttpUrl.Builder()
                    .scheme("http")
                    .host("192.168.0.163")
                    .port(9003)
                    .addPathSegments("run\\script")
                    .addQueryParameter("sql", runSql)
                    .build();
            String sqlResult = HttpClient.httpPost(url, "");
            result = sqlResult;
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("resultresultresult>>>>>"+result);

        if(JsonUtil.isJSONValid(result)){

            stringResult = new Result<String>(ResultEnum.SECCUSS,result);
        }else{
            stringResult = new Result<String>(ResultEnum.FAIL,result);
        }
        return stringResult;
    }*/



}
