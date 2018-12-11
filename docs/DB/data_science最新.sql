/*
Navicat MySQL Data Transfer

Source Server         : 192.168.0.122
Source Server Version : 50723
Source Host           : 192.168.0.122:3306
Source Database       : data_science

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2018-11-23 10:22:44
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
INSERT INTO `analysis` VALUES ('33', 'TEST_LEFT_JOIN', null, '1', 'admin', '2018-09-29 14:45:52', '1', '2018-10-30 11:14:15', 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test2; connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test; load jdbc.`test2.test` as test;load jdbc.`test.test` as test;select c.id as cid,c.name as cname,a.age,a.address from (select id,name from test) as c\nleft join\n(select id,name,age,address from test) as a\non  c.id=a.id as d\n;', 'select c.id as cid,c.name as cname,a.age,a.address from (select id,name from `test.test`) as c\nleft join\n(select id,name,age,address from `test2.test`) as a\non  c.id=a.id as d\n;');
INSERT INTO `analysis` VALUES ('34', 'view_analysit_test', null, '1', 'admin', '2018-10-29 16:27:55', '1', '2018-10-29 16:58:59', 'connect jdbc where driver=\"com.mysql.jdbc.Driver\" and url=\"jdbc:mysql://192.168.1.194:3306/test?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false\" and driver=\"com.mysql.jdbc.Driver\" and user=\"root\" and password=\"root\" as test; load jdbc.`test.test` as test;select age,count(*) from test group by age as  test;select * from test as a;', 'select * from view.\'db2.test\' as a;');

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
) ENGINE=InnoDB AUTO_INCREMENT=198 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='实体数据源库';

-- ----------------------------
-- Records of real_db
-- ----------------------------
INSERT INTO `real_db` VALUES ('193', 'test', null, null, 'admin', '2018-09-29 11:19:01', null, '2018-09-29 11:19:01', '3306', '192.168.1.194', '1', 'test', 'root', 'root', ' /img/realDb/1.jpg');
INSERT INTO `real_db` VALUES ('194', 'test', null, null, 'admin', '2018-09-29 13:07:00', null, '2018-09-29 13:07:00', '3306', '192.168.1.194', '1', 'test2', 'root', 'root', ' /img/realDb/1.jpg');
INSERT INTO `real_db` VALUES ('195', 'orcl', null, null, 'admin', '2018-09-29 19:05:58', null, '2018-09-29 19:05:58', '1521', '192.168.1.194', '2', 'SCOTT', 'SCOTT', 'redoop', ' /img/realDb/2.jpg');
INSERT INTO `real_db` VALUES ('196', 'test', null, null, 'admin', '2018-10-15 14:10:07', null, '2018-10-15 14:10:07', '10000', '192.168.0.163', '5', 'hive', 'hive', 'hive', ' /img/realDb/5.jpg');
INSERT INTO `real_db` VALUES ('197', 'qwe', null, null, 'admin', '2018-11-23 09:48:06', null, '2018-11-23 09:48:06', '3306', '192.168.1.194', '1', 'qwe', 'qwe', 'qwe', ' /img/realDb/1.jpg');

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
INSERT INTO `reg_function` VALUES ('2', 'user_address', 'select avg(id) from `test.user_address` as user_address;', null, '1', 'admin', '2018-10-22 10:36:40', null, null);
INSERT INTO `reg_function` VALUES ('3', 'res', '-- load data from spark distribution \nload libsvm.`/opt/spark-2.2.0-bin-hadoop2.7/data/mllib/sample_libsvm_data.txt` as data;\n\n-- train a NaiveBayes model and save it in /tmp/bayes_model.\n-- Here the alg we use  is based on Spark MLlib \ntrain data as NaiveBayes.`/tmp/bayes_model`;\n\n-- register your model\nregister NaiveBayes.`/tmp/bayes_model` as bayes_predict;\n\n-- predict all data \nselect bayes_predict(features) as predict_label, label  from data as result;\n\n-- save predicted result in /tmp/result with json format\nsave overwrite result as json.`/tmp/result`;\n\n-- show predict label in web table.\nselect * from result as res;', null, '1', 'admin', '2018-10-22 10:49:27', null, null);
INSERT INTO `reg_function` VALUES ('4', 'result', '-- load data from spark distribution \nload libsvm.`/opt/spark-2.2.0-bin-hadoop2.7/data/mllib/sample_libsvm_data.txt` as data;\n\n-- train a NaiveBayes model and save it in /tmp/bayes_model.\n-- Here the alg we use  is based on Spark MLlib \ntrain data as NaiveBayes.`/tmp/bayes_model`;\n\n-- register your model\nregister NaiveBayes.`/tmp/bayes_model` as bayes_predict;\n\n-- predict all data \nselect bayes_predict(features) as predict_label, label  from data as result;\n', null, '1', 'admin', '2018-10-22 11:54:08', null, null);
INSERT INTO `reg_function` VALUES ('5', 'bayes_predict', '-- load data from spark distribution \nload libsvm.`/opt/spark-2.2.0-bin-hadoop2.7/data/mllib/sample_libsvm_data.txt` as data;\n\n-- train a NaiveBayes model and save it in /tmp/bayes_model.\n-- Here the alg we use  is based on Spark MLlib \ntrain data as NaiveBayes.`/tmp/bayes_model`;\n\n-- register your model\nregister NaiveBayes.`/tmp/bayes_model` as bayes_predict;\n\n-- predict all data \nselect bayes_predict(features) as predict_label, label  from data as result;\n', null, '1', 'admin', '2018-10-22 12:33:57', null, null);
INSERT INTO `reg_function` VALUES ('6', 'bayet', '-- load data from spark distribution \nload libsvm.`/opt/spark-2.2.0-bin-hadoop2.7/data/mllib/sample_libsvm_data.txt` as data;\n\n-- train a NaiveBayes model and save it in /tmp/bayes_model.\n-- Here the alg we use  is based on Spark MLlib \ntrain data as NaiveBayes.`/tmp/bayes_model`;\n\n-- register your model\nregister NaiveBayes.`/tmp/bayes_model` as bayet;\n\n', null, '1', 'admin', '2018-10-22 12:34:46', null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='部门管理';

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

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
  `CREATE_DATE` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='系统权限';

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', '董事长', '董事会', '1', '2018-11-22 08:44:16');
INSERT INTO `sys_role` VALUES ('2', '管理员', '系统管理', '1', '2018-11-19 16:29:20');
INSERT INTO `sys_role` VALUES ('3', '销售总监', '销售总监', '4', '2018-11-19 16:16:46');
INSERT INTO `sys_role` VALUES ('4', '产品总监', '产品总监', '5', '2018-11-19 16:17:04');
INSERT INTO `sys_role` VALUES ('5', '财务总监', '财务总监', '2', '2018-11-19 16:16:27');
INSERT INTO `sys_role` VALUES ('6', '技术总监', '技术总监', '3', '2018-11-20 16:39:34');
INSERT INTO `sys_role` VALUES ('7', '研发经理', '研发经理', '7', '2018-11-20 16:42:32');
INSERT INTO `sys_role` VALUES ('24', 'qwqw', null, '1', null);
INSERT INTO `sys_role` VALUES ('25', '第三方', null, '1', null);

-- ----------------------------
-- Table structure for sys_role_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `DEPT_ID` int(11) DEFAULT NULL COMMENT '部门ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=487 DEFAULT CHARSET=utf8 COMMENT='角色与部门对应关系';

-- ----------------------------
-- Records of sys_role_dept
-- ----------------------------
INSERT INTO `sys_role_dept` VALUES ('33', '6', '3');
INSERT INTO `sys_role_dept` VALUES ('34', '6', '7');
INSERT INTO `sys_role_dept` VALUES ('35', '6', '8');
INSERT INTO `sys_role_dept` VALUES ('36', '7', '7');
INSERT INTO `sys_role_dept` VALUES ('474', '2', '1');
INSERT INTO `sys_role_dept` VALUES ('475', '2', '2');
INSERT INTO `sys_role_dept` VALUES ('476', '2', '3');
INSERT INTO `sys_role_dept` VALUES ('477', '2', '7');
INSERT INTO `sys_role_dept` VALUES ('478', '2', '8');
INSERT INTO `sys_role_dept` VALUES ('479', '2', '4');
INSERT INTO `sys_role_dept` VALUES ('480', '2', '5');
INSERT INTO `sys_role_dept` VALUES ('481', '2', '6');
INSERT INTO `sys_role_dept` VALUES ('484', '25', '1');
INSERT INTO `sys_role_dept` VALUES ('485', '25', '2');
INSERT INTO `sys_role_dept` VALUES ('486', '25', '6');

-- ----------------------------
-- Table structure for sys_role_function
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_function`;
CREATE TABLE `sys_role_function` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色id',
  `FUNCTION_ID` int(11) DEFAULT NULL COMMENT '函数id',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sys_role_function
-- ----------------------------
INSERT INTO `sys_role_function` VALUES ('94', '2', '1');
INSERT INTO `sys_role_function` VALUES ('95', '2', '2');
INSERT INTO `sys_role_function` VALUES ('98', '25', '1');
INSERT INTO `sys_role_function` VALUES ('99', '25', '2');
INSERT INTO `sys_role_function` VALUES ('100', '25', '6');
INSERT INTO `sys_role_function` VALUES ('104', '1', '1');
INSERT INTO `sys_role_function` VALUES ('105', '1', '2');
INSERT INTO `sys_role_function` VALUES ('106', '1', '6');

-- ----------------------------
-- Table structure for sys_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_permission`;
CREATE TABLE `sys_role_permission` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色表ID',
  `PERMISSION_ID` int(11) DEFAULT NULL COMMENT '资源表ID',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=858 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of sys_role_permission
-- ----------------------------
INSERT INTO `sys_role_permission` VALUES ('92', '6', '1');
INSERT INTO `sys_role_permission` VALUES ('93', '6', '6');
INSERT INTO `sys_role_permission` VALUES ('94', '6', '7');
INSERT INTO `sys_role_permission` VALUES ('95', '6', '8');
INSERT INTO `sys_role_permission` VALUES ('96', '6', '9');
INSERT INTO `sys_role_permission` VALUES ('97', '6', '10');
INSERT INTO `sys_role_permission` VALUES ('98', '6', '11');
INSERT INTO `sys_role_permission` VALUES ('99', '7', '1');
INSERT INTO `sys_role_permission` VALUES ('100', '7', '10');
INSERT INTO `sys_role_permission` VALUES ('101', '7', '11');
INSERT INTO `sys_role_permission` VALUES ('792', '2', '1');
INSERT INTO `sys_role_permission` VALUES ('793', '2', '2');
INSERT INTO `sys_role_permission` VALUES ('794', '2', '3');
INSERT INTO `sys_role_permission` VALUES ('795', '2', '4');
INSERT INTO `sys_role_permission` VALUES ('796', '2', '5');
INSERT INTO `sys_role_permission` VALUES ('797', '2', '6');
INSERT INTO `sys_role_permission` VALUES ('798', '2', '7');
INSERT INTO `sys_role_permission` VALUES ('799', '2', '8');
INSERT INTO `sys_role_permission` VALUES ('800', '2', '9');
INSERT INTO `sys_role_permission` VALUES ('801', '2', '10');
INSERT INTO `sys_role_permission` VALUES ('802', '2', '11');
INSERT INTO `sys_role_permission` VALUES ('825', '25', '1');
INSERT INTO `sys_role_permission` VALUES ('826', '25', '2');
INSERT INTO `sys_role_permission` VALUES ('827', '25', '3');
INSERT INTO `sys_role_permission` VALUES ('828', '25', '4');
INSERT INTO `sys_role_permission` VALUES ('829', '25', '5');
INSERT INTO `sys_role_permission` VALUES ('830', '25', '6');
INSERT INTO `sys_role_permission` VALUES ('831', '25', '7');
INSERT INTO `sys_role_permission` VALUES ('832', '25', '8');
INSERT INTO `sys_role_permission` VALUES ('833', '25', '9');
INSERT INTO `sys_role_permission` VALUES ('834', '25', '10');
INSERT INTO `sys_role_permission` VALUES ('835', '25', '11');
INSERT INTO `sys_role_permission` VALUES ('847', '1', '1');
INSERT INTO `sys_role_permission` VALUES ('848', '1', '2');
INSERT INTO `sys_role_permission` VALUES ('849', '1', '3');
INSERT INTO `sys_role_permission` VALUES ('850', '1', '4');
INSERT INTO `sys_role_permission` VALUES ('851', '1', '5');
INSERT INTO `sys_role_permission` VALUES ('852', '1', '6');
INSERT INTO `sys_role_permission` VALUES ('853', '1', '7');
INSERT INTO `sys_role_permission` VALUES ('854', '1', '8');
INSERT INTO `sys_role_permission` VALUES ('855', '1', '9');
INSERT INTO `sys_role_permission` VALUES ('856', '1', '10');
INSERT INTO `sys_role_permission` VALUES ('857', '1', '11');

-- ----------------------------
-- Table structure for sys_role_real_db
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_real_db`;
CREATE TABLE `sys_role_real_db` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `REAL_DB_ID` int(11) DEFAULT NULL COMMENT '真实库Id',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=466 DEFAULT CHARSET=latin1 COMMENT='角色与真实库';

-- ----------------------------
-- Records of sys_role_real_db
-- ----------------------------
INSERT INTO `sys_role_real_db` VALUES ('439', '2', '1');
INSERT INTO `sys_role_real_db` VALUES ('440', '2', '193');
INSERT INTO `sys_role_real_db` VALUES ('441', '2', '194');
INSERT INTO `sys_role_real_db` VALUES ('444', '25', '1');
INSERT INTO `sys_role_real_db` VALUES ('445', '25', '193');
INSERT INTO `sys_role_real_db` VALUES ('446', '25', '5');
INSERT INTO `sys_role_real_db` VALUES ('447', '25', '196');
INSERT INTO `sys_role_real_db` VALUES ('457', '1', '1');
INSERT INTO `sys_role_real_db` VALUES ('458', '1', '193');
INSERT INTO `sys_role_real_db` VALUES ('459', '1', '194');
INSERT INTO `sys_role_real_db` VALUES ('460', '1', '3');
INSERT INTO `sys_role_real_db` VALUES ('461', '1', '4');
INSERT INTO `sys_role_real_db` VALUES ('462', '1', '5');
INSERT INTO `sys_role_real_db` VALUES ('463', '1', '196');
INSERT INTO `sys_role_real_db` VALUES ('464', '1', '6');
INSERT INTO `sys_role_real_db` VALUES ('465', '1', '7');

-- ----------------------------
-- Table structure for sys_role_views_tables
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_views_tables`;
CREATE TABLE `sys_role_views_tables` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `VIEW_TABLES_ID` int(11) DEFAULT NULL COMMENT '视图表ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=187 DEFAULT CHARSET=latin1 COMMENT='角色与视图表';

-- ----------------------------
-- Records of sys_role_views_tables
-- ----------------------------
INSERT INTO `sys_role_views_tables` VALUES ('118', '24', '61');
INSERT INTO `sys_role_views_tables` VALUES ('119', '24', '89');
INSERT INTO `sys_role_views_tables` VALUES ('120', '24', '62');
INSERT INTO `sys_role_views_tables` VALUES ('121', '24', '87');
INSERT INTO `sys_role_views_tables` VALUES ('163', '2', '61');
INSERT INTO `sys_role_views_tables` VALUES ('164', '2', '88');
INSERT INTO `sys_role_views_tables` VALUES ('165', '2', '89');
INSERT INTO `sys_role_views_tables` VALUES ('168', '25', '61');
INSERT INTO `sys_role_views_tables` VALUES ('169', '25', '88');
INSERT INTO `sys_role_views_tables` VALUES ('170', '25', '63');
INSERT INTO `sys_role_views_tables` VALUES ('172', '25', '64');
INSERT INTO `sys_role_views_tables` VALUES ('180', '1', '61');
INSERT INTO `sys_role_views_tables` VALUES ('181', '1', '88');
INSERT INTO `sys_role_views_tables` VALUES ('182', '1', '62');
INSERT INTO `sys_role_views_tables` VALUES ('183', '1', '87');
INSERT INTO `sys_role_views_tables` VALUES ('184', '1', '63');
INSERT INTO `sys_role_views_tables` VALUES ('186', '1', '64');

-- ----------------------------
-- Table structure for sys_role_virtual_tables
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_virtual_tables`;
CREATE TABLE `sys_role_virtual_tables` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_ID` int(11) DEFAULT NULL COMMENT '角色ID',
  `VIRTUAL_ID` int(11) DEFAULT NULL COMMENT '虚拟表ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sys_role_virtual_tables
-- ----------------------------
INSERT INTO `sys_role_virtual_tables` VALUES ('54', '2', '1');
INSERT INTO `sys_role_virtual_tables` VALUES ('55', '2', '155');
INSERT INTO `sys_role_virtual_tables` VALUES ('58', '25', '1');
INSERT INTO `sys_role_virtual_tables` VALUES ('59', '25', '155');
INSERT INTO `sys_role_virtual_tables` VALUES ('61', '25', '168');
INSERT INTO `sys_role_virtual_tables` VALUES ('62', '25', '169');
INSERT INTO `sys_role_virtual_tables` VALUES ('63', '25', '170');
INSERT INTO `sys_role_virtual_tables` VALUES ('69', '1', '1');
INSERT INTO `sys_role_virtual_tables` VALUES ('70', '1', '155');
INSERT INTO `sys_role_virtual_tables` VALUES ('71', '1', '156');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('1', 'admin', null, '1', null, '2018-11-19 16:31:01', '1', null, 'huangtianhao@redoop.com', 'admin', '$2a$10$iQO1LH9vNmgILmpUPW6XB.JBmdGAy9ecx/rYYmkSzsHG5hgkGIcdW', '0', '1');
INSERT INTO `sys_user` VALUES ('3', 'redoop', null, null, null, '2018-11-22 11:22:51', null, null, null, 'redoop', '$2a$10$fYlf1Q4oFJUa7rvrGMO5ne5V8KeDaMwc9APtmFeyugUBLC7HtN2Wa', '0', '7');
INSERT INTO `sys_user` VALUES ('4', 'test', null, null, null, '2018-11-20 16:55:33', null, null, null, 'test', '$2a$10$E6VRbCG1Zn/rlL2TV4uwYeZESCkgC07QuN322Tn0O2xzVp1RsbAqK', '0', '3');

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
INSERT INTO `sys_user_role` VALUES ('4', '7');
INSERT INTO `sys_user_role` VALUES ('3', '2');

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
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8 COMMENT='视图库';

-- ----------------------------
-- Records of views
-- ----------------------------
INSERT INTO `views` VALUES ('61', 'aa', null, '1', 'admin', '2018-11-20 14:53:42', null, null);
INSERT INTO `views` VALUES ('62', 'bb', null, null, null, null, null, null);
INSERT INTO `views` VALUES ('63', '数据', null, '1', 'admin', '2018-11-22 13:41:27', null, null);
INSERT INTO `views` VALUES ('64', 'asd', null, '1', 'admin', '2018-11-22 17:21:11', null, null);

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
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='视图表';

-- ----------------------------
-- Records of views_tables
-- ----------------------------
INSERT INTO `views_tables` VALUES ('87', 'shitu1', null, '1', 'admin', '2018-11-20 14:53:51', '1', '2018-11-20 14:53:51', '欢迎使用a', '62', null);
INSERT INTO `views_tables` VALUES ('88', 'shitu2', null, '1', 'admin', '2018-11-22 13:04:37', '1', '2018-11-22 13:04:37', '欢迎使用q', '61', null);
INSERT INTO `views_tables` VALUES ('89', 'shitu3', null, null, 'admin', null, null, null, null, '61', null);

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
) ENGINE=InnoDB AUTO_INCREMENT=172 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC COMMENT='虚拟表';

-- ----------------------------
-- Records of virtual_tables
-- ----------------------------
INSERT INTO `virtual_tables` VALUES ('155', 'test_union', null, '1', 'admin', '2018-09-29 13:07:22', '1', '2018-09-29 14:03:35', null, null, 'select * from `test.test` as c \nunion all\nselect * from `test2.test` as d;');
INSERT INTO `virtual_tables` VALUES ('156', 'test_select', null, '1', 'admin', '2018-09-29 13:08:37', '1', '2018-10-18 11:15:25', null, null, 'select age,count(*) from `test.test` group by age as  test;');
INSERT INTO `virtual_tables` VALUES ('157', 'test_left_join', null, '1', 'admin', '2018-09-29 14:05:42', '1', '2018-10-22 09:48:22', null, null, 'select c.id as cid,c.name as cname,a.age,a.address from (select id,name from `test.test`) as c\nleft join\n(select id,name,age,address from `test2.test`) as a\non  c.id=a.id as d;');
INSERT INTO `virtual_tables` VALUES ('163', 'result', null, '3', 'admin', '2018-10-22 12:51:05', '3', '2018-10-22 13:48:55', null, null, 'select bayet(features) as predict_label, label  from data as result;');
