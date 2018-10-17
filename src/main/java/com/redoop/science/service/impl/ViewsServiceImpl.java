package com.redoop.science.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.redoop.science.dto.ViewsDto;
import com.redoop.science.entity.Views;
import com.redoop.science.entity.ViewsTables;
import com.redoop.science.mapper.ViewsMapper;
import com.redoop.science.mapper.ViewsTablesMapper;
import com.redoop.science.service.IViewsService;
import com.redoop.science.service.IViewsTablesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 视图库 服务实现类
 * </p>
 *
 * @author admin
 * @since 2018年10月16日11:21:42
 */
@Service
public class ViewsServiceImpl extends ServiceImpl<ViewsMapper, Views> implements IViewsService {


    @Autowired
    ViewsMapper viewsMapper;


    @Override
    public List<ViewsDto> getViewsTables() {
        return viewsMapper.findViewsTables();
    }

    @Override
    public Views getByName(String name) {
        return viewsMapper.findByName(name);
    }
}
