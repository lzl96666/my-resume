<template>
  <div class="js-wrapper">
    <div>一些JS函数</div>

    <card title='1.日期相关'>
      <div>当前日期对象<br />{{nowtime}}</div>
      <div>当前时间毫秒值：{{Date.parse(nowtime)}}</div>
      <div>当前时间毫秒值格式化：{{formatDate}}</div>
    </card>

    <card title='2.判断相关'>
      <div>判断手机号：utils.isPoneAvailable(13004800886)==>{{isPoneAvailable}}</div>
      <div>判断姓名：utils.nameDecision('刘子路'){{nameDecision}}</div>
    </card>

    <card title='3.精度相关'>
      <div>0.1*0.2==>{{numMulti}}</div>
      <div>多位小数四舍五入==> {{decimal}}</div>
    </card>

    <card title='4.设备相关'>
      <div>{{detectOS}}</div>
    </card>

    <card title='5.dom相关'>
      <div ref="dom">dom相关</div>
      <div>
        <van-button type="primary"
                    @click="fnHasclass">hasClass</van-button>
        <van-button type="info"
                    @click="fnAddclass">addClass</van-button>
        <van-button type="danger"
                    @click="fnRemoveClass">removeClass</van-button>
      </div>
    </card>

    <card title='6.加密相关'>
      <div>sha1==>{{hex_sha1}}</div>
      <div>md5(md5.js) ==>{{hex_md5}}</div>
      <div>md5 npm install 'js-md5'==><br />{{jsMd5}}</div>
    </card>

  </div>
</template>

<script>
import * as utils from '@/common/js/utils'
import * as dom from '@/common/js/dom'
import { hex_sha1 } from '@/common/js/sha1'
import { hex_md5 } from '@/common/js/md5'
import md5 from 'js-md5'
import card from '@/components/card'
export default {
  data () {
    return {
      nowtime: null,
    }
  },
  components: {
    card
  },
  computed: {
    formatDate () {
      return utils.dateFormat('Y-m-d H:i:s', Date.parse(this.nowtime))
    },
    isPoneAvailable () {
      return utils.isPoneAvailable('13004800886')
    },
    nameDecision () {
      return utils.nameDecision('刘子路')
    },
    numMulti () {
      return utils.numMulti(0.1, 0.2)
    },
    decimal () {
      return utils.decimal(0.0035154, 5)
    },
    detectOS () {
      return utils.detectOS()
    },
    hex_sha1 () {
      return hex_sha1("19950326")
    },
    hex_md5 () {
      return hex_md5("19950326")
    },
    jsMd5 () {
      return md5("19950326")
    }

  },
  methods: {
    getTime () {
      setInterval(() => {
        //new Date() new一个data对象，当前日期和时间
        //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
        this.nowtime = new Date()
      }, 1000)
    },
    fnHasclass () {
      let msg = dom.hasClass(this.$refs.dom, 'red')
      console.log(msg)
      this.$dialog(msg ? '有这个类' : '没有这个类')

    },
    fnAddclass () {
      dom.addClass(this.$refs.dom, 'red')
    },
    fnRemoveClass () {
      dom.removeClass(this.$refs.dom, 'red')
    }
  },
  created () {
    this.getTime()
  }
}
</script>

<style scoped>
.red {
  color: red;
}
.js-wrapper {
  background-color: #f0f3f6;
  padding: 10px;
}
</style>
