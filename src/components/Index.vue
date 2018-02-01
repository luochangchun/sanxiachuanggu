<template>
  <div class="index" v-loading.fullscreen.lock="fullscreenLoading">
    <commonSwiper></commonSwiper>
    <!-- 今日头条 -->
    <div class="headLines padder-v">
      <div class="container">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l headLineTitle"></div>
            <router-link to="/news" class="r more_plus"></router-link>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="13">
            <div class="headLine_swiper">
              <el-carousel :interval="500000" arrow="always" height="360px">
                <el-carousel-item v-for="(item, index) in topic" :key="index" v-if="index<8">
                  <div class="item_img_wrap">
                    <router-link :to="{ name: 'article', params: { id: item.id}}">
                      <img :src='item.icon' style="max-height:358px;">
                      <p class="text-ellipsis white abs tc f14">{{item.title}}</p>
                    </router-link>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="10" class="headLine_news_r">
            <ul class="headLine_news">
              <router-link :to="{ name: 'article', params: { id: item.id}}" v-for="(item, index) in topic" :key="index" v-if="index<8">
                <el-row>
                  <!-- <el-col :span="5">
                                <img :src='item.icon' class="top_cube">
                              </el-col> -->
                  <el-col :span="18">
                    <p class="text-ellipsis">{{item.title}}</p>
                  </el-col>
                  <el-col :span="6">
                    <p class="tr">{{item['time'] | formatDate}}</p>
                  </el-col>
                </el-row>
              </router-link>
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
            <router-link to="/map" class="r more_plus"></router-link>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="6" v-for="(item, index) in valley" :key="index">
            <div class="display_item">
              <div class="gray" @mouseover="show_display(index)" @mouseout="hide_display(index)">
                <img :src="item['icon']" alt="">
                <p class="word white abs tc f14" :class="{ dn: display_active[index]}">{{item.name}}</p>
                <div class="cur_mask abs" :class="{ cur_mask_after : display_active[index] }">
                  <h1 class="f20 tc text-ellipsis">{{item.name}}</h1>
                  <p class="f14 white text-ellipsis-muti text-ellipsis-3">{{item.intro}}</p>
                  <router-link :to="{ name: 'incubators_details', params: { id: item.id} }" class="Apply white f14 tc b">
                    查看详情
                  </router-link>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 创谷空间展示 -->
    <!-- 双创空间展示 -->
    <div class="space_display">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l double_display_title"></div>
            <router-link to="/incubators" class="r more_plus"></router-link>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="6" v-for="(item, index) in double" :key="index">
            <div class="double_item" style="overflow:hidden;">
              <div class="gray" @mouseover="show_double(index)" @mouseout="hide_double(index)">
                <img :src="item['icon']" alt="" style="height:225px">
                <p class="word white abs tc f14" :class="{ dn: double_active[index]}">{{item.name}}</p>
                <div class="cur_mask abs" :class="{ cur_mask_after : double_active[index] }">
                  <h1 class="f20 tc text-ellipsis">{{item.name}}</h1>
                  <p class="f14 white text-ellipsis-muti text-ellipsis-3">{{item.intro}}</p>
                  <router-link :to="{ name: 'incubators_details', params: { id: item.id} }" class="Apply white f14 tc b">
                    查看详情
                  </router-link>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 双创空间展示 -->
    <!-- 双创办公室 -->
    <div class="office">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l office_title"></div>
            <router-link to="/office_list_policy" class="r more_plus"></router-link>
          </el-col>
        </el-row>
        <el-row class="office_wrap" :gutter="6">
          <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in office" :key="index" class="office_index">
            <div style="position:relative;overflow: hidden;" @mouseover="show_office(index)" @mouseout="hide_office(index)">
              <div class="office_item">
                <p class="tc black2 title0 b">{{item['name']}}</p>
                <p class="tc black2">负责人：{{item['contact']}}</p>
                <p class="tc black2">服务电话：{{item['phone']}}</p>
              </div>
              <div class="office_item_mask abs" :class="{ office_item_mask_after: office_active[index] }">
                <router-link :to="{name:'article', params: {id:item['articleExId']} }" class="tc">办事流程</router-link>
                <router-link :to="{name:'article', params: {id:item['articleId']} }" class="tc">优惠政策</router-link>
                <a :href="item.redirect" class="tc" target="_blank">服务窗口</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 服务商 -->
    <!-- 创业导师 -->
    <div class="tutor">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l tutor_title"></div>
            <router-link to="/tutorList" class="r more_plus"></router-link>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(item, index) in mentor" :key="index" v-if="index<4">
            <router-link :to="{ name: 'tutorDetail', params: { id: item.id} }" class="tutor_item rel">
              <div class="tutor_img">
                <img v-show="item.photo !== ''" :src="item.photo" alt="">
                <img v-show="item.photo == ''" src="../../static/img/zss.png" alt="">
              </div>
              <p class="tc f14">{{item.name}}
                <i>&nbsp;&nbsp;{{item.title}}</i>
              </p>
              <p class="tc f14 text-ellipsis-muti text-ellipsis-4">{{item.intro}}</p>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 创业导师 -->
    <div class="activitys">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l activitys_title"></div>
            <router-link to="/college" class="r more_plus" style="margin-bottom:20px;"></router-link>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(item, index) in activityList" :key="index" v-if="index<4">
            <router-link :to="{ name: 'train_detail', params: { id: item.id} }" class="activitys_item">
              <div @mouseover="show_activity(index)" @mouseout="hide_activity(index)">
                <h1 class="tc b f20 text-ellipsis">{{item['name']}}</h1>
                <p class="tc">活动时间：{{item['startAt'] | formatDate}}</p>
                <!-- <p class="tc">邀请嘉宾：2017</p> -->
                <div class="top_line" style="width: 0px" :class="{ horizontal_line: activity_active[index]}"></div>
                <div class="bottom_line" style="width: 0px;" :class="{ horizontal_line: activity_active[index]}"></div>
                <div class="left_line" style="height: 0px;" :class="{ vertical_line: activity_active[index]}"></div>
                <div class="right_line" style="height: 0px;" :class="{ vertical_line: activity_active[index]}"></div>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../axios/api.js'
  import Swiper from '../components/swiper.vue'
  import {
    formatDate
  } from '../../static/js/date.js'
  export default {
    data() {
      return {
        selected: undefined,
        display_active: [false, false, false, false],
        activity_active: [false, false, false, false],
        office_active: [false, false, false, false, false, false],
        double_active: [false, false, false, false],
        topic: '',
        activity: '', //活动
        activityList: [],
        // financing: '', //融资项目
        valley: '', //孵化器
        double: '', //双创
        mentor: '', //创业导师
        office: '', //双创办公室
        provider: '', //服务商
        fullscreenLoading: false
      }
    },
    components: {
      commonSwiper: Swiper
    },
    created() {
      this.setNewsApi()
      // api.checkCookie()
    },
    filters: {
      formatDate(time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    methods: {
      preview() {
        this.$refs.dialog.open()
      },
      setNewsApi() {
        this.fullscreenLoading = true;
        api.Get('/pub/index')
          .then(res => {
            this.topic = res['topic']; //今日头条接口数据
            this.activityList = res['activity'];
            this.financing = res['financing']; //融资项目
            this.valley = res['valley']; //创谷空间展示
            this.double = res['double']; //双创空间展示
            this.mentor = res['mentor']; //创业导师
            this.office = res['office']; //双创办公室
            this.provider = res['provider']; //服务商接口数据
            this.fullscreenLoading = false;
          });
      },
      // 创谷空间
      show_display(index) {
        var display_item = document.querySelectorAll('.display_item');
        for (let i = 0; i < display_item.length; i++) {
          if (display_item[i] != display_item[index]) {
            this.$set(this.display_active, i, false)
          } else {
            this.$set(this.display_active, i, true)
          }
        }
      },
      hide_display(index) {
        var display_item = document.querySelectorAll('.display_item');
        for (let i = 0; i < display_item.length; i++) {
          this.$set(this.display_active, i, false)
        }
      },
      // 双创空间
      show_double(index) {
        var double_item = document.querySelectorAll('.double_item');
        for (let i = 0; i < double_item.length; i++) {
          if (double_item[i] != double_item[index]) {
            this.$set(this.double_active, i, false)
          } else {
            this.$set(this.double_active, i, true)
          }
        }
      },
      hide_double(index) {
        var double_item = document.querySelectorAll('.double_item');
        for (let i = 0; i < double_item.length; i++) {
          this.$set(this.double_active, i, false)
        }
      },
      //双创办公室
      show_office(index) {
        var office_item = document.querySelectorAll('.office_index');
        for (let i = 0; i < office_item.length; i++) {
          if (office_item[i] != office_item[index]) {
            this.$set(this.office_active, i, false)
          } else {
            this.$set(this.office_active, i, true)
          }
        }
      },
      hide_office(index) {
        var office_item = document.querySelectorAll('.office_index');
        for (let i = 0; i < office_item.length; i++) {
          this.$set(this.office_active, i, false)
        }
      },
      show_activity(index) {
        var activity_item = document.querySelectorAll('.activitys_item');
        for (let i = 0; i < activity_item.length; i++) {
          if (activity_item[i] != activity_item[index]) {
            this.$set(this.activity_active, i, false)
          } else {
            this.$set(this.activity_active, i, true)
          }
        }
      },
      hide_activity(index) {
        var activity_item = document.querySelectorAll('.activitys_item');
        for (let i = 0; i < activity_item.length; i++) {
          this.$set(this.activity_active, i, false)
        }
      },
    }
  }
</script>

<style scoped>
  .office_con {
    position: relative;
  }
  .office_con h2 {
    font-size: 14px;
    color: #2970a4;
    font-weight: normal;
    margin-left: 120px;
  }
  .office_con h3 {
    color: #2970a4;
    font-size: 26px;
    letter-spacing: 5px;
  }
  .office_con div {
    width: 100%;
    position: absolute;
    line-height: 25px;
    top: 40%;
    text-align: center;
  }
</style>


