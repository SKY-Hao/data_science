package com.redoop.science.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.redoop.science.entity.Analysis;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author admin
 * @since 2018-09-26
 */
public interface IAnalysisService extends IService<Analysis> {


    String getId(Integer id);
}
