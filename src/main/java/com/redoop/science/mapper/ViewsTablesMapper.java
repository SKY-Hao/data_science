package com.redoop.science.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.redoop.science.entity.Views;
import com.redoop.science.entity.ViewsTables;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 *  视图表mapper接口
 * Created by Administrator on 2018/10/16.
 * 2018年10月16日11:22:37
 */
public interface ViewsTablesMapper extends BaseMapper<ViewsTables> {

    @Select("select a.id  ,a.name as tablesName, b.* from views_tables a LEFT JOIN views b on a.VIEWS_ID = b.VID")
    List<ViewsTables> allList();
    @Select("select * from views_tables where VIEWS_ID=#{viewsId}")
    List<ViewsTables> findByViewsId(String viewsId);
}
