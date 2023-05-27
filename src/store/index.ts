/*
 * @Author       : Mx
 * @Date         : 2022-05-07 16:32:25
 * @Description  : pinia
 */
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
//持久化
pinia.use(createPersistedState({
    storage: {
        getItem(key: string): string | null {
            return uni.getStorageSync(key)
        },
        setItem(key: string, value: string) {
            uni.setStorageSync(key, value)
        },
    },
}))

export default pinia

