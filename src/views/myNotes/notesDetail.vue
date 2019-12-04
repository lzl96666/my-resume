<template>
  <div class="notesDetail-wrapper">
    <div class="thisNote"
         v-html="data">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: ''
    }
  },
  components: {

  },
  created () {
    this.getData()

  },
  methods: {
    getData () {
      axios({
        method: 'GET',
        url: '/files/' + encodeURI(this.$route.query.title),
      })
        .then(res => {
          this.data = res.data
        })
    }
  }
}
</script>

<style>
.notesDetail-wrapper {
  padding: 10px;
  background-color: #f0f3f6;
  text-align: left;
}
.thisNote {
  background-color: white;
  padding: 10px;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
