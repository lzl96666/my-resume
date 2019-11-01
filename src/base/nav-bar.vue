<template>
  <div class="tabs"
       ref="tabs">
    <div class="tab-wrapper"
         ref="tabsWrapper"
         :style="`height:${tabHeight}px`">
      <!-- <transition-group enter-active-class="animated bounceIn"> -->
      <span v-for="(item,index) in list"
            :key="index"
            @click='fn(index)'
            class="tab"
            :style="`width:${tabWith}px;lineHeight:${tabHeight}px`">{{item.name}}</span>
      <!-- </transition-group> -->
      <div class="tab-line"
           ref='tabsline'
           :style="`width:${tabWith*0.8}px;left:${tabWith*0.1}px;color:${tabLineColor}`">
      </div>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return [
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
          },
        ]
      }
    },
    tabHeight: {
      type: String,
      default: '100'
    },
    tabWith: {
      type: String,
      default: '200'
    },
    tabLineColor: {
      type: String,
      default: 'red'
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  components: {

  },
  created () {
    this.currentIndex = this.index
  },
  watch: {
    currentIndex (index) {
      //tab区
      //scrollWidth为实际内容的宽度。
      //clientWidth是内容可视区的宽度。
      //offsetWidth是元素的实际宽度。
      let tabsWrapper = this.$refs.tabsWrapper
      this.$refs.tabsline.style.transform = 'translateX(' + this.tabWith * index + 'px)'

      // this.$refs.tabsline.style.transform = 'translateX(-100px);'
      // console.log(this.$refs.tabsWrapper.offsetWidth) //偏移量
      // this.$refs.tabs.scrollLeft += 30
      // console.log(this.$refs.tabsWrapper.children[index].offsetLeft)
      //如果不需要滚动
      if (this.$refs.tabsWrapper.scrollWidth < this.$refs.tabs.clientWidth) {
        return
      }
      if (tabsWrapper.children[index].offsetLeft < this.$refs.tabs.clientWidth / 2) {//点击的这个元素在中线左边
        // console.log("点击的这个元素在中线左边")
        this.$refs.tabsWrapper.style.transform = 'translateX(' + 0 + 'px)'
      } else {
        // console.log("点击的这个元素在中线右边")
        //计算应该向左偏移多少
        let x = tabsWrapper.children[index].offsetLeft - this.$refs.tabs.clientWidth / 2 + tabsWrapper.children[index].offsetWidth / 2
        //如果
        if (this.$refs.tabsWrapper.scrollWidth - this.$refs.tabs.clientWidth >= x) {
          let that = this
          setTimeout(function () {
            that.$refs.tabsWrapper.style.transform = 'translateX(' + -x + 'px)'
          }, 300)

        } else {
          let maxX = tabsWrapper.scrollWidth - this.$refs.tabs.clientWidth
          this.$refs.tabsWrapper.style.transform = 'translateX(' + -maxX + 'px)'
        }
      }

      // 内容区
      // this.swiper.slideTo(this.currentIndex)
    },
    index (index) {
      this.currentIndex = index
    }
  },
  methods: {
    fn (index) {
      this.currentIndex = index;
      this.$emit("navClick", index)
    },
  }
}
</script>

<style scoped>
.tabs {
  width: 100%;
  animation: 1s all ease;
  white-space: nowrap;
  /* overflow-x: scroll;
  overflow-y: hidden; */
  overflow: hidden;
  /* border: 1px solid red; */
  font-size: 16px;
}

.tab-wrapper {
  height: 50px;
  line-height: 50px;
  position: relative;
  float: left;
  /* transform: translateX(0px); */
  transition: transform 0.3s ease-in-out;
}

.tab-wrapper .tab {
  display: inline-block;
  height: 100%;
  cursor: pointer;
  /* text-align: center; */
  position: relative;
  width: 100px;
  text-align: center;
}
.tab-line {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 1;
  height: 3px;
  background-color: #f44;
  border-radius: 3px;
  width: 80px;
  transition: all 0.3s ease-in-out;
}
</style>
