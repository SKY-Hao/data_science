package com.redoop.science.service;

import com.redoop.science.entity.RealDb;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 实体数据源库 服务类
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */
public interface IRealDbService extends IService<RealDb> {

    RealDb findById(String id);
}
