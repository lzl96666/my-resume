<template>
  <div style="height:500px">
    <swiperNav :nav="nav"
               :index="navIndex"
               @clickfunc="navClick">
    </swiperNav>
    <swiper :options="contentSwiperOption"
            ref="contentSwiper"
            class="swiper-box"
            @slideChangeTransitionEnd="fnend">
      <swiper-slide v-for="(news, index) in nav"
                    class="tab"
                    :key="index">
        <listPage :news="news"
                  v-if="OpenedIndex.indexOf(index)!=-1"></listPage>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import swiperNav from '@/components/lzl-list/swiperNav'
import listPage from '@/components/lzl-list/listPage';

export default {
  data () {
    return {
      nav: [
        {
          name: '标题1'
        },
        {
          name: '标题2'
        },
        {
          name: '标题3'
        },
        {
          name: '标题4'
        },
        {
          name: '标题5'
        }, {
          name: '标题6'
        }, {
          name: '标题7'
        }, {
          name: '标题8'
        }, {
          name: '标题9'
        },
      ],
      navIndex: 0,
      OpenedIndex: [],
      contentSwiperOption: {
        on: {
          touchStart: function (event) {
            // console.log('事件触发了;');
          },
          touchMove: function (event) {
            // console.log('进行中');
          }, touchEnd: function (event) {
            // console.log('结束了');
          },
        },
      },
    }
  },
  components: {
    swiper, swiperSlide, swiperNav, listPage
  },
  mounted () {
    this.fnend();
  },
  watch: {
  },
  methods: {
    fnend () {
      const currentIndex = this.$refs['contentSwiper'].swiper.activeIndex
      this.navIndex = currentIndex
      if (this.OpenedIndex.indexOf(currentIndex) == -1) {
        this.OpenedIndex = [...this.OpenedIndex, currentIndex]
      }

    },
    navClick (value) {
      this.navIndex = value
      this.$refs['contentSwiper'].swiper.slideTo(value)
    },

  }
}
</script>

<style>
/* 列表容器 */
.loading {
  text-align: center;
}
</style>
