package com.redoop.science.service;

import com.redoop.science.entity.RegFunction;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 注册函数 服务类
 * </p>
 *
 * @author Alan
 * @since 2018-10-16
 */
public interface IRegFunctionService extends IService<RegFunction> {

    String getByName(String name);
}
