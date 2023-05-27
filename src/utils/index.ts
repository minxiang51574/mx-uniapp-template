/*
 * @Author       : Mx
 * @Date         : 2022-06-16 15:02:19
 * @Description  : 工具函数
 */

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 */
export const debounce = (func: Function, wait: number = 500, immediate: boolean = false) => {
  // 通过闭包缓存一个定时器 id
  let timer: any = null
  // 将 debounce 处理结果当作函数返回 
  // 触发事件回调时执行这个返回函数
  return function (...args: any) {
    let _ctx = this
    if (immediate) {
      func.apply(_ctx, args) // 确保引用函数的指向正确，并且函数的参数也不变
      immediate = false
      return
    }
    //如果已经设定过定时器就清空上一次的定时器
    if (timer) { clearTimeout(timer) }
    // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
    timer = setTimeout(() => {
      func.apply(_ctx, args)
    }, wait)
  }
}

/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} interval 延时的时间
 */
export const throttle = (func: Function, interval: number = 500) => {
  let last = 0
  return function (...args: any) {
    let cur = +new Date();
    let ctx = this;
    if (cur - last > interval) {
      func.apply(ctx, args)
      last = cur
    }
  }
}

/**
 * @description: 验证身份证号
 * @param { string | number} idCard
 */
export const isIDCard = (idCard: string | number): Boolean =>
  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(idCard.toString())

/**
 * @description: 验证手机号
 * @param { string | number} phone
 */
export const isMatchPhone = (phone: string | number): Boolean =>
  /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(phone.toString())


/**
 * 验证电子邮箱格式
 * @param { string | number} email
 */
export const isEmail = (email: string): Boolean => {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(email)
}

/**
 * 是否数组
 */
export const isArray = (value: any): Boolean => {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}

/**
* 是否对象
*/
export const isObject = (value: any): Boolean => {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * @description: 隐私手机号
 * @param { phone:string | number }
 * @return { string }
 */
export const phonePrivate = (phone: string | number): string => {
  return phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}

/**
 * @description: 隐私姓名
 * @param { name:string }
 * @return { string }
 */
export const namePrivate = (name: string): string => {
  return name[0] + '**'
}

/**
 * @description: 存数据
 * @param { key: string} 本地缓存中的指定的 key
 */
export const setStorageSync = (key: string, data: any): void => {
  const v = data ? JSON.stringify(data) : ''
  uni.setStorageSync(key, v)
}

/**
 * @description: 取数据
 * @param { key: string } 本地缓存中的指定的 key
 */
export const getStorageSync = (key: string) => {
  const v = uni.getStorageSync(key)
  return JSON.parse(v)
}

/**
 * @description: 删除数据
 * @param { key: string} 本地缓存中的指定的 key
 */
export const removeStorageSync = (key: string): void => {
  uni.removeStorageSync(key)
}

/**
 * @description: 返回到顶部
 */
export const scrollToTop = () => {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 300
  })
}

/**
 * 转换成promise
 */
export const promisefy = (api: any): any => {
  return function (options = {}, ...params: any) {
    return new Promise((resolve, reject) => {
      api({ success: resolve, fail: reject, ...options }, ...params)
    })
  }
}

// 获取系统信息
export const getSystemInfo = () => {
  return uni.getSystemInfoSync()
}

// 是否IOS系统
export const isIos = (): boolean => {
  console.log(getSystemInfo())
  return getSystemInfo().platform === 'ios'
}

/**
 * @description 获取当前页面路径
 */
export const currentPage = () => {
  const pages = getCurrentPages()
  // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
  return `/${pages[pages.length - 1]?.route ?? ''}`
}

/**
 * @description 获取当前路由栈实例数组
 */
export const currentPages = () => {
  const pages = getCurrentPages()
  return pages
}
/**
 * 绘制图片(可以是圆形的)
 * @param object ctx content对象
 * @param String url 图片地址
 * @param number x 横坐标
 * @param number y 纵坐标
 * @param number w 宽
 * @param number h 高
 * @param number isCircular 是否变成圆形
 */
