package com.redoop.science.utils;

import lombok.Data;

/**
 * @Author: Alan
 * @Time: 2018/9/14 10:40
 * @Description:
 */
public enum ResultEnum {
    /**
     * 返回成功
     */
    SECCUSS(200,"执行成功"),
    /**
     * 没有资源
     */
    NOT_FOUND(404,"没有资源"),
    /**
     * 没有资源
     */
    EXIST(300,"没有资源"),
    /**
     *返回失败
     */
    FAIL(500,"执行错误"),
    /**
     *返回失败
     */
    FAIL_PASSWORD(501,"密码错误"),
    /**
     * 名称重复
     */
    REPEAT(1001,"名称重复"),
    /**
     * 登录时用户名和密码
     */
    NOT_NULL(1002,"用户名密码不能为空");




    private int code;
    private String msg;

    ResultEnum(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
}
