/*
 * @Author       : Mx
 * @Date         : 2023-03-28 16:33:08
 * @Description  : 基础类型
 */
export type responseModel<T = any> = {
    code: number
    data: T
    errorMsg: string
    msg: string
}
