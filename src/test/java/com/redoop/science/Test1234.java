package com.redoop.science;

import com.redoop.science.entity.RealDb;
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
    /*@Test
    public void test(){
        String copySql = "select * from 'ods.people' as a;";
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
    }*/
   @Test
    public void test() {
       String copySql = "select * from `test.t_user` as test_user;";
       StringBuilder returnSql = new StringBuilder();
       //获取使用库
       String[] tables = copySql.split("`");

       // String[] partition = copySql.split("_partition");

       Set<String> tableNames = new HashSet<>();
       Set<String> dbNames = new HashSet<>();
       Set<String> partition = new HashSet<>();

       for (String table : tables) {
           if (table.indexOf(".") != -1) {
               String[] tableInfo = table.split("\\.");
               String dbName = tableInfo[0];

               tableNames.add(table);
               dbNames.add(dbName);

               System.out.println("dbName=======" + dbName);
               System.out.println("dbNames=======" + dbNames);
           }

          /* if (table.indexOf("_partition")!=-1){
               String[] tableInfo = table.split("\\.");
               String parName = tableInfo[0];

               tableNames.add(table);
               partition.add(parName);

               System.out.println("parName======="+parName);
               System.out.println("partition======="+partition);
           }*/
       }
       for (String tableName : tableNames) {
           String[] dbName = tableName.split("\\.");
           System.out.println(dbName[1]);
       }
   }

}