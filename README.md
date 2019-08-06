# vue-notification-plugin

## 介绍
当前插件，基于vue2.5.11，用于展示vue插件的开发步骤

## 安装
```bash
npm install --save-dev vue-notification-plugin
```

## 快速上手

```javascript
import Notification from 'vue-notification-plugin'
// 安装插件
Vue.use(Notification)
```

```html
<template>
  <div id="app">
    <a href="#" class="btn" @click.stop="_notify">点击我哦~</a>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    methods: {
      _notify() {
        /**
         * btn: 'x',
         * autoClose: '1500'
         */
        this.$notify({
          content: '小哥哥或小姐姐，约吗？'
        })
      }
    }
  }
</script>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>vue-notification-plugin</title>
  <style>
    #app .btn {
      display: block;
      height: 40px;
      line-height: 40px;
      text-align: center;
      text-decoration: none;
      border-radius: 4px;
      background-color: #1aaa55;
      border-color: #168f48;
      color: #fff;
    }

    #app .btn:active {
      background-color: #168f48;
    }
  </style>
</head>
<body>

<div id="app">
  <a href="#" class="btn" @click.stop="_notify">点击我哦~</a>
</div>
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
<!-- 引入 -->
<script src="../dist/notify.js"></script>
<script>
  new Vue({
    el: '#app',
    data() {
      return {
        msg: '请叫我斗图王。'
      }
    },
    methods: {
      _notify() {
        /**
         * btn: 'x',
         * autoClose: '1500'
         */
        this.$notify({
          content: '小哥哥或小姐姐，约吗？'
        })
      }
    }
  })
</script>
</body>
</html>

```

## 说明
- 因个人水平有限，如有错误，恳请您能不吝批评
- vue插件的开发文档在doc目录下哦~~

