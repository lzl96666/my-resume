<template>
  <div class="container3">
    <div class="page3">
      <page-title :cnTitle="'前端技能'"
                  :enTitle="'WEB SKILL'"></page-title>
      <div class="skill-mastery ani"
           swiper-animate-effect="bounceInLeft"
           swiper-animate-duration="1s">
        <div class="col-md-6">
          <div class="progress-wrap">
            <h3><span class="name-left">HTML5/CSS3</span><span class="value-right">90%</span></h3>
            <div class="progress">
              <div class="progress-bar progress-bar-1 progress-bar-striped active"
                   role="progressbar"
                   aria-valuenow="90"
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style="width:90%">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap">
            <h3><span class="name-left">Javascript</span><span class="value-right">80%</span></h3>
            <div class="progress">
              <div class="progress-bar progress-bar-2 progress-bar-striped active"
                   role="progressbar"
                   aria-valuenow="80"
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style="width:80%">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap">
            <h3><span class="name-left">Jquery</span><span class="value-right">90%</span></h3>
            <div class="progress">
              <div class="progress-bar progress-bar-striped active"
                   role="progressbar"
                   aria-valuenow="90"
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style="width:90%">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap">
            <h3><span class="name-left">VUE.js</span><span class="value-right">85%</span></h3>
            <div class="progress">
              <div class="progress-bar progress-bar-3 progress-bar-striped active"
                   role="progressbar"
                   aria-valuenow="85"
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style="width:85%">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap ">
            <h3><span class="name-left">NODE.js</span><span class="value-right">80%</span></h3>
            <div class="progress">
              <div class="progress-bar progress-bar-4 progress-bar-striped active"
                   role="progressbar"
                   aria-valuenow="80"
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style="width:80%">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="progress-wrap ">
            <h3><span class="name-left">BootStarp、ElementUI、VANT。。。</span><span class="value-right">90%</span></h3>
            <div class="progress">
              <div class="progress-bar progress-bar-5 progress-bar-striped active"
                   role="progressbar"
                   aria-valuenow="90"
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style="width:90%">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="myself">
        <span>个人组件库 <van-button type="info"
                      @click="$router.push('/my')">查看</van-button>
        </span>
        <span>个人JS库 <van-button type="info"
                      @click="$router.push('/js')">查看</van-button>
        </span>
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
.container3
  height 100%
  background-color #f7f9fa
  color black
  .page3
    margin 0 auto
    max-width 970px
    .skill-mastery
      padding 10px
      clear both
      .progress-wrap
        width 100%
        float left
        // margin-bottom 10px
        h3
          font-size 16px
          display block
          margin-bottom 10px
          float left
          width 100%
          .name-left
            float left
          .value-right
            float right
        .progress
          width 100%
          float left
          height 5px
          box-shadow none
          .progress-bar
            background-color #2f3c4f
            height 5px
            display block
            box-shadow none
          .progress-bar-1
            background-color #2980b9 !important
          .progress-bar-2
            background-color #c0392b !important
          .progress-bar-3
            background-color #d35400 !important
          .progress-bar-4
            background-color #8e44ad !important
          .progress-bar-5
            background-color #27ae60 !important
    .myself
      clear both
      text-align left
      margin 0 10px
</style>
