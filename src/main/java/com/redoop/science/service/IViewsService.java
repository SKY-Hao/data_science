package com.redoop.science.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.redoop.science.dto.ViewsDto;
import com.redoop.science.entity.Views;

import java.util.List;

/**
 * <p>
 *  视图库 服务类
 * </p>
 *
 * @author admin
 * @since 2018年10月16日11:21:35
 */
public interface IViewsService extends IService<Views> {


    List<ViewsDto> getViewsTables();

    Views getByName(String name);
}
