import axios from "axios";
import type { AxiosInstance } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";
import { ElMessage as message } from 'element-plus'

class HYRequest {
    instance: AxiosInstance; //axios实例
    interceptors?: HYRequestInterceptors;
    constructor(config: HYRequestConfig) {
        this.instance = axios.create(config);
        this.interceptors = config.interceptors;
        //单个实例的拦截
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        );
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.requestInterceptorCatch
        );
        //添加所有实例的拦截器
        this.instance.interceptors.request.use(
            (config) => {
                console.log("所有实例的拦拦截器:请求拦截成功");
                return config;
            },
            (err) => {
                console.log("所有实例的拦拦截器:请求拦截失败");
                return err;
            }
        );
        this.instance.interceptors.response.use(
            (res) => {
                console.log("所有实例的拦拦截器:响应拦截成功");
                //将loading移除
                const data = res.data as any;
                if (data.returnCode === "-1001") {
                    console.log("请求失败,错误信息");
                } else {
                    return data;
                }
            },
            (error) => {
                switch (error.response.status) {
                    case 400:
                        error.message = '请求错误'
                        message.error('请求错误');
                        break
                    case 401:
                        error.message = '登录状态已失效,请重新登录'
                        message.error('登录状态已失效,请重新登录');
                        // redirect('/user/login');
                        break
                    case 403:
                        error.message = '拒绝访问'
                        message.error('拒绝访问');
                        break
                    case 404:
                        error.message = `请求地址出错: ${error.response.config.url}`
                        message.error(`请求地址出错: ${error.response.config.url}`);
                        break
                    case 408:
                        error.message = '请求超时'
                        message.error('请求超时');
                        break
                    case 500:
                        error.message = '服务器内部错误'
                        message.error('服务器内部错误');
                        break
                    case 501:
                        error.message = '服务未实现'
                        message.error('服务未实现');
                        break
                    case 502:
                        error.message = '网关错误'
                        message.error('网关错误');
                        break
                    case 503:
                        error.message = '服务不可用'
                        message.error('服务不可用');
                        break
                    case 504:
                        error.message = '网关超时'
                        message.error('网关超时');
                        break
                    case 505:
                        error.message = 'HTTP版本不受支持'
                        message.error('HTTP版本不受支持');
                        break
                    default:
                        break
                }
                console.log("所有实例的拦拦截器:响应拦截失败");
                return error;
            }
        );
    }
    //单个请求多拦截
    request<T>(config: HYRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            //判断单个请求是否有拦截
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config);
            }

            this.instance
                .request<any, any>(config)
                .then((res) => {
                    if (config.interceptors?.responseInterceptor) {
                        res = config.interceptors.responseInterceptor(res);
                    }
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                    return err;
                });
        });
    }

    get<T>(config: HYRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "get" });
    }

    post<T>(config: HYRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "post" });
    }

    delete<T>(config: HYRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "delete" });
    }

    patch<T>(config: HYRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: "patch" });
    }
}

export default HYRequest;