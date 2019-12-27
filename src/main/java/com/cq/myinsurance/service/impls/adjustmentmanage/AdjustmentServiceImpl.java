package com.cq.myinsurance.service.impls.adjustmentmanage;

import com.cq.myinsurance.dao.CaseMapper;
import com.cq.myinsurance.dao.WarrantyMapper;
import com.cq.myinsurance.pojo.Case;
import com.cq.myinsurance.pojo.Warranty;
import com.cq.myinsurance.pojo.vo.CaseVo;
import com.cq.myinsurance.service.AdjustmentService;
import com.cq.myinsurance.utils.BeanUtil;
import com.cq.myinsurance.utils.enums.CaseStatus;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Message:
 * @Author：Cheirmin
 * @Date: 2019/12/27 12:29
 * @Version 1.0
 */
@Service
public class AdjustmentServiceImpl implements AdjustmentService {
    @Resource
    CaseMapper caseMapper;

    @Resource
    WarrantyMapper warrantyMapper;

    @Override
    public PageInfo<CaseVo> getCasePage(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        //service里面的代码
        List<Case> aCase = caseMapper.selectByStatus(CaseStatus.CASE_ADJUST);

        List<CaseVo> caseVos = BeanUtil.copyList(aCase,CaseVo.class);

        for (int i = 0; i < aCase.size(); i++) {
            caseVos.get(i).setDangerAddress(aCase.get(i).getDangerAddressProvince(),aCase.get(i).getDangerAddressCity(),aCase.get(i).getDetailAddress());

            //获取车牌号
            Warranty warranty = warrantyMapper.selectByPrimaryKey(aCase.get(i).getWarrantyId());

            String carNumber = (warranty ==null?"":warranty.getCarNumber());

            caseVos.get(i).setCarNumber(carNumber);
        }

        return new PageInfo<>(caseVos);
    }
}
