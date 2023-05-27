

<!--
 * @Author       : Mx
 * @Date         : 2022-06-24 16:20:30
 * @Description  : 首页
-->
<template>
  <div class="home">
    <view class="readme">此模板旨在完成30%的功能 ; 请仔细阅读readme文档，了解已完成的功能、组件、工具函数（欢迎新增及调整）</view>

    <van-button
      @click="sharePoster"
      type="primary"
    >分享相关功能</van-button>

    <van-button
      @click="goDetail"
      hairline
      plain
      type="primary"
    >录音拍照摄像</van-button>
    <van-button
      @click="goChart"
      type="primary"
    >图表相关功能</van-button>

    <mdm-button type="success" >嵌套内容</mdm-button>
  </div>
</template>

<script setup lang="ts">
import { onLoad, onShow } from '@dcloudio/uni-app'
onLoad(() => {
  console.log('onLoad')
})
onShow(() => {
  console.log('onShow')
})

/** 跳转详情页 录音拍照摄像 */
const goDetail = () => {
  uni.navigateTo({
    url: '/package-order/pages/detail'
  })
}

/** 跳转分享相关功能 */
const sharePoster = () => {
  uni.navigateTo({
    url: '/package-order/pages/share'
  })
}

/** 图表相关功能 */
const goChart = () => {
  uni.navigateTo({
    url: '/package-order/pages/chart'
  })
}
</script>
<style scoped lang='scss'>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.readme {
  padding: 40rpx;
}

</style>
