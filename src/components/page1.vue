<template>
  <div class="container1">
    <div class="page1Container">
      <div class="page1">
        <i class="head ani"
           swiper-animate-effect="tada"
           swiper-animate-duration="1s"><img :src="headImg"></i>
        <div class="name">LIUZILU</div>
        <div class="profession">web前端工程师</div>
        <div class="contant">
          <div class="contant-title">Contact ME</div>
          <div class="item">
            <van-icon class="icon"
                      name="phone-o" />13004800886</div>
          <div class="item">
            <van-icon class="icon"
                      name="envelop-o" />83413770@qq.com</div>
          <div class="item item-biji">
            <van-icon class="icon"
                      name="https://img.yzcdn.cn/vant/logo.png" />
            <van-button round
                        type="info"
                        @click="toMyNotes">学习笔记</van-button>
            <van-button round
                        type="info"
                        style="marginLeft:5px"
                        @click="toMessages">留言板</van-button>
          </div>
        </div>
        <div class="bobAnimate-container">
          <div id="bobAnimate"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      headImg: require('../assets/head.png')
    }
  },
  components: {
  },
  created () {

  },
  methods: {
    toMyNotes () {
      this.$router.push('/myNotes')
    },
    toMessages () {
      this.$router.push({ path: '/messages' })
    }

  }
}
</script>

<style lang="stylus">
.container1
  height 100%
  background-image url('../assets/cover_bg_3.jpg')
  // background-position center center
  color white
  .page1Container
    height 100%
    background-color rgba(255, 144, 0, 0.8)
    .page1
      max-width 400px
      margin auto
      padding-top 100px
      height 100%
      .title
        font-size 46px
      .head
        display inline-block
        width 200px
        height 200px
        border 1px solid #ffffff
        border-radius 100px
        overflow hidden
        img
          width 100%
          height 100%
      .name
        margin-top 10px
        font-size 50px
        text-shadow 0 0 1px currentColor, -1px -1px 1px #300, 0 -1px 1px #300, 1px -1px 1px #300, 1px 0 1px #300, 1px 1px 1px #300, 0 1px 1px #300, -1px 1px 1px #300, -1px 0 1px #300
      .profession
        font-size 24px
        margin-top 10px
      .contant
        margin-top 30px
        margin-bottom 20px
        .contant-title
          margin-bottom 30px
        .item
          margin 10px auto
          height 30px
          line-height 30px
          width 85%
          background rgba(11, 5, 48, 0.3)
          border-radius 15px
          text-align left
          display flex
          align-items center
          .icon
            margin-right 10px
            margin-left 30px
        .item-biji
          height 60px
</style>
