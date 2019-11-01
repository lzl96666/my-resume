import Vue from 'vue'
import dialog from './index.vue'

// 构造子类
const Dialog = Vue.extend(dialog)

// 创建实例
let instance = new Dialog({
  el: document.createElement('div')
})

const DialogEl = function(options) {
  // 将参数传给msg
  if (options instanceof Array) {
    instance.msg = options[0]
    instance.cls = options[1] || 'sort'
  } else {
    instance.msg = options
    instance.cls = 'sort'
  }

  // instance.fnClick = function() {
  //   console.log('点击了嘛')
  // }
  // 显示组件
  instance.visible = true
  // 插入页面
  document.body.appendChild(instance.$el)
  return new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {}, 2000)
  })
}

export default DialogEl
