package com.redoop.science.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 用户权限对应表
 * </p>
 *
 * @author Alan
 * @since 2018-10-29
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysUserRole implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户ID
     */
    @TableField("USER_ID")
    private Integer userId;

    /**
     * 权限ID
     */
    @TableField("ROLE_ID")
    private Integer roleId;


}
