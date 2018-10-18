package com.redoop.science;

import java.util.HashSet;
import java.util.Set;

/**
 * @Author: Alan
 * @Time: 2018/9/29 10:37
 * @Description:
 */
public class Test {
    @org.junit.Test
    public void test(){
        String sql = "select * from %.`db1.test` as a;";
        String[] codes = sql.split(" ");
        String[] ccc={"select","*","from","%.`db1.test`","as","a;"};
        Set<String> tableNames = new HashSet<>();
        // Set<String> viwesNames = new HashSet<>();
        for (String table : codes) {
            if (table.indexOf("%.") != -1) {
                //  %.`db1.test`

                String dbNames = table.split("`")[1];
                String dbName = dbNames.split("\\.")[0];
                String tableName = dbNames.split("\\.")[1];
               // String[] dbNddames = table.split("`");
                //String dbNames = dbNddames[1];
                //String dbNames = table.split("`")
               /* String[] xx={"%.","db1.test"};
                String[] xxx={"select * from %.`","db1.test`","as a;"};
                for(String sss:dbNddames){

                    System.out.println("dbNddames>>>>>"+sss);
                }*/

                System.out.println("dbNames======"+dbNames+",dbName====="+dbName+",tableName===="+tableName);
//                tableNames.add(table);
            }
        }
    }
}
