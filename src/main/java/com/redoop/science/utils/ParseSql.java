package com.redoop.science.utils;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.redoop.science.entity.RealDb;
import com.redoop.science.service.IRealDbService;
import com.redoop.science.service.IRegFunctionService;
import com.redoop.science.service.IViewsTablesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Created by Administrator on 2018/10/10.
 */
@Component
public class ParseSql {

    Logger logger = LoggerFactory.getLogger(getClass());
    @Autowired
    private IRealDbService realDbService;
    @Autowired
    private IViewsTablesService viewsTablesService;
    @Autowired
    private IRegFunctionService regFunctionService;

    private static ParseSql parseSqlUtils;

    @PostConstruct
    public void init() {
        parseSqlUtils = this;
        parseSqlUtils.realDbService = this.realDbService;
        parseSqlUtils.viewsTablesService = this.viewsTablesService;
    }


    public static String parse(String sql) {
        String copySql = sql;
        if (copySql.indexOf("`") != -1) {
            return parseSql(copySql);
        } else {
            if (copySql.indexOf("view.") != -1) {
                return viewParseSql(copySql);
            } else if (copySql.indexOf("(") != -1) {
                return funParseSql(copySql);
            }
        }
        return copySql;
    }


    public static String parseSql(String sql) {
        //将所有'替换为` 避免误操作
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
            RealDb realDb = parseSqlUtils.realDbService.getOne(queryWrapper);
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
                                " and url=\"jdbc:oracle:thin:@//" + realDb.getIp() + ":" + realDb.getPort() + "/" + realDb.getName() + "\" " +
                                " and driver=\"oracle.jdbc.driver.OracleDriver\" " +
                                " and user=\"" + realDb.getDbName() + "\" " +
                                " and password=\"" + realDb.getDbPassword() + "\" " +
                                " as " + realDb.getNikeName() + "; ");
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
                        returnSql.append("load kafka.`` options `kafka.bootstrap.servers`=\"" + realDb.getIp() + ":" + realDb.getPort() + "\" " +
                                "and `subscribe`=\"" + realDb.getName() + "\" " +
                                "as " + realDb.getNikeName() + ";");
                        break;
                    case 8:
//                        phoenix
                        returnSql.append("connect jdbc where  " +
                                "truncate=\"true\"" +
                                "and url=\"jdbc:phoenix://" + realDb.getIp() + ":" + realDb.getPort() + ";databaseName=" + realDb.getName() + ";\"" +
                                "and driver=\"org.apache.phoenix.jdbc.PhoenixDriver\"" +
                                "and user=\"" + realDb.getDbName() + "\" " +
                                "and password=\"" + realDb.getDbPassword() + "\" " +
                                "as " + realDb.getNikeName() + "; ");
                        break;
                }
            }
        }
        Map<String, String> replaceTableNames = new HashMap<>();
        for (String tableName : tableNames) {
            String[] dbName = tableName.split("\\.");
            RealDb realDb = realDbs.get(dbName[0]);
            if (realDb != null) {
                replaceTableNames.put("`" + tableName + "`", dbName[1]);
                switch (realDb.getDbType()) {
                    case 1:
                        returnSql.append("load jdbc.`" + tableName + "` as " + dbName[1] + ";");
                        break;
                    case 2:
                        returnSql.append("load jdbc.`" + tableName + "` as " + dbName[1] + ";");
                        break;
                    case 3:
                        returnSql.append("load jdbc.`" + tableName + "` as " + dbName[1] + ";");
                        break;
                    case 4:
                        returnSql.append("load jdbc.`" + tableName + "` as " + dbName[1] + ";");
                        break;
                    case 5:
                        returnSql.append("");
                        break;
                    case 6:
                        returnSql.append("");
                        break;
                    case 7:
                        returnSql.append("");
                        break;
                    case 8:
                        returnSql.append("load jdbc.`" + tableName + "` as " + dbName[1] + ";");
                        break;
                }
            }
        }
        String repSql = copySql;
        for (String map : replaceTableNames.keySet()) {
            repSql = repSql.replaceAll(map.trim(), replaceTableNames.get(map));
        }
        if (repSql.indexOf(";") != -1) {
            returnSql.append(repSql);
        }
        System.out.println("returnSql.append(repSql)>>>>>>===" + returnSql);
        //logger.info("查询sql>>>>"+returnSql.toString());
        return returnSql.toString();
    }


    /**
     * 视图code处理
     *
     * @param sql
     * @return
     */
    public static String viewParseSql(String sql) {

        String copySql = sql;
     /*   if(copySql.indexOf("`") != -1) {
            String realDbSql = parseSql(copySql);
            System.out.println("realDbSql>>>>++++++==="+realDbSql);
            copySql=realDbSql;
        }
*/
        StringBuffer returnSql = new StringBuffer();

        String[] codes = copySql.split(" ");

        Set<String> tableNames = new HashSet<>();
        Map<String, String> viwesNames = new HashMap<>();
        for (String table : codes) {
            if (table.indexOf("view.") != -1) {

                String dbNames = table.split("'")[1];
                String dbName = dbNames.split("\\.")[0];
                String tableName = dbNames.split("\\.")[1];

                viwesNames.put(table, tableName);
                tableNames.add(tableName);
            }
        }
       /* System.out.println("tableNames=======" + tableNames);
        System.out.println("viwesNames=======" + viwesNames);*/

        Map<String, String> replaceTableNames = new HashMap<>();
        for (String dbName : tableNames) {
           // System.out.println("dbName>>>>>>>>>>" + dbName);
            String code = parseSqlUtils.viewsTablesService.getByName(dbName);
            String sqlCode = parseSql(code);
            System.out.println("view_sqlCode==========" + sqlCode);
            returnSql.append(sqlCode);
        }
        String repSql = copySql;
        for (String map : viwesNames.keySet()) {
            repSql = repSql.replaceAll(map.trim(), viwesNames.get(map));
        }
        returnSql.append(repSql);

        System.out.println("view_repSqlrepSql====" + repSql);
        return returnSql.toString();
    }


    /**
     * 函数code处理
     *
     * @param sql
     * @return
     */
    public static String funParseSql(String sql) {

        String copySql = sql;
     /*   if(copySql.indexOf("`") != -1) {
            String realDbSql = parseSql(copySql);
          //  System.out.println("realDbSql>>>>++++++==="+realDbSql);
           return realDbSql;
        } else{
            if(copySql.indexOf("%.") != -1) {
                String realDbSql = viewParseSql(copySql);
             //   System.out.println("realDbSql>>>>++++++==="+realDbSql);
            return   realDbSql;
            }
        }*/

        StringBuffer returnSql = new StringBuffer();
        String[] codes = copySql.split(" ");
        Set<String> tableNames = new HashSet<>();
        Map<String, String> funNames = new HashMap<>();

        for (String table : codes) {
            if (table.indexOf(")") != -1) {

                //String dbName = table.split("\\.")[1];
                String dbName = table.split("\\(")[0];
                tableNames.add(dbName);
                //  System.out.println("table============"+dbName);
            }
        }
        for (String dbName : tableNames) {
            // System.out.println("dbName>>>>>>>>>>"+dbName);
            String code = parseSqlUtils.regFunctionService.getByName(dbName);
            String sqlCode = parseSql(code);
           // System.out.println("sqlCode==========" + sqlCode);
            returnSql.append(sqlCode);
        }
        String repSql = copySql;
        for (String map : funNames.keySet()) {
            repSql = repSql.replaceAll(map.trim(), funNames.get(map));
        }
        returnSql.append(repSql);

        System.out.println("repSqlrepSql>>>>>>>>>>>>>>>>>>" + repSql);
        return returnSql.toString();
    }


}
