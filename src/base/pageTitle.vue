<template>

  <div class="page-title ani"
       swiper-animate-effect="bounce"
       swiper-animate-duration="1s">
    <div class="cn-title">{{cnTitle}}</div>
    <span class="br"></span>
    <div class="en-title">-{{enTitle}}-</div>
  </div>

</template>

<script>
export default {
  props: {
    cnTitle: {
      type: String,
      default: '中文标题'
    },
    enTitle: {
      type: String,
      default: '英文标题'
    }
  },
  data () {
    return {
      show: true
    }
  },
  components: {

  },
  methods: {
    changeShow () {
      alert("11")
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-title
  padding 20px 0 10px 0
  .cn-title
    font-size 26px
    font-family hyllh
  .en-title
    font-size 20px
    font-family hyllh
  .br
    display inline-block
    width 200px
    height 5px
    margin 5px auto
    border none
    background #333
open-enter-active, .open-leave-active
  transition all 0.5s
.open-enter, .open-leave-to
  opacity 0
.open-enter-to, .open-leave
  opacity 1
</style>
