/*
 * @Author       : Mx
 * @Date         : 2022-05-07 17:58:06
 * @Description  : user
 */
import { defineStore } from "pinia"
import { User } from "./type"
const userStore = defineStore('user', {
    state: () => ({
        phone: '18511118888',
        token: "",
        code: "",
        userInfo: {} as User

    }),
    // 开启持久化
    persist: {
        key: 'user',
        paths: ['token', 'userInfo', 'code'],// paths 给指定数据持久化
    },

    getters: {
        // phoneHidden(state) {
        //     return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
        // },
        phoneHidden(): String {
            return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
        }
    },

    actions: {
        //存储用户信息
        setUserInfo(userInfo: User) {
            this.userInfo = userInfo
        },
        //存储token
        setToken(token: string) {
            this.token = token
        },
        //存储code
        setCode(code: string) {
            this.code = code
        }

    }
})
export default userStore
