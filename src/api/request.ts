// 进行axios二次封装
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 1、创建axios实例对象
const request = axios.create({
  baseURL: '/api', // 基础路径
  timeout: 10000 // 设置超长时间
});

// 2、添加请求拦截器
request.interceptors.request.use((config) => {
  // 返回配置对象
  return config;
});

// 3、配置响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功回调
    return response.data;
  },
  (error) => {
    // 失败回调
    let message;
    const status = error.response.status;
    switch (status) {
      case 401:
        message = 'TOKEN过期';
        break;
      case 403:
        message = '无权访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器错误';
        break;
      default:
        message = '网络出现问题';
    }
    ElMessage.error(message);
    return Promise.resolve(error);
  }
);

// 对外暴露
export default request;
