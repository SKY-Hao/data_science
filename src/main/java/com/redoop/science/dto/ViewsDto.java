package com.redoop.science.dto;

import com.redoop.science.entity.Views;
import com.redoop.science.entity.ViewsTables;
import lombok.Data;

import java.util.List;

/**
 * @author Administrator
 */
@Data
public class ViewsDto extends Views {

    /**
     * 当前views 下的所有 table
     */
    List<ViewsTables> viewsTablesList;
}
