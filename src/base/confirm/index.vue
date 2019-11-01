<template>
  <div class="confirm"
       v-if="isShow&&text">
    <div class="con_box">
      <div class="content">
        <div class="content-header"
             v-if="text.title">
          <div>{{text.title}}</div>
        </div>
        <div class="content-content">
          <p>{{text.msg}}</p>
        </div>
        <div class="content-footer">
          <span @click="ok()"
                v-if="text.btn.ok"
                class="success">{{text.btn.ok}}</span>
          <span @click="close()"
                v-if="text.btn.no">{{text.btn.no}}</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      title: '提示',
      msg: '确定删除此条信息？',
      btn: {
        ok: '确定',
        no: '取消'
      },
    }
  },
  data () {
    return {
      isShow: true,

    }
  },
  methods: {
    close () {
      console.log('关闭');
    },
    ok () {
      console.log('确定')
    }
  }
}
</script>
<style scoped>
.confirm {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
}
.con_box {
  position: fixed;
  top: 45%;
  left: 50%;
  width: 85%;
  max-width: 400px;
  overflow: hidden;
  font-size: 16px;
  background-color: #fff;
  border-radius: 4px;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding-top: 24px;
}
.con_box .content .content-header {
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}
.con_box .content .content-content {
  max-height: 60vh;
  padding: 24px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  text-align: center;
  -webkit-overflow-scrolling: touch;
  color: #7d7e80;
}
.con_box .content .content-footer {
  display: flex;
  text-align: center;
  border-top: 1px solid rgba(230, 230, 230, 1);
}
.con_box .content .content-footer span {
  flex: 1;
  width: 100%;
  height: 50px;
  line-height: 48px;
}
.success {
  color: #1989fa;
}
</style>
