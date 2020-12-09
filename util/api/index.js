 // http://192.168.5.220.dev  napi.lyfz.net/pro
	let test = false
	let base = test ? 'http://192.168.5.15' : 'https://napi.lyfz.net'
	let base_dress = test ? 'http://192.168.5.220/pro/api/dress' : 'https://napi.lyfz.net/proapi/dress'
  let base_message = test ?  'http://192.168.5.220/dev/api/message' : 'https://napi.lyfz.net/pro/api/message'
  let base_user = test ?  'http://192.168.5.220/dev/api/account' : 'https://napi.lyfz.net/pro/api/account'
  let base_goods = test ?  'http://192.168.5.220/dev/api/goods' : 'https://napi.lyfz.net/pro/api/goods'
  let base_common = test ?  'http://192.168.5.220/dev/api/base' : 'https://napi.lyfz.net/pro/api/base'
  let base_store = test ?  'http://192.168.5.220/dev/api/store' : 'https://napi.lyfz.net/pro/api/store'
  let base_auth = test ? 'http://192.168.5.220/dev/api/auth' : 'https://napi.lyfz.net/pro/api/auth'
	let base_other = test ? 'https://api.27yn.cn': 'https://api.lyfz.net'
let baseUrl = {
	getTicket: `${base_other}/sso/v1/ticket/login`, //登录
	getHaveEnterprise: `${base}/getHaveEnterprise`, //选择企业
	getOrigin: `${base_other}/crmData/v1/channel/getAllChannel`,// 客户来源
	
	getUserInfo: `${base_user}/account/list/shopIds`, // get 获得用户信息
	getAccountAllArr: `${base_user}/account/getEnterpriseAll`, // 查找-全部员工
	getAuthorization: `${base_user}/account/getAuthorization`, // 查找-授权员工信息
	pageAccountAddressBookVo: `${base_user}/account/pageAccountAddressBookVo`, //查找-员工通讯录
	
	getAllShopQY: `${base_common}/shop/list/shopNameVo`, // 查找-所有门店
	getCategoryList: `${base_common}/category/list/`, // get     根据类型Type获取所有类别
	
	getSystemNameList: `${base_goods}/assembly/getAssemblyName`, // 获取套系名称列表
  getSystemDetail:`${base_goods}/assembly/detail`,  // 获取套系详情
	getCallName:`${base_goods}/callName/list/basis`,  // 获得昵称
  getOrderAssembly: `${base_goods}/assembly/detail`, // 开单 获得套系详情
	getGoodsToolList: `${base_goods}/goods/toolList`, // 获取商店工具箱
	getPlaceToolList: `${base_goods}/place/toolList`, // 获取景点工具箱
	getServicesToolList: `${base_goods}/services/toolList`, // 获取服务工具箱
	getDressInfoToolList: `${base_goods}/dressInfo/toolList`, // 获取服装工具箱
	getGiftName: `${base_goods}/gift/getGiftName`, // 获取礼包名称
	getGiftDetail: `${base_goods}/gift/detail`, // 获取礼包详情
	
	getCustomerMobileList: `${base_store}/customer/list/customerGroupPersonnelVo`, // 查找-通过手机查找客户组人员
	
	openWedding: `${base_store}/order/add/Wedding`, // 新增-婚庆开单
	openBaby: `${base_store}/order/add/baby`, // 新增-儿童开单
	openPortray: `${base_store}/order/add/portray`, // 新增-写真开单
	openPregnant: `${base_store}/order/add/pregnant`, // 新增-孕妈开单
	openService: `${base_store}/order/add/service`, // 新增-服务开单
	openWeddingDress: `${base_store}/order/add/weddingDress`, // 新增-婚纱开单

	getMyOrder: `${base_store}/orderList/page/myOrder` ,// 查找-我的订单
	getTeamOrder: `${base_store}/orderList/page/myDepartmentOrder`, //查找-我部门的订单
	getAllOrder: `${base_store}/orderList/page/allOrder`, //查找-所有订单
	getSubordinatesOrder: `${base_store}/orderList/page/myDepartmentSubordinateOrder`, //查找-我部门下属的订单
	
	getOrderDetails: `${base_store}/order/details`,// 订单详情
	getOrderItem: `${base_store}/order/item/find/orderItemPackageVo` ,//查询-子订单包
	
	updataOrderInfo: `${base_store}/order/update/orderInfoDto`,// 更新-订单信息
	updataSource: `${base_store}/customer/update/customerGroupSource`, //更新-客户组来源信息
	updataArea: `${base_store}/customer/update/customerGroupCategory`, //更新-客户组区域信息
	updataSystem: `${base_store}/order/update/orderAssemblyDto` ,//更新-订单套系信息
	updataItemInfo: `${base_store}/order/item/update/orderItemInfo`, //更新-子订单信息
	updataActor: `${base_store}/order/update/orderActor`, //更新-订单人员
	updataPersonnel: `${base_store}/customer/update/customerGroupPersonnel`, //更新-客户组人员
	
	deletOrderGoods: `${base_store}/order/item/goods/delete`,//删除-子订单商品
	deletOrderDress: `${base_store}/order/item/dress/delete`,//删除-子订单服装
	deletOrderPlace: `${base_store}/order/item/place/delete`,// 删除-子订单景点
	deletOrderService: `${base_store}/order/item/service/delete`,// 删除-子订单服务
	
	addOrderGoods: `${base_store}/order/item/goods/add`, //新增-子订单商品
	addOrderDress: `${base_store}/order/item/dress/add`,// 新增-子订单服装
	addOrderPlace: `${base_store}/order/item/place/add`,// 新增-子订单景点
	addOrderService: `${base_store}/order/item/service/add`, //新增-子订单服务
	
	updataOrderGoods: `${base_store}/order/item/goods/update`,// 更新-子订单商品
	updataOrderDress: `${base_store}/order/item/dress/update`,// 更新-子订单服装
	updataOrderPlace: `${base_store}/order/item/place/update`,// 更新-子订单景点
	updataOrderService: `${base_store}/order/item/service/update`,// 更新-子订单服务
	
	// 摄控
	getAllOrderItem: `${base_store}/orderList/page/allOrderItem`, //查找-所有订单子订单
	getPhotoDress: `${base_store}/order/item/dress/list`,//查找-子订单服装列表
	getPhotoPlace: `${base_store}/order/item/place/list`,//查找-子订单景点列表
	getGiftList: `${base_store}/order/gift/list`, //查找-礼包列表
	
	getOrdetItemListPhoto: `${base_store}/order/item/process/photo/reservation/list`, // 查找-预约拍照列表
	getPhotoDate: `${base_store}/order/item/process/photo/reservation/date`, // 查找-拍照预约日历
	getPhotoTemplate: `${base_store}/order/item/process/photo/reservation/template`, //查找-拍照预约模板
	getPhotoTime: `${base_store}/order/item/process/photo/reservation/time`,// 查找-拍照预约时间段
	getPhotoDetail: `${base_store}/order/item/process/photo/reservation/details`,// 查找-预约拍照详情
	addPhotoInfo: `${base_store}/order/item/process/photo/reservation/add`, // 新增-预约拍照记录
	updataPhotoInfo: `${base_store}/order/item/process/photo/reservation/update`, //更新-预约拍照记录
	deletPhotoInfo: `${base_store}/order/item/process/photo/delete`, // 删除-预约拍照记录
	
	getOrdetItemListChoose: `${base_store}/order/item/process/choose/reservation/list`, // 查找-预约选片列表
	getChooseDate: `${base_store}/order/item/process/choose/reservation/date`, // 查找-选片预约日历
	getChooseTemplate: `${base_store}/order/item/process/choose/reservation/template`, //查找-选片预约模板
	getChooseTime: `${base_store}/order/item/process/choose/reservation/time`,// 查找-选片预约时间段
	getChooseDetail: `${base_store}/order/item/process/choose/reservation/details`,  //查找-预约选片详情
	addChooseInfo: `${base_store}/order/item/process/choose/reservation/add`, // 新增-预约选片记录
	updataChooseInfo: `${base_store}/order/item/process/choose/reservation/update`, //更新-预约选片记录
	deletChooseInfo: `${base_store}/order/item/process/choose/reservation/delete`, // 删除-预约选片记录
	
	getOrdetItemListWatch: `${base_store}/order/item/process/watch/reservation/list`, // 查找-预约看板列表
	getWatchDate: `${base_store}/order/item/process/watch/reservation/date`, // 查找-看板预约日历
	getWatchTemplate: `${base_store}/order/item/process/watch/reservation/template`, //查找-看板预约模板
	getWatchTime: `${base_store}/order/item/process/watch/reservation/time`,// 查找-看板预约时间段
	getWatchDetail: `${base_store}/order/item/process/watch/reservation/details`,  //查找-看板预约详情
	addWatchInfo: `${base_store}/order/item/process/watch/reservation/add`, // 新增-预约看板记录
	updataWatchInfo: `${base_store}/order/item/process/watch/reservation/update`, //更新-预约看板记录
	deletWatchInfo: `${base_store}/order/item/process/watch/reservation/delete`, // 删除-预约看板记录
	
	getOrdetItemListPickup: `${base_store}/order/item/process/pickup/reservation/list`, // 查找-预约取件列表
	getPickupDate: `${base_store}/order/item/process/pickup/reservation/date`, // 查找-取件预约日历
	getPickupTemplate: `${base_store}/order/item/process/pickup/reservation/template`, //查找-取件预约模板
	getPickupTime: `${base_store}/order/item/process/pickup/reservation/time`,// 查找-取件预约时间段
	getPickupDetail: `${base_store}/order/item/process/pickup/reservation/details`,  //查找-取件预约详情
	addPickupInfo: `${base_store}/order/item/process/pickup/reservation/add`, // 新增-预约取件记录
	updataPickupInfo: `${base_store}/order/item/process/pickup/reservation/update`, //更新-预约取件记录
	deletPickupInfo: `${base_store}/order/item/process/pickup/reservation/delete`, // 删除-预约取件记录
	getPickupGOODS: `${base_store}/order/item/goods/list/pickup/reservation`,// 查找-商品取件预约列表
	getPickupStatus: `${base_store}/order/item/goods/list/pickup/status`,// 查找-子订单商品状态
	
	// 工作
	updateDigital: `${base_store}/order/item/process/digital/update`, //更新-安排数码工作
	
	getWorkPhotoMy: `${base_store}/work/photo/page/my`, //查询-我的摄化工作
	getWorkPhotoDepartment: `${base_store}/work/photo/page/department`, //查询-我的部门摄化工作
	getWorkPhotoAll: `${base_store}/work/photo/page/all`, //查询-所有摄化工作
	getWorkPhotoList: `${base_store}/order/item/process/photo/list`,// 查找-拍照列表
	updataWorkPhotoStatus: `${base_store}/order/item/update/photoProcessStatus`, //更新-子订单拍照流程状态
	getPhotoDetails: `${base_store}/order/item/process/photo/details`,//查找-拍照详情
	updataPhoto: `${base_store}/order/item/process/photo/update`, //更新-拍照记录
	
	getWorkChooseMy: `${base_store}/work/choose/page/my`, //查询-我的选片工作
	getWorkChooseDepartment: `${base_store}/work/choose/page/department`, //查询-我的部门选片工作
	getWorkChooseAll: `${base_store}/work/choose/page/all`, //查询-所有选片工作
	getWorkChooseList: `${base_store}/order/item/process/choose/list`,// 查找-选片列表
	
	getWorkWatchMy: `${base_store}/work/watch/page/my`, //查询-我的看板工作
	getWorkWatchDepartment: `${base_store}/work/watch/page/department`, //查询-我的部门看板工作
	getWorkWatchAll: `${base_store}/work/watch/page/all`, //查询-所有看板工作
	getWorkWatchList: `${base_store}/order/item/process/watch/list`,// 查找-看板列表
	
	getWorkPickupMy: `${base_store}/work/pickup/page/my`, //查询-我的取件工作
	getWorkPickupDepartment: `${base_store}/work/pickup/page/department`, //查询-我的部门取件工作
	getWorkPickupAll: `${base_store}/work/pickup/page/all`, //查询-所有取件工作
	getWorkPickupList: `${base_store}/order/item/goods/list/pickup`,// 查找-取件列表

	getPhotoPage: `${base_store}/order/item/process/photo/reservation/page`, //查询-预约拍照表格
	getChoosePage: `${base_store}/order/item/process/choose/reservation/page`, //查询-预约选片表格
	getWatchPage: `${base_store}/order/item/process/watch/reservation/page`, //查询-预约看板表格
	getPickupPage: `${base_store}/order/item/process/pickup/reservation/page`, //查询-预约取件表格
	
	getDigitalPage: `${base_store}/order/item/process/digital/page`,// 查询-数码分页列表
	getDigitalItem: `${base_store}/order/item/process/digital/list/item`,//查询-安排数码列表
	getWorkDigitalAll: `${base_store}/work/digital/page/all`, // 查询-所有数码工作
	getWorkDigitalDepartment: `${base_store}/work/digital/page/department`, // 查询-我的部门数码工作
	getWorkDigitalMy: `${base_store}/work/digital/page/my`, // 查询-我的数码工作
	
	
	getReceiptList: `${base_store}/financia/order/receipt/list`, //查找-收款明细列表
	getOrderBasic: `${base_store}/order/find/basic`,// 查找-订单基本信息
	getLatePriceList: `${base_store}/financia/order/entry/list`, //查找-前期录入记录列表  前期收款列表
	updataReceipt: `${base_store}/financia/order/entry/receipt`, //更新-前期录入收款
	refund: `${base_store}/financia/order/entry/refund`, //更新-前期退款
	
	getEarlyPriceList: `${base_store}/financia/order/late/list`, //查找-后期录入记录列表
	deleteFinancia: `${base_store}/financia/order/late/delete`, //删除-后期录入记录
	updataLateReceipt: `${base_store}/financia/order/late/receipt`, //更新-后期录入收款
	lateRefund: `${base_store}/financia/order/late/refund`, //更新-后期退款
	addLateReceipt: `${base_store}/financia/order/late/addEntryReceipt`, //新增-后期录入记录和收款
	getItemNo: `${base_store}/order/item/list/itmeNo`, //查找-子订单编号
	
	getOrderIndividual: `${base_store}/orderGoods/list`, //查找-散客订单列表
	delOrderIndividual: `${base_store}/orderGoods/delete`, //删除-散客订单
	addOrderIndividual: `${base_store}/orderGoods/add`, //新增-散客订单
	updateOrderIndividual: `${base_store}/orderGoods/update`, //更新-散客订单
	getOrderIndividualDetials: `${base_store}/orderGoods/details`, //查找-散客订单详情
	
	getExpenditureList: `${base_store}/expenditure/list`, //按条件分页查询
	addExpenditure: `${base_store}/expenditure/add`, //新增支出
	updateExpenditure: `${base_store}/expenditure/update`, //修改支出信息
	getOtherReceiptList: `${base_store}/otherReceipt/list`,//其他收入-分页查询
	delOtherReceiptList: `${base_store}/otherReceipt/del`,//其他收入-删除
	addOtherReceiptList: `${base_store}/otherReceipt/add`,//其他收入-新增
	
	getRetentionList: `${base_store}/retention/money/list`, //保留金-列表查询
	addRetention: `${base_store}m/retention/money/add`, //保留金-新增
	delRetention: `${base_store}/retention/money/del`, //保留金-删除
	retentionDetail: `${base_store}m/retention/record/list`, //保留金-操作记录查询
	addRetentionRecord: `${base_store}m/retention/record/add`, //添加充值记录
	
	addCustomer: `${base_other}/crmData/v1/customer/addCustomer`,//新增客资
	updateCustomer: `${base_other}/crmData/v1/customer/updateCustomer`, //修改客资
	getSecondContact: `${base_other}/crmData/v1/customerContact/list`,// 获取客资次联系人
	getMainContact: `${base_other}/crmData/v1/customer/getCustomerData`, //获得主联系人信息
}

export default baseUrl
