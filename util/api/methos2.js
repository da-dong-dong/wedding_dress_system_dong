/*********

	接口调用 code === 1000

**********/
const { $Message } = require('@/wxcomponents/base/index');
import app from '@/store/module/app.js'
let cancaelRes = false
const request = (url, options) => {
	uni.showLoading({
	    title: '加载中',
			// 蒙板层
			mask:true,
	});
	return new Promise((resolve,reject)=>{
		var task = uni.request({
			url:url,
			method:options.method,
			data:options.data,
			header: {
				'content-type': options.isObj ? 'application/json': 'application/x-www-form-urlencoded',
				'ticket': app.state.ticket ,
				'CurrentShopId' : app.state.shopId,
				'companyId':app.state.ccId
			},
			success :(res)=>{
				uni.hideLoading();
				// if(cancaelRes){
				// 	cancaelRes = false
				// 	return
				// }
				
				if(res.data.code !== 1000){
					$Message({
						content: res.data.message || res.data.msg,
						type: 'error',
						// duration:
					});
					resolve(res)
				}else{
					uni.hideLoading();
					resolve(res)
				}
			},
			fail:(err)=>{
				uni.hideLoading();
				$Message({
					content: '请求接口失败',
					type: 'error'
				});
				reject(err)
			},
			complete:(com)=>{
			}
		})
	})
}
const get2 = (url, options = {}) => {
    return request(url, { method: 'GET', data: options })
}

//post对象
const postObj2 = (url, options) => {
    return request(url, { method: 'POST', data: options, isObj: true })
}
//post参数
const post2 = (url, options) => {
    return request(url, { method: 'POST', data: options, isObj: false })
}
 
const put2 = (url, options) => {
    return request(url, { method: 'PUT', data: options, isObj: true })
}
 
// 不能声明DELETE（关键字）
const remove2 = (url, options) => {
    return request(url, { method: 'DELETE', data: options })
}
 
module.exports = {
    get2,
    post2,
    put2,
    remove2,
    postObj2,
}