/*
 * @Author       : Mx
 * @Date         : 2023-04-07 13:49:11
 * @Description  :
 */
import request from '@/utils/request.ts'

export function login(data) {
  return request({
    url: '/h5/login',
    method: 'POST',
    data
  })
}
