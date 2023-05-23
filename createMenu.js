/*
 * @Author       : Mx
 * @Date         : 2023-05-23 10:48:11
 * @Description  : 创建Vue文件及内容
 */
const fs = require('fs')
const prettier = require('prettier')
const { join } = require('path')

// 深度创建目录
function mkdirs(path) {
  const arr = path.split('/')
  let p = ''

  arr.forEach(e => {
    const t = join(p, e)

    try {
      fs.statSync(t)
    } catch (err) {
      try {
        fs.mkdirSync(t)
      } catch (error) {
        console.error(error)
      }
    }
    p = t
  })

  return p
}

// 执行
const createMenu = async options => {
  // 格式化内容
  const content = prettier.format(options.code, {
    parser: 'vue',
    useTabs: false,
    tabWidth: 2,
    endOfLine: 'lf',
    semi: false,
    jsxBracketSameLine: true,
    singleQuote: true,
    printWidth: 100,
    trailingComma: 'none'
  })
  // 目录路径
  const dir = (options.viewPath || '').split('/')

  // 文件名
  const fname = dir.pop()

  // 创建目录
  const path = mkdirs(`./src/${dir.join('/')}`)

  // 创建文件 src/demo/views/goods.vue
  fs.createWriteStream(join(path, fname), {
    flags: 'w'
  }).write(content)
}

// 生成vue代码
const createVue = () => {
  // 代码模板
  return `<template>
        <div>
            <cl-crud ref="Crud">
                <cl-row>
                    <!-- 刷新按钮 -->
                    <cl-refresh-btn />
                    <!-- 新增按钮 -->\n
                    <cl-add-btn />
                    <!-- 删除按钮 -->\n
                    <cl-multi-delete-btn />
                    <cl-flex1 />
                    <!-- 关键字搜索 -->
                    <cl-search-key />
                </cl-row>
        
                <cl-row>
                    <!-- 数据表格 -->
                    <cl-table ref="Table" />
                </cl-row>
        
                <cl-row>
                    <cl-flex1 />
                    <!-- 分页控件 -->
                    <cl-pagination />
                </cl-row>
        
                <!-- 新增、编辑 -->
                <cl-upsert ref="Upsert" />
            </cl-crud>
        </div>
    </template>
    
    <script>
    export default {
        data () {
            return {
                
            }
        }
    }
    </script>`
}

const options = {
  code: createVue(),
  viewPath: 'demo/views/goods.vue'
}
createMenu(options)
