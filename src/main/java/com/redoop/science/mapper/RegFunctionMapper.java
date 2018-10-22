package com.redoop.science.mapper;

import com.redoop.science.entity.RegFunction;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * 注册函数 Mapper 接口
 * </p>
 *
 * @author Alan
 * @since 2018-10-16
 */
public interface RegFunctionMapper extends BaseMapper<RegFunction> {

    @Select("select CODE from reg_function where NAME =#{name} ")
    String findByName(String name);
}
