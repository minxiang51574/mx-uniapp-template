<!--
 * @Author       : Mx
 * @Date         : 2022-06-16 11:14:01
 * @Description  : 分包商品详情
-->
<template>
  <km-header title="分包商品详情"></km-header>
  <view>
    <km-loading />
    <view>
      <button @tap="startRecord">开始录音</button>
      <button @tap="endRecord">停止录音</button>
      <button @tap="playVoice">播放录音</button>
    </view>

    <h1 style="font-weight: 600; font-size: 50rpx; margin-top: 20rpx">拍照摄像</h1>
    <view>
      <button @tap="takePhoto">拍照</button>
      <image :src="photoSrc" v-if="photoSrc" style="width: 100rpx; height: 100rpx"></image>
      <button @tap="takeCamera">摄像</button>
      <video id="myVideo" :src="cameraSrc" v-if="cameraSrc"></video>
    </view>
    <uni-search-bar :focus="true" @input="input" v-model="searchValue"></uni-search-bar>
    <button @click="submit">提交</button>
  </view>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import {
    phonePrivate,
    namePrivate,
    isIDCard,
    isMatchPhone,
    setStorageSync,
    getStorageSync,
    isIos,
    isEmail,
    debounce,
    throttle,
    currentPage,
    currentPages
  } from '@/utils'

  //获取全局唯一的录音管理器
  const recorderManager = uni.getRecorderManager()
  //创建并返回内部 audio 上下文 innerAudioContext 对象
  const innerAudioContext = uni.createInnerAudioContext()
  innerAudioContext.autoplay = true
  //创建并返回 camera 组件的上下文 cameraContext 对象
  const cameraContext = uni.createCameraContext()

  const photoSrc = ref('')
  const cameraSrc = ref('')

  //从本地相册选择图片或使用相机拍照
  const takePhoto = () => {
    uni.chooseImage({
      count: 6,
      sizeType: ['original', 'compressed'],
      success: function (res) {
        //预览图片
        uni.previewImage({
          urls: res.tempFilePaths,
          longPressActions: {
            itemList: ['发送给朋友', '保存图片', '收藏'],
            success: function (data) {
              console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片')
            },
            fail: function (err) {
              console.log(err.errMsg)
            }
          }
        })
      }
    })
  }
  //拍摄视频或从手机相册中选视频
  const takeCamera = () => {
    uni.chooseVideo({
      sourceType: ['camera', 'album'],
      success: res => {
        cameraSrc.value = res.tempFilePath
      }
    })
  }

  const voicePath = ref('')
  //开始录音
  const startRecord = () => {
    uni.authorize({
      scope: 'scope.record',
      success() {
        uni.showToast({
          icon: 'none',
          title: '开始录音'
        })
        recorderManager.start()
      },
      fail() {
        uni.showModal({
          title: '提示',
          content: '您未授权录音，功能将无法使用',
          showCancel: true,
          confirmText: '授权',
          confirmColor: '#52a2d8',
          success(res) {
            if (res.confirm) {
              uni.openSetting({})
            }
          }
        })
      }
    })
  }
  // 录音结束
  const endRecord = () => {
    recorderManager.stop()
    recorderManager.onStop(res => {
      voicePath.value = res.tempFilePath
    })
    uni.showToast({
      icon: 'none',
      title: '结束录音'
    })
  }
  // 播放录音
  const playVoice = () => {
    if (voicePath) {
      innerAudioContext.src = voicePath.value
      innerAudioContext.play()
    }
  }
  // 输入框 防抖
  let searchValue = ref('')
  const input = debounce((val: any) => {
    console.log(val)
  }, 1000)

  // 提交 节流
  const submit = throttle(() => {
    console.log('submit')
  }, 1000)

  onMounted(() => {
    console.log(phonePrivate(13412345678))
    console.log(namePrivate('Mx'))
    console.log(isIDCard('420102199010101111'))
    console.log(isMatchPhone('13512345678'))
    setStorageSync('name', 'Mx')
    console.log(getStorageSync('name'))
    console.log(isIos())
    console.log(isEmail('546143220@qq.com'))
    console.log(currentPage())
    console.log(currentPages()[0])
  })
</script>
<style scoped></style>
