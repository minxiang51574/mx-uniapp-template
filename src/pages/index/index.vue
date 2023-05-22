<!--
 * @Author       : Mx
 * @Date         : 2023-04-17 15:36:22
 * @Description  : 
-->
<template>
  <view class="content">
    <u-button text="月落"></u-button>
    <u-button type="primary" text="确定"></u-button>
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {},
    methods: {}
  }
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
