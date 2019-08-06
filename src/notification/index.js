import notify from './function'

const _plugin = {
  install(Vue, options) {
    // 添加实例方法
    Vue.prototype.$notify = notify
  }
}

//当使用script脚本引入时，自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(_plugin)
}

export default _plugin


