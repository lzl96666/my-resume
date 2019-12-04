<template>
  <div class="notes-wrapper">
    <div> (My Notes)</div>
    <div class="item"
         v-for="(item,index) in list"
         :key="index">
      <van-cell :title="item"
                is-link
                @click="toNotesDetail(item)" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: [
        // "2019年10月15日.md",
        // "2019年10月16日.md",
        // "2019年11月4日.md",
        // "2019年11月5日.md"
      ]
    }
  },
  components: {

  },
  created () {
    this.getNotes()
  },
  methods: {
    getNotes () {
      axios({
        method: 'GET',
        url: '/files',
      })
        .then(res => {
          this.list = res.data.list.reverse()
        })
    },
    toNotesDetail (note) {
      this.$router.push({ path: 'notesDetail', query: { title: note } })
    }
  }
}
</script>

<style>
.notes-wrapper {
  background-color: #f0f3f6;
  padding: 10px;
}
.item {
  margin: 10px 0;
  text-align: left;
}
</style>