export const drawImg = (
  ctx: any,
  url: String,
  x: number,
  y: number,
  w: number,
  h: number,
  isCircular: Boolean = false
): void => {
  const rpxw = getSystemInfo().screenWidth / 375 || 1
  x = x * rpxw
  y = y * rpxw
  w = w * rpxw
  h = h * rpxw
  if (isCircular) {
    ctx.save()
    ctx.beginPath()
    ctx.stroke()
    ctx.arc(w / 2 + x, h / 2 + y, w / 2, 0, Math.PI * 2, false)
    ctx.clip()
    ctx.drawImage(url, x, y, w, h)
    ctx.restore()
  } else {
    ctx.beginPath()
    ctx.drawImage(url, x, y, w, h)
  }
}

/**
 * 绘制文字
 * @param object ctx content对象
 * @param string text 文字内容
 * @param number x 横坐标
 * @param number y 纵坐标
 * @param string color 文字颜色
 * @param number size 文字大小
 * @param string align 文字对齐方式
 * @param Boolean lineThrough 是否有划线
 * @param string bold 是不是加粗
 */
export const drawFont = (
  ctx: any,
  text: string,
  x: number,
  y: number,
  color: string,
  size: number,
  align = 'left',
  lineThrough = false,
  bold = 'normal'
): void => {
  const rpxw = getSystemInfo().screenWidth / 375 || 1
  x = x * rpxw
  y = y * rpxw
  size = Math.round(size * rpxw)
  ctx.beginPath()
  ctx.setFillStyle(color)
  ctx.setFontSize(size) // 字体设置必须是整数
  if (bold === 'bold') {
    ctx.font = `normal bold ${size}px Arial,sans-serif`
  } else {
    ctx.font = `normal ${size}px Arial,sans-serif`
  }
  ctx.setTextAlign(align)
  ctx.fillText(text, x, y + size)
  if (lineThrough) {
    ctx.setStrokeStyle(color)
    ctx.setLineWidth(1)
    const { width: lineEnd } = ctx.measureText(text)
    ctx.moveTo(x, y + size / 1.5)
    ctx.lineTo(x + lineEnd, y + size / 1.5)
    ctx.stroke()
  }
  ctx.closePath()
}

/**
 * 绘制渐变色的矩形 (可带圆角)
 * @param object ctx content对象
 * @param number x 横坐标
 * @param number y 纵坐标
 * @param number w 宽
 * @param number h 高
 * @param number r 圆角
 * @param string color1 颜色值1
 * @param string color2 颜色值2
 * @param string direction 渐变方向
 */
export const rgbaBox = (
  ctx: any,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  color1: string,
  color2: string,
  direction = 'horizontal'
): void => {
  const rpxw = getSystemInfo().screenWidth / 375 || 1

  x = x * rpxw
  y = y * rpxw
  w = w * rpxw
  h = h * rpxw
  r = r * rpxw
  ctx.beginPath()
  let linearGradient
  if (direction === 'horizontal') {
    linearGradient = ctx.createLinearGradient(x, y, w, h)
  } else {
    linearGradient = ctx.createLinearGradient(x, y, x, y + 80)
  }
  linearGradient.addColorStop(0, color1)
  linearGradient.addColorStop(1, color2)
  if (r > 0) {
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
  }
  ctx.setFillStyle(linearGradient) // 设置填充颜色
  ctx.closePath()
  ctx.fill()
}

/**
 * 绘制纯色背景的圆角矩形
 * @param object ctx content对象
 * @param number x 横坐标
 * @param number y 纵坐标
 * @param number w 宽
 * @param number h 高
 * @param number r 圆角
 * @param number bgc 背景色
 */
export const roundBox = (
  ctx: any,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  bgc = '#ffffff'
) => {
  const rpxw = getSystemInfo().screenWidth / 375 || 1

  x = x * rpxw
  y = y * rpxw
  w = w * rpxw
  h = h * rpxw
  r = r * rpxw
  ctx.beginPath()
  ctx.setFillStyle(bgc)
  ctx.setStrokeStyle(bgc)
  ctx.setLineJoin('round') // 交点设置成圆角
  ctx.setLineWidth(r + 1)
  ctx.strokeRect(x + r / 2, y + r / 2, w - r, h - r)
  ctx.fillRect(x + r, y + r, w - r * 2, h - r * 2)
  ctx.stroke()
  ctx.closePath()
}
