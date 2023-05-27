<!--
 * @Author       : Mx
 * @Date         : 2022-06-16 14:21:44
 * @Description  : list-loading
-->
<template>
  <view class="list-loading-container">
    <view class="loading-text">{{ message }}</view>
  </view>
</template>

<script setup lang="ts">
defineProps({
  /* 文本内容 */
  message: {
    type: String,
    default: '加载中...'
  }
})
</script>

<style lang="scss" scoped>
.list-loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100rpx;
  .loading-text {
    font-size: 24rpx;
    color: #666;
    line-height: 1.2;
  }
}

</style>
