package com.redoop.science.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.redoop.science.entity.Analysis;
import com.redoop.science.entity.SysUser;
import com.redoop.science.entity.VirtualTables;
import com.redoop.science.service.IAnalysisService;
import com.redoop.science.service.IVirtualTablesService;
import com.redoop.science.utils.*;
import okhttp3.HttpUrl;
import org.apache.commons.io.FileUtils;
import org.apache.ibatis.annotations.Delete;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * @Author: Admin
 * @Time: 2018年10月30日15:12:41
 * @Description:
 */
@RestController
@RequestMapping("/api")
public class GetRestfulController {

    Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private IAnalysisService analysisService;

    @GetMapping("/analysis/{id}")
    @ResponseBody
    public Result<String> script(
            HttpServletRequest request,@PathVariable Integer id) throws Exception {

        Result<String> stringResult = new Result<>(ResultEnum.FAIL);
        String result = "";
            try {
                String sql = analysisService.getId(id);
                String runSql = ParseSql.parse(sql);
                HttpUrl url = new HttpUrl.Builder()
                        .scheme("http")
                        .host("192.168.0.163")
                        .port(9003)
                        .addPathSegments("run\\script")
                        .addQueryParameter("sql", runSql)
                        .build();
                String sqlResult = HttpClient.httpPost(url, "");
                result = sqlResult;
            } catch (IOException e) {
                e.printStackTrace();
            }
            logger.info("sql查询返回结果>>>>>>>" + result);
            if (JsonUtil.isJSONValid(result)) {
                stringResult = new Result<String>(ResultEnum.SECCUSS, result);
            } else {
                stringResult = new Result<String>(ResultEnum.FAIL, result);
            }
            return stringResult;
    }


}