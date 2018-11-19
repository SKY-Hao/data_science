/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : data_science

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-11-19 10:11:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for analysis
-- ----------------------------
DROP TABLE IF EXISTS `analysis`;
CREATE TABLE `analysis` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(25) DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  `CODE` varchar(4000) DEFAULT NULL COMMENT '编辑器中_保存之前内容',
  `FINALLY_CODE` varchar(4000) DEFAULT NULL COMMENT '编辑器_保存之后内容',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COMMENT='分析';

-- ----------------------------
-- Table structure for analysis_table
-- ----------------------------
DROP TABLE IF EXISTS `analysis_table`;
CREATE TABLE `analysis_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  `ANALYSIS_TYPE` tinyint(11) DEFAULT NULL COMMENT '类型(1-文件夹;2-json)',
  `ANALYSIS_ID` int(11) DEFAULT NULL COMMENT '分析ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='分析表';

-- ----------------------------
-- Table structure for real_db
-- ----------------------------
DROP TABLE IF EXISTS `real_db`;
CREATE TABLE `real_db` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '库名',
  `REMARK` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  `PORT` int(11) DEFAULT NULL COMMENT '端口号',
  `IP` varchar(16) COLLATE utf8_bin DEFAULT NULL COMMENT 'ip地址',
  `DB_TYPE` tinyint(4) DEFAULT NULL COMMENT '数据库类型(1-mysql,2-oracle,3-pg,4-sql server,5-hive,6-redis,7-kafka)',
  `NIKE_NAME` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '别名',
  `DB_NAME` varchar(15) COLLATE utf8_bin DEFAULT NULL COMMENT '数据库用户名',
  `DB_PASSWORD` varchar(15) COLLATE utf8_bin DEFAULT NULL COMMENT '数据库用户密码',
  `LOGO` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '数据库类型图片;根据类型选择',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=197 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='实体数据源库';

-- ----------------------------
-- Table structure for real_db_tables
-- ----------------------------
DROP TABLE IF EXISTS `real_db_tables`;
CREATE TABLE `real_db_tables` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  `RD_ID` int(11) DEFAULT NULL COMMENT '库ID',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='真实数据库表';

-- ----------------------------
-- Table structure for reg_function
-- ----------------------------
DROP TABLE IF EXISTS `reg_function`;
CREATE TABLE `reg_function` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '名称',
  `CODE` varchar(5000) COLLATE utf8_bin DEFAULT NULL COMMENT '函数',
  `REMARK` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='注册函数';

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `PID` int(11) DEFAULT NULL COMMENT '上级部门ID,一级部门为0',
  `NAME` varchar(25) DEFAULT NULL COMMENT '部门名称',
  `ORDER_NUM` int(11) DEFAULT NULL COMMENT '排序',
  `DEL_FLAG` tinyint(4) DEFAULT '0' COMMENT '是否删除-1:已删除;0:正常',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COMMENT='部门管理';

-- ----------------------------
-- Table structure for sys_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_permission`;
CREATE TABLE `sys_permission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL COMMENT '名称',
  `DESCRITPION` varchar(100) DEFAULT NULL COMMENT '备注',
  `URL` varchar(255) DEFAULT NULL COMMENT '链接',
  `PID` varchar(10) DEFAULT NULL COMMENT '父节点',
  `PERMS` varchar(255) DEFAULT NULL COMMENT '授权(多个用逗号分隔，如：user:list,user:create)',
  `TYPE` int(255) DEFAULT NULL COMMENT '类型   0：目录   1：菜单   2：按钮',
  `ICON` varchar(40) DEFAULT NULL COMMENT '菜单图标',
  `ORDER_NUM` int(11) DEFAULT NULL COMMENT '排序',
  `PARENT_ID` int(11) DEFAULT NULL COMMENT '父菜单ID，一级菜单为0',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) DEFAULT NULL COMMENT '权限名',
  `REMARK` varchar(200) DEFAULT NULL COMMENT '备注(注释)',
  `DEPT_ID` int(11) DEFAULT NULL COMMENT '部门ID',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='系统权限';

-- ----------------------------
-- Table structure for sys_role_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `DEPT_ID` int(11) DEFAULT NULL COMMENT '部门ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色与部门对应关系';

-- ----------------------------
-- Table structure for sys_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_permission`;
CREATE TABLE `sys_role_permission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色表ID',
  `PERMISSION_ID` int(11) DEFAULT NULL COMMENT '资源表ID',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NICK_NAME` varchar(30) DEFAULT NULL COMMENT '昵称',
  `REMARK` varchar(200) DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  `EMAIL` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `USERNAME` varchar(30) NOT NULL COMMENT '用户名',
  `PASSWORD` varchar(70) NOT NULL COMMENT '密码',
  `STATUS` tinyint(1) NOT NULL COMMENT '用户状态 0-正常启用 1-停用 2-删除',
  `DEPT_ID` bigint(20) DEFAULT NULL COMMENT '部门ID',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `USER_ID` int(11) NOT NULL COMMENT '用户ID',
  `ROLE_ID` int(11) NOT NULL COMMENT '权限ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='用户权限对应表';

-- ----------------------------
-- Table structure for views
-- ----------------------------
DROP TABLE IF EXISTS `views`;
CREATE TABLE `views` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人标号',
  `CREATOR_NAME` varchar(30) DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8 COMMENT='视图库';

-- ----------------------------
-- Table structure for views_tables
-- ----------------------------
DROP TABLE IF EXISTS `views_tables`;
CREATE TABLE `views_tables` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '视图表名称',
  `REMARK` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  `CODE` varchar(4000) COLLATE utf8_bin DEFAULT NULL COMMENT '编辑器保存内容',
  `VIEWS_ID` int(11) DEFAULT NULL COMMENT '视图库ID',
  `VIEWS_NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '视图库名称',
  PRIMARY KEY (`ID`) USING BTREE,
  KEY `ID` (`VIEWS_ID`),
  CONSTRAINT `ID` FOREIGN KEY (`VIEWS_ID`) REFERENCES `views` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='视图表';

-- ----------------------------
-- Table structure for virtual_tables
-- ----------------------------
DROP TABLE IF EXISTS `virtual_tables`;
CREATE TABLE `virtual_tables` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime DEFAULT NULL COMMENT '操作时间',
  `DB_ID` varchar(4000) COLLATE utf8_bin DEFAULT NULL COMMENT '真实库id',
  `DB_NAME` varchar(4000) COLLATE utf8_bin DEFAULT NULL COMMENT '真实库名称',
  `CODE` varchar(4000) COLLATE utf8_bin DEFAULT NULL COMMENT '查询内容',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='虚拟表';
