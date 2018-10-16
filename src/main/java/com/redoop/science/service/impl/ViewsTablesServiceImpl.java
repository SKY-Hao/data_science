package com.redoop.science.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.redoop.science.entity.ViewsTables;
import com.redoop.science.mapper.ViewsTablesMapper;
import com.redoop.science.service.IViewsTablesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 视图表 服务实现类
 * </p>
 *
 * @author admin
 * @since 2018年10月16日11:22:30
 */
@Service
public class ViewsTablesServiceImpl extends ServiceImpl<ViewsTablesMapper, ViewsTables> implements IViewsTablesService {

    @Autowired
    ViewsTablesMapper tablesMapper;
    @Override
    public List<ViewsTables> allList() {
        return tablesMapper.allList();
    }
}
