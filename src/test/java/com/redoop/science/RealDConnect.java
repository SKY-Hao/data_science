package com.redoop.science;

import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/9/19.
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class RealDConnect {

  public static void main(String[] args) {
      Connection conn = null;
        //String className = "oracle.jdbc.driver.OracleDriver";
        //String url = "jdbc:oracle:thin:@192.168.1.150:1521:orcl";

       // String  className = "com.mysql.jdbc.Driver";
        String  className = "com.mysql.cj.jdbc.Driver";
        String  url ="jdbc:mysql://localhost:3306/data_science?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false&allowPublicKeyRetrieval=true";
        String user = "root";
        String password = "root";
       //String sql = "select table_name from data_science";
        String sql ="select TABLE_NAME from information_schema.tables where table_schema='data_science'";
      try {
            Class.forName(className);
            conn = DriverManager.getConnection(url,user,password);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            List<String> list = new ArrayList<String>();
            while(rs.next()){
                System.out.println(rs.getString("TABLE_NAME"));
                String tblName = rs.getString("TABLE_NAME");
                list.add(tblName);
            }
            System.out.println(list);
        } catch (Exception e) {
            e.printStackTrace();
        }



    }










}