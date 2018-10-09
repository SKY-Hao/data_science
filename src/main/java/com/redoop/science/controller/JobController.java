package com.redoop.science.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.SysUser;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.service.IVirtualTablesService;
import com.redoop.science.utils.*;
import okhttp3.HttpUrl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * @Author: Alan
 * @Time: 2018/9/20 9:52
 * @Description:
 */
@RestController
@RequestMapping("/run")
public class JobController {
    Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    private IRealDbService realDbService;
    @Autowired
    private IVirtualTablesService virtualTablesService;

    @PostMapping("/script")
    @ResponseBody
    public Result<String> script(@RequestParam(value = "sql") String sql) {
        Result<String> stringResult = new Result<>(ResultEnum.FAIL);
        String result = "";
        try {
             String runSql = parseSql(sql);
            HttpUrl url = new HttpUrl.Builder()
                    .scheme("http")
//                    .host("127.0.0.1")
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
        logger.info("sql查询返回结果>>>>>>>"+result);
        if(JsonUtil.isJSONValid(result)){
            stringResult = new Result<String>(ResultEnum.SECCUSS,result);
        }else{
            stringResult = new Result<String>(ResultEnum.FAIL,result);
        }
        return stringResult;
    }

    @PostMapping("/save")
    @ResponseBody
    public Result save(HttpServletRequest request, @RequestParam(name = "id",required = false) Long id, @RequestParam(name = "sql") String sql, @RequestParam(value = "sqlName") String  sqlName) {
        VirtualTables virtualTables = null;
        SysUser sysUser = SessionUtils.getUser(request);
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("NAME",sqlName);


        if(id!=null){
            virtualTables = virtualTablesService.getById(id);
        }else{
            VirtualTables virtualTable  = virtualTablesService.getOne(queryWrapper);
            if(virtualTable!=null){
                return new Result(ResultEnum.EXIST,"名称已存在，请使用其他名称");
            }else{
                virtualTables = new VirtualTables();
                virtualTables.setCreateDate(LocalDateTime.now());
                virtualTables.setCreatorId(sysUser.getId());
                virtualTables.setCreatorName(sysUser.getNickName());
            }
        }
        virtualTables.setCode(sql);
        virtualTables.setOperationTime(LocalDateTime.now());
        virtualTables.setOperationId(sysUser.getId());
        virtualTables.setName(sqlName);
        if (virtualTablesService.saveOrUpdate(virtualTables)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

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
                        returnSql.append("load jdbc.`"+tableName+"` as "+dbName[1]+";");
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