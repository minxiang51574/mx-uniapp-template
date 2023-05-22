/*
 * @Author       : Mx
 * @Date         : 2023-04-07 14:17:20
 * @Description  : 工具函数
 */

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 */
export const debounce = (func, wait = 500, immediate = false) => {
  // 通过闭包缓存一个定时器 id
  let timer = null
  // 将 debounce 处理结果当作函数返回
  // 触发事件回调时执行这个返回函数
  return function (...args) {
    let _ctx = this
    if (immediate) {
      func.apply(_ctx, args) // 确保引用函数的指向正确，并且函数的参数也不变
      immediate = false
      return
    }
    // 如果已经设定过定时器就清空上一次的定时器
    if (timer) {
      clearTimeout(timer)
    }
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
export const throttle = (func, interval = 500) => {
  let last = 0
  return function (...args) {
    let cur = +new Date()
    let ctx = this
    if (cur - last > interval) {
      func.apply(ctx, args)
      last = cur
    }
  }
}
