package com.redoop.science;

import org.junit.*;

/**
 * Created by Administrator on 2018/10/31.
 */
public class SqlTest {




    @Test
    public void xxx(){
        String sql = "select * from `test.test` as output;\n" +
                "\n" +
                "\t\t\n" +
                "set start = `select timestamp('&start') `\n" +
                "options type = \"sql\"; \n" +
                "\n" +
                "set end = `select timestamp('2018-10-31 10:07:12')  `\n" +
                "options type = \"sql\";\n" +
                "\n" +
                "select \"${start}\" as  start , \"${end}\" as end as oup;\n" +
                "\n" +
                "select  * from output where time BETWEEN '${start}' and '${end}' as ss;";


        sql = sql.replaceAll("&start", "2018-10-28 10:07:07");


        System.out.println("sql>>>>>>"+sql);










    }
}
