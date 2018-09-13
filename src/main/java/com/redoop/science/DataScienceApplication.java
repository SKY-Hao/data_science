package com.redoop.science;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author ALan
 */
@SpringBootApplication
@MapperScan(basePackages="mapper")
public class DataScienceApplication {

    public static void main(String[] args) {
        SpringApplication.run(DataScienceApplication.class, args);
    }
}
