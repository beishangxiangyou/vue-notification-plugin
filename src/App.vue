<template>
  <div id="app">
    <a href="#" class="btn" @click.stop="_notify">快，删库跑路~</a>
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
          content: '当事人表示非常后悔~'
        })
      }
    }
  }
</script>

<style scoped lang="scss">

  .btn {
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background-color: #1aaa55;
    border-color: #168f48;
    color: #fff;

    &:active {
      background-color: #168f48;
    }
  }
</style>
