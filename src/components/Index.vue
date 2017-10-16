<template>
  <div>
    <commonHeader></commonHeader>
    <commonSwiper></commonSwiper>
    <!-- <allMap></allMap> -->
    <!-- <Information></Information> -->
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import api from '../axios/api.js'
import Header from '../components/header.vue'
import Swiper from '../components/swiper.vue'
import Footer from '../components/footer.vue'
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
    commonHeader: Header,
    commonFooter: Footer,
    commonSwiper: Swiper
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


