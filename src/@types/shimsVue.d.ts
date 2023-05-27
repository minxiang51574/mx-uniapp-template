/*
 * @Author       : Mx
 * @Date         : 2022-04-28 14:11:21
 * @Description  : 
 */
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}