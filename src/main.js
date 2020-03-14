import Vue from 'vue'
import App from './App.vue'

// import Notification from './notification'
import Notification from '../dist/notify'
// 安装插件
Vue.use(Notification)

new Vue({
  el: '#app',
  render: h => h(App)
})
