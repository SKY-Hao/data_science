package com.redoop.science;

import org.junit.*;
import org.springframework.security.crypto.bcrypt.BCrypt;

/**
 * Created by Administrator on 2018/10/31.
 */
public class SqlTest {




    @Test
    public void xxx(){
        /*String sql = "select * from `test.test` as output;\n" +
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


        System.out.println("sql>>>>>>"+sql);*/
        String password = "admin";//$2a$10$ofPkBDUezOJp6Sik63Q/0.QlU8a1itEyzldjSXqfn2nDPqXjN0Ljm
        String pwt = BCrypt.hashpw(password, BCrypt.gensalt());
        boolean pswFlag = BCrypt.checkpw(password,"$2a$10$H4uGD/kLr85h0x3s5uhYPOnB9pi9cftchNDvwbWkhJP0v5NXCwzLm");//解密

        System.out.println(pwt+"===="+pswFlag);










    }
}
