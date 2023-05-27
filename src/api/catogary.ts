/*
 * @Author       : Mx
 * @Date         : 2022-04-24 10:11:35
 * @Description  : 分类页接口
 */
import request from "@/utils/request"
import { responseModel } from './model/baseModel'
// 获取suiteId
export function login(data: any) {
  return request<responseModel<string>>({
    url: '/h5/login',
    method: 'POST',
    data
  })
}