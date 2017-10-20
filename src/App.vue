<template>
  <div id="app">
    <commonHeader></commonHeader>
    <router-view></router-view>
    <commonFooter></commonFooter>
  </div>
</template>
<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
export default {
  name: 'app',
  components: {
    commonHeader: Header,
    commonFooter: Footer
  }
}
</script>

<style scope>

</style>
