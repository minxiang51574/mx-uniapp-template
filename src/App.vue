<!--
 * @Date         : 2023-05-19 15:41:25
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-05-19 16:09:49
 * @Author       : 
 * @Description  : 
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@import '@km/mdm-ui/app.scss';
</style>
