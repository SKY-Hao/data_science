package com.redoop.science.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.redoop.science.dto.ViewsDto;
import com.redoop.science.entity.Views;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

/**
 * 视图库 Mapper接口
 * Created by Administrator on 2018/10/16.
 */

public interface ViewsMapper extends BaseMapper<Views> {


    List<ViewsDto> findViewsTables();

    IPage<Views> findByRole(Page<Views> page,@Param("params")Map<String, Object> params);

    /*@Select("SELECT a.* FROM views a " +
            "LEFT JOIN sys_role_view b ON a.ID = b.VIEW_ID " +
            "LEFT JOIN sys_user_role c ON b.ROLE_ID = c.ROLE_ID  " +
            "WHERE c.USER_ID = #{id} AND a.ID IS NOT NULL")*/
    List<ViewsDto> findById(Integer id);

    IPage<Views> pageListAdmin(Page<Views> page);
}
