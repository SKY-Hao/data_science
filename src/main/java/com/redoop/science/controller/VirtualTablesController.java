package com.redoop.science.controller;


import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.constant.DBEnum;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.service.IVirtualTablesService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;
import sun.security.pkcs11.Secmod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 虚拟表 前端控制器
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */
@Controller
@RequestMapping("/virtual")
public class VirtualTablesController {
    @Autowired
    private IVirtualTablesService virtualTablesService;
    @Autowired
    private IRealDbService realDbService;

    /**
     * 数据源列表分类
     * @param model
     * @return
     */
    @GetMapping
    public ModelAndView index(Model model,Page page){
        LambdaQueryWrapper<VirtualTables> wrapper = new LambdaQueryWrapper<>();
//        IPage<VirtualTables> page = new Page<>();
        IPage<VirtualTables> pages = virtualTablesService.page(page,null);
        model.addAttribute("items", pages.getRecords());
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());
        return new ModelAndView("/select/index");
    }
    @GetMapping("/edit")
    public ModelAndView edit(Model model,@RequestParam(value = "id",required=false) Long id){


       /* { id:1, pId:0, name:"MySQL", open:true, iconOpen:"../../../css/zTreeStyle/img/diy/1_open.png", iconClose:"../../../css/zTreeStyle/img/diy/1_close.png"},
        { id:11, pId:1, name:"库1", icon:"../../../css/zTreeStyle/img/diy/2.png"},
        { id:12, pId:1, name:"库2", icon:"../../../css/zTreeStyle/img/diy/3.png"},
        { id:13, pId:1, name:"库3", icon:"../../../css/zTreeStyle/img/diy/5.png"},
        { id:2, pId:0, name:"Oracle", open:true, icon:"../../../css/zTreeStyle/img/diy/4.png"},
        { id:21, pId:2, name:"库1", icon:"../../../css/zTreeStyle/img/diy/6.png"},
        { id:22, pId:2, name:"库2", icon:"../../../css/zTreeStyle/img/diy/7.png"},
        { id:23, pId:2, name:"库3", icon:"../../../css/zTreeStyle/img/diy/8.png"}*/
    //  获取ztree json
    // 获取真实库ztreejson
        List<RealDb> realDbs =  realDbService.list(null);
        List<Map<String,Object>> realZList = new ArrayList<>();
        for (DBEnum dbEnum : DBEnum.values())
        {
            Map<String,Object> zMap = new HashMap<>();
            zMap.put("pId",0);
            zMap.put("name",dbEnum.getName());
            zMap.put("icon","/img/icon/"+dbEnum.getName()+".png");
            zMap.put("id",dbEnum.getDbType());
            realZList.add(zMap);
        }
        for (RealDb realDb: realDbs){
            Map<String,Object> zMap = new HashMap<>();
            zMap.put("pId",realDb.getDbType());
            zMap.put("name",realDb.getNikeName());
            zMap.put("icon","/img/icon/db.png");
            zMap.put("id",realDb.getId()+10);
            realZList.add(zMap);
        }

    // 获取虚拟库ztreejson
        List<Map<String,Object>> virtualZList = new ArrayList<>();
        Map<String,Object> vMap = new HashMap<>();
        vMap.put("pId",0);
        vMap.put("name","虚拟库");
        vMap.put("icon","/img/icon/db.png");
        vMap.put("id",1);
        virtualZList.add(vMap);
        List<VirtualTables> virtualTablesList = virtualTablesService.list(null);
        for (VirtualTables virtualTables:virtualTablesList){
            Map<String,Object> zMap = new HashMap<>();
            zMap.put("pId",1);
            zMap.put("name",virtualTables.getName());
            zMap.put("icon","/img/icon/table.png");
            zMap.put("id",virtualTables.getId()+10);
            virtualZList.add(zMap);
        }
    // 判断id是否为空，若为空直接返回页面不做操作，否则查询虚拟表编辑
        if(id!=null){
            model.addAttribute("virtual", virtualTablesService.getById(id));
        }
        //返回值
        model.addAttribute("realZList", realZList);
        model.addAttribute("virtualZList", virtualZList);
        return new ModelAndView("/select/edit");
    }

    @PostMapping("/save")
    @ResponseBody
    public Result<String> save(@RequestBody VirtualTables virtualTables){
        if (virtualTablesService.save(virtualTables)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/update")
    public Result<String> update(VirtualTables virtualTables){
        if (virtualTablesService.updateById(virtualTables)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }
    @PostMapping("/delete")
    public Result<String> delete(Long id){
        if (virtualTablesService.removeById(id)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

}
