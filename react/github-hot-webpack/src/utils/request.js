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
  (error) => Promise.reject(error),
);
export default service;
