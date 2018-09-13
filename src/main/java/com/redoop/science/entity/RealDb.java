package com.redoop.science.entity;

import java.time.LocalDateTime;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;

import lombok.*;
import lombok.experimental.Accessors;

/**
 * <p>
 * 实体数据源库
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@Getter
@Setter
@Value
public class RealDb implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 编号
     */
    @TableField("ID")
    private Integer id;

    /**
     * 库名
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
    private LocalDateTime createDate;

    /**
     * 操作人编号
     */
    @TableField("OPERATION_ID")
    private Integer operationId;

    /**
     * 操作时间
     */
    @TableField("OPERATION_TIME")
    private LocalDateTime operationTime;

    /**
     * 端口号
     */
    @TableField("PORT")
    private Integer port;

    /**
     * ip地址
     */
    @TableField("IP")
    private String ip;

    /**
     * 数据库类型(1-mysql,2-oracle,3-pg,4-sql server,5-hive,6-redis,7-kafka)
     */
    @TableField("DB_TYPE")
    private Integer dbType;

    /**
     * 别名
     */
    @TableField("NIKE_NAME")
    private String nikeName;


}
