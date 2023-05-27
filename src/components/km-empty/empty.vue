<!--
 * @Author       : Mx
 * @Date         : 2022-06-29 10:53:01
 * @Description  : empty
-->
<template>
  <view class="km-empty" :style="{ paddingTop: mt + 'rpx' }">
    <image :src="emptyImg" class="empty-image" mode="widthFix"></image> 
    <view class="empty-text">{{ emptyText }}</view>
  </view>
</template>

<script setup lang="ts">
defineProps({
    /* 图片 */
    emptyImg: {
        type: String,
        default:'https://static-oss.platform.kemai.com.cn/youshu/vshop/icon/paidmember/no-data-image.png',
    },

    /* 文字 */
    emptyText: {
        type: String,
        default: '暂无数据'
    },

    /* 距离 */
    mt: {
        type: Number,
        default: 48
   }
})
</script>
<style lang='scss' scoped>
.km-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .empty-image {
    width: 200rpx;
    height: 200rpx;
 }
 .empty-text{
    padding-top: 20rpx;
    font-size: 24rpx;
    color: #999;
 }
}
</style>
