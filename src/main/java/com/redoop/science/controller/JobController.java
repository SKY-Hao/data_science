package com.redoop.science.controller;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.redoop.science.entity.RealDb;
import com.redoop.science.entity.SysUser;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.service.IVirtualTablesService;
import com.redoop.science.utils.HttpClient;
import com.redoop.science.utils.Result;
import com.redoop.science.utils.ResultEnum;
import com.redoop.science.utils.SessionUtils;
import okhttp3.HttpUrl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
@Controller
@RequestMapping("/run")
public class JobController {

    @Autowired
    private IRealDbService realDbService;
    @Autowired
    private IVirtualTablesService virtualTablesService;

    @PostMapping("/script")
    public Result<String> script(@RequestParam(value = "sql") String sql,@RequestParam(value = "sqlName") String  sqlName) {
        String result = "";
        try {
             String runSql = parseSql(sql);
            HttpUrl url = new HttpUrl.Builder()
                    .scheme("http")
//                .host("127.0.0.1")
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
        return new Result<>(ResultEnum.SECCUSS,result);
    }

    @PostMapping("/save")
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
        if (virtualTablesService.saveOrUpdate(virtualTables)){
            return new Result<String>(ResultEnum.SECCUSS);
        }else {
            return new Result<String>(ResultEnum.FAIL);
        }
    }

    public String parseSql(String sql) {
        //将所有'替换为` 避免误操作
        String sqlStr = sql.replaceAll("'", "`");
        String copySql = sqlStr;
        StringBuilder returnSql = new StringBuilder();
        //获取使用库
        String[] tables = copySql.split("`");
        Set<String> tableNames = new HashSet<>();
        Set<String> dbNames = new HashSet<>();
        for (String table : tables) {
            if (table.indexOf(".") != -1) {
                String dbName = table.split(".")[0];
                tableNames.add("`"+table+"`");
                dbNames.add(dbName);
            }
        }
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
                    case 3:
//                        PGsql
                        returnSql.append("");
                        break;
                    case 4:
//                        sqlserver
                        returnSql.append("");
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
            String[] dbName = tableName.split(".");
            RealDb realDb = realDbs.get(dbName[0]);
            replaceTableNames.put(tableName,dbName[1]);
            switch (realDb.getDbType()) {
                case 1:
                    returnSql.append("load jdbc."+tableName+" as "+dbName[1]+";");
                    break;
                case 2:
                    returnSql.append("load jdbc."+tableName+" as "+dbName[1]+";");
                    break;
                case 3:
                    returnSql.append("");
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
        for(String map : replaceTableNames.keySet()){
            copySql.replaceAll(map,replaceTableNames.get(map));
        }
        returnSql.append(copySql);

        return returnSql.toString();
    }
}
