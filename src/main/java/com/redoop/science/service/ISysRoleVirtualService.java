package com.redoop.science.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.redoop.science.entity.SysRoleVirtualTables;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author admin
 * @since 2018年11月22日12:24:59
 */
public interface ISysRoleVirtualService extends IService<SysRoleVirtualTables> {

    List<Long> queryVirtualIdList(Long id);

    int deleteBatch(Long[] longs);
}
