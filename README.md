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
## 2.构建命令

请选使用环境切换命令，生成 ext.json、manifest.json 文件

- 开发
  - npm run dev:h5
  - npm run serve
- 打包
  - npm run build:h5
  - npm run build
  -
- 环境切换
  - npm run switch:dev (开发环境)
  - npm run switch:cs (测试环境)
  - npm run switch:pre (预发布环境)
  - npm run switch:pro (生产环境)