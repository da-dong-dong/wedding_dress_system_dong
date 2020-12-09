import baseUrl from './index.js'
import { get, post, put, remove, postObj, } from './methos.js'
import { get2, post2, put2, remove2, postObj2, } from './methos2.js'


// 通过手机号查找客户组
export const getCustomerMobileList = (params) => {
	return get(baseUrl.getCustomerMobileList, params)
}
// 婚庆开单
export const openWedding = (params) => {
	return postObj(baseUrl.openWedding, params)
}
// 儿童开单
export const openBaby = (params) => {
	return postObj(baseUrl.openBaby, params)
}
// 写真开单
export const openPortray = (params) => {
	return postObj(baseUrl.openPortray, params)
}
// 孕妈开单
export const openPregnant = (params) => {
	return postObj(baseUrl.openPregnant, params)
}
// 服务开单
export const openService = (params) => {
	return postObj(baseUrl.openService, params)
}
// 婚纱开单
export const openWeddingDress = (params) => {
	return postObj(baseUrl.openWeddingDress, params)
}
// 查看我的订单
export const getMyOrder = (params) => {
	return get(baseUrl.getMyOrder, params)
}
// 下属订单
export const getSubordinatesOrder = (params) => {
	return get(baseUrl.getSubordinatesOrder, params)
}
// 查看我部门的订单
export const getTeamOrder = (params) => {
	return get(baseUrl.getTeamOrder, params)
}
// 查看所有订单
export const getAllOrder = (params) => {
	return get(baseUrl.getAllOrder, params)
}

// 订单详情
export const getOrderDetails = (params) => {
	return get(baseUrl.getOrderDetails, params)
}
// 子订单包
export const getOrderItem = (params) => {
	return get(baseUrl.getOrderItem, params)
}

// 更新-订单信息
export const updataOrderInfo = (params) => {
	return put(baseUrl.updataOrderInfo, params)
}
// 更新-客户组来源信息
export const updataSource = (params) => {
	return put(baseUrl.updataSource, params)
}
// 更新-客户组区域信息
export const updataArea = (params) => {
	return put(baseUrl.updataArea, params)
}
//更新-订单套系信息
export const updataSystem = (params) => {
	return put(baseUrl.updataSystem, params)
}
//更新-子订单信息
export const updataItemInfo = (params) => {
	return put(baseUrl.updataItemInfo, params)
}
//更新-订单人员
export const updataActor = (params) => {
	return put(baseUrl.updataActor, params)
}
//更新-客户组人员
export const updataPersonnel = (params) => {
	return put(baseUrl.updataPersonnel, params)
}

//删除-子订单商品
export const deletOrderGoods = (params) => {
	return remove(baseUrl.deletOrderGoods, params)
}
//删除-子订单服装
export const deletOrderDress = (params) => {
	return remove(baseUrl.deletOrderDress, params)
}
//删除-子订单景点
export const deletOrderPlace = (params) => {
	return remove(baseUrl.deletOrderPlace, params)
}
//删除-子订单服务
export const deletOrderService = (params) => {
	return remove(baseUrl.deletOrderService, params)
}
// 新增-子订单商品
export const addOrderGoods = (params) => {
	return postObj(baseUrl.addOrderGoods, params)
}
// 新增-子订单服装
export const addOrderDress = (params) => {
	return postObj(baseUrl.addOrderDress, params)
}
// 新增-子订单服务
export const addOrderService = (params) => {
	return postObj(baseUrl.addOrderService, params)
}
// 新增-子订单景点
export const addOrderPlace = (params) => {
	return postObj(baseUrl.addOrderPlace, params)
}
// 更新-子订单商品
export const updataOrderGoods = (params) => {
	return put(baseUrl.updataOrderGoods, params)
}
// 更新-子订单服装
export const updataOrderDress = (params) => {
	return put(baseUrl.updataOrderDress, params)
}
// 更新-子订单景点
export const updataOrderPlace = (params) => {
	return put(baseUrl.updataOrderPlace, params)
}	
// 更新-子订单服务
export const updataOrderService = (params) => {
	return put(baseUrl.updataOrderService, params)
}

