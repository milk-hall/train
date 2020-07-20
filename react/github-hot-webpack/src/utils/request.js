import axios from 'axios';
// 创建axios实例
const service = axios.create({});

// response拦截器
service.interceptors.response.use(
  (response) => {
    if (response) {
      return response.data;
    } 
      Promise.reject(new Error('error'));
  },
  (error) => {
    // eslint-disable-next-line no-alert
    alert('请求出错！', error);
    return Promise.reject(error);
  },
);
export default service;
