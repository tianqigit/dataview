import axios from 'axios'
import Cookies from 'js-cookie'

const Config = require("../settings");
// 创建axios实例
const service = axios.create({
	// baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
	// baseURL: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'show'|| process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'prod') ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
	baseURL: 'http://localhost:8888/', // api 的 base_url
	timeout: Config.timeout // 请求超时时间
	// timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
	config => {
		console.log(config)
		// if (getToken()) {
		// 	config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
		// }
		// config.headers['Content-Type'] = 'application/json'
		return config
	},
	error => {
		Promise.reject(error)
	}
)

// response 拦截器
service.interceptors.response.use(
	response => {
		console.log(response)
		// if (response.data.code != undefined && (response.data.code == 401 || response.data.code == 403 || response
		// 		.data.code == 500)) {
		// 	if((response.data.message+"").toLowerCase().indexOf("error")>-1){
		// 		console.error(response.data.message);
				
		// 	}else{
		// 		ElNotification.error({
		// 			title: response.data.message,
		// 			duration: 5000
		// 		})
		// 	}
			
			
		// } else {
		// 	return response.data
		// }

	},
	error => {
		// // 兼容blob下载出错json提示
		// if (error.response.data instanceof Blob && error.response.data.type.toLowerCase().indexOf('json') !== -1) {
		// 	const reader = new FileReader()
		// 	reader.readAsText(error.response.obj.data, 'utf-8')
		// 	reader.onload = function(e) {
		// 		const errorMsg = JSON.parse(reader.result).message
		// 		console.error(errorMsg);
		// 		// ElNotification.error({
		// 		// 	title: errorMsg,
		// 		// 	duration: 5000
		// 		// })
		// 	}
		// } else {
		// 	let code = 0
		// 	try {
		// 		code = error.response.data.status
		// 	} catch (e) {
		// 		if (error.toString().indexOf('Error: timeout') !== -1) {
		// 			// ElNotification.error({
		// 			// 	title: '网络请求超时',
		// 			// 	duration: 5000
		// 			// })
		// 			console.error('网络请求超时');
		// 			return Promise.reject(error)
		// 		}
		// 	}
		// 	// console.log(code)
		// 	if (code) {
		// 		if (code === 401) {
		// 			store.dispatch('LogOut').then(() => {
		// 				// 用户登录界面提示
		// 				Cookies.set('point', 401)
		// 				location.reload()
		// 			})
		// 		} else if (code === 403) {
		// 			router.push({
		// 				path: '/401'
		// 			})
		// 		} else if (code === 504) {
		// 			// ElNotification.error({
		// 			// 	title: '网络请求超时',
		// 			// 	duration: 5000
		// 			// })
		// 			console.error('网络请求超时');
		// 			return Promise.reject(error)
		// 		} else if (code === 500) {
		// 			// ElNotification.error({
		// 			// 	title: '服务器内部错误',
		// 			// 	duration: 5000
		// 			// })
		// 			console.error('服务器内部错误');
		// 			return Promise.reject(error)
		// 		} else {
		// 			const errorMsg = error.response.data.message
		// 			if (errorMsg !== undefined) {
		// 				console.error(errorMsg);
		// 				// ElNotification.error({
		// 				// 	title: errorMsg,
		// 				// 	duration: 5000
		// 				// })
		// 			}
		// 		}
		// 	} else {
		// 		// ElNotification.error({
		// 		// 	title: '接口请求失败',
		// 		// 	duration: 5000
		// 		// })
		// 		console.error('接口请求失败');
		// 	}
		// }
		// return Promise.reject(error)
	}
)
export default service
