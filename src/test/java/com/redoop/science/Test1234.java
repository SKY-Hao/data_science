package com.redoop.science;

import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * @Author: Alan
 * @Time: 2018/9/29 10:37
 * @Description:
 */
public class Test1234 {
    @Test
    public void test(){
        String copySql = "select * from hive_'ods.people' as a;";
        StringBuffer returnSql = new StringBuffer();

        String[] codes = copySql.split(" ");

        Set<String> tableNames = new HashSet<>();
        Map<String, String> viwesNames = new HashMap<>();
        for (String table : codes) {
            if (table.indexOf("hive_") != -1) {

                String dbNames = table.split("'")[1];
                String dbName = dbNames.split("\\.")[0];
                String tableName = dbNames.split("\\.")[1];

                System.out.println("dbNames======="+dbNames);
                System.out.println("dbName======="+dbName);
                System.out.println("tableName======="+tableName);


                viwesNames.put(table, tableName);
                tableNames.add(tableName);
                System.out.println("tableNames======="+tableNames);
            }
        }
    }

}