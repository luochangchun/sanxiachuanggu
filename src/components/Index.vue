<template>
  <div>
    <commonHeader></commonHeader>
    <!-- <allMap></allMap> -->
    <!-- <Information></Information> -->
    首页
  </div>
</template>

<script>
import api from '../axios/api.js'
import Header from '../components/header.vue'
export default {
  data () {
    return {
      selected: undefined,
      res: '',
      result: ''
    }
  },
  created () {
    // this.setNewsApi()
  },
  components: {
    commonHeader: Header
  },
  methods: {
    preview () {
      this.$refs.dialog.open()
    },
    setNewsApi () {
      api.JH_news('/news/index', 'type=top&key=123456')
        .then(res => {
          console.log(res)
          this.newsListShow = res.articles
        })
    }
  }
}
</script>
<style scoped>
  iframe {
    width: 1000px;
    height: 300px;
  }
</style>


