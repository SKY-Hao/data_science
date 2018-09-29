package com.redoop.science;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

/**
 * @author ALan
 */
@SpringBootApplication
@MapperScan("com.redoop.science.mapper")
@EnableRedisHttpSession
@ServletComponentScan
public class DataScienceApplication extends SpringBootServletInitializer {


        @Override
        protected SpringApplicationBuilder configure (SpringApplicationBuilder application){
        return application.sources(DataScienceApplication.class);
    }


    public static void main(String[] args) {
        SpringApplication.run(DataScienceApplication.class, args);
    }

}