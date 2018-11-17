package com.redoop.science.service;

import com.redoop.science.entity.SysPermission;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author Alan
 * @since 2018-11-05
 */
public interface ISysPermissionService extends IService<SysPermission> {

    List<SysPermission> getNotButtonList();

    List<SysPermission> getListParentId(Integer id);

    List<SysPermission> getTpyeList();
}
