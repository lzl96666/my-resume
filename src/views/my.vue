<template>
  <div class="js-wrapper">
    （开发一些基础组件）

    <card title='1.loadding'>
      <div>样式一</div>
      <loadding type='1'>正在加载...</loadding>
      <div>样式二</div>
      <loadding type='2'>正在加载...</loadding>
      <div>样式三</div>
      <loadding type='3'>正在加载...</loadding>
      <div>样式四</div>
      <loadding type='4'>正在加载...</loadding>
    </card>

    <card title='2.展开动画'>
      <van-button type="default"
                  @click="fnOpen">展开</van-button>
      <collapse>
        <!-- 必须包含外层div；需要设置高度边框等在内层div -->
        <div v-show="show">
          <div class="collaspse">
            aa
          </div>
        </div>
      </collapse>
    </card>

    <card title='3.alert'>
      <van-button type="default"
                  @click="dialog">点击</van-button>
    </card>

    <card title='4.comfirm'>
      <van-button type='default'
                  @click="confirm">点击</van-button>
    </card>

    <card title='5.nav-bar(保持居中)'>
      <div class="nav-bar-wrapper">
        <nav-bar :list='nav'
                 :index='navIndex'
                 tabWith='88'
                 tabHeight='50'
                 @navClick="fnclick"></nav-bar>
      </div>
      <swiper :options="swiperOption"
              ref="swiper"
              class="swiper-box"
              @slideChangeTransitionEnd="end">
        <swiper-slide v-for="(news, index) in nav"
                      class="tab"
                      :key="index">
          <div v-for="(item2, index2) in 10"
               :key="index2">内容{{index+1}}第{{index2+1}}条</div>

        </swiper-slide>
      </swiper>
    </card>

    <card title='6.swiper.js'>
      <swiperAndBscroll></swiperAndBscroll>
    </card>
  </div>

</template>

<script>
import card from '@/components/card'
import loadding from '@/base/loading.vue'
import collapse from '@/base/collapse.vue'
import navBar from '@/base/nav-bar.vue'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { List, Cell } from 'vant';
import swiperAndBscroll from '@/components/lzl-list/swiperAndBscroll'

export default {
  data () {
    return {
      show: false,
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

      swiperOption: {

      },

      list: [],
      loading: false,
      finished: false,

    }
  },
  components: {
    card, loadding, collapse, navBar, [List.name]: List, [Cell.name]: Cell, swiper, swiperSlide, swiperAndBscroll
  },
  computed: {
    swiper () {
      return this.$refs['swiper'].swiper
    },

  },
  watch: {
    navIndex (value) {
      this.swiper.slideTo(value)
    }
  },
  methods: {
    fnOpen () {
      this.show = !this.show
    },
    dialog () {
      this.$dialog("哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈").then(res => {
        console.log(res);
      })
    },
    confirm () {
      this.$confirm({
        title: '提示',
        msg: '是否删除这条信息？',
        btn: {
          ok: '确定',
          no: '取消'
        }
      }).then(() => {
        console.log('ok_lzl')
      })
        .catch(() => {
          console.log('no_lzl')
        })
    },
    fnclick (index) {
      console.log("点击了" + (index + 1))
      this.navIndex = index
    },
    end () {
      this.navIndex = this.swiper.activeIndex
    },

    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },

  }
}
</script>

<style scoped>
.js-wrapper {
  background-color: #f0f3f6;
  padding: 10px;
}
.collaspse {
  border: 1px solid red;
  height: 100px;
  width: 300px;
  margin: 0 auto;
  overflow-y: auto;
}
.nav-bar-wrapper {
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid red;
}
.swiper-box {
  /* height: 200px; */
}
</style>
