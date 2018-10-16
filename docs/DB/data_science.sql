/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : data_science

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 16/10/2018 16:21:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for analysis
-- ----------------------------
DROP TABLE IF EXISTS `analysis`;
CREATE TABLE `analysis`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `CODE` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '查询内容',
  `FINALLY_CODE` varchar(4000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '最终保存的查询内容',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '分析' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for analysis_table
-- ----------------------------
DROP TABLE IF EXISTS `analysis_table`;
CREATE TABLE `analysis_table`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `ANALYSIS_ID` int(11) NULL DEFAULT NULL COMMENT '分析ID',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '分析表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for real_db
-- ----------------------------
DROP TABLE IF EXISTS `real_db`;
CREATE TABLE `real_db`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '库名',
  `REMARK` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `PORT` int(11) NULL DEFAULT NULL COMMENT '端口号',
  `IP` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'ip地址',
  `DB_TYPE` tinyint(4) NULL DEFAULT NULL COMMENT '数据库类型(1-mysql,2-oracle,3-pg,4-sql server,5-hive,6-redis,7-kafka)',
  `NIKE_NAME` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '别名',
  `DB_NAME` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `DB_PASSWORD` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `LOGO` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '实体数据源库' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for real_db_tables
-- ----------------------------
DROP TABLE IF EXISTS `real_db_tables`;
CREATE TABLE `real_db_tables`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `RD_ID` int(11) NULL DEFAULT NULL COMMENT '库ID',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '真实数据库表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for reg_function
-- ----------------------------
DROP TABLE IF EXISTS `reg_function`;
CREATE TABLE `reg_function`  (
  `ID` int(11) NOT NULL COMMENT '编号',
  `NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '名称',
  `CODE` varchar(5000) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '函数',
  `REMARK` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin COMMENT = '注册函数' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NICK_NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '昵称',
  `REMARK` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `EMAIL` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '邮箱',
  `USERNAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '用户名',
  `PASSWORD` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for views
-- ----------------------------
DROP TABLE IF EXISTS `views`;
CREATE TABLE `views`  (
  `VID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人标号',
  `CREATOR_NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`VID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '视图库' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for views_tables
-- ----------------------------
DROP TABLE IF EXISTS `views_tables`;
CREATE TABLE `views_tables`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '视图表名称',
  `REMARK` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `CODE` varchar(4000) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '编辑器保存内容',
  `VIEWS_ID` int(11) NOT NULL COMMENT '视图库ID',
  `VIEWS_NAME` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '视图库名称',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_bin COMMENT = '视图表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for virtual_tables
-- ----------------------------
DROP TABLE IF EXISTS `virtual_tables`;
CREATE TABLE `virtual_tables`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '名称',
  `REMARK` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '注释',
  `CREATOR_ID` int(11) NULL DEFAULT NULL COMMENT '创建人编号',
  `CREATOR_NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  `CREATE_DATE` datetime(0) NULL DEFAULT NULL COMMENT '创建日期',
  `OPERATION_ID` int(11) NULL DEFAULT NULL COMMENT '操作人编号',
  `OPERATION_TIME` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `DB_ID` varchar(4000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '真实库id',
  `DB_NAME` varchar(4000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '真实库名称',
  `CODE` varchar(4000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '查询内容',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 149 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '虚拟表' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
