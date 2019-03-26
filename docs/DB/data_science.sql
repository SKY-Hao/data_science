/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : data_science

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2019-03-18 17:59:49
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='分析';

-- ----------------------------
-- Records of analysis
-- ----------------------------
INSERT INTO `analysis` VALUES ('3', 'analysis', null, '1', 'admin', '2018-12-27 15:37:37', '1', '2019-01-21 17:57:52', 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test; load jdbc.`test.test` as test;select * from test as test;\n-- connect jdbc where driver=\"com.mysql.jdbc.Driver\"\n-- and url=\"jdbc:mysql://192.168.0.229:3306/test\"\n-- and user=\"root\"\n-- and password=\"\"\n-- as qqq;\n-- save overwrite test \n-- 	as jdbc.`qqq.test`\n-- 	options truncate= \"true\";', 'select * from `test.test` as test;\n-- connect jdbc where driver=\"com.mysql.jdbc.Driver\"\n-- and url=\"jdbc:mysql://192.168.0.229:3306/test\"\n-- and user=\"root\"\n-- and password=\"\"\n-- as qqq;\n-- save overwrite test \n-- 	as jdbc.`qqq.test`\n-- 	options truncate= \"true\";');
INSERT INTO `analysis` VALUES ('4', 'qwe', null, '1', 'admin', '2019-01-04 15:09:16', '1', '2019-01-04 15:29:01', 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test; load jdbc.`test.test1234` as test1234;select * from test1234 as test;\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\nand url=\"jdbc:mysql://192.168.0.229:3306/test0104\"\nand user=\"root\"\nand password=\"\"\nas qqq;\nsave overwrite test \n	as jdbc.`qqq.test1234`\n	options truncate= \"true\";', 'select * from `test.test1234` as test;\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\nand url=\"jdbc:mysql://192.168.0.229:3306/test0104\"\nand user=\"root\"\nand password=\"\"\nas qqq;\nsave overwrite test \n	as jdbc.`qqq.test1234`\n	options truncate= \"true\";');
INSERT INTO `analysis` VALUES ('6', 'aaa', null, '1', 'admin', '2019-01-07 18:35:46', '1', null, 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.0.26:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as student; load jdbc.`student.student` as student;select * from student as student;\n\nconnect jdbc where driver=\"org.apache.hive.jdbc.HiveDriver\"\nand url=\"jdbc:hive2://192.168.0.26:10000/ods\"\nand user=\"root\"\nand password=\"\"\nas hiveaaa;\n\nsave overwrite student \n	as jdbc.`hiveaaa.student`\n	options truncate= \"true\";', 'select * from `student.student` as student;\n\nconnect jdbc where driver=\"org.apache.hive.jdbc.HiveDriver\"\nand url=\"jdbc:hive2://192.168.0.26:10000/ods\"\nand user=\"root\"\nand password=\"\"\nas hiveaaa;\n\nsave overwrite student \n	as jdbc.`hiveaaa.student`\n	options truncate= \"true\";');
INSERT INTO `analysis` VALUES ('7', 'aaaaaaa', null, '1', 'admin', '2019-01-08 10:17:00', '1', '2019-01-08 10:19:52', 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test; load jdbc.`test.test` as test;select * from test as test;\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\nand url=\"jdbc:mysql://192.168.1.194:3306/aaa\"\nand user=\"root\"\nand password=\"root\"\nas qqq;\nsave overwrite test \n	as jdbc.`qqq.test`\n	options truncate= \"true\";', 'select * from `test.test` as test;\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\nand url=\"jdbc:mysql://192.168.1.194:3306/aaa\"\nand user=\"root\"\nand password=\"root\"\nas qqq;\nsave overwrite test \n	as jdbc.`qqq.test`\n	options truncate= \"true\";');
INSERT INTO `analysis` VALUES ('8', 'parameter', null, '1', 'admin', '2019-01-08 15:25:30', '1', '2019-01-10 11:49:12', 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test; load jdbc.`test.t_data_element` as t_data_element;load jdbc.`test.test` as test;-- select * from test as output;\r\n-- set start = `select (\'lisi\') `\r\n-- options type = \"sql\"; \r\n\r\n-- select \"${start}\" as  start  as oup;\r\n-- select  * from output where name = \'${start}\' as ss;\r\n\r\n\r\n\r\n-- select * from test as output;\r\n-- set start = `select timestamp(\'&start\') `\r\n-- options type = \"sql\"; \r\n-- -- set end = `select timestamp(\'&end\')  `\r\n-- set end = `select now()  `\r\n-- options type = \"sql\";\r\n-- select \"${start}\" as  start , \"${end}\" as end as oup;\r\n-- select  * from output where time BETWEEN \'${start}\' and \'${end}\' as ss;\r\n\r\nselect * from t_data_element as output;\r\n\r\n-- set start = `select date_sub(curdate(),interval 1 day) `\r\n-- options type = \"sql\"; \r\n\r\nset end = `select  DATE_FORMAT(NOW(),\'yyyy-MM-dd\')  `\r\noptions type = \"sql\";\r\nselect \"${end}\" as  end  as oup;\r\nselect  * from output where creatTime =\'${end}\' as sss;\r\n\r\n\r\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\r\nand url=\"jdbc:mysql://192.168.0.84:3307/huangtianhao\"\r\nand user=\"root\"\r\nand password=\"\"\r\nas qqqsad;\r\n\r\nsave overwrite sss \r\n	as jdbc.`qqqsad.t_data_element`\r\n	options truncate= \"false\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n', '-- select * from `test.test` as output;\r\n-- set start = `select (\'lisi\') `\r\n-- options type = \"sql\"; \r\n\r\n-- select \"${start}\" as  start  as oup;\r\n-- select  * from output where name = \'${start}\' as ss;\r\n\r\n\r\n\r\n-- select * from `test.test` as output;\r\n-- set start = `select timestamp(\'&start\') `\r\n-- options type = \"sql\"; \r\n-- -- set end = `select timestamp(\'&end\')  `\r\n-- set end = `select now()  `\r\n-- options type = \"sql\";\r\n-- select \"${start}\" as  start , \"${end}\" as end as oup;\r\n-- select  * from output where time BETWEEN \'${start}\' and \'${end}\' as ss;\r\n\r\nselect * from `test.t_data_element` as output;\r\n\r\n-- set start = `select date_sub(curdate(),interval 1 day) `\r\n-- options type = \"sql\"; \r\n\r\nset end = `select  DATE_FORMAT(NOW(),\'yyyy-MM-dd\')  `\r\noptions type = \"sql\";\r\nselect \"${end}\" as  end  as oup;\r\nselect  * from output where creatTime =\'${end}\' as sss;\r\n\r\n\r\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\r\nand url=\"jdbc:mysql://192.168.0.84:3307/huangtianhao\"\r\nand user=\"root\"\r\nand password=\"\"\r\nas qqqsad;\r\n\r\nsave overwrite sss \r\n	as jdbc.`qqqsad.t_data_element`\r\n	options truncate= \"false\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n');
INSERT INTO `analysis` VALUES ('9', 't_data_element_rule', null, '1', 'admin', '2019-01-09 17:18:46', '1', '2019-02-25 17:00:35', 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test; load jdbc.`test.t_data_element_rule` as t_data_element_rule;select * from t_data_element_rule as t_data_element_rule;\n\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\nand url=\"jdbc:mysql://192.168.0.229:3306/test_data\"\nand user=\"root\"\nand password=\"\"\nas t_data_element_rule;\n\nsave overwrite t_data_element_rule \n	as jdbc.`t_data_element_rule.t_data_element_rule`\n	options truncate= \"true\";', 'select * from `test.t_data_element_rule` as t_data_element_rule;\n\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\nand url=\"jdbc:mysql://192.168.0.229:3306/test_data\"\nand user=\"root\"\nand password=\"\"\nas t_data_element_rule;\n\nsave overwrite t_data_element_rule \n	as jdbc.`t_data_element_rule.t_data_element_rule`\n	options truncate= \"true\";');
INSERT INTO `analysis` VALUES ('10', 't_data_element', null, '1', 'admin', '2019-01-09 17:19:25', '1', '2019-03-08 15:43:02', 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test; load jdbc.`test.t_data_element` as t_data_element;select * from t_data_element as t_data_element;\n\n', 'select * from `test.t_data_element` as t_data_element;\n\n');

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
-- Table structure for process
-- ----------------------------
DROP TABLE IF EXISTS `process_g6`;
CREATE TABLE `process_g6` (
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='G6Editor';

-- ----------------------------
-- Records of process
-- ----------------------------
INSERT INTO `process_g6` VALUES ('11', 'test_process', null, null, null, null, null, null, 'SELECT * FROM B;', 'SELECT * FROM A;');

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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='实体数据源库';

-- ----------------------------
-- Records of real_db
-- ----------------------------
INSERT INTO `real_db` VALUES ('3', 'test', null, null, 'admin', '2018-12-06 10:29:15', null, '2018-12-06 10:29:15', '3306', '192.168.1.194', '1', 'test', 'root', 'root', ' /img/realDb/1.jpg');
INSERT INTO `real_db` VALUES ('5', 'orcl', null, null, 'admin', '2018-12-06 13:58:46', null, '2018-12-06 13:58:46', '1521', '192.168.1.194', '2', 'oracle', 'SCOTT', 'redoop', ' /img/realDb/2.jpg');
INSERT INTO `real_db` VALUES ('21', '43', null, null, 'admin', '2018-12-27 15:51:06', null, '2018-12-27 15:51:06', '43', '34', '1', 'redoop', '43', '43', ' /img/realDb/1.jpg');
INSERT INTO `real_db` VALUES ('23', 'default', null, null, 'admin', '2018-12-27 18:28:23', null, '2018-12-27 18:28:23', '10009', '192.168.0.84', '8', 'l_test', 'root', '', ' /img/realDb/8.jpg');
INSERT INTO `real_db` VALUES ('25', 'ANTSDB', null, null, 'admin', '2019-01-03 11:59:40', null, '2019-01-03 11:59:40', '3306', '192.168.0.229', '1', 'ANTSDB', 'root', '', ' /img/realDb/1.jpg');
INSERT INTO `real_db` VALUES ('26', 'ods', null, null, 'admin', '2019-01-04 15:49:17', null, '2019-01-04 15:49:17', '10000', '192.168.0.26', '5', 'hive_student', 'root', '', ' /img/realDb/5.jpg');
INSERT INTO `real_db` VALUES ('27', 'test', null, null, 'admin', '2019-01-07 18:31:29', null, '2019-01-07 18:31:29', '3306', '192.168.0.26', '1', 'student', 'root', 'root', ' /img/realDb/1.jpg');
INSERT INTO `real_db` VALUES ('28', 'huangtianhao', null, null, 'admin', '2019-01-08 15:25:01', null, '2019-01-08 15:25:01', '3307', '192.168.0.84', '1', 'test2', 'root', '', ' /img/realDb/1.jpg');
INSERT INTO `real_db` VALUES ('29', 'Redoop', null, null, 'admin', '2019-03-12 11:32:02', null, '2019-03-12 11:32:02', '1433', '192.168.1.160', '4', 'sqlServer', 'sa', '123456qwer.*', ' /img/realDb/4.jpg');

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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='真实数据库表';

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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='注册函数';

-- ----------------------------
-- Records of reg_function
-- ----------------------------
INSERT INTO `reg_function` VALUES ('3', 'function', null, null, '1', 'admin', '2018-12-27 15:38:28', null, null);
INSERT INTO `reg_function` VALUES ('4', 'as', null, null, '2', 'redoop', '2019-01-02 16:54:59', null, null);
INSERT INTO `reg_function` VALUES ('5', 'asd', null, null, '2', 'redoop', '2019-01-02 17:05:56', null, null);
INSERT INTO `reg_function` VALUES ('6', 'plusFun', 'set plusFun=\'\'\'\n\ndef apply(a:Double,b:Double)={\n   a + b\n}\n\ndef hello(a:String)={\n   s\"hello: ${a}\"\n}\n\'\'\';\n\n\nload script.`plusFun` as scriptTable;\nregister ScriptUDF.`scriptTable` as plusFun;\nregister ScriptUDF.`scriptTable` as helloFun\noptions methodName=\"hello\"\n;', null, '1', 'admin', '2019-01-08 19:56:00', null, null);
INSERT INTO `reg_function` VALUES ('7', 'zzzasdasdasd', '欢迎使用sadsdsdasd', null, '2', 'redoop', '2019-01-02 17:58:33', null, null);
INSERT INTO `reg_function` VALUES ('8', 'x', null, null, '2', 'redoop', '2019-01-02 17:58:39', null, null);
INSERT INTO `reg_function` VALUES ('9', 'asddf', null, null, '2', 'redoop', '2019-01-03 09:49:56', null, null);
INSERT INTO `reg_function` VALUES ('10', 'sdqw', null, null, '1', 'admin', '2019-01-04 15:09:26', null, null);
INSERT INTO `reg_function` VALUES ('11', 'asdqwewq', '欢迎使用asd', null, '1', 'admin', '2019-01-08 19:25:42', null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='部门管理';

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES ('1', '0', '红象云腾', '0', '0');
INSERT INTO `sys_dept` VALUES ('2', '1', '财务部', '1', '0');
INSERT INTO `sys_dept` VALUES ('3', '1', '技术部', '2', '0');
INSERT INTO `sys_dept` VALUES ('4', '1', '销售部', '4', '0');
INSERT INTO `sys_dept` VALUES ('5', '1', '产品部', '5', '0');
INSERT INTO `sys_dept` VALUES ('6', '1', '董事会', '0', '0');
INSERT INTO `sys_dept` VALUES ('7', '3', '研发部', '0', '0');
INSERT INTO `sys_dept` VALUES ('8', '3', '测试部', '0', '0');
INSERT INTO `sys_dept` VALUES ('9', '5', 'test部门', '0', '0');

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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_permission
-- ----------------------------
INSERT INTO `sys_permission` VALUES ('1', '系统管理', null, null, null, null, '0', 'fa fa-cog', '0', '0');
INSERT INTO `sys_permission` VALUES ('6', '分析', null, '/analysis/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('7', '视图', null, '/viewsTables/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('8', '函数', null, '/function/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('9', '查询', null, '/virtual/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('10', '数据源', null, '/real/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('11', '视图库管理', null, '/views/1', null, null, '1', 'fa fa-th-list', '5', '1');
INSERT INTO `sys_permission` VALUES ('22', '菜单管理', null, '/sys/permission/list', null, null, '1', 'fa fa-th-list', '100', '1');
INSERT INTO `sys_permission` VALUES ('23', '部门管理', null, '/sys/dept/list', null, null, '1', 'fa fa-th-list', '2', '1');
INSERT INTO `sys_permission` VALUES ('24', '角色管理', null, '/sys/role/list', null, null, '1', 'fa fa-th-list', '3', '1');
INSERT INTO `sys_permission` VALUES ('25', '用户管理', null, '/sys/user/list', null, null, '1', 'fa fa-th-list', '4', '1');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) DEFAULT NULL COMMENT '权限名',
  `REMARK` varchar(200) DEFAULT NULL COMMENT '备注(注释)',
  `DEPT_ID` int(11) DEFAULT NULL COMMENT '部门ID',
  `CREATE_DATE` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='系统权限';

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', '系统管理员', '董事会', '6', '2019-02-25 14:26:58');
INSERT INTO `sys_role` VALUES ('2', '管理员', '系统管理', '6', '2019-02-25 14:26:48');
INSERT INTO `sys_role` VALUES ('3', '销售总监', '销售总监', '4', '2018-11-19 16:16:46');
INSERT INTO `sys_role` VALUES ('4', '产品总监', '产品总监', '5', '2019-01-02 17:42:53');
INSERT INTO `sys_role` VALUES ('5', '财务总监', '财务总监', '2', '2018-11-19 16:16:27');
INSERT INTO `sys_role` VALUES ('6', '技术总监', '技术总监', '3', '2018-11-20 16:39:34');
INSERT INTO `sys_role` VALUES ('7', '研发经理', '研发经理', '7', '2018-11-20 16:42:32');

-- ----------------------------
-- Table structure for sys_role_analysis
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_analysis`;
CREATE TABLE `sys_role_analysis` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `ANALYSIS_ID` int(11) DEFAULT NULL COMMENT '分析ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sys_role_analysis
-- ----------------------------
INSERT INTO `sys_role_analysis` VALUES ('156', '1', '9');
INSERT INTO `sys_role_analysis` VALUES ('157', '1', '9');
INSERT INTO `sys_role_analysis` VALUES ('158', '1', '10');
INSERT INTO `sys_role_analysis` VALUES ('159', '1', '10');
INSERT INTO `sys_role_analysis` VALUES ('160', '1', '10');
INSERT INTO `sys_role_analysis` VALUES ('161', '1', '10');
INSERT INTO `sys_role_analysis` VALUES ('162', '1', '10');
INSERT INTO `sys_role_analysis` VALUES ('163', '1', '10');

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
-- Records of sys_role_dept
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role_function
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_function`;
CREATE TABLE `sys_role_function` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色id',
  `FUNCTION_ID` int(11) DEFAULT NULL COMMENT '函数id',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sys_role_function
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_permission`;
CREATE TABLE `sys_role_permission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色表ID',
  `PERMISSION_ID` int(11) DEFAULT NULL COMMENT '资源表ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=918 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_role_permission
-- ----------------------------
INSERT INTO `sys_role_permission` VALUES ('894', '4', '1');
INSERT INTO `sys_role_permission` VALUES ('895', '4', '2');
INSERT INTO `sys_role_permission` VALUES ('896', '4', '3');
INSERT INTO `sys_role_permission` VALUES ('897', '4', '4');
INSERT INTO `sys_role_permission` VALUES ('898', '4', '5');
INSERT INTO `sys_role_permission` VALUES ('899', '4', '6');
INSERT INTO `sys_role_permission` VALUES ('900', '4', '7');
INSERT INTO `sys_role_permission` VALUES ('901', '4', '8');
INSERT INTO `sys_role_permission` VALUES ('902', '4', '9');
INSERT INTO `sys_role_permission` VALUES ('903', '4', '10');
INSERT INTO `sys_role_permission` VALUES ('904', '4', '11');
INSERT INTO `sys_role_permission` VALUES ('905', '2', '1');
INSERT INTO `sys_role_permission` VALUES ('906', '1', '1');
INSERT INTO `sys_role_permission` VALUES ('907', '1', '6');
INSERT INTO `sys_role_permission` VALUES ('908', '1', '7');
INSERT INTO `sys_role_permission` VALUES ('909', '1', '8');
INSERT INTO `sys_role_permission` VALUES ('910', '1', '9');
INSERT INTO `sys_role_permission` VALUES ('911', '1', '10');
INSERT INTO `sys_role_permission` VALUES ('912', '1', '11');
INSERT INTO `sys_role_permission` VALUES ('913', '1', '22');
INSERT INTO `sys_role_permission` VALUES ('914', '1', '23');
INSERT INTO `sys_role_permission` VALUES ('915', '1', '24');
INSERT INTO `sys_role_permission` VALUES ('916', '1', '25');
INSERT INTO `sys_role_permission` VALUES ('917', '1', '12');

-- ----------------------------
-- Table structure for sys_role_process
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_process`;
CREATE TABLE `sys_role_process` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `PROCESS_ID` int(11) DEFAULT NULL COMMENT '工作流G6ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sys_role_process
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role_real_db
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_real_db`;
CREATE TABLE `sys_role_real_db` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `REAL_DB_ID` int(11) DEFAULT NULL COMMENT '真实库Id',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=348 DEFAULT CHARSET=latin1 COMMENT='角色与真实库';

-- ----------------------------
-- Records of sys_role_real_db
-- ----------------------------
INSERT INTO `sys_role_real_db` VALUES ('337', '1', '1');
INSERT INTO `sys_role_real_db` VALUES ('338', '1', '3');
INSERT INTO `sys_role_real_db` VALUES ('339', '1', '25');
INSERT INTO `sys_role_real_db` VALUES ('340', '1', '27');
INSERT INTO `sys_role_real_db` VALUES ('341', '1', '28');
INSERT INTO `sys_role_real_db` VALUES ('342', '1', '2');
INSERT INTO `sys_role_real_db` VALUES ('343', '1', '5');
INSERT INTO `sys_role_real_db` VALUES ('344', '1', '26');
INSERT INTO `sys_role_real_db` VALUES ('345', '1', '8');
INSERT INTO `sys_role_real_db` VALUES ('346', '1', '23');
INSERT INTO `sys_role_real_db` VALUES ('347', '1', '29');

-- ----------------------------
-- Table structure for sys_role_views_tables
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_views_tables`;
CREATE TABLE `sys_role_views_tables` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `VIEW_TABLES_ID` int(11) DEFAULT NULL COMMENT '视图表ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='角色与视图表';

-- ----------------------------
-- Records of sys_role_views_tables
-- ----------------------------

-- ----------------------------
-- Table structure for sys_role_virtual_tables
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_virtual_tables`;
CREATE TABLE `sys_role_virtual_tables` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `VIRTUAL_ID` int(11) DEFAULT NULL COMMENT '虚拟表ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sys_role_virtual_tables
-- ----------------------------

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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('1', 'admin', null, '1', null, '2019-01-02 00:00:00', '1', null, 'huangtianhao@redoop.com', 'admin', '$2a$10$iQO1LH9vNmgILmpUPW6XB.JBmdGAy9ecx/rYYmkSzsHG5hgkGIcdW', '0', '1');
INSERT INTO `sys_user` VALUES ('2', 'redoop', null, null, null, '2019-01-02 00:00:00', null, null, null, 'redoop', '$2a$10$fYlf1Q4oFJUa7rvrGMO5ne5V8KeDaMwc9APtmFeyugUBLC7HtN2Wa', '0', '7');
INSERT INTO `sys_user` VALUES ('4', 'test', null, null, null, '2018-12-27 00:00:00', null, null, 'test@redoop.com', 'test', '$2a$10$Cg26/m7xA.R/6.qfLpvqNewCAWl2AM1w5H2oy03NTXhGy1XbLMp.O', '0', '9');
INSERT INTO `sys_user` VALUES ('5', 'qwer', null, null, null, null, null, null, null, 'qwer', '$2a$10$z5j2oTi0xoDXbglpim2d7uYU9mntN5PI0Himhnr394LLZeXsgfgd6', '0', null);

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `USER_ID` int(11) NOT NULL COMMENT '用户ID',
  `ROLE_ID` int(11) NOT NULL COMMENT '权限ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户权限对应表';

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES ('4', '4');
INSERT INTO `sys_user_role` VALUES ('1', '1');
INSERT INTO `sys_user_role` VALUES ('2', '2');
INSERT INTO `sys_user_role` VALUES ('5', '2');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='视图库';

-- ----------------------------
-- Records of views
-- ----------------------------
INSERT INTO `views` VALUES ('5', 'asdsad', null, '2', 'redoop', '2019-01-02 16:32:42', null, null);
INSERT INTO `views` VALUES ('7', 'qw', null, '2', 'redoop', '2019-01-02 16:46:43', null, null);

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
  PRIMARY KEY (`ID`),
  KEY `ID` (`VIEWS_ID`) USING BTREE,
  CONSTRAINT `views_tables_ibfk_1` FOREIGN KEY (`VIEWS_ID`) REFERENCES `views` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='视图表';

-- ----------------------------
-- Records of views_tables
-- ----------------------------
INSERT INTO `views_tables` VALUES ('9', 'as', null, '2', 'redoop', '2019-01-02 16:55:10', '2', '2019-01-02 16:55:10', '欢迎使用sad', '7', null);
INSERT INTO `views_tables` VALUES ('10', 'c', null, '2', 'redoop', '2019-01-02 16:58:26', '2', '2019-01-02 16:58:26', '欢迎使用cxc', '5', null);

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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='虚拟表';

-- ----------------------------
-- Records of virtual_tables
-- ----------------------------
INSERT INTO `virtual_tables` VALUES ('8', 'view', null, '1', 'admin', '2018-12-27 15:40:38', '1', '2018-12-27 15:40:38', null, null, 'select * from view.\'view_db_test.view\' as view;');
INSERT INTO `virtual_tables` VALUES ('39', 't_data_element', null, '1', 'admin', '2019-01-09 15:34:14', '1', '2019-01-09 15:34:14', null, null, 'select * from `test.t_data_element` as t_data_element;\nconnect jdbc where driver=\"com.mysql.jdbc.Driver\"\nand url=\"jdbc:mysql://192.168.0.84:3307/huangtianhao\"\nand user=\"root\"\nand password=\"\"\nas qqq;\nsave overwrite t_data_element \n	as jdbc.`qqq.t_data_element`\n	options truncate= \"true\";');
INSERT INTO `virtual_tables` VALUES ('40', 't_data_element_rule', null, '1', 'admin', '2019-01-09 15:44:28', '1', '2019-01-09 15:44:28', null, null, 'select * from `test.t_data_element_rule` as t_data_element_rule;\n\nsave overwrite t_data_element_rule \n	as jdbc.`qqq.t_data_element_rule`\n	options truncate= \"true\";');
INSERT INTO `virtual_tables` VALUES ('41', 'common_example001', null, '1', 'admin', '2019-01-10 17:57:24', '1', '2019-01-10 17:57:38', null, null, 'select s1,s2,s3,wc8_7 from `l_test.common_example001` as aa;');
INSERT INTO `virtual_tables` VALUES ('42', 'test_user', null, '1', 'admin', '2019-01-11 15:06:04', '1', '2019-01-11 15:06:04', null, null, 'select * from `test.t_user` as test_user;');
