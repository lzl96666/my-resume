<template>
  <div class="messages-wrapper">
    <div> (Leave a Message)</div>
    <div class="item-container"
         @click="inputing=false">
      <div class="item"
           v-for="(item,index) in list"
           :key="index">
        <div class="head">
          <img :src="head(item.user.head)" />
        </div>
        <div class="message">
          <span class="name">{{item.user.nickname}}:</span>
          <div class="time">{{item.updatedAt}}</div>
          <div class="pp1">
            <span>{{item.message}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!-- 欢迎评论 -->
      <div class="index"
           v-show="!inputing"
           @click="openInput()">
        <van-icon name="comment-o" />
        <span style="marginLeft:10px;fontSize:20px">留言</span>
      </div>
      <!-- 输入区 -->
      <div v-show="inputing"
           class="input-container">
        <van-cell-group class="group">
          <van-field label="昵称"
                     label-width='50'
                     v-model="name"
                     ref="nameInput" />
          <van-field v-model="message"
                     ref="messageInput"
                     rows="2"
                     autosize
                     label="留言"
                     type="textarea"
                     maxlength="50"
                     label-width='50'
                     placeholder="请输入留言"
                     show-word-limit
                     clearable />
        </van-cell-group>
        <div class="right">
          <span :class="{color:readySend}"
                @click="send">发送</span>
        </div>
        <div class="headChange"
             @click="openPopup">
          <img :src="head(userHead)" />
          <span class="text">点击切换</span>
        </div>
        <van-popup v-model="popupShow"
                   position="top"
                   closeable
                   round
                   :style="{ height: '20%' }">
          <div class="popub-content">
            <img :src='head(`${index+1}`)'
                 v-for="(item,index) in 3"
                 :key="item"
                 @click="headChange(index+1)" />
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  data () {
    return {
      list: [],
      inputing: false,
      message: '',
      name: '',
      popupShow: false,
      userHead: '2',
      userid: '',
      token: localStorage.getItem('token') || null,
      username: localStorage.getItem('username') || null
    }
  },
  components: {


  },
  computed: {
    readySend () {
      return this.message != '' && this.name != ''
    },
  },
  created () {
    this.getMessage()
    this.getUser()
  },
  methods: {
    getMessage () {
      axios({
        method: 'GET',
        url: '/api/messages',
      })
        .then(res => {
          this.list = res.data
        })
    },
    getUser () {
      if (this.token) {
        // 请求登录信息
        axios({
          method: 'GET',
          url: '/api/user/' + this.username,
          params: {
            username: this.username,
            token: this.token
          }
        }).then(res => {
          if (res.data.success == false) {
            this.$toast(res.data.message)
            this.$router.push('/login')
          } else {
            this.name = res.data.user.nickname
            this.userHead = res.data.user.head
            this.userid = res.data.user.userid
          }
        })
      }
    },

    openInput () {
      if (this.token) {
        this.inputing = true
        setTimeout(() => {
          this.$refs.messageInput.focus()
        }, 300)
      } else {
        this.$router.push('/login')
        // 去登录

      }

    },
    send () {
      if (!this.readySend) {
        alert("请填写姓名和留言内容")
        return
      }
      const data = {
        name: this.name,
        username: this.username,
        message: this.message,
        head: this.userHead,
        token: this.token,
        userid: this.userid
      }
      axios({
        method: 'POST',
        url: '/api/messages',
        params: data
      })
        .then(res => {
          if (res.data.success) {
            this.$toast("留言成功")
            this.getMessage();
            this.clearInput()
          } else {
            this.$toast(res.data.message)
            this.$router.push('/login')
          }

        })

    },
    clearInput () {
      this.message = ''
      this.inputing = false
    },
    openPopup () {
      this.popupShow = !this.popupShow
    },
    headChange (url) {
      this.userHead = url
      this.popupShow = !this.popupShow
    },
    head (url) {
      if (!url) {
        url = 1
      }
      return require('@/assets/head/' + url + '.jpg')
    }



  }
}
</script>

<style>
.messages-wrapper {
  background-color: #f0f3f6;
  padding: 10px;
  max-width: 800px;
  min-height: 900px;
  margin: 0 auto;
}
.messages-wrapper .item-container {
  background-color: #f0f3f6;
  padding: 10px;
  border: 1px solid #e1e4e8 !important;
  margin-top: 10px;
}
.messages-wrapper .item {
  margin: 10px 0;
  text-align: left;
  border-bottom: 1px solid #e1e4e8 !important;
}
.messages-wrapper .item:last-child {
  border-bottom: none !important;
}
.messages-wrapper .head {
  float: left;
  width: 40px;
  height: 40px;
}
.messages-wrapper .head img {
  max-width: 100%;
  max-height: 100%;
}
.messages-wrapper .message {
  margin-left: 50px;
}
.messages-wrapper .message .name {
}
.messages-wrapper .message .time {
  font-size: 12zpx;
  color: #6a737d !important;
}
/* 气泡对话框 */
.pp1 {
}
.pp1 span {
  background-color: #fff;
  padding: 5px 8px;
  display: inline-block;
  border-radius: 4px;
  margin: 10px 0 10px 10px;
  position: relative;
}
.pp1 span::after {
  content: "";
  border: 8px solid #ffffff00;
  border-right: 8px solid #fff;
  position: absolute;
  top: 6px;
  left: -16px;
}
.messages-wrapper .bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #f9f9f9;
  border-top: solid 1px hsla(0, 0%, 68.6%, 0.5);
}
.messages-wrapper .bottom .index {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.messages-wrapper .bottom .input-container {
  min-height: 100px;
  text-align: left;
  padding: 20px;
}
.messages-wrapper .bottom .input-container .group {
  width: 85%;
  display: inline-block;
}
.messages-wrapper .bottom .input-container .right {
  position: absolute;
  bottom: 30px;
  right: 15px;
  line-height: 16px;
}
.messages-wrapper .bottom .input-container .right .color {
  color: #f7671d;
}
/* 切换头像 */
.messages-wrapper .bottom .input-container .headChange {
  position: absolute;
  top: 22px;
  right: 15px;
  height: 50px;
  width: 50px;
}
.messages-wrapper .bottom .input-container .headChange img {
  max-width: 100%;
  min-height: 100%;
}
.messages-wrapper .bottom .input-container .headChange .text {
  font-size: 12px;
  color: #7d7e80;
}
.messages-wrapper .popub-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.messages-wrapper .popub-content img {
  width: 50px;
  height: 50px;
}
</style>
