package com.redoop.science.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.constant.DBEnum;
import com.redoop.science.dto.ViewsDto;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.Views;
import com.redoop.science.entity.ViewsTables;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.mapper.ViewsMapper;
import com.redoop.science.service.IViewsService;
import com.redoop.science.service.IViewsTablesService;
import com.redoop.science.utils.*;
import okhttp3.HttpUrl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  视图表 前端控制器
 * </p>
 *
 * @author admin
 * @since 2018-09-26
 */
@Controller
@RequestMapping("/viewsTables")
public class ViewsTablesController {
    @Autowired
    private IViewsTablesService viewsTablesService;

    @Autowired
    private IViewsService viewsService;
    @Autowired
    private ViewsMapper viewsMapper;

    private String id;
    private String name;
    private String pid;
    /**
     * 视图列表
     * @param model
     * @param num
     * @param request
     * @return
     */
    @GetMapping("/{num}")
    public ModelAndView index(Model model, @PathVariable Long num, HttpServletRequest request){
        Page<ViewsTables> page = new Page<>();
        page.setSize(11L);
        page.setCurrent(num);
        page.setDesc("ID");
        IPage<ViewsTables> pages = viewsTablesService.page(page,null);
        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        model.addAttribute("items", pages.getRecords());
        model.addAttribute("activeType", 4);
        model.addAttribute("pageNum", num);
        model.addAttribute("virtual", new VirtualTables());
        model.addAttribute("pages", pages.getPages());
        model.addAttribute("total", pages.getTotal());

        return new ModelAndView("/views/index");
    }
    @GetMapping("/add")
    public ModelAndView add(Model model,HttpServletRequest request){

        getZtree(model);

        model.addAttribute("nickName", SessionUtils.getUserNickName(request));
        return new ModelAndView("/views/edit");
    }



    public Model getZtree(Model model){
        //  获取ztree json
        // 获取真实库ztreejson

//        List<ViewsTables> viewsTables =  viewsTablesService.allList();
        List<ViewsDto> views =  viewsMapper.findViewsTables();
        System.out.println(views);

        List<Map<String,Object>> realZList = new ArrayList<>();
        for (ViewsDto v :views)
        {

//          List<ViewsTables> viewsTables =  v.getViewsTablesList();
            Map<String,Object> zMap = new HashMap<>();
            //第一节点
            zMap.put("pId",0);
            zMap.put("name",v.getName());
            zMap.put("icon","/img/icon/db.png");
            zMap.put("id",v.getVId());
            realZList.add(zMap);

            /*QueryWrapper<ViewsTables> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("VIEWS_ID",v.getVid());
            viewsTablesService.list(queryWrapper);*/

            for (ViewsTables viewsTables : v.getViewsTablesList()){
                Map<String,Object> z2Map = new HashMap<>();
                z2Map.put("pId",viewsTables.getViewsId());
                z2Map.put("name",viewsTables.getName());
                z2Map.put("icon","/img/icon/db.png");
                z2Map.put("id",viewsTables.getId()+10000);
                realZList.add(z2Map);
            }
        }

        System.out.println("realZList>>>>>"+realZList);
        //返回值
        model.addAttribute("realZList", realZList);

        return model;
    }




    /**
     * 执行sql查询
     * @param sql
     * @return
     */
    @PostMapping("/script")
    @ResponseBody
    public Result<String> script(@RequestParam(value = "sql") String sql) {
        Result<String> stringResult = new Result<>(ResultEnum.FAIL);
        String result = "";
        try {
            String runSql = ParseSql.parseSql(sql);
            HttpUrl url = new HttpUrl.Builder()
                    .scheme("http")
                    .host("192.168.0.122")
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
    }


}
