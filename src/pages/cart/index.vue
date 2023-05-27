<!--
 * @Author: Mx
 * @Date: 2022-04-18 15:40:38
 * @Description: 购物车
-->
<template>
  <view class="content">
    <view class="title">使用pinia</view>
    <h2>手机号:{{phoneHidden}}</h2>
    <h3>token:{{token}}</h3>
    <h3>userId:{{userId}}</h3>
    <button @click="handleClickChangePhone">改变电话号码</button>
    <button @click="login">登录设置用户信息</button>
  </view>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'
import userStore from '@/store/modules/user'
import { User } from '@/store/modules/user/type'
export default defineComponent({
  setup() {
    const store = userStore()

    const handleClickChangePhone = () => {
      store.phone = '15139333999'
    }
    const user: User = {
      name: 'mx',
      age: 18,
      id: 123
    }

    const login = () => {
      store.setUserInfo(user)
    }

    const userId = computed(() => {
      return store.userInfo.id
    })

    return {
      ...toRefs(store),
      handleClickChangePhone,
      login,
      userId
    }
  }
})
</script>

<style lang="scss" scopd>
.title {
  text-align: center;
  color: red;
}
</style>