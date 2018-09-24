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
    FAIL_PASSWORD(501,"密码错误");


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
