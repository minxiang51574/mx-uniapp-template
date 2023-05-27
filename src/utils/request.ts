/*
 * @Author       : Mx
 * @Date         : 2022-06-24 09:49:59
 * @Description  : request
 */
import { baseUrl } from "./baseUrl"
// 请求参数的类
type RequesetParams = {
    url: string
    method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
    data?: any
}
export default function request<T>(params: RequesetParams): Promise<T> {
    return new Promise(async (resolve, reject) => {
        try {
            const res: any = await uni.request({
                url: baseUrl + params.url,
                data: params.data,
                method: params.method || 'POST',
                dataType: 'json',
                header: {
                    // #ifdef H5
                    platformType: 101,
                    // #endif
                    // #ifdef MP-WEIXIN
                    platformType: 102,
                    // #endif
                    'content-type': 'application/json',
                    token: uni.getStorageSync('token') || ''
                }
            })
            // 200状态码表示成功
            if (res.data.code === 0) {
                resolve(res.data)
            } else {
                /**
                 * 这里可以做一些登录超时/接口异常提示等处理
                 */
                reject(res.data)
            }
        } catch (e: any) {
            reject(e || '未知错误')
        }
    })

}