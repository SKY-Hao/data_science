package com.redoop.science.mapper;

import com.redoop.science.entity.SysPermission;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author Alan
 * @since 2018-11-05
 */
public interface SysPermissionMapper extends BaseMapper<SysPermission> {


    @Select("select * from sys_permission where TYPE != 2 order by ORDER_NUM asc ")
    List<SysPermission> findNotButtonList();

    @Select("select * from sys_permission where PARENT_ID = #{id} order by ORDER_NUM asc")
    List<SysPermission> findListParentId(Integer id);

    @Select("select * from sys_permission where TYPE = 1")
    List<SysPermission> findTypeList();
}