//查找-所有订单子订单
export const getAllOrderItem = (params) => {
	return get(baseUrl.getAllOrderItem, params)
}
// 查找-预约拍照列表
export const getOrdetItemListPhoto = (params) => {
	return get(baseUrl.getOrdetItemListPhoto, params)
}
// 查找-预选片列表
export const getOrdetItemListChoose = (params) => {
	return get(baseUrl.getOrdetItemListChoose, params)
}
// 查找-拍照预约日历
export const getPhotoDate =  (params) => {
	return postObj(baseUrl.getPhotoDate, params)
}
// 查找-选片预约日历
export const getChooseDate =  (params) => {
	return postObj(baseUrl.getChooseDate, params)
}
//查找-拍照预约模板
export const getPhotoTemplate = (params) => {
	return postObj(baseUrl.getPhotoTemplate, params)
}
//查找-选片预约模板
export const getChooseTemplate = (params) => {
	return postObj(baseUrl.getChooseTemplate, params)
}
// 查找-拍照预约时间段
export const getPhotoTime = (params) => {
	return postObj(baseUrl.getPhotoTime, params)
}
// 查找-选片预约时间段
export const getChooseTime = (params) => {
	return postObj(baseUrl.getChooseTime, params)
}

//查找-子订单服装列表
export const getPhotoDress = (params) => {
	return get(baseUrl.getPhotoDress, params)
}
//查找-子订单景点列表
export const getPhotoPlace = (params) => {
	return get(baseUrl.getPhotoPlace, params)
}
//查找-礼包列表
export const getGiftList = (params) => {
	return postObj(baseUrl.getGiftList, params)
}

// 查找-预约拍照详情
export const getPhotoDetail = (params) => {
	return get(baseUrl.getPhotoDetail, params)
}
// 新增-拍照记录
export const addPhotoInfo = (params) => {
	return postObj(baseUrl.addPhotoInfo, params)
}
// 更新-预约拍照记录
export const updataPhotoInfo = (params) => {
	return put(baseUrl.updataPhotoInfo, params)
}
// 删除-预约拍照记录
export const deletPhotoInfo = (params) => {
	return remove(baseUrl.deletPhotoInfo, params)
}
//更新-拍照记录
export const updataPhoto = (params) => {
	return put(baseUrl.updataPhoto, params)
}

//查找-预约选片详情
export const getChooseDetail = (params) => {
	return get(baseUrl.getChooseDetail, params)
}
// 新增-预约选片记录
export const addChooseInfo = (params) => {
	return postObj(baseUrl.addChooseInfo, params)
}
// 更新-预约选片记录
export const updataChooseInfo = (params) => {
	return put(baseUrl.updataChooseInfo, params)
}
// 删除-预约选片记录
export const deletChooseInfo = (params) => {
	return remove(baseUrl.deletChooseInfo, params)
} 


// 查找-预约看板列表
export const getOrdetItemListWatch = (params) => {
	return get(baseUrl.getOrdetItemListWatch, params)
}
// 查找-看板预约日历
export const getWatchDate = (params) => {
	return postObj(baseUrl.getWatchDate, params)
}
//查找-看板预约模板
export const getWatchTemplate = (params) => {
	return postObj(baseUrl.getWatchTemplate, params)
}
// 查找-看板预约时间段
export const getWatchTime = (params) => {
	return postObj(baseUrl.getWatchTime, params)
}
//查找-看板预约详情
export const getWatchDetail = (params) => {
	return get(baseUrl.getWatchDetail, params)
}
// 新增-预约看板记录
export const addWatchInfo = (params) => {
	return postObj(baseUrl.addWatchInfo, params)
}
// 更新-预约看板记录
export const updataWatchInfo = (params) => {
	return put(baseUrl.updataWatchInfo, params)
}
// 删除-预约看板记录
export const deletWatchInfo = (params) => {
	return remove(baseUrl.deletWatchInfo, params)
} 


