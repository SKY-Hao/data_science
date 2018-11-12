package com.redoop.science.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.List;


/**
 * 部门管理
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2017-06-20 15:23:47
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
public class SysDept implements Serializable {

	private static final long serialVersionUID = 1L;
	

	@TableId(value = "ID", type = IdType.AUTO)
	private Integer id;

	/**
	 *上级部门ID，一级部门为0
	 */
	@TableField("PID")
	private Long PID;

	/**
	 * 名称
	 */
	@TableField("NAME")
	private String name;


	/**
	 * 排序
	 */
	@TableField("ORDER_NUM")
	private Integer orderNum;

	/**
	 * 是否删除-1:已删除;0:正常
	 */
	@TableField("DEL_FLAG")
	private Integer delFlag;

	/**
	 * ZTree属性
	 */
	@TableField(exist=false)
	private Boolean open;


	/**
	 *上级部门名称
	 */
	@TableField(exist=false)
	private String parentName;

	@TableField(exist=false)
	private List<?> list;



}
