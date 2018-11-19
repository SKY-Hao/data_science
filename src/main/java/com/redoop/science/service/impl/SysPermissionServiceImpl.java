package com.redoop.science.service.impl;

import com.redoop.science.dto.sys.SysPermissionDto;
import com.redoop.science.entity.SysPermission;
import com.redoop.science.mapper.SysPermissionMapper;
import com.redoop.science.service.ISysPermissionService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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



    @Override
    public List<SysPermission> getNotButtonList() {
        return baseMapper.findNotButtonList();
    }

    @Override
    public List<SysPermission> getListParentId(Integer id) {
        return baseMapper.findListParentId(id);
    }

    @Override
    public List<SysPermission> getTpyeList() {
        return baseMapper.findTypeList();
    }

    @Override
    public List<SysPermissionDto> getSysPermissionDto() {
        return baseMapper.findListPermissionDto();
    }
}
