package com.cq.myinsurance.service;

import com.cq.myinsurance.utils.APIRequest;

import java.util.Map;


/**
 * @Filename
 * @auther 吴星辰;
 * @data 2019/12/27 14:51;
 * @Descripion
 * @Version 1.1.1
 * @Function
 * @History
 */
public interface ProspectManagerServer {
    APIRequest ReoprtQuery(Long w, Integer page);

    APIRequest myCheSunAdd(Map<String, String> map);

    APIRequest otherCheSunAdd(Map<String, String> map);

    APIRequest ThingAdd(Map<String, String> map);

    APIRequest manAdd(Map<String, String> map);

    APIRequest LoseQuery(Long reported_number, Integer page);

    APIRequest queryHeLose(Long reported_number);

    APIRequest queryMyLose(Long reported_number);

    APIRequest thingLose(Long reported_number);

    APIRequest peopleLose(Long reported_number);

    APIRequest upCaseloss(Long reported_number);

    APIRequest CompensateQuery(Long reported_number, Integer page);

    APIRequest upCaselossToOk(Long reported_number);
}
