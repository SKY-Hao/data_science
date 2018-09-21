package com.redoop.science.utils;

import com.redoop.science.entity.SysUser;

import javax.servlet.http.HttpServletRequest;

/**
 * @Author: Alan
 * @Time: 2018/9/21 11:19
 * @Description:
 */
public class SessionUtils {
    private static final String SESSION_USER = "REDOOP_USER";
    /**
     * 设置session的值
     * @param request
     * @param key
     * @param value
     */
    public static void setAttr(HttpServletRequest request,String key,Object value){
        request.getSession(true).setAttribute(key, value);
    }


    /**
     * 获取session的值
     * @param request
     * @param key
     */
    public static Object getAttr(HttpServletRequest request,String key){
        return request.getSession(true).getAttribute(key);
    }

    /**
     * 删除Session值
     * @param request
     * @param key
     */
    public static void removeAttr(HttpServletRequest request,String key){
        request.getSession(true).removeAttribute(key);
    }

    /**
     * 设置用户信息 到session
     * @param request
     * @param user
     */
    public static void setUser(HttpServletRequest request,SysUser user){
        request.getSession(true).setAttribute(SESSION_USER, user);
    }


    /**
     * 从session中获取用户信息
     * @param request
     * @return SysUser
     */
    public static SysUser getUser(HttpServletRequest request){
        return (SysUser)request.getSession(true).getAttribute(SESSION_USER);
    }
    /**
     * 从session中获取用户昵称
     * @param request
     * @return String
     */
    public static String getUserNickName(HttpServletRequest request){
        SysUser sysUser = (SysUser)request.getSession(true).getAttribute(SESSION_USER);
        return sysUser.getNickName();
    }


    /**
     * 从session中获取用户信息
     * @param request
     * @return SysUser
     */
    public static void removeUser(HttpServletRequest request){
        removeAttr(request, SESSION_USER);
    }

}
