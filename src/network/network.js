/*
 * Created Date: Saturday, December 29th 2018, 2:57:27 pm
 * Author: WenQing
 * -----
 * Last Modified: Saturday, 29th December 2018 2:57:27 pm
 * Modified By: WenQing (3319843257@qq.com)
 */

import axios from 'axios'
// 1.简单的封装
// export function request(options, success, failure) {
//   axios.get(options.url).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }


// 2.ES5封装方式
// export function request(options,success,failure) {
  // // 1.创建 axios 的实例对象
  // const instance = axios.create({
  //   baseURL: 'http://123.207.32.32:8000',
  //   timeout: 500  // 请求的时间 
  // })

  // // 过滤器(拦截器)
  // instance.interceptors.response.use(res =>{
  //   return res.data
  // })


  // // 2.通过实例发送网络请求
  // instance(options)
  //   .then(res => {
  //     success(res)
  //   }).catch(err => {
  //     failure(err)
  //   })
// }



  // 3.ES6 Promise 封装方式
  export function request(options) {
  return new Promise((resolve, reject) => {
    // 1.创建 axios 的实例对象
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 50000
    })

    // 3.过滤器(拦截器)
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
			console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
				switch (err.response.status) {
					case 400:
						err.message = '请求错误'
						break
					case 401:
						err.message = '未授权的访问'
						break
				}
			}
			return err
		})


    // 2.通过实例发送网络请求
    instance(options)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
  })
}

