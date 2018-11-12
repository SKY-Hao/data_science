package com.redoop.science.dto;

import com.redoop.science.entity.SysRole;
import com.redoop.science.entity.SysUser;

import java.util.List;

/**
 * @Author: Alan
 * @Time: 2018/10/30 10:32
 * @Description:
 */
public class SysUserDto extends SysUser {
    private List<SysRole> roles;

    public List<SysRole> getRoles() {
        return roles;
    }

    public void setRoles(List<SysRole> roles) {
        this.roles = roles;
    }
}
