/*
 * @Author       : Mx
 * @Date         : 2022-04-28 16:32:31
 * @Description  :
 */
const envObj = require('./env.config')
const { NODE_ENV } = process.env
const envDetail = envObj[NODE_ENV]

module.exports = {
  name: 'mx-uniapp-template-v2',
  appid: envDetail.AppId,
  description: '',
  versionName: '1.0.0',
  versionCode: '100',
  transformPx: false,
  'mp-weixin': {
    /* 微信小程序特有相关 */
    appid: envDetail.AppId,
    setting: {
      urlCheck: false
    },
    optimization: {
      subPackages: true
    },
    usingComponents: true,
    permission: {
      'scope.userLocation': {
        desc: '根据您的定位获取附近门店'
      }
    },
    uniStatistics: {
      enable: true
    }
  }
}
