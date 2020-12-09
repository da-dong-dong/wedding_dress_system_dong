/*********

	接口调用 通用

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
				'ccId': app.state.ccId,
				'CurrentShopId' : app.state.shopId,
			},
			success :(res)=>{
				uni.hideLoading();
				// if(cancaelRes){
				// 	cancaelRes = false
				// 	return
				// }
				
				if(res.data.code !== 200){
					$Message({
						content: res.data.message,
						type: 'error',
						// duration:
					});
					
					let code = res.data.code
					switch(code){
						case 407: //登录超时
							// cancaelRes = true
							setTimeout(()=>{
								uni.reLaunch({
									url:'/pages/login/login'
								})
							},1000)
							break;
					}			
						
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
const get = (url, options = {}) => {
    return request(url, { method: 'GET', data: options })
}

//post对象
const postObj = (url, options) => {
    return request(url, { method: 'POST', data: options, isObj: true })
}
//post参数
const post = (url, options) => {
    return request(url, { method: 'POST', data: options, isObj: false })
}
 
const put = (url, options) => {
    return request(url, { method: 'PUT', data: options, isObj: true })
}
 
// 不能声明DELETE（关键字）
const remove = (url, options) => {
    return request(url, { method: 'DELETE', data: options })
}
 
module.exports = {
    get,
    post,
    put,
    remove,
    postObj,
}