<template>
  <div class="index">
    <commonHeader></commonHeader>
    <commonSwiper></commonSwiper>
    <!-- 今日头条 -->
    <div class="headLines padder-v">
      <div class="container">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l headLineTitle"></div>
            <div class="r more_plus"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="13">
            <div class="headLine_swiper">
              <el-carousel :interval="500000" arrow="never" height="355px">
                <el-carousel-item v-for="item in 3" :key="item">
                  <div class="item_img_wrap">
                    <a href="">
                      <img src="../../static/img/headLineImg.png">
                      <p class="text-ellipsis white abs tc f14">1234</p>
                    </a>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="10" :push="1" class="headLine_news_r">
            <ul class="headLine_news">
              <a v-for="item in 3" :key="item">
                <el-row>
                  <el-col :span="5">
                    <img src="../../static/img/yuan.png" alt="">
                  </el-col>
                  <el-col :span="18" push="1">
                    <p class="h48 text-ellipsis-muti text-ellipsis-2">市十七届科技活动周闭幕式“三峡创谷”品牌市十七届科技活动周闭幕式“三峡创谷”品牌</p>
                    <p>2017-11-11</p>
                  </el-col>
                </el-row>
              </a>
            </ul>
          </el-col>
        </el-row>
      </div>

    </div>
    <!-- 今日头条 -->
    <!-- 创谷空间展示 -->
    <div class="space_display">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l space_display_title"></div>
            <div class="r more_plus"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" v-for="(item, index) in 4" :key="item"  class="display_item">
            <div class="gray" @mouseover="show_display(index)">
              <img src="../../static/img/display01.jpg" alt="">
              <p class="word white abs tc f14">宜昌孵化器展示</p>
              <div class="cur_mask abs" :class="{ db: display_active[index] }">
                <h1 class="f20 tc">宜昌慧云科技孵化器</h1>
                <p class="f14 white text-ellipsis-muti text-ellipsis-6">宜昌慧云科技孵化器宜昌慧云科技孵化器宜昌慧云科技孵化器</p>
                <a href="javascript:;" class="Apply white f14 tc b">申请入驻</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 创谷空间展示 -->
    <!-- 双创办公室 -->
    <div class="office">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l office_title"></div>
            <div class="r more_plus"></div>
          </el-col>
        </el-row>
        <el-row class="office_wrap">
          <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in 6" :key="item">
            <a class="office_item">
              <img src="../../static/img/keji.png" alt="">
              <p class="tc">科技局</p>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 双创办公室 -->
    <!-- 培训活动 -->
    <div class="activitys">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l activitys_title"></div>
            <div class="r more_plus" style="margin-bottom:20px;"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="8" :sm="8" :md="8" :lg="8" v-for="(item, index) in 6" :key="item">
            <a class="activitys_item">
              <img src="../../static/img/activity01.png" alt="">
              <div class="process abs">
                <p class="white f16 tc text-ellipsis">关于举办陷阱的价值沙龙的通知</p>
                <p class=" f16 tc tag">进行中</p>
              </div>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 培训活动 -->
    <!-- 服务商 -->
    <div class="service_provider">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l service_provider_title"></div>
            <div class="r more_plus"></div>
          </el-col>
        </el-row>
        <el-row class="office_wrap">
          <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in 6" :key="item">
            <a class="service_provider_item rel">
              <img src="../../static/img/service01.png" alt="">
              <p class="tc">长江证券</p>
              <i class="tag abs white tc f14">项目申报</i>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 服务商 -->
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import api from '../axios/api.js'
import Header from '../components/header.vue'
import Swiper from '../components/swiper.vue'
import Footer from '../components/footer.vue'
export default {
  data() {
    return {
      selected: undefined,
      display_active: [true, false, false, false]
    }
  },
  created() {
    // this.setNewsApi()
  },
  components: {
    commonHeader: Header,
    commonFooter: Footer,
    commonSwiper: Swiper
  },
  methods: {
    preview() {
      this.$refs.dialog.open()
    },
    setNewsApi() {
      api.JH_news('/news/index', 'type=top&key=123456')
        .then(res => {
          console.log(res)
          this.newsListShow = res.articles
        })
    },
    // 创谷空间展示
    show_display(index) {
      var display_item = document.querySelectorAll('.display_item');
      for (let i = 0; i < display_item.length; i++) {
        if (display_item[i] != display_item[index]) {
          this.$set(this.display_active, i, false)
        } else {
          this.$set(this.display_active, i, true)

        }
      }
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


