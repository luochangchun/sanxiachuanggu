<template>
  <div>
    <commonHeader></commonHeader>
    <commonCarousel></commonCarousel>
  </div>
</template>
<script>
import header from './header.vue'
import carousel from './carousel.vue'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  created() {
    // this.setNewsApi()
  },
  components: {
    commonHeader : header,
    commonCarousel : carousel
  },
  methods: {}
}
</script>

