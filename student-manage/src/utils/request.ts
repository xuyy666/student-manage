import axios from 'axios'
// import {getToken} from '@assets/index'
//获取全局的报错信息
// import {message} from 'antd';
// create an axios instance

const service = axios.create({
  baseURL: '',
  // 'http://148.70.121.59:9001/emstu',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 判断是否有登陆态
    // if (getToken()) {
    //   // 让每个请求携带authorization
    //   config.headers['x-nideshop-token'] = getToken()
    // }
    
    config.headers = {
      'content-type': "application/json"
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    // return Promise.reject(error)
    // message.error(error.message);
  }
)

export default service
