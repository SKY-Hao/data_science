package com.redoop.science.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.redoop.science.dto.ViewsDto;
import com.redoop.science.entity.Views;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 视图库 Mapper接口
 * Created by Administrator on 2018/10/16.
 */

public interface ViewsMapper extends BaseMapper<Views> {

    /*@Select("select NIKE_NAME from real_db where NIKE_NAME = #{NIKE_NAME}")*/
    //@Select("select a.id  as id ,a.name as tablesName, b.* from views_tables a LEFT JOIN views b on a.VIEWS_ID = b.VID")
    List<Views> allList();
    List<ViewsDto> findViewsTables();
}
