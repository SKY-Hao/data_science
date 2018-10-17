package com.redoop.science.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.redoop.science.dto.ViewsDto;
import com.redoop.science.entity.Views;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 视图库 Mapper接口
 * Created by Administrator on 2018/10/16.
 */

public interface ViewsMapper extends BaseMapper<Views> {


    List<ViewsDto> findViewsTables();

    @Select("select NAME from views where NAME = #{name}")
    Views findByName(String name);
}
