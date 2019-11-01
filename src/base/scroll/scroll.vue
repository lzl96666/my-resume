<template>
  <div ref="wrapper">
    <div>
      <div class="pulldown-wrapper">
        <div v-show="beforePullDown">
          <span>Pull Down and refresh</span>
        </div>
        <div v-show="!beforePullDown">
          <div v-show="isPullingDown">
            <span>Loading...</span>
          </div>
          <div v-show="!isPullingDown"><span>Refresh success</span></div>
        </div>
      </div>
      <slot></slot>
      <div class="pullup-wrapper">
        <div v-if="!isPullUpLoad"
             class="before-trigger">
          <span class="pullup-txt">Pull up and load more</span>
        </div>
        <div v-else
             class="after-trigger">
          <span class="pullup-txt">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { reject, resolve } from 'q';
const THRESHOLD = 70
const STOP = 56
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pullingUp: {
      type: Boolean,
      default: false
    },
    pullingDown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      beforePullDown: true,
      isPullingDown: false,
      isPullUpLoad: false,
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        pullDownRefresh: {
          threshold: THRESHOLD,
          stop: STOP
        },
        pullUpLoad: true
      });

      if (this.listenScroll) {
        let me = this;
        this.scroll.on("scroll", pos => {
          me.$emit("scroll", pos);
        });
      }
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("scrollToEnd");
          }
        });
      }
      if (this.pullingDown) {
        this.scroll.on("pullingDown", () => {
          this.beforePullDown = false
          this.isPullingDown = true
          this.pullingDownCallBack()
        });
      }
      if (this.pullingUp) {
        this.scroll.on("pullingUp", () => {
          this.isPullUpLoad = true
          this.pullingUpCallBack()
        });
      }


      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    disable () {
      this.scroll && this.scroll.disable();
    },
    enable () {
      this.scroll && this.scroll.enable();
    },
    refresh () {
      this.scroll && this.scroll.refresh();
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    pullingDownCallBack () {
      const pullingDownSuccess = () => {
        this.beforePullDown = true
        this.isPullingDown = false
        this.scroll.finishPullDown()
      }
      this.$emit("pullingDownCallBack", pullingDownSuccess)
    },
    pullingUpCallBack () {
      const pullingUpSuccess = () => {
        this.isPullUpLoad = false
        this.scroll.finishPullUp()
      }
      this.$emit("pullingUpCallBack", pullingUpSuccess)
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>

<style scoped>
.pulldown-wrapper {
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  text-align: center;
  color: #999;
}
.pullup-wrapper {
  padding: 20px;
  text-align: center;
  color: #999;
}
</style>
