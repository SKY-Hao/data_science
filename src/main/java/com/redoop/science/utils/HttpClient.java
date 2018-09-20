package com.redoop.science.utils;

import okhttp3.*;

import java.io.IOException;

/**
 * @Author: Alan
 * @Time: 2018/9/20 10:46
 * @Description:
 */
public class HttpClient {
    public static final MediaType type = MediaType.parse("application/x-www-form-urlencoded;charset=utf-8");
    public static final OkHttpClient httpClient = new OkHttpClient();
    //Get方法调用服务
    public static String httpGet(HttpUrl url) throws IOException {
        Request request = new Request.Builder()
                .url(url)
                .build();
        Response response = httpClient.newCall(request).execute();
        return response.body().string();// 返回的是string 类型
    }
    //Post方法调用服务
    public static String httpPost(HttpUrl url,String content) throws IOException{
        RequestBody requestBody = RequestBody.create(type,content);
        Request request = new Request.Builder()
                .url(url)
                .post(requestBody)
                .build();
        Response response = httpClient.newCall(request).execute();
        return response.body().string();
    }
}
