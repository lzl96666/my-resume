<template>
  <div class="card">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.card {
  padding: 24px;
  border-radius: 6px;
  background-color: #fff;
  -webkit-box-shadow: 0 8px 12px #ebedf0;
  box-shadow: 0 8px 12px #ebedf0;
  text-align: left;
  max-width: 500px;
  margin: 0 auto 24px auto;
}
.card .title {
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 12px;
}
</style>