// 查找-预约取件列表
export const getOrdetItemListPickup = (params) => {
	return get(baseUrl.getOrdetItemListPickup, params)
}
// 查找-取件预约日历
export const getPickupDate = (params) => {
	return postObj(baseUrl.getPickupDate, params)
}
//查找-取件预约模板
export const getPickupTemplate = (params) => {
	return postObj(baseUrl.getPickupTemplate, params)
}
// 查找-取件预约时间段
export const getPickupTime = (params) => {
	return postObj(baseUrl.getPickupTime, params)
}
//查找-取件预约详情
export const getPickupDetail = (params) => {
	return get(baseUrl.getPickupDetail, params)
}
// 新增-预约取件记录
export const addPickupInfo = (params) => {
	return postObj(baseUrl.addPickupInfo, params)
}
// 更新-预约取件记录
export const updataPickupInfo = (params) => {
	return put(baseUrl.updataPickupInfo, params)
}
// 删除-预约取件记录
export const deletPickupInfo = (params) => {
	return remove(baseUrl.deletPickupInfo, params)
} 
// 查找-商品取件预约列表
export const getPickupGOODS = (params) => {
	return get(baseUrl.getPickupGOODS, params)
}
// 查找-子订单商品状态
export const getPickupStatus = (params) => {
	return get(baseUrl.getPickupStatus, params)
}

// 工作 
//更新-安排数码工作
export const updateDigital = (params) => {
	return postObj(baseUrl.updateDigital,params)
}

//查询-我的摄化工作
export const getWorkPhotoMy = (params) => {
	return get(baseUrl.getWorkPhotoMy, params)
}
//查询-我的部门摄化工作
export const getWorkPhotoDepartment = (params) => {
	return get(baseUrl.getWorkPhotoDepartment, params)
}
//查询-所有摄化工作
export const getWorkPhotoAll = (params) => {
	return get(baseUrl.getWorkPhotoAll, params)
}
// 查找-拍照列表
export const getWorkPhotoList = (params) => {
	return get(baseUrl.getWorkPhotoList, params)
}
//更新-子订单拍照流程状态
export const updataWorkPhotoStatus = (params) => {
	return put(baseUrl.updataWorkPhotoStatus, params)
}
//查找-拍照详情
export const getPhotoDetails = (params) => {
	return get(baseUrl.getPhotoDetails, params)
}

//查询-我的选片工作
export const getWorkChooseMy = (params) => {
	return get(baseUrl.getWorkChooseMy, params)
}
//查询-我的部门选片工作
export const getWorkChooseDepartment = (params) => {
	return get(baseUrl.getWorkChooseDepartment, params)
}
//查询-所有选片工作
export const getWorkChooseAll = (params) => {
	return get(baseUrl.getWorkChooseAll, params)
}
// 查找-选片列表
export const getWorkChooseList = (params) => {
	return get(baseUrl.getWorkChooseList, params)
}

//查询-我的看板工作
export const getWorkWatchMy = (params) => {
	return get(baseUrl.getWorkWatchMy, params)
}
//查询-我的部门看板工作
export const getWorkWatchDepartment = (params) => {
	return get(baseUrl.getWorkWatchDepartment, params)
}
//查询-所有看板工作
export const getWorkWatchAll = (params) => {
	return get(baseUrl.getWorkWatchAll, params)
}
// 查找-看板列表
export const getWorkWatchList = (params) => {
	return get(baseUrl.getWorkWatchList, params)
}

//查询-我的取件工作
export const getWorkPickupMy = (params) => {
	return get(baseUrl.getWorkPickupMy, params)
}
//查询-我的部门取件工作
export const getWorkPickupDepartment = (params) => {
	return get(baseUrl.getWorkPickupDepartment, params)
}
//查询-所有取件工作
export const getWorkPickupAll = (params) => {
	return get(baseUrl.getWorkPickupAll, params)
}
// 查找-取件列表
export const getWorkPickupList = (params) => {
	return get(baseUrl.getWorkPickupList, params)
}
//查询-预约拍照表格
export const getPhotoPage = (params) => {
	return get(baseUrl.getPhotoPage, params)
}
//查询-预约选片表格
export const getChoosePage = (params) => {
	return get(baseUrl.getChoosePage, params)
}
//查询-预约看板表格
export const getWatchPage = (params) => {
	return get(baseUrl.getWatchPage, params)
}
//查询-预约取件表格
export const getPickupPage = (params) => {
	return get(baseUrl.getPickupPage, params)
}
// 查询-数码分页列表
export const getDigitalPage = (params) => {
	return get(baseUrl.getDigitalPage, params)
}
//查询-安排数码列表
export const getDigitalItem = (params) => {
	return get(baseUrl.getDigitalItem, params)
}
// 查询-所有数码工作
export const getWorkDigitalAll = (params) => {
	return get(baseUrl.getWorkDigitalAll, params)
}
// 查询-我的部门数码工作
export const getWorkDigitalDepartment = (params) => {
	return get(baseUrl.getWorkDigitalDepartment, params)
}
// 查询-我的数码工作
export const getWorkDigitalMy = (params) => {
	return get(baseUrl.getWorkDigitalMy, params)
}

