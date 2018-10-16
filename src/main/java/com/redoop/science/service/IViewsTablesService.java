package com.redoop.science.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.redoop.science.entity.AnalysisTables;
import com.redoop.science.entity.ViewsTables;

import java.util.List;

/**
 * <p>
 *  视图表
 * </p>
 *
 * @author admin
 * @since 2018年10月16日11:22:19
 */
public interface IViewsTablesService extends IService<ViewsTables> {


    List<ViewsTables> allList();
}
