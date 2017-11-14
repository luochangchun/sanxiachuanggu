                                             <template>
  <iframe ref="container" id="container" src="http://www.sanxiachuanggu.com/static/map.html" frameborder="0">
  </iframe>
</template>
<script>
export default {
  mounted() {
    // let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.$refs.container.style.height = 600 + 'px';
  }

}
</script>
<style scoped>
iframe {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

