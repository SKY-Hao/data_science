/*
Navicat MySQL Data Transfer

Source Server         : 192.168.0.122
Source Server Version : 50723
Source Host           : 192.168.0.122:3306
Source Database       : data_science

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2018-11-19 16:52:50
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
-- Records of analysis
-- ----------------------------

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
-- Records of analysis_table
-- ----------------------------

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
-- Records of real_db
-- ----------------------------

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
-- Records of real_db_tables
-- ----------------------------

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
-- Records of reg_function
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COMMENT='部门管理';

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES ('1', '0', '红象云腾', '0', '0');
INSERT INTO `sys_dept` VALUES ('2', '1', '财务部', '1', '0');
INSERT INTO `sys_dept` VALUES ('3', '1', '技术部', '2', '0');
INSERT INTO `sys_dept` VALUES ('4', '1', '销售部', '4', '0');
INSERT INTO `sys_dept` VALUES ('5', '1', '产品部', '5', '0');
INSERT INTO `sys_dept` VALUES ('6', '1', '董事会', '0', '0');
INSERT INTO `sys_dept` VALUES ('26', '3', '研发部门', '0', '0');
INSERT INTO `sys_dept` VALUES ('27', '3', '测试部门', '0', '0');

-- ----------------------------
-- Table structure for sys_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_permission`;
CREATE TABLE `sys_permission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) DEFAULT NULL COMMENT '名称',
  `DESCRIPTION` varchar(100) DEFAULT NULL COMMENT '备注',
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
-- Records of sys_permission
-- ----------------------------
INSERT INTO `sys_permission` VALUES ('1', '系统管理', null, null, null, null, '0', 'fa fa-cog', '0', '0');
INSERT INTO `sys_permission` VALUES ('2', '菜单管理', null, '/sys/permission/list', null, null, '1', 'fa fa-th-list', '1', '1');
INSERT INTO `sys_permission` VALUES ('3', '部门管理', null, '/sys/dept/list', null, null, '1', 'fa fa-th-list', '2', '1');
INSERT INTO `sys_permission` VALUES ('4', '角色管理', null, '/sys/role/list', null, null, '1', 'fa fa-th-list', '3', '1');
INSERT INTO `sys_permission` VALUES ('5', '用户管理', null, '/sys/user/list', null, null, '1', 'fa fa-th-list', '4', '1');
INSERT INTO `sys_permission` VALUES ('6', '查询', null, '/virtual/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('7', '视图', null, '/viewsTables/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('8', '函数', null, '/function/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('9', '分析', null, '/analysis/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('10', '数据源', null, '/real/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('11', '视图库管理', null, '/views/1', null, null, '1', 'fa fa-th-list', '5', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='系统权限';

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', '董事长', '董事会', '1', '2018-11-19 16:10:36');
INSERT INTO `sys_role` VALUES ('2', 'java开发', 'java人员', '26', '2018-11-19 16:14:26');
INSERT INTO `sys_role` VALUES ('3', '开发测试', '测试人员', '27', '2018-11-19 16:15:05');
INSERT INTO `sys_role` VALUES ('4', '财务总监', '财务总监', '2', '2018-11-19 16:16:27');
INSERT INTO `sys_role` VALUES ('5', '销售总监', '销售总监', '4', '2018-11-19 16:16:46');
INSERT INTO `sys_role` VALUES ('6', '产品总监', '产品总监', '5', '2018-11-19 16:17:04');
INSERT INTO `sys_role` VALUES ('7', '管理员', '系统管理', '1', '2018-11-19 16:29:20');

-- ----------------------------
-- Table structure for sys_role_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `DEPT_ID` int(11) DEFAULT NULL COMMENT '部门ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COMMENT='角色与部门对应关系';

-- ----------------------------
-- Records of sys_role_dept
-- ----------------------------
INSERT INTO `sys_role_dept` VALUES ('1', '43', '1');
INSERT INTO `sys_role_dept` VALUES ('2', '43', '3');
INSERT INTO `sys_role_dept` VALUES ('3', '43', '26');
INSERT INTO `sys_role_dept` VALUES ('6', '44', '27');
INSERT INTO `sys_role_dept` VALUES ('8', '46', '4');
INSERT INTO `sys_role_dept` VALUES ('9', '47', '5');
INSERT INTO `sys_role_dept` VALUES ('10', '3', '27');
INSERT INTO `sys_role_dept` VALUES ('11', '1', '1');
INSERT INTO `sys_role_dept` VALUES ('12', '1', '2');
INSERT INTO `sys_role_dept` VALUES ('13', '1', '3');
INSERT INTO `sys_role_dept` VALUES ('14', '1', '26');
INSERT INTO `sys_role_dept` VALUES ('15', '1', '27');
INSERT INTO `sys_role_dept` VALUES ('16', '1', '4');
INSERT INTO `sys_role_dept` VALUES ('17', '1', '5');
INSERT INTO `sys_role_dept` VALUES ('18', '1', '6');
INSERT INTO `sys_role_dept` VALUES ('19', '45', '2');
INSERT INTO `sys_role_dept` VALUES ('20', '48', '1');
INSERT INTO `sys_role_dept` VALUES ('21', '48', '2');
INSERT INTO `sys_role_dept` VALUES ('22', '48', '3');
INSERT INTO `sys_role_dept` VALUES ('23', '48', '26');
INSERT INTO `sys_role_dept` VALUES ('24', '48', '27');
INSERT INTO `sys_role_dept` VALUES ('25', '48', '4');
INSERT INTO `sys_role_dept` VALUES ('26', '48', '5');
INSERT INTO `sys_role_dept` VALUES ('27', '48', '6');
INSERT INTO `sys_role_dept` VALUES ('35', '2', '3');
INSERT INTO `sys_role_dept` VALUES ('36', '2', '26');
INSERT INTO `sys_role_dept` VALUES ('37', '2', '27');
INSERT INTO `sys_role_dept` VALUES ('38', '7', '1');
INSERT INTO `sys_role_dept` VALUES ('39', '7', '2');
INSERT INTO `sys_role_dept` VALUES ('40', '7', '3');
INSERT INTO `sys_role_dept` VALUES ('41', '7', '26');
INSERT INTO `sys_role_dept` VALUES ('42', '7', '27');
INSERT INTO `sys_role_dept` VALUES ('43', '7', '4');
INSERT INTO `sys_role_dept` VALUES ('44', '7', '5');
INSERT INTO `sys_role_dept` VALUES ('45', '7', '6');

-- ----------------------------
-- Table structure for sys_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_permission`;
CREATE TABLE `sys_role_permission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色表ID',
  `PERMISSION_ID` int(11) DEFAULT NULL COMMENT '资源表ID',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=187 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of sys_role_permission
-- ----------------------------
INSERT INTO `sys_role_permission` VALUES ('1', '3', '1');
INSERT INTO `sys_role_permission` VALUES ('2', '3', '6');
INSERT INTO `sys_role_permission` VALUES ('3', '3', '7');
INSERT INTO `sys_role_permission` VALUES ('4', '3', '8');
INSERT INTO `sys_role_permission` VALUES ('5', '3', '9');
INSERT INTO `sys_role_permission` VALUES ('6', '3', '10');
INSERT INTO `sys_role_permission` VALUES ('7', '3', '11');
INSERT INTO `sys_role_permission` VALUES ('8', '1', '2');
INSERT INTO `sys_role_permission` VALUES ('9', '1', '3');
INSERT INTO `sys_role_permission` VALUES ('10', '1', '4');
INSERT INTO `sys_role_permission` VALUES ('11', '1', '5');
INSERT INTO `sys_role_permission` VALUES ('12', '1', '6');
INSERT INTO `sys_role_permission` VALUES ('13', '1', '7');
INSERT INTO `sys_role_permission` VALUES ('14', '1', '8');
INSERT INTO `sys_role_permission` VALUES ('15', '1', '9');
INSERT INTO `sys_role_permission` VALUES ('16', '1', '10');
INSERT INTO `sys_role_permission` VALUES ('17', '1', '11');
INSERT INTO `sys_role_permission` VALUES ('18', '2', '6');
INSERT INTO `sys_role_permission` VALUES ('19', '2', '7');
INSERT INTO `sys_role_permission` VALUES ('20', '2', '8');
INSERT INTO `sys_role_permission` VALUES ('21', '2', '9');
INSERT INTO `sys_role_permission` VALUES ('22', '2', '10');
INSERT INTO `sys_role_permission` VALUES ('23', '2', '11');
INSERT INTO `sys_role_permission` VALUES ('24', '7', '1');
INSERT INTO `sys_role_permission` VALUES ('25', '7', '2');
INSERT INTO `sys_role_permission` VALUES ('26', '7', '3');
INSERT INTO `sys_role_permission` VALUES ('27', '7', '4');
INSERT INTO `sys_role_permission` VALUES ('28', '7', '5');
INSERT INTO `sys_role_permission` VALUES ('29', '7', '6');
INSERT INTO `sys_role_permission` VALUES ('30', '7', '7');
INSERT INTO `sys_role_permission` VALUES ('31', '7', '8');
INSERT INTO `sys_role_permission` VALUES ('32', '7', '9');
INSERT INTO `sys_role_permission` VALUES ('33', '7', '10');
INSERT INTO `sys_role_permission` VALUES ('34', '7', '11');

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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('1', 'admin', null, '1', null, '2018-11-19 16:31:01', '1', null, 'huangtianhao@redoop.com', 'admin', '$2a$10$iQO1LH9vNmgILmpUPW6XB.JBmdGAy9ecx/rYYmkSzsHG5hgkGIcdW', '0', '1');

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `USER_ID` int(11) NOT NULL COMMENT '用户ID',
  `ROLE_ID` int(11) NOT NULL COMMENT '权限ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='用户权限对应表';

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES ('1', '1');

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
-- Records of views
-- ----------------------------

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
-- Records of views_tables
-- ----------------------------

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

-- ----------------------------
-- Records of virtual_tables
-- ----------------------------
