<template>
  <view class="ad-swiper">
    <swiper
      :autoplay="autoplay"
      :circular="circular"
      :current="current"
      :disable-touch="disableTouch"
      :duration="duration"
      :indicator-dots="indicatorDots"
      :interval="interval"
      :style="'height:' + imageH + 'rpx;'"
      @change="change"
      indicator-active-color="#e93323"
    >
      <block
        :key="index"
        v-for="(item, index) in imgUrls"
      >
        <swiper-item
          :style="'height:' + imageH + 'rpx;'"
          v-if="item.type == 'video'"
        >
          <view class="item">
            <video
              :custom-cache="false"
              :enable-progress-gesture="false"
              :src="item.src"
              @ended="bindEnd"
              @pause="bindPause"
              @play="bindPlay"
              auto-pause-if-navigate
              controls
              id="myVideo"
              objectFit="cover"
              show-center-play-btn
              show-mute-btn="true"
              style="width: 100%; height: 100%"
            ></video>
          </view>
        </swiper-item>
        <swiper-item v-else>
          <image
            :class="radius ? 'image-radius' : ''"
            :mode="mode"
            :src="item[imgKey]"
            :style="'height:' + imageH + 'rpx;'"
            @click="openLink(item)"
            class="slide-image"
          />
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script lang="ts">
import { PropType, toRefs, defineComponent, reactive } from 'vue'

interface imgUrlsType {
  type: string
  src: string
}
export default defineComponent({
  name: 'AdSwiper',
  props: {
    /** 图片地址 */
    imgUrls: {
      type: Array as PropType<Array<imgUrlsType>>,
      default: () => {
        return []
      }
    },
    /** 当前图片数 */
    current: {
      type: Number,
      default: 0
    },
    /** 高度 */
    imageH: {
      type: Number,
      default: 600
    },
    /** 圆角 */
    radius: {
      type: Boolean,
      default: false
    },
    /** 图片模式 */
    mode: {
      type: String,
      default: 'aspectFill'
    },
    imgKey: {
      type: String,
      default: 'src'
    },
    indicatorDots: {
      type: Boolean,
      default: true
    },
    disableTouch: {
      type: Boolean,
      default: false
    }
  },
  emits: ['open', 'update:current'],
  setup(props, { emit }) {
    let state = reactive({
      circular: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      currents: 1,
      controls: true
    })

    const bindPause = function () {
      state.autoplay = false
    }

    /** 改变 */
    const change = (e: { detail: { current: number } }) => {
      emit('update:current', e.detail.current)
      state.currents = e.detail.current + 1
    }

    /** 点击打开 */
    const openLink = (image: any) => {
      emit('open', image)
    }

    const bindPlay = () => {
      state.autoplay = false
    }

    const bindEnd = () => {
      state.autoplay = true
    }

    const goToGoods = (link: any) => {
      if (link) {
        uni.navigateTo({
          url: link
        })
      }
    }

    return {
      ...toRefs(state),
      bindPause,
      change,
      openLink,
      bindPlay,
      bindEnd,
      goToGoods
    }
  }
})
</script>

<style scoped lang="scss">
.ad-swiper {
  width: 100%;
  position: relative;
}

.ad-swiper swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

.ad-swiper .slide-image {
  width: 100%;
}

.image-radius {
  border-radius: 20rpx;
}

.ad-swiper .pages {
  position: absolute;
  background-color: #fff;
  height: 34rpx;
  padding: 0 10rpx;
  border-radius: 3rpx;
  right: 30rpx;
  bottom: 30rpx;
  line-height: 34rpx;
  font-size: 24rpx;
  color: #050505;
}

#myVideo {
  width: 100%;
  height: 100%;
}

.ad-swiper .item {
  position: relative;
  width: 100%;
  height: 100%;
}

.ad-swiper .item .poster {
  position: absolute;
  top: 0;
  left: 0;
  height: 750rpx;
  width: 100%;
  z-index: 9;
}

.ad-swiper .item .poster .image {
  width: 100%;
  height: 100%;
}

.ad-swiper .item .stop {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 136rpx;
  height: 136rpx;
  margin-top: -68rpx;
  margin-left: -68rpx;
  z-index: 9;
}

.ad-swiper .item .stop .image {
  width: 100%;
  height: 100%;
}
</style>
