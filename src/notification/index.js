import notify from './function'

export default Vue => {
  // 添加实例方法
  Vue.prototype.$notify = notify
}


