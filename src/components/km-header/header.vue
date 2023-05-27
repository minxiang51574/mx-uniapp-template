<!--
 * @Author       : Mx
 * @Date         : 2022-05-05 15:11:30
 * @Description  : 公共头部
-->
<template>
  <view
    :style="{'padding-top': barHeight + 'px', 'height': navigationBarHeight}"
    class="km-header"
  >
    <view
      class="header-icon-box"
      v-if="showBackBtn"
    >
      <view
        @click.stop="gotoBack"
        class="icon"
      >
        <km-iconfont
          color="#333"
          size="40"
          type="xdd_back"
        />
      </view>
    </view>
    <view class="title">{{ title }}</view>
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const props = defineProps({
  /* 标题 */
  title: {
    type: String,
    default: 'vite小程序模板'
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
})

const internalInstance = getCurrentInstance() //获取实例
const $global_systemInfo = internalInstance?.appContext.config.globalProperties.$global_systemInfo
// statusBarHeight
const barHeight = $global_systemInfo.statusBarHeight
// 导航栏高度
const navigationBarHeight = $global_systemInfo.navigationBarHeight
  ? `${$global_systemInfo.navigationBarHeight}px`
  : '88rpx' // 导航栏真实高度

const emit = defineEmits(['gotoBack'])
/* 返回上一页 */
const gotoBack = () => {
  if (props.custom) {
    emit('gotoBack')
  } else {
    uni.navigateBack({
      delta: 1
    })
  }
}
</script>
<style lang='scss' scoped>
.km-header {
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
