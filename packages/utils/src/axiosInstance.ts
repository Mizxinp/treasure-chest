import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const defaultConfig = {
  // baseURL: "/api",
  timeout: 60000,
  withcreadential: true,
};

class Request {
  instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    const curConfig = config ?? defaultConfig;
    this.instance = axios.create(curConfig);

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error: Error) => {
        console.error(error);
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (error: Error) => console.error(error)
    );
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;
