/*
 * @Author       : Mx
 * @Date         : 2022-04-28 16:14:18
 * @Description  : 环境配置文件
 */
module.exports = {
    development: {
        AppId: 'wx1f50012cbcaee05e',
        label_en: 'development',
        baseAPIUrl:"https://fans-wapi-dev.cloud.kemai.cn",
        label: '开发环境',
    },
    cs: {
        AppId: 'wxa6985587336261f0',
        label_en: 'cs',
        baseAPIUrl:"https://fans-wapi-cs.cloud.kemai.cn",
        label: '测试环境',
    },
    pre: {
        AppId: 'wxd28ff626c67055ec', 
        label_en: 'pre',
        baseAPIUrl:"https://fans-wapi-pre.cs.kemai.com.cn",
        label: '预发布环境',
    },
    production: {
      AppId: 'wxb1d6a19e0de2fc1c',
      label_en: 'production',
      baseAPIUrl:"https://fans-wapi.cloud.kemai.cn",
      label: '生产环境',
    },
}
  