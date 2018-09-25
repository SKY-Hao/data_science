package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.constant.DBEnum;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.service.IVirtualTablesService;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import com.redoop.science.utils.SessionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
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
    @GetMapping("/{num}")
    public ModelAndView index(Model model,@PathVariable Long num,HttpServletRequest request){
        Page<VirtualTables> page = new Page<>();
        page.setSize(11L);
        page.setCurrent(num);
        page.setDesc("ID");
        IPage<VirtualTables> pages = virtualTablesService.page(page,null);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        model.addAttribute("items", pages.getRecords());
        model.addAttribute("activeType", 1);
        model.addAttribute("pageNum", num);
        model.addAttribute("virtual", new VirtualTables());
        model.addAttribute("pages", pages.getPages()+1);
        model.addAttribute("total", pages.getTotal());
        return new ModelAndView("/select/index");
    }
    @GetMapping("/edit/{id}")
    public ModelAndView edit(Model model,@PathVariable(value = "id") String id){

        VirtualTables virtualTables = virtualTablesService.getById(id);
        if(virtualTables!=null){
            model.addAttribute("virtual", virtualTables);
            //返回值
            getZtree(model);
            return new ModelAndView("/select/edit");
        }else{
            model.addAttribute("message","不存在查询信息");
            return new ModelAndView("/error/404");
        }

    }
    @GetMapping("/add")
    public ModelAndView add(Model model){

        getZtree(model);
        return new ModelAndView("/select/edit");
    }

    public Model getZtree(Model model){
        //  获取ztree json
        // 获取真实库ztreejson
        List<RealDb> realDbs =  realDbService.list(null);
        System.out.println(realDbs);

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
        //返回值
        model.addAttribute("realZList", realZList);
        model.addAttribute("virtualZList", virtualZList);
        return model;
    }

    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public Result<String> delete(@PathVariable Integer id){
        if (virtualTablesService.removeById(id)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

}
