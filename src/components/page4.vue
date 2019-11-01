<template>
  <div class="container4">
    <div class="page4">
      <page-title :cnTitle="'工作经历'"
                  :enTitle="'WORK EXPERIENCE'"></page-title>
      <div class="experience">
        <ul class="my-xp">
          <li class="clear ani"
              swiper-animate-effect="bounceInDown"
              swiper-animate-duration="1s">
            <div class="date-box">
              <p>-</p>
              <p>06/2018</p>
            </div>
            <div class="my-work my-xp-box ">
              <strong>（实习）泉州正骨医院</strong>
              <p class="ptitle">信息中心/前端工程师</p>
              <p>负责管理后台前端开发等</p>
              <p>利用JS、CSS3书写前端功能</p>
              <p>并将代码上传到代码托管平台上</p>
            </div>
          </li>
          <li class="clear ani"
              swiper-animate-effect="bounceInDown"
              swiper-animate-duration="1s">
            <div class="date-box">
              <p>07/2018</p>
              <p>-</p>
              <p>现在</p>
            </div>
            <div class="my-work my-xp-box ">
              <strong>福建国脉生物科技有限公司</strong>
              <p class="ptitle">技术部/前端工程师</p>
              <p>负责官网、后台、APP内嵌页面等</p>
              <p>使用VUE\JQUERY等框架</p>
              <p>参与模块化、SEO优化等</p>
            </div>
          </li>

        </ul>
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
  }
}
</script>

<style lang="stylus">
.container4
  height 100%
  background-color #f7f9fa
  color black
  .page4
    max-width 970px
    margin 0 auto
    font-size 14px
    .experience
      padding 0 10px
      margin-top -10px
      .my-xp
        position relative
        @media screen and (min-width: 450px)
          margin-top -50px
        li
          max-width 500px
          position relative
          margin 0 auto
          padding-bottom 10px
          &::before
            content ''
            position absolute
            top 0
            bottom 0
            left 50px
            width 2px
            margin-left -1.5px
            background-color #eee
          @media screen and (min-width: 450px)
            padding-top 100px
            &::before
              left 75px
              padding-top 20px
            &:first-child::before
              width 0
          .date-box
            z-index 9
            width 100px
            height 100px
            border 1px solid #eee
            background #fff
            border-radius 50%
            padding-top 30px
            position absolute
            top 0
            left 0
            margin-left 0
            p
              margin 0
              font-size 14px
              line-height 15px
            @media screen and (min-width: 450px)
              width 150px
              height 150px
              text-align center
              top 80px
              p
                font-size 16px
                font-weight 600
                line-height 30px
          .my-work
            text-align left
            float left
            margin-left 60px
            margin-top 110px
            width 80%
            @media screen and (min-width: 450px)
              float left
              width 55%
              margin-left 160px
              margin-top 0
            strong
              color #626e7c
              font-size 16px
            .ptitle
              color rgb(232, 126, 4)
              margin 0.5em 0
            p
              margin 0
              color #787978
.clear
  zoom 1
  &:after
    content ''
    clear both
    display block
    height 0
    visibility hidden
</style>
