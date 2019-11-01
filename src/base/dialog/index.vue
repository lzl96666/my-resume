<template>
  <transition name="scale">
    <div class="dialogBg"
         v-if="visible">
      <div :class="['dialog',cls]">{{msg}}</div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: "未知错误"
    },
    visible: {
      type: Boolean,
      default: false
    },
    cls: {
      type: String,
      default: "sort"
    }
  },
  watch: {
    visible: function (value) {
      if (value === true) {
        setTimeout(() => {
          this.visible = false;
        }, 3000);
      }
    }
  },
  methods: {
  }
};
</script>
<style>
.dialogBg {
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog {
  max-width: 80%;
  margin: 0 auto;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px 30px;
  color: #fff;
  opacity: 0.9;
  transition: all 0.2s;
  border-radius: 10px;
}
</style>
