package com.redoop.science.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;


/**
 * @Author: admin
 * @Time: 2018年11月6日15:20:42
 * @Description: 角色与部门
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysRoleDept implements Serializable {

	private static final long serialVersionUID = 1L;

	@TableField("ID")
	private Integer id;

	/**
	 * 角色ID
	 */
	@TableField("ROLE_ID")
	private Integer roleId;

	/**
	 * 部门ID
	 */
	@TableField("DEPT_ID")
	private Integer deptId;


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public Integer getDeptId() {
		return deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}
}
