package com.redoop.science;

/**
 * @Author: Alan
 * @Time: 2018/9/29 10:37
 * @Description:
 */
public class Test {
    @org.junit.Test
    public void test(){
        String sql = "select * from `test.test` as test;";
        String xx = sql.replaceAll("`test.test`","test");
        System.out.println(xx);
    }
}
