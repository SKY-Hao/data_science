package com.redoop.science.utils;

import org.json.CDL;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * json转换CSV
 * Created by Administrator on 2018/10/10.
 */
public class PoiUtils {

   public  static String  json_to_csv(String json) throws JSONException {
        JSONArray jsonArray = new JSONArray(json);
        String csv = CDL.toString(jsonArray);
       /*System.out.println("csv>>>>>>>>>>>>>"+csv);*/
        return csv;
    }


}


