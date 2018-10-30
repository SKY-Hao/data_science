package com.redoop.science.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.redoop.science.entity.Analysis;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author admin
 * @since 2018-09-26
 */
@Mapper
public interface AnalysisMapper extends BaseMapper<Analysis> {

    @Select("select FINALLY_CODE from  analysis WHERE ID = #{id} ")
    String findByCode(Integer id);
}
