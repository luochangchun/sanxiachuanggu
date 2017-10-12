<template>
  <div>
    <!-- <allMap></allMap> -->
    <Information></Information>
  </div>
</template>

<script>
import api from '../axios/api.js'
import Header from '../components/header.vue'
import Map from '../components/map.vue'
import Information from '../components/information.vue'
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
    allMap: Map,
    Information: Information
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


