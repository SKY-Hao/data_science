package com.redoop.science.service;

import com.redoop.science.entity.RealDb;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 实体数据源库 服务类
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */
public interface IRealDbService extends IService<RealDb> {

    /**
     * 增加
     * @param realDb
     */
    void saveForm(RealDb realDb);

    /**
     * 查看库中的表信息
     */
    List<RealDb> selectDatabase();

    /**
     * 根据数据源别名查询
     * @param nikeName
     * @return
     */
    RealDb findByNikeName(String nikeName);
}
