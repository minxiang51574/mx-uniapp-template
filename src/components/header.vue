<!--
 * @Author       : Mx
 * @Date         : 2023-04-07 14:09:11
 * @Description  : 
-->
<template>
  <view :style="{ 'padding-top': barHeight + 'px', height: navigationBarHeight }" class="k-header">
    <view class="header-icon-box" v-if="showBackBtn">
      <view @click.stop="gotoBack" class="icon">
        <k-iconfont color="#333" size="40" type="xdd_back" />
      </view>
    </view>
    <view class="title">{{ title }}</view>
  </view>
</template>
<script>
  export default {
    props: {
      /* 标题 */
      title: {
        type: String,
        default: ''
      },

      /* 自定义返回事件 */
      custom: {
        type: Boolean,
        default: false
      },

      /* 是否显示返回按钮 */
      showBackBtn: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        barHeight: this.global_systemInfo.statusBarHeight,
        navigationBarHeight: this.global_systemInfo.navigationBarHeight
          ? `${this.global_systemInfo.navigationBarHeight}px`
          : '88rpx' // 导航栏真实高度
      }
    },
    methods: {
      /* 返回上一页 */
      gotoBack() {
        if (this.custom) {
          this.$emit('gotoBack')
        } else {
          uni.navigateBack()
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .k-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 88rpx;
    padding: 0 14rpx;
    background-color: #fff;

    .title {
      font-size: 38rpx;
      font-weight: 600;
      color: #000;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .header-icon-box {
      position: absolute;
      left: 10rpx;
      z-index: 10;
      display: flex;
      align-items: center;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 76rpx;
        height: 64rpx;
        overflow: hidden;
      }
    }
  }
</style>
