<template>
  <div class="container5">
    <div class="page5">
      <page-title :cnTitle="'作品展示'"
                  :enTitle="'SOME DEMO'"></page-title>
      <div class="demo ani"
           swiper-animate-effect="bounceIn"
           swiper-animate-duration="1s">
        <div class="remarks">（注：以下项目数据均为mock.js模拟，可点击查看）</div>
        <swiper :options="swiperOption"
                class="demo-swiper">
          <swiper-slide v-for="(item,index) in myProject"
                        :key="index">
            <div class="product"
                 @click.stop="toProject(item.url)">
              <div class="image"> <img :src="item.image"></div>

              <div class="title">{{item.name}}</div>
              <div class="explain">
                <span>{{item.detail}}</span>
              </div>
            </div>
          </swiper-slide>

          　　<div class="swiper-button-prev"
               slot="button-prev"></div>
          　　<div class="swiper-button-next"
               slot="button-next"></div>
        </swiper>
        <!-- <div class="guide">
          <img :src="guideImg" />
          <span>点击查看</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import pageTitle from '@/base/pageTitle'
export default {
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // loop: ture
      },
      productImg: require('../assets/demo-1.jpg'),
      guideImg: require('../assets/guide.png'),
      myProject: [
        {
          name: "公司官网+商城(响应式)",
          detail: '项目采用Vue全家桶,使用栅格布局及媒体查询做响应式布局。用node express建立前端服务器 前后端分离',
          image: require('../assets/guanwang.png'),
          url: 'http://www.guomaigene.com'
        },
        {
          name: "APP内嵌H5（移动端）",
          detail: 'vue全家桶，APP内嵌H5页面。',
          image: require('../assets/app-report.png'),
          url: 'http://liuzilu.club:8030/index.html?token=13062095EBF1B80E0A0615C170722A8A&username=13358267153&pro_sample_name=刘紫陆&pro_sample_sex=1&update_time=211333&pro_project_id=15313770050000000000000800000011&del=0&id=15371533174320010010000400000011&pro_project_name=国脉全基因组测序普惠版&pro_sample_id=15313814337280010010001000000031&indexList=1.1.2.2.3.3.4.4.5.5.6.6.7.7#/'
        }, {
          name: "后台管理系统(PC端)",
          detail: '使用datatable插件，进行表格增删改查导出等工作；使用select2插件动态加载下拉框选项；使用validate.js校验。。。',
          image: require('../assets/proManager.png'),
          url: 'http://liuzilu.club:8050'
        },
        {
          name: "LZL-MUSIC",
          detail: '根据网课开源学习，模仿qq音乐，跨域请求qq音乐接口，完成歌单，播放列表，播放顺序等功能。。。',
          image: require('../assets/lzl-music.png'),
          url: 'http://liuzilu.club:3000'
        },
        {
          name: "知情同意书（微信H5页）",
          detail: '使用zepto.js移动端插件，validate.js,label+input 自定义单选框等等',
          image: require('../assets/appOreder.png'),
          url: 'http://liuzilu.club:8080/appOrder/AppOrder.html?order_no=P00118A11001&order_no_cipher=%20b6c2e856e61f66d6c333dbf1dc8ee30b'
        }, {
          name: "活动页（微信H5页）",
          detail: '使用zepto.js移动端插件，验证，遮罩框等。',
          image: require('../assets/activity.png'),
          url: 'http://liuzilu.club:8080/yearEnd/yearEnd/yearEnd.html'
        },
      ],
    }
  },
  components: {
    pageTitle
  },
  methods: {
    toProject (url) {
      window.open(url)
    }
  }
}
</script>

<style lang="stylus">
.container5
  height 100%
  background-color #f7f9fa
  color black
  .page5
    max-width 570px
    margin 0 auto
    .demo
      position relative
      .demo-swiper
        width 100%
        // height 500px
        .product
          height 100%
          width 100%
          text-align center
          .image
            margin 0 auto
            width 250px
            height 250px
            overflow hidden
            img
              max-width 100%
              min-height 100%
          .title
            margin-top 10px
            font-size 25px
          .explain
            max-width 300px
            margin 20px auto
            text-align left
    .remarks
      font-size 14px
      color #787978
    .guide
      position absolute
      bottom -10px
      left 50%
      z-index 9
      transform translate3d(-50%, 0, 0)
      img
        display inline-block
        width 30px
        height 30px
// 上下页自定义
.swiper-button-prev
  width 30px !important
  height 30px !important
  top 130px !important
.swiper-button-next
  width 30px !important
  height 30px !important
  top 130px !important
</style>
