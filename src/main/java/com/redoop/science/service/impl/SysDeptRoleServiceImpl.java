package com.redoop.science.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.redoop.science.entity.SysDeptRole;
import com.redoop.science.entity.SysRole;
import com.redoop.science.mapper.SysDeptRoleMapper;
import com.redoop.science.mapper.SysRoleMapper;
import com.redoop.science.service.ISysDeptRoleService;
import com.redoop.science.service.ISysRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  部门 服务实现类
 * </p>
 *
 * @author admin
 * @since 2018年11月6日15:33:15
 */
@Service
public class SysDeptRoleServiceImpl extends ServiceImpl<SysDeptRoleMapper, SysDeptRole> implements ISysDeptRoleService {

    @Autowired
    SysDeptRoleMapper deptRoleMapper;
}
