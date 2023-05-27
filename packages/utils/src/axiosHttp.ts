import { AxiosRequestConfig } from 'axios';
import AxiosInstance from './axiosInstance'

const service = new AxiosInstance()

export async function request(config?: AxiosRequestConfig) {
  try {
    const response: any = await service.request({ ...config });
    console.log('response', response);
    
    if (response.code === 'xxxxx') {
      window.location.href = 'xxxxx'
      return
    }
    if (response.code !== '0') {
      return Promise.reject(response);
    }
    return Promise.resolve(response.result);
  } catch (error) {
    return Promise.reject(error);
  }
}

const http = {
  get(url: string, config?: AxiosRequestConfig) {
    return request({ method: 'get', url, ...config})
  },
  post(url: string, data: any, config?: AxiosRequestConfig) {
    return request({ method: 'post', url, data, ...config})
  }
}

export default http;
