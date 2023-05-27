<!--
 * @Author: Mx
 * @Date: 2022-04-18 15:40:38
 * @Description: 分类页
-->
<template>
  <view class="catogary">
    <view>
      <van-button
        @click="query"
        hairline
        plain
        type="primary"
      >获取接口数据模拟</van-button>
    </view>

    <view>Icon公共组件</view>
    <km-iconfont></km-iconfont>
    <view>Empty公共组件</view>
    <km-empty></km-empty>
    <!--轮播图 start-->
    <km-swiper
      :image-h="173"
      :img-urls="indexBanner"
    ></km-swiper>
    <!--轮播图 end-->
  </view>
</template>  

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { login } from '@/api/catogary'
import userStore from '@/store/modules/user'

export default defineComponent({
  setup() {
    let state = reactive({
      name: '姓名',
      age: 19
    })

    //数据仓库
    const store = userStore()

    /**
     * 模拟登录
     */
    const getMes = async () => {
      let params = {
        appId: 'wxa6985587336261f0',
        memberSourceChannel: 3,
        miniOpenId: '',
        openId: 'oF53k5G_61iI8JCKckwqChAtSg3E',
        signKey: '093qE5100QbaJN1BSR300hLeKt3qE51t',
        unionId: 'oB3QV6ksxCUguGPNNAuJkmFwgUdU'
      }
      const res = await login(params)

      uni.setStorageSync('token', res.data.token)
      //pinia 存储code
      store.setToken(res.data.token)
    }
    getMes()

    /**
     * 获取数据
     */
    const query = async () => {
      const res = await ApiCatogary.getList()
    }

    let indexBanner = [
      {
        type: 'image',
        number: 0,
        src: 'https://pre-oss.cs.kemai.com.cn/shop/store/12395/c7ce6caf7955422e8b51f06b3210aa71.jpg?x-oss-process=image/resize,m_lfit,h_200,w_200'
      },
      {
        type: 'image',
        number: 1,
        src: 'https://pre-oss.cs.kemai.com.cn/shop/store/12395/c7ce6caf7955422e8b51f06b3210aa71.jpg?x-oss-process=image/resize,m_lfit,h_200,w_200'
      }
    ]
    return {
      ...toRefs(state),
      query,
      indexBanner
    }
  }
})
</script>

<style>
.catogary{
  text-align: center;
}

</style>