//查找-收款明细列表
export const getReceiptList = (params) => {
	return get(baseUrl.getReceiptList, params)
}
// 查找-订单基本信息
export const getOrderBasic = (params) => {
	return get(baseUrl.getOrderBasic, params)
}

//查找-前期录入记录列表  前期收款列表 
export const getLatePriceList = (params) => {
	return get(baseUrl.getLatePriceList, params)
}
//更新-前期录入收款
export const updataReceipt = (params) => {
	return put(baseUrl.updataReceipt, params)
}
//更新-前期退款
export const refund = (params) => {
	return put(baseUrl.refund, params)
}
//查找-后期录入记录列表
export const getEarlyPriceList = (params) => {
	return get(baseUrl.getEarlyPriceList, params)
}
//删除-后期录入记录
export const deleteFinancia = (params) => {
	return remove(baseUrl.deleteFinancia, params)
}
//更新-后期录入收款
export const updataLateReceipt = (params) => {
	return put(baseUrl.updataLateReceipt, params)
}
//更新-后期退款
export const lateRefund = (params) => {
	return put(baseUrl.lateRefund, params)
}
//新增-后期录入记录和收款
export const addLateReceipt = (params) => {
	return put(baseUrl.addLateReceipt, params)
}
//查找-子订单编号
export const getItemNo = (params) => {
	return get(baseUrl.getItemNo, params)
}
//查找-散客订单列表
export const getOrderIndividual = (params) => {
	return get(baseUrl.getOrderIndividual, params)
}
//删除-散客订单
export const delOrderIndividual = (params) => {
	return remove(baseUrl.delOrderIndividual, params)
}
//新增-散客订单
export const addOrderIndividual = (params) => {
	return postObj(baseUrl.addOrderIndividual, params)
}
//更新-散客订单
export const updateOrderIndividual = (params) => {
	return put(baseUrl.updateOrderIndividual, params)
}
//查找-散客订单详情
export const getOrderIndividualDetials = (params) => {
	return get(baseUrl.getOrderIndividualDetials, params)
}
//按条件分页查询
export const getExpenditureList = (params) => {
	return get(baseUrl.getExpenditureList, params)
}
//新增支出
export const addExpenditure = (params) => {
	return postObj(baseUrl.addExpenditure, params)
}
//修改支出信息
export const updateExpenditure = (params) => {
	return put(baseUrl.updateExpenditure, params)
}
//其他收入-分页查询
export const getOtherReceiptList = (params) => {
	return get(baseUrl.getOtherReceiptList, params)
}
//其他收入-删除
export const delOtherReceiptList = (params) => {
	return remove(baseUrl.delOtherReceiptList, params)
}
//其他收入-新增
export const addOtherReceiptList = (params) => {
	return postObj(baseUrl.addOtherReceiptList, params)
}
//保留金-列表查询
export const getRetentionList = (params) => {
	return get(baseUrl.getRetentionList, params)
}
//保留金-新增
export const addRetention = (params) => {
	return postObj(baseUrl.addRetention, params)
}
 //保留金-删除
export const delRetention = (params) => {
	return remove(baseUrl.delRetention, params)
}
//保留金-操作记录查询
export const retentionDetail = (params) => {
	return get(baseUrl.retentionDetail, params)
}
//添加充值记录
export const addRetentionRecord = (params) => {
	return postObj(baseUrl.addRetentionRecord, params)
}