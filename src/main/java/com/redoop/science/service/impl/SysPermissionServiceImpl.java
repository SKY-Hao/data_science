package com.redoop.science.service.impl;

import com.redoop.science.entity.SysPermission;
import com.redoop.science.mapper.SysPermissionMapper;
import com.redoop.science.service.ISysPermissionService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author Alan
 * @since 2018-11-05
 */
@Service
public class SysPermissionServiceImpl extends ServiceImpl<SysPermissionMapper, SysPermission> implements ISysPermissionService {

    @Autowired
    SysPermissionMapper sysPermissionMapper;

    @Override
    public List<SysPermission> getNotButtonList() {
        return sysPermissionMapper.findNotButtonList();
    }

    @Override
    public List<SysPermission> getListParentId(Integer id) {
        return sysPermissionMapper.findListParentId(id);
    }

    @Override
    public List<SysPermission> getTpyeList() {
        return sysPermissionMapper.findTypeList();
    }
}
