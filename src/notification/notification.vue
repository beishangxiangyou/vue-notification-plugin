<template>
  <transition name="slide" @after-leave="afterLeave" @after-enter="afterEnter">
    <div
      class="notification"
      :style="style"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <span class="content">{{content}}</span>
      <a class="btn" @click.prevent="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'notification',
    props: {
      content: {
        type: String,
        required: true
      },
      btn: {
        type: String,
        default: '关闭'
      }
    },
    data() {
      return {
        visible: true
      }
    },
    computed: {
      style() {
        return {}
      }
    },
    methods: {
      handleClose() {
        this.$emit('close')
      },
      afterLeave() {
        this.$emit('closed')
      },
      afterEnter() {
      },
      clearTimer() {
      },
      createTimer() {
      }
    }
  }
</script>

<style scoped lang="scss">
  .notification {
    position: fixed;
    right: 20px;
    bottom: 0;
    display: inline-flex;
    background-color: #303030;
    color: rgba(255, 255, 255, 1);
    align-items: center;
    padding: 20px;
    min-width: 280px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);
    flex-wrap: wrap;
    /*transition: all .3s;*/
    border-radius: 4px;

    .content {
      padding: 0;
    }

    .btn {
      color: #ff4081;
      padding-left: 24px;
      margin-left: auto;
      cursor: pointer;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all .5s;
    transform: translateX(0%);
    opacity: 1;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
    opacity: 0;

  }

</style>


