package com.redoop.science.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.redoop.science.entity.Analysis;
import com.redoop.science.entity.SysUser;
import com.redoop.science.mapper.AnalysisMapper;
import com.redoop.science.mapper.SysUserMapper;
import com.redoop.science.service.IAnalysisService;
import com.redoop.science.service.ISysUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotEmpty;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author admin
 * @since 2018-09-26
 */
@Service
public class AnalysisServiceImpl extends ServiceImpl<AnalysisMapper, Analysis> implements IAnalysisService {


    @Autowired
    AnalysisMapper analysisMapper;


}
