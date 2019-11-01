<template>
  <div class="container2">
    <div class="page2">
      <page-title :cnTitle="'关于我'"
                  :enTitle="'ABOUT ME'"
                  @click="fnclick"></page-title>
      <div class="my-info ani"
           swiper-animate-effect="bounceInLeft"
           swiper-animate-duration="1s">
        <div class="my-info-item">
          <van-icon class="icon"
                    name="friends-o" /><span class="content">姓名：刘紫陆</span></div>
        <div class="my-info-item">
          <van-icon class="icon"
                    name="browsing-history-o" /><span class="content">性别：男</span></div>
        <div class="my-info-item">
          <van-icon class="icon"
                    name="birthday-cake-o" /><span class="content">年龄：25</span></div>
        <div class="my-info-item">
          <van-icon class="icon"
                    name="wap-home" /><span class="content">学校：福建中医药大学（本一）</span></div>
        <div class="my-info-item">
          <van-icon class="icon"
                    name="bar-chart-o" /><span class="content">专业：信息管理与信息系统</span></div>
        <div class="my-info-item">
          <van-icon class="icon"
                    name="underway-o" /><span class="content">毕业时间：2018.6</span></div>
        <div class="my-info-item">
          <van-icon class="icon"
                    name="flag-o" /><span class="content">坐标：泉州</span></div>
      </div>

    </div>
  </div>
</template>

<script>
import pageTitle from '@/base/pageTitle'
export default {
  data () {
    return {

    }
  },
  components: {
    pageTitle
  },
  methods: {
    fnclick () {
      alert("111")
    }
  }
}
</script>

<style lang="stylus">
.container2
  height 100%
  background-color #f7f9fa
  color black
  // background-image url('../assets/bg.jpg')
  // background-position: center center
  .page2
    max-width 400px
    margin 0 auto
    .my-info
      text-align left
      padding 20px
      .my-info-item
        margin-top 10px
        .icon
          vertical-align middle
        .content
          vertical-align middle
</style>
