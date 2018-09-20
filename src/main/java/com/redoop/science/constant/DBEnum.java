package com.redoop.science.constant;

/**
 * @Author: Alan
 * @Time: 2018/9/18 10:55
 * @Description: 数据库类型
 */
public enum  DBEnum {
    MYSQL(1,"mysql"),
    ORACLE(2,"oracle"),
    PG(3,"pg"),
    SQLSERVER(4,"sqlserver"),
    HIVE(5,"hive"),
    REDIS(6,"redis"),
    KAFKA(7,"kafka");

    private Integer dbType;
    private String name;

    DBEnum(Integer dbType,String name) {
        this.dbType = dbType;
        this.name = name;
    }

    public Integer getDbType() {
        return dbType;
    }

    public String getName() {
        return name;
    }
}
