<!--
 * @Author       : Mx
 * @Date         : 2023-04-17 15:36:53
 * @Description  : 必读文档
-->
## 1.项目整体目录

```ts
├── dist/                   // 打包文件的目录
├── src/
|   ├── api/                // api接口地址
|   ├── assets/             // 静态文件
|   ├── components/         // 公共组件
|   ├── pages/              // 页面
|   ├── packagexxx/         // 分包
|   |   ├── components
|   |   └── pages
|   ├── store/              // vuex
|   |   ├── index.ts
|   |   └── modules
|   |       └── app
|   ├── utils/              // 工具函数
|   |   ├── request.js          
|   |   └── baseUrl
|   ├── App.vue
|   ├── main.js
|   ├── manifest.json
|   ├── pages.json          // 页面路径
|   └── uni.scss
├── .eslintignore           // eslint忽略文件
├── .eslintrc.js            // eslint配置文件
├── .gitignore              // git忽略文件
├── .prettierrc             // prettier配置文件
├── .stylelintrc            // stylelint配置文件
├── .env.config             // 环境配置
├── .env.switch             // 环境切换
├── index.html
├── package.json
├── README.md
├── jsconfig.json
```
