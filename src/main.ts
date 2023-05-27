/*
 * @Author: Mx
 * @Date: 2022-04-18 09:54:23
 * @Description: 
 */
import { createSSRApp } from "vue";
import App from "./App.vue";

//引入pinia 
import store from "@/store"

export function createApp() {
  const app = createSSRApp(App);
  //设置全局$global_systemInfo、CustomBar
  uni.getSystemInfo({
    success: function (e: any) {
      // #ifndef MP
      if (e.platform == 'android') {
        app.config.globalProperties.$CustomBar = e.statusBarHeight + 50
      } else {
        app.config.globalProperties.$CustomBar = e.statusBarHeight + 45
      }
      // #endif

      // #ifdef MP-WEIXIN
      app.config.globalProperties.$StatusBar = e.statusBarHeight
      const custom = wx.getMenuButtonBoundingClientRect()
      app.config.globalProperties.$Custom = custom
      app.config.globalProperties.$CustomBar = custom.bottom + custom.top - e.statusBarHeight
      // #endif

      //窗口高度

      app.config.globalProperties.$windowHeight = e.windowHeight
      //获取导航高度
      app.config.globalProperties.$navHeight = e.statusBarHeight * (750 / e.windowWidth) + 91
      //全局设置
      app.config.globalProperties.$global_systemInfo = e
    },
  })
  app.use(store)
  return {
    app,
  };
}
