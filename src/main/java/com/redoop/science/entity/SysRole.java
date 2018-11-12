package com.redoop.science.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.security.core.GrantedAuthority;

import javax.validation.constraints.NotEmpty;

/**
 * @Author: Alan
 * @Time: 2018/10/26 15:42
 * @Description: 系统角色
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysRole implements GrantedAuthority {

    /**
     * 编号
     */
    @TableField("ID")
    private Integer id;
    /**
     * 库名
     */
    @NotEmpty(message="角色名不能为空")
    @TableField("NAME")
    private String name;

    @Override
    public String getAuthority() {
        return name;
    }
}
