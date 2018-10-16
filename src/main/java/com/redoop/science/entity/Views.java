package com.redoop.science.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 视图库
 *
 * @author Admin
 * @date 2018/10/16
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@Setter
@Getter
public class Views  implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 编号
     */
    @TableField("VID")
    private Integer Vid;

    /**
     * 名称
     */
    @TableField("NAME")
    private String name;

    /**
     * 注释
     */
    @TableField("REMARK")
    private String remark;

    /**
     * 创建人编号
     */
    @TableField("CREATOR_ID")
    private Integer creatorId;

    /**
     * 创建人姓名
     */
    @TableField("CREATOR_NAME")
    private String creatorName;

    /**
     * 创建日期
     */
    @TableField("CREATE_DATE")
    private Date createDate;

    /**
     * 操作人编号
     */
    @TableField("OPERATION_ID")
    private Integer operationId;

    /**
     * 操作时间
     */
    @TableField("OPERATION_TIME")
    private Date operationTime;


    //一对多(视图表)
    //private List<ViewsTables> viewsTablesList;
    private ViewsTables viewsTables;
}
