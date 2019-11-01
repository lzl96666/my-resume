<template>

  <transition v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:after-enter="afterEnter"
              v-on:enter-cancelled="enterCancelled"
              v-on:before-leave="beforeLeave"
              v-on:leave="leave"
              v-on:after-leave="afterLeave"
              v-on:leave-cancelled="leaveCancelled">

    <slot></slot>

  </transition>

</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    // --------
    // 进入中
    // --------

    beforeEnter: function (el) {
      console.log(el)
      if (!el.dataset) el.dataset = {};
      let styles = window.getComputedStyle(el);
      // 记录展开前的属性值 记录在data-
      el.dataset.oldOverflow = styles.getPropertyValue('overflow');
      el.dataset.oldPaddingTop = styles.getPropertyValue('padding-top');
      el.dataset.oldPaddingBottom = styles.getPropertyValue('padding-bottom');
      // 这三个都为0，scrollHeight的高度就是真实的内容高度了
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      el.classList.add('collapse-transition');
      el.style.overflow = 'hidden';
      debugger;
    },
    enter: function (el, done) {
      if (el.scrollHeight !== 0) {
        // 动画过程中，逐渐增大到展开前应占的高度值
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
      debugger;
    },
    afterEnter: function (el) {
      el.classList.remove('collapse-transition');
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.display = 'none'
      debugger;
    },
    enterCancelled: function (el) {
      // ...

    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      // ...
      el.style.height = el.scrollHeight - parseFloat(el.dataset.oldPaddingTop) - parseFloat(el.dataset.oldPaddingBottom) + 'px';
      el.style.overflow = 'hidden';
      el.classList.add('collapse-transition');
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      // ...
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    afterLeave: function (el) {
      // ...

    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      // ...

    }
  }
}
</script>

<style>
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out;
}
</style>
