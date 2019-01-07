package com.redoop.science.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.entity.Views;
import com.redoop.science.entity.ViewsTables;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

/**
 *  视图表mapper接口
 * Created by Administrator on 2018/10/16.
 * 2018年10月16日11:22:37
 */
public interface ViewsTablesMapper extends BaseMapper<ViewsTables> {

    @Select("select * from views_tables where VIEWS_ID=#{viewsId}")
    List<ViewsTables> findByViewsId(String viewsId);

    @Select("select CODE from views_tables where NAME=#{dbName}")
    String findByName(String dbName);

    IPage<ViewsTables> findByRole(Page<ViewsTables> page, @Param("params") Map<String, Object> params);

    IPage<ViewsTables> pageListAdmin(Page<ViewsTables> page);
}
