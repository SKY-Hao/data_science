package com.redoop.science.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.redoop.science.entity.Analysis;
import com.redoop.science.mapper.AnalysisMapper;
import com.redoop.science.service.IAnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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

    @Override
    public String getId(Integer id) {
        return analysisMapper.findByCode(id);
    }
}
