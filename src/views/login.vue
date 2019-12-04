<template>
  <div class="login">
    <div class="containcer">
      <div class="title">{{title}}</div>
      <div>
        <van-cell-group>

          <van-field v-if="!LoginMode"
                     v-model="nickname"
                     required
                     clearable
                     left-icon="like-o"
                     label="昵称："
                     label-class='label-text'
                     placeholder="请输入昵称" />
          <van-field v-model="username"
                     required
                     clearable
                     left-icon="contact"
                     label="登录名："
                     label-class='label-text'
                     placeholder="请输入登录名" />
          <van-field v-model="password"
                     left-icon="closed-eye"
                     type="password"
                     label="密码："
                     label-class='label-text'
                     placeholder="请输入密码"
                     required />
        </van-cell-group>
      </div>
      <div class="button">
        <van-button v-if="LoginMode"
                    type="info"
                    size="large"
                    round
                    @click="save">登录</van-button>
        <van-button v-else
                    type="info"
                    size="large"
                    round
                    @click="save">注册</van-button>
      </div>

      <div class="tip"
           v-if="LoginMode">
        还没账号？ <span class="blue"
              @click="toRegister">立即注册</span>
      </div>
      <div class="tip"
           v-else>
        已有账号？ <span class="blue"
              @click="toLogin">去登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'js-md5'
export default {
  data () {
    return {
      title: "登录",
      register: '',
      signIn: '',
      username: '',
      nickname: '',
      password: '',
      LoginMode: true
    }
  },
  components: {

  },
  methods: {
    toRegister () {
      this.title = '注册'
      this.LoginMode = false
    },
    toLogin () {
      this.title = '登录'
      this.LoginMode = true
    },
    save () {
      if (this.username == '') {
        this.$toast("请输入登录名")
        return
      }
      if (this.password == '') {
        this.$toast("请输入密码")
        return
      }
      let data = {
        username: this.username,
        password: md5(this.password)
      }
      if (this.LoginMode) {
        //登录
        axios({
          method: 'post',
          url: '/api/login',
          params: data
        }).then(res => {
          if (res.data.success) {
            localStorage.setItem('username', res.data.user.username)
            localStorage.setItem('token', res.data.user.token)
            this.$toast("登录成功")
            const that = this
            setTimeout(() => {
              that.$router.push('/messages')
            }, 500)
          } else {
            this.$toast(res.data.message)
          }
        })
      } else {
        //注册    
        if (this.nickname == '') {
          this.$toast("请输入昵称")
          return
        }
        data.nickname = this.nickname
        axios({
          method: 'post',
          url: '/api/register',
          params: data
        }).then(res => {
          if (res.data.success) {
            this.$toast("注册成功")
            setTimeout(() => {
              this.LoginMode = true
            }, 500)
          } else {
            this.$toast(res.data.message)
          }

        })
      }
    }
  }
}
</script>

<style>
.login {
  font-size: 16px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: #878787;
  line-height: 16px;
}
.login .containcer {
  margin-top: 50px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
}
.login .title {
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 30px;
}
.login .containcer .label-text {
  text-align: right !important;
  width: 60px;
  margin-right: 15px;
}

.login .containcer .button {
  margin-top: 20px;
}
.login .containcer .tip {
  font-size: 14px;
  font-size: 14px;
  margin-top: 10px;
}
.login .containcer .tip .blue {
  color: #009cde;
}
</style>
