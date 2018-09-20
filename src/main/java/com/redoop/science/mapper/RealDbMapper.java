package com.redoop.science.mapper;

import com.redoop.science.entity.RealDb;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * 实体数据源库 Mapper 接口
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */

@Mapper
public interface RealDbMapper extends BaseMapper<RealDb> {

    /**
     * 根据数据源别名查询
     * @param nikeName
     * @return
     */
    @Select("select NIKE_NAME from real_db where NIKE_NAME = #{NIKE_NAME}")
    RealDb findByNikeName(String nikeName);
}
