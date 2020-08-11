import axios from "axios";
// 创建axios实例
const request = axios.create({});

// response拦截器
request.interceptors.response.use(
  (response) => {
    if (response) {
      return response.data;
    } else {
      Promise.reject(new Error("error"));
    }
  },
  (error) => {
    alert("请求出错！", error);
    return Promise.reject(error);
  }
);
export default request;
