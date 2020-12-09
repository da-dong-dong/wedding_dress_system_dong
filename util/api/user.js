import baseUrl from './index.js'
import { get, post, put, remove, postObj, } from './methos.js'

export const getAuthorization = (params) => {
	return get(baseUrl.getAuthorization, params)
}
export const getUserInfo = (params) => {
  return get(baseUrl.getUserInfo, params)
}
export const getAccountAllArr = (params) =>{
	return get(baseUrl.getAccountAllArr, params)
}
//查找-员工通讯录
export const pageAccountAddressBookVo = (params) => {
	return get(baseUrl.pageAccountAddressBookVo, params)
}