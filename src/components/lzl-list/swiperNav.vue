<template>
  <div>
    <swiper :options="swiperOption"
            ref="mySwiper"
            class="mySwiper-wrapper">
      <swiper-slide v-for="(news, index) in nav"
                    :key="index"
                    class="swiper-slide-nav"
                    :class="{active:swiperIndex == index}">
        <span>{{news.name}}</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    nav: {
      default: []
    },
    index: {
      default: 0
    }
  },
  data () {
    return {
      swiperIndex: 0,
      swiperOption: {
        //this为本swiepr
        slidesPerView: 'auto', //一排可以放多个
        setWrapperSize: true,
        freeMode: true, //缓冲
        freeModeMomentumRatio: 0.5,
        on: {
          tap: (swiper, event) => {
            this.swiperIndex = this.swiper.clickedIndex
            this.$emit('clickfunc', this.swiper.clickedIndex)
          },
          touchstart: e => {
            e.preventDefault()
          }
        }
      },
    }
  },
  components: {
    swiper, swiperSlide,
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  watch: {
    index (val) {
      this.swiperIndex = val
      this.calcOffset()
    }
  },
  methods: {
    setSwiperTranslation (value) {
      this.swiper.setTransition(300)
      this.swiper.setTranslate(-value)
    },
    calcOffset () {
      // this.swiperIndex = this.swiper.clickedIndex
      // 计算偏移量 需要三个值
      // 1.可视宽度 =》中线
      // 2.总宽度
      // 3.当前元素偏移量+2/1当前元素宽度

      // 1.可视宽度
      const swiperWidth = this.swiper.el.clientWidth
      // 2.总宽度
      const swiperScrollWidth = this.swiper.$wrapperEl[0].clientWidth
      // 3.当前元素偏移量+2/1当前元素宽度
      const slide = this.swiper.slides[this.swiperIndex]
      const slideLeft = slide.offsetLeft
      const slideWidth = slide.clientWidth
      const slideCenter = slideLeft + slideWidth / 2
      // 4.当容器内容已经不能再向左偏移
      const maxTranslateCenter = swiperScrollWidth - (swiperWidth / 2)


      if (slideCenter < swiperWidth / 2) {
        this.setSwiperTranslation(0)
      }
      else {
        if (slideCenter > maxTranslateCenter) {  //直接设置最大偏移量
          this.setSwiperTranslation(swiperScrollWidth - swiperWidth)
        } else {
          const nowTlanslate = slideCenter - swiperWidth / 2
          this.setSwiperTranslation(nowTlanslate)
        }
      }
    }
  }
}
</script>

<style>
.mySwiper-wrapper .swiper-slide-nav {
  width: 60px;
  padding: 0 5px;
  letter-spacing: 2px;
  text-align: center;
}
.mySwiper-wrapper .swiper-slide-nav.active {
  transform: scale(1.1);
  color: #ff2d2d;
}
</style>
