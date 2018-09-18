package com.redoop.science.service.impl;

import com.redoop.science.entity.RealDb;
import com.redoop.science.mapper.RealDbMapper;
import com.redoop.science.service.IRealDbService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;


/**
 * <p>
 * 实体数据源库 服务实现类
 * </p>
 *
 * @author Alan
 * @since 2018-09-13
 */
@Service
public class RealDbServiceImpl extends ServiceImpl<RealDbMapper, RealDb> implements IRealDbService {

    @Autowired
    RealDbMapper realDbMapper;

    /**
     * 增加
     * @param realDb
     */
    @Override
    public void saveForm(RealDb realDb) {

        realDb.setCreateDate(new Date());
        //判断用户为null的时候添加创建人
        if (realDb.getCreatorName()==null || "".equals(realDb.getCreatorName())){
            realDb.setCreatorName("admin");
        }
        realDb.setOperationTime(new Date());
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>==="+realDb.toString());

        realDbMapper.insert(realDb);
    }
}
