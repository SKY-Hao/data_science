package com.redoop.science.service.impl;

import com.redoop.science.entity.RegFunction;
import com.redoop.science.mapper.RegFunctionMapper;
import com.redoop.science.service.IRegFunctionService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 注册函数 服务实现类
 * </p>
 *
 * @author Alan
 * @since 2018-10-16
 */
@Service
public class RegFunctionServiceImpl extends ServiceImpl<RegFunctionMapper, RegFunction> implements IRegFunctionService {

    @Autowired
    RegFunctionMapper regFunctionMapper;

    @Override
    public String getByName(String name) {
        return regFunctionMapper.findByName(name);
    }
}
