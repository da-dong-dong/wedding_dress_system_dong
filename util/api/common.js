import baseUrl from './index.js'
import { get, post, put, remove, postObj, } from './methos.js'
import { get2, post2, put2, remove2, postObj2, } from './methos2.js'

// 获得所有门店
export const getAllShopQY = (params) => {
  return get(baseUrl.getAllShopQY, params)
}
// 根据类型Type获取所有类别
export const getCategoryList = (params) => {
  return get(baseUrl.getCategoryList, params)
}
// 客户来源
export const getOrigin = (params) => {
	return get2(baseUrl.getOrigin, params)
}
// 登录
export const getTicket = (params) => {
	return postObj2(baseUrl.getTicket, params)
}
// 获取企业
export const getHaveEnterprise = (params) => {
	return get(baseUrl.getHaveEnterprise, params)
}
//新增客资
export const addCustomer = (params) => {
	return postObj2(baseUrl.addCustomer, params)
}
//修改客资
export const updateCustomer = (params) => {
	return postObj2(baseUrl.updateCustomer, params)
}
// 获取客资次联系人
export const getSecondContact = (params) => {
	return get2(baseUrl.getSecondContact, params)
}
//获得主联系人信息
export const getMainContact = (params) => {
	return get2(baseUrl.getMainContact, params)
}
