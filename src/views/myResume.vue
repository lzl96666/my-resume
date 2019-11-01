<template>
  <div class="my-resume"
       ref='my-resume'>
    <swiper :options="swiperOption"
            class="mySwiper">
      <swiper-slide>
        <page1></page1>
      </swiper-slide>
      <swiper-slide>
        <page2></page2>
      </swiper-slide>
      <swiper-slide>
        <page3></page3>
      </swiper-slide>
      <swiper-slide>
        <page4></page4>
      </swiper-slide>
      <swiper-slide>
        <page5></page5>
      </swiper-slide>
      <router-view></router-view>
    </swiper>
    <div class="swiper-pagination"></div>
    <img :src="swipe_tip"
         id="array"
         class="resize">
  </div>
</template>

<script>
import animate from 'script-loader!../common/js/swiper.animate1.0.3.min.js'
import HelloWorld from '../components/HelloWorld'
import page1 from '../components/page1'
import page2 from '../components/page2'
import page3 from '../components/page3'
import page4 from '../components/page4'
import page5 from '../components/page5'

export default {
  name: 'App',
  data () {
    return {
      swipe_tip: require('../assets/top.png'),
      swiperOption: {
        direction: 'vertical',
        mousewheel: true,
        height: window.innerHeight,   // 高度设置，占满设备高度
        pagination: {
          el: '.swiper-pagination',
          progressbarOpposite: true
        },
        loop: false,
        observer: true,
        on: {
          init: function () {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          }
        },
      },
    }
  },
  components: {
    HelloWorld, page1, page2, page3, page4, page5
  },
  mounted () {
    this.$refs['my-resume'].style.height = window.innerHeight + 'px'
  }
}
</script>

<style lang='stylus'>
.my-resume
  overflow 'hidden'
.mySwiper
  height 100%
.resize
  width 24px
  height 24px
  position absolute
  bottom 15px
  z-index 10
  -webkit-animation tipmove 1.5s infinite ease-in-out
  transform translate3d(-50%, 0, 0)
.swiper-pagination
  position absolute
  right -10px
  top 50%
  transform translate3d(0, -50%, 0) !important
  -webkit-transform translate3d(0, -50%, 0) !important
  transform rotate(90deg) !important
@keyframes tipmove
  0%
    bottom 10px
    opacity 0
  50%
    bottom 15px
    opacity 1
  100%
    bottom 20px
    opacity 0
</style>
