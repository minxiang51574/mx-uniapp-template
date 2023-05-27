<!--
 * @Author       : Mx
 * @Date         : 2022-06-30 15:52:54
 * @Description  : 分享海报
-->
<template>
<view class="share">
<view>
<van-button @click="getUserInfo" plain type="info">获取用户信息</van-button>
</view>
<van-button @click="openShareBox" type="primary">绘制海报</van-button>

<!-- 海报 -->
<view class="share-container" v-if="isShowShareBox" @click.stop="hideShareBox">
<view class="share-box">
<canvas @click.stop="handleImage('preview')" canvas-id="shareCanvas" class="share-canvas"></canvas>

<view class="share-btns">
<view class="btn-item" @click.stop="savePoster">
<image
class="share-icon"
src="https://static-oss.platform.kemai.com.cn/youshu/vshop/icon/goods-details-share-save.png"></image>
<text class="text">保存图片</text>
</view>

<button class="btn-item" open-type="share">
<image
class="share-icon"
src="https://static-oss.platform.kemai.com.cn/youshu/vshop/icon/goods-details-share-wechat.png"></image>
<text class="text">分享好友</text>
</button>
</view>
</view>
</view>
</view>
</template>

<script setup lang="ts">
import { drawImg, drawFont, rgbaBox, roundBox, promisefy, getSystemInfo } from '@/utils'
import { ref } from 'vue'
import userStore from '@/store/modules/user'
const store = userStore()

//点击获取头像+昵称
const getUserInfo = () => {
uni.getUserProfile({
desc: '用于完善会员资料',
success: res => {
store.setUserInfo(res.userInfo)
}
})
}

const isShowShareBox = ref(false)

/** 打开海报分享 */
const openShareBox = () => {
isShowShareBox.value = true
uni.showLoading({ title: '海报生成中' })

try {
createPosterImage()
} catch (error) {
console.log(error)
} finally {
uni.hideLoading()
}
}

/** 关闭海报分享 */
const hideShareBox = () => {
isShowShareBox.value = false
}

const getImageInfo = promisefy(uni.getImageInfo)
//开始绘画
const createPosterImage = async () => {
const context = uni.createCanvasContext('shareCanvas')
// 最外层大的背景块
roundBox(context, 0, 0, 280, 475, 20, '#0094ff')

// 内层第二大渐变的大区域, 从最上到最下
rgbaBox(context, 10, 10, 260, 455, 10, 'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 1)', 'column')

// 用户图片
let { path: avatarUrl } = await getImageInfo({ src: store.userInfo.avatarUrl })
drawImg(context, avatarUrl, 20, 25, 40, 40, true)

// 用户姓名
drawFont(context, store.userInfo.nickName, 68, 26, '#333', 16, 'left', false, 'bold')
drawFont(context, '向你分享一个好东西', 68, 50, '#666', 13)

// 中间的商品图片
const DISTANCE_LEFT = 20 // 左对齐距离
drawImg(context, '../../assets/images/food.png', DISTANCE_LEFT, 76, 240, 240, false)

// 价格
roundBox(context, 21, 316, 239, 40, 0, '#FF5B51')
drawFont(context, '￥', 30, 327, '#ffffff', 17, 'left', false, 'bold')
drawFont(context, '29.9', 45, 327, '#ffffff', 16, 'left', false, 'bold')

// 商品名称
drawFont(context, '小炒黄牛肉', DISTANCE_LEFT, 370, '#333333', 15, 'left', false, 'bold')
drawFont(context, '盒', DISTANCE_LEFT, 390, '#999999', 12)

// 小程序码
drawImg(context, '../../assets/images/code.png', 189, 365, 75, 75)
drawFont(context, '长按识别小程序', 228, 446, '#666666', 10, 'center')

context.draw()
}

/**
 * 海报处理
 * @param {string} handleType 预览/保存
 */
const handleImage = (handleType: string) => {
let systemInfo = getSystemInfo()
uni.canvasToTempFilePath({
width: systemInfo.screenWidth,
height: systemInfo.screenHeight,
canvasId: 'shareCanvas',
success(res) {
if (handleType === 'preview') {
// 预览图片
previewImage(res.tempFilePath)
} else {
// 保存图片
saveImageToPhotos(res.tempFilePath)
}
},
fail(err) {
console.log(err, '海报生成失败')
}
})
}

/** 保存至相册*/
const saveImageToPhotos = (tempFilePath: string) => {
uni.saveImageToPhotosAlbum({
filePath: tempFilePath, // canvasToTempFilePath返回的tempFilePath
success() {
uni.showToast({
title: '保存成功',
icon: 'success',
duration: 1000
})
},
fail(err) {
console.log(err, '保存失败')
}
})
}

/** 预览图片 */
const previewImage = (tempFilePath: string) => {
uni.previewImage({
current: tempFilePath, // 当前显示图片的http链接
urls: [tempFilePath] // 需要预览的图片http链接列表
})
}

const getSetting = promisefy(uni.getSetting)
/* 保存海报 */
const savePoster = async () => {
try {
const res = await getSetting()
if (res.authSetting['scope.writePhotosAlbum']) {
handleImage('saveImg')
return
}
userAuthorize()
} catch (error) {
console.log(error)
}
}

const authorize = promisefy(uni.authorize)
/** 用户权限 */
const userAuthorize = async () => {
try {
const res = await authorize({ scope: 'scope.writePhotosAlbum' })
uni.showToast({ icon: 'success', title: '授权成功', duration: 1500 })
handleImage('saveImg')
} catch {
uni.showModal({
title: '设置保存图片权限',
content: '',
showCancel: true,
cancelText: '取消',
cancelColor: '#000000',
confirmText: '确定',
confirmColor: '#3CC51F',
success: result => {
if (result.confirm) {
toOpenSetting()
}
}
})
}
}

const openSetting = promisefy(uni.openSetting)
/** 打开设置 */
const toOpenSetting = async () => {
try {
const data = await openSetting()
if (data.authSetting['scope.writePhotosAlbum'] == true) {
uni.showToast({
title: '授权成功',
icon: 'success',
duration: 1500
})
}
} catch (error) {
console.log(error, 'openSetting失败')
}
}

/** 分享好友 */
const onShareAppMessage = () => {
let title = '分享页面'
let path = 'package-order/pages/share'
let imageUrl = '../../assets/images/food.png'
return {
title,
path,
imageUrl,
success: () => {
uni.showToast({
icon: 'none',
title: '分享成功',
duration: 500
})
},
fail: () => {
uni.showToast({
icon: 'none',
title: '分享取消',
duration: 500
})
}
}
}
</script>
<style lang="scss" scoped>
/* 分享弹窗 */
.share-container {
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 9999;
display: flex;
justify-content: center;

.share-box {
width: 560rpx;
display: flex;
flex-direction: column;
margin-top: 80rpx;
}

.share-canvas {
width: 560rpx;
height: 950rpx;
}
.share-btns {
display: flex;
justify-content: space-between;
height: 80rpx;
width: 100%;
margin-top: 30rpx;
}

.btn-item {
width: 46%;
height: 80rpx;
background-color: #fff;
border-radius: 8rpx;
display: flex;
justify-content: center;
align-items: center;
font-size: 28rpx;
color: #333;
margin: 0;
.text {
font-weight: 500;
}
.share-icon {
width: 28rpx;
height: 28rpx;
margin-right: 8rpx;
}
}
}
</style>
