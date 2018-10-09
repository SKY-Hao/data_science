package com.redoop.science.controller;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.Analysis;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.SysUser;
import com.redoop.science.service.IAnalysisService;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.utils.*;
import okhttp3.HttpUrl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.time.LocalDateTime;
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
    public Result save(HttpServletRequest request, @RequestParam(name = "id",required = false) Long id,
                       @RequestParam(name = "sql") String sql,
                       @RequestParam(value = "sqlName") String  sqlName) {
        Analysis analysis = null;
        SysUser sysUser = SessionUtils.getUser(request);
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
                analysis.setCreatorName(sysUser.getNickName());
            }
        }
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
    @PostMapping("/script")
    @ResponseBody
    public Result<String> script(@RequestParam(value = "sql") String sql) {
        Result<String> stringResult = new Result<>(ResultEnum.FAIL);
        String result = "";
        try {
            String runSql = parseSql(sql);
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

    /**
     * 解析sql
     * @param sql
     * @return
     */
/*    public String parseSql(String sql) {
        //将所有'替换为` 避免误操作
//        String sqlStr = sql.replaceAll("'", "`");
        String copySql = sql;
        StringBuilder returnSql = new StringBuilder();
        //获取使用库
        //String[] tables = copySql.split("`");
        //Set<String> tableNames = new HashSet<>();
        Set<String> dbNames = new HashSet<>();
       *//* for (String table : tables) {
            if (table.indexOf(".") != -1) {
                String dbName = table.split(".")[0];
                tableNames.add("`"+table+"`");
                dbNames.add(dbName);
            }
        }*//*
        Map<String, RealDb> realDbs = new HashMap<>();
        for (String dbname : dbNames) {

            LambdaQueryWrapper queryWrapper = new LambdaQueryWrapper();
            queryWrapper.eq("NIKE_NAME", dbname);
            RealDb realDb = realDbService.getOne(queryWrapper);
            if (realDb != null) {
                realDbs.put(dbname, realDb);
                switch (realDb.getDbType()) {
                    case 1:
//                        mysql
                        returnSql.append("connect jdbc where driver=\"com.mysql.jdbc.Driver\" " +
                                "and url=\"jdbc:mysql://" + realDb.getIp() + ":" + realDb.getPort() + "/" + realDb.getName() + "?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" " +
                                "and driver=\"com.mysql.jdbc.Driver\" " +
                                "and user=\"" + realDb.getDbName() + "\" " +
                                "and password=\"" + realDb.getDbPassword() + "\" " +
                                "as " + realDb.getNikeName() + "; ");
                        break;
                    case 2:
//                        oracle
                        returnSql.append("connect jdbc where   " +
                                " truncate=\"true\" " +
                                " and url=\"jdbc:oracle:thin:@//" + realDb.getIp() + ":" + realDb.getPort() + "/" + realDb.getName() +"\" " +
                                " and driver=\"oracle.jdbc.driver.OracleDriver\" " +
                                " and user=\""+ realDb.getDbName() + "\" " +
                                " and password=\"" + realDb.getDbPassword() +"\" " +
                                " as "+ realDb.getNikeName() + "; ");
                        break;

                }
            }
        }
        Map<String,String> replaceTableNames = new HashMap<>();

        for(String map : replaceTableNames.keySet()){
            copySql.replaceAll(map,replaceTableNames.get(map));
        }
        returnSql.append(copySql);

        return returnSql.toString();
    }*/
    public String parseSql(String sql) {
        //将所有'替换为` 避免误操作
//        String sqlStr = sql.replaceAll("'", "`");
        String copySql = sql;
        StringBuilder returnSql = new StringBuilder();
        //获取使用库
        String[] tables = copySql.split("`");
        Set<String> tableNames = new HashSet<>();
        Set<String> dbNames = new HashSet<>();
        for (String table : tables) {
            if (table.indexOf(".") != -1) {
                String dbName = table.split("\\.")[0];
                tableNames.add(table);
                dbNames.add(dbName);
            }
        }
        Map<String, RealDb> realDbs = new HashMap<>();
        for (String dbName : dbNames) {

            QueryWrapper queryWrapper = new QueryWrapper();
            queryWrapper.eq("NIKE_NAME", dbName);
            RealDb realDb = realDbService.getOne(queryWrapper);
            if (realDb != null) {
                realDbs.put(dbName, realDb);
                switch (realDb.getDbType()) {
                    case 1:
//                        mysql
                        returnSql.append("connect jdbc where driver=\"com.mysql.jdbc.Driver\" " +
                                "and url=\"jdbc:mysql://" + realDb.getIp() + ":" + realDb.getPort() + "/" + realDb.getName() + "?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" " +
                                "and driver=\"com.mysql.jdbc.Driver\" " +
                                "and user=\"" + realDb.getDbName() + "\" " +
                                "and password=\"" + realDb.getDbPassword() + "\" " +
                                "as " + realDb.getNikeName() + "; ");
                        break;
                    case 2:
//                        oracle
                        returnSql.append("connect jdbc where   " +
                                " truncate=\"true\" " +
                                " and url=\"jdbc:oracle:thin:@//" + realDb.getIp() + ":" + realDb.getPort() + "/" + realDb.getName() +"\" " +
                                " and driver=\"oracle.jdbc.driver.OracleDriver\" " +
                                " and user=\""+ realDb.getDbName() + "\" " +
                                " and password=\"" + realDb.getDbPassword() +"\" " +
                                " as "+ realDb.getNikeName() + "; ");
                        break;
                    case 3:
//                        PGsql
                        returnSql.append("connect jdbc where  " +
                                "truncate=\"true\"" +
                                "and url=\"jdbc:postgresql://" + realDb.getIp() + ":" + realDb.getPort() + "/" + realDb.getName() + "?socketTimeout=1&connectTimeout=1\"" +
                                "and driver=\"org.postgresql.Driver\"" +
                                "and user=\"" + realDb.getDbName() + "\" " +
                                "and password=\"" + realDb.getDbPassword() + "\" " +
                                "as " + realDb.getNikeName() + "; ");
                        break;
                    case 4:
//                        sqlserver
                        returnSql.append("connect jdbc where  " +
                                "truncate=\"true\"" +
                                "and url=\"jdbc:sqlserver://" + realDb.getIp() + ":" + realDb.getPort() + ";databaseName=" + realDb.getName() + ";\"" +
                                "and driver=\"com.microsoft.sqlserver.jdbc.SQLServerDriver\"" +
                                "and user=\"" + realDb.getDbName() + "\" " +
                                "and password=\"" + realDb.getDbPassword() + "\" " +
                                "as " + realDb.getNikeName() + "; ");
                        break;
                    case 5:
//                        hive
                        returnSql.append("");
                        break;
                    case 6:
//                        redis
                        returnSql.append("");
                        break;
                    case 7:
//                        kafka
                        returnSql.append("load kafka.`` options `kafka.bootstrap.servers`=\""+realDb.getIp()+":"+realDb.getPort()+"\" " +
                                "and `subscribe`=\""+realDb.getName()+"\" " +
                                "as "+realDb.getNikeName()+";");
                        break;
                }
            }
        }
        Map<String,String> replaceTableNames = new HashMap<>();
        for (String tableName : tableNames) {
            String[] dbName = tableName.split("\\.");
            RealDb realDb = realDbs.get(dbName[0]);
            if (realDb != null) {
                replaceTableNames.put("`"+tableName+"`",dbName[1]);
                switch (realDb.getDbType()) {
                    case 1:
                        returnSql.append("load jdbc.`"+tableName+"` as "+dbName[1]+";");
                        break;
                    case 2:
                        returnSql.append("load jdbc.`"+tableName+"` as "+dbName[1]+";");
                        break;
                    case 3:
                        returnSql.append("load jdbc.`"+tableName+"` as "+dbName[1]+";");
                        break;
                    case 4:
                        returnSql.append("");
                        break;
                    case 5:
                        returnSql.append("");
                        break;
                    case 6:
                        returnSql.append("");
                        break;
                }
            }
        }
        String repSql = copySql;
        for(String map : replaceTableNames.keySet()){
            repSql=repSql.replaceAll(map.trim(),replaceTableNames.get(map));
        }
        returnSql.append(repSql);
        logger.info("查询sql>>>>"+returnSql.toString());
        return returnSql.toString();
    }



}
