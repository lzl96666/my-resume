<template>
  <div>
    <!-- 样式一 -->
    <div id="sys-loading"
         v-if="type==1">
      <div class="spinner">
        <div class="loader-inner line-scale-pulse-out-rapid">
          <div v-for="(item, index) in 5"
               :key="index"
               :style="`backgroundColor:${bgColor}`"></div>
        </div>
      </div>
    </div>
    <!-- 样式二 -->
    <div class="van-loading van-loading--circular"
         v-if="type==2">
      <span class="van-loading__spinner van-loading__spinner--circular"
            :style="`color: ${bgColor}`">
        <svg viewBox="25 25 50 50"
             class="van-loading__circular">
          <circle cx="50"
                  cy="50"
                  r="20"
                  fill="none"></circle>
        </svg>
      </span>
      <slot></slot>
    </div>
    <!-- 样式三 -->
    <div class="van-loading van-loading--spinner"
         v-if="type==3">
      <span class="van-loading__spinner van-loading__spinner--spinner"
            :style="`color: ${bgColor}`">
        <i v-for="(item,index) in 12"
           :key="index"></i>
      </span>
    </div>
    <!-- 样式四 -->

    <div class="loading-wrapper"
         v-if="type==4">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="loading-text">加载中</div>

    </div>

  </div>
</template>

<script>

export default {
  props: {
    bgColor: {
      type: String,
      default: 'rgb(25, 137, 250)'
    },
    type: {
      type: String,
      default: '3',
    }
  },
  data () {
    return {};
  },
  components: {},

  methods: {

  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#sys-loading {
  /* position: fixed;
  left: 0;
  top: 0.93rem;
  right: 0;
  bottom: 0;
  z-index: 10000000;
  background-color: hsla(0, 0%, 100%, 1);
  opacity: 1; */
}

#sys-loading.finished {
  opacity: 0;
}

#sys-loading .spinner {
  /* position: fixed;
  top: 50%;
  left: 50%;
  margin: -30px auto auto -15px; */
  /*width: 200px;
    height: 100px;*/
  font-size: 10px;
}

#sys-loading .spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

#sys-loading .spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

#sys-loading .spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

#sys-loading .spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  to {
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
  }
  20% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  to {
    transform: scaleY(0.6);
    -webkit-transform: scaleY(0.6);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}

@-webkit-keyframes finishanim {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  to {
    display: none;
  }
}

/* --------------- loading -1  ---------------------  */

@-webkit-keyframes line-scale-pulse-out-rapid {
  0% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
  80% {
    -webkit-transform: scaley(0.3);
    transform: scaley(0.3);
  }
  90% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
}

@keyframes line-scale-pulse-out-rapid {
  0% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
  80% {
    -webkit-transform: scaley(0.3);
    transform: scaley(0.3);
  }
  90% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
}

.line-scale-pulse-out-rapid > div {
  /* background-color: rgba(0, 148, 234, 1); */
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
  -webkit-animation: line-scale-pulse-out-rapid 0.9s 0s infinite
    cubic-bezier(0.11, 0.49, 0.38, 0.78);
  animation: line-scale-pulse-out-rapid 0.9s 0s infinite
    cubic-bezier(0.11, 0.49, 0.38, 0.78);
}

.line-scale-pulse-out-rapid > div:nth-child(2),
.line-scale-pulse-out-rapid > div:nth-child(4) {
  -webkit-animation-delay: 0.25s !important;
  animation-delay: 0.25s !important;
}

.line-scale-pulse-out-rapid > div:nth-child(1),
.line-scale-pulse-out-rapid > div:nth-child(5) {
  -webkit-animation-delay: 0.5s !important;
  animation-delay: 0.5s !important;
}
/* 样式二三 */
.van-loading {
  font-size: 0;
}
.van-loading__spinner {
  display: inline-block;
  width: 40px;
  max-width: 100%;
  height: 40px;
  max-height: 100%;
  -webkit-animation: van-rotate 0.8s linear infinite;
  animation: van-rotate 0.8s linear infinite;
}
.van-loading__spinner--spinner {
  -webkit-animation-timing-function: steps(12);
  animation-timing-function: steps(12);
}
.van-circle svg,
.van-loading__spinner--spinner i {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.van-loading__spinner--spinner i::before {
  display: block;
  width: 2px;
  height: 25%;
  margin: 0 auto;
  background-color: currentColor;
  border-radius: 40%;
  content: " ";
}
.van-loading__spinner--circular {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}
.van-loading__circular {
  display: block;
  width: 100%;
  height: 100%;
}
.van-loading__circular circle {
  -webkit-animation: van-circular 1.5s ease-in-out infinite;
  animation: van-circular 1.5s ease-in-out infinite;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
}
.van-loading__text {
  display: inline-block;
  margin-left: 10px;
  color: #969799;
  font-size: 14px;
  vertical-align: middle;
}
.van-loading--vertical {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.van-loading--vertical .van-loading__text {
  margin: 10px 0 0;
}
.van-loading__spinner--spinner i:nth-of-type(1) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  opacity: 1;
}
.van-loading__spinner--spinner i:nth-of-type(2) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
  opacity: 0.9375;
}
.van-loading__spinner--spinner i:nth-of-type(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  opacity: 0.875;
}
.van-loading__spinner--spinner i:nth-of-type(4) {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
  opacity: 0.8125;
}
.van-loading__spinner--spinner i:nth-of-type(5) {
  -webkit-transform: rotate(150deg);
  transform: rotate(150deg);
  opacity: 0.75;
}
.van-loading__spinner--spinner i:nth-of-type(6) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  opacity: 0.6875;
}
.van-loading__spinner--spinner i:nth-of-type(7) {
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg);
  opacity: 0.625;
}
.van-loading__spinner--spinner i:nth-of-type(8) {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
  opacity: 0.5625;
}
.van-loading__spinner--spinner i:nth-of-type(9) {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  opacity: 0.5;
}
.van-loading__spinner--spinner i:nth-of-type(10) {
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
  opacity: 0.4375;
}
.van-loading__spinner--spinner i:nth-of-type(11) {
  -webkit-transform: rotate(330deg);
  transform: rotate(330deg);
  opacity: 0.375;
}
.van-loading__spinner--spinner i:nth-of-type(12) {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  opacity: 0.3125;
}
/* 样式四 */

.loading-wrapper {
  display: inline-block;
  padding: 25px 25px 10px 25px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  color: blanchedalmond;
}
.loading-text {
  margin-top: 15px;
  text-align: center;
}
.loading {
  /* width: 80px;
  height: 40px; */
  margin: 0 auto;
  text-align: center;
}
.loading span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: rgb(25, 137, 250);
  -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 40px;
    background: rgb(25, 137, 250);
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: rgb(25, 137, 250);
  }
}
.loading span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}
</style>
