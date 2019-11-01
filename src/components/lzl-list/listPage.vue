<template>
  <div>
    <Scroll class="list-wrapper"
            :data="pageData"
            @scroll="scroll"
            :listen-scroll="true"
            :pullingDown="true"
            @pullingDownCallBack='pullingDownCallBack'
            :pullingUp="true"
            @pullingUpCallBack='pullingUpCallBack'
            ref="list"
            v-if="pageData.length>0">
      <ul class="list-content list-content-hook">
        <div>分类：{{news.name}}</div>
        <li class="list-item"
            v-for="(item2, index2) in pageData"
            :key="index2">
          <div class="avatar">
            <img :src="imgUrl(item2.img)"
                 width="100"
                 height="100" />
          </div>
          <div class="text">
            <h2>{{item2.text}}</h2>
            <span>{{item2.date}}</span>
          </div>
        </li>
      </ul>
    </Scroll>
    <div v-else
         class="list-loading-wrapper">
      <loadding></loadding>
    </div>
  </div>
</template>

<script>
import Scroll from '@/base/scroll/scroll'
import loadding from '@/base/loading.vue'
export default {
  props: {
    news: {
      type: Object
    }
  },
  data () {
    return {
      listData: [{
        img: 1,
        text: '只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激',
        date: '2016-11-23'
      }, {
        img: 2,
        text: '只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激',
        date: '2016-11-23'
      }, {
        img: 3,
        text: '只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激',
        date: '2016-11-23'
      }, {
        img: 1,
        text: '只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激',
        date: '2016-11-23'
      }, {
        img: 2,
        text: '只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激',
        date: '2016-11-23'
      }, {
        img: 3,
        text: '只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激',
        date: '2016-11-23'
      }],
      pageData: [],
      page: 1,
    }
  },
  components: {
    Scroll, loadding
  },
  mounted () {
    setTimeout(() => {
      // 模拟异步加载
      console.log("listPage组件")
      this.pageData = this.listData
    }, 1500)
  },
  methods: {
    imgUrl (img) {
      return require(`../../common/img/${img}.png`)
    },
    scroll ({ y }) {
      // console.log("回派了个函数")
    },
    pullingDownCallBack (func) {
      setTimeout(() => {
        const add = {
          img: 1,
          text: '新加入的',
          date: (new Date()).toLocaleTimeString()
        }
        this.pageData = [add, ...this.pageData]
        func()
      }, 2000)
    },
    pullingUpCallBack (func) {
      setTimeout(() => {
        const add = {
          img: 1,
          text: '上拉加载的',
          date: (new Date()).toLocaleTimeString()
        }
        this.pageData = [...this.pageData, add]
        console.log('加载第' + (++this.page) + '页')
        func()
      }, 2000)
    }
  }
}
</script>

<style>
.list-wrapper {
  height: 478px;
  /* overflow: hidden; */
}

.list-wrapper .list-content {
  background: #fff;
}

.list-wrapper .list-item {
  display: flex;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #ddd;
}

.list-wrapper .list-item .avatar {
  flex: 0 0 100px;
  border: 1px solid #ddd;
}

.list-wrapper .list-item .text {
  position: relative;
  flex: 1;
  padding-left: 10px;
}

.list-wrapper .list-item .text h2 {
  font-size: 16px;
  font-weight: normal;
  color: rgb(7, 17, 27);
}

.list-wrapper .list-item .text span {
  position: absolute;
  bottom: 20px;
  color: rgba(7, 17, 27, 0.7);
}
/* loading容器 */
.list-loading-wrapper {
  margin-top: 50px;
  text-align: center;
}
</style>
