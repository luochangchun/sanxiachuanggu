<template>
  <div class="index">
    <commonSwiper></commonSwiper>
    <!-- 今日头条 -->
    <div class="headLines padder-v">
      <div class="container">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l headLineTitle"></div>
            <router-link to="/topicList" class="r more_plus"></router-link>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="13">
            <div class="headLine_swiper">
              <el-carousel :interval="500000" arrow="never" height="355px">
                <el-carousel-item v-for="(item, index) in topic" :key="index">
                  <div class="item_img_wrap">
                    <router-link :to="{ name: 'ActivityPara', params: { id: item.id} }">
                      <img :src='item.icon'>
                      <p class="text-ellipsis white abs tc f14">{{item.title}}</p>
                    </router-link>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="10" :push="1" class="headLine_news_r">
            <ul class="headLine_news">
              <router-link :to="{ name: 'ActivityPara', params: { id: item.id} }" v-for="(item, index) in topic" :key="index">
                <el-row>
                  <el-col :span="5">
                    <img :src='item.icon'>
                  </el-col>
                  <el-col :span="18" push="1">
                    <p class="h48 text-ellipsis-muti text-ellipsis-2">{{item.title}}</p>
                    <p>{{item['time'] | formatDate}}</p>
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
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="12" :lg="6" v-for="(item, index) in incubator" :key="index" class="display_item">
            <div class="gray" @mouseover="show_display(index)">
              <img :src="item['icon']" alt="">
              <p class="word white abs tc f14">{{item.name}}</p>
              <div class="cur_mask abs" :class="{ db: display_active[index] }">
                <h1 class="f20 tc">{{item.name}}</h1>
                <p class="f14 white text-ellipsis-muti text-ellipsis-3">{{item.intro}}</p>
                <router-link :to="{ name: 'incubators_details', params: { id: item.id} }" class="Apply white f14 tc b">
                  查看详情
                </router-link>
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
            <router-link to="/incubators" class="r more_plus"></router-link>
          </el-col>
        </el-row>
        <el-row class="office_wrap">
          <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in office" :key="index">
            <a class="office_item" :href="item.redirect">
              <img :src="item.icon" alt="">
              <p class="tc black2">{{item.name}}</p>
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
            <router-link to="/college" class="r more_plus" style="margin-bottom:20px;"></router-link>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="8" :sm="8" :md="8" :lg="8" v-for="(item, index) in activity" :key="index">
            <router-link :to="{ name: 'ActivityPara', params: { id: item.id} }" class="activitys_item">
              <img :src="item.icon" alt="">
              <div class="process abs">
                <p class="white f16 tc text-ellipsis">{{item.name}}</p>
                <p v-if="item.status==1" class="f16 tc tag">进行中</p>
                <p v-if="item.status==2" class="f16 tc tag">已结束</p>
              </div>
            </router-link>
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
            <router-link to="/service_provider_more" class="r more_plus"></router-link>
          </el-col>
        </el-row>
        <el-row class="office_wrap">
          <el-col :xs="12" :sm="8" :md="8" :lg="4" v-for="(item, index) in provider" :key="index">
            <router-link :to="{ name: 'provider', params: { id: item.id} }" class="service_provider_item rel">
              <img :src="item.icon" alt="">
              <p class="tc text-ellipsis">{{item.name}}</p>
              <i class="tag abs white tc f14">{{item.service}}</i>
            </router-link>
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
          <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(item, index) in mentor" :key="index">
            <router-link :to="{ name: 'tutorDetail', params: { id: item.id} }" class="tutor_item rel">
              <div class="tutor_img"><img :src="item.photo" alt=""></div>
              <p class="tc f14">{{item.name}}
                <i>&nbsp;&nbsp;{{item.title}}</i>
              </p>
              <p class="tc f14 text-ellipsis-muti text-ellipsis-4">{{item.intro}}</p>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 融资项目 -->
    <div class="Financing">
      <div class="container">
        <el-row :gutter="0">
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="l Financing_title"></div>
            <router-link :to="{ name: 'financingList'}" class="r more_plus"></router-link>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(item, index) in financing" :key="index">
            <router-link :to="{ name: 'financingDetail', params: { id: item.id} }" class="Financing_item rel">
              <img :src='item.logo' alt="">
              <div class="Financing_wrap">
                <div class="Financing_info">
                  <h1 class="f16">{{item.name}}</h1>
                  <p class="text-ellipsis">{{item.intro}}</p>
                </div>
                <el-row type="flex" class="Financing_money">
                  <el-col :span="6">
                    <p class="f14">{{item.archived}}万<br/>已获得投资意向</p>
                  </el-col>
                  <el-col :span="6" :push="12">
                    <p class="f14 tr">{{item.financing}}万<br/>预融资总额</p>
                  </el-col>
                </el-row>
                <el-tag type="primary" style="margin-left:8px">行业领域:
                  <span>消费生活</span>
                </el-tag>
                <el-tag type="success">已完成融资:
                  <span>未完成融资</span>
                </el-tag>
                <p class="f14 pl10" style="margin-left:8px;">发起人:{{item.founder}}</p>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 融资项目 -->
    <!-- 创业导师 -->
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
        display_active: [true, false, false, false],
        topic: '',
        activity: '', //活动
        financing: '', //融资项目
        incubator: '', //孵化器
        mentor: '', //创业导师
        office: '', //双创办公室
        provider: '' //服务商
      }
    },
    components: {
      commonSwiper: Swiper
    },
    created() {
      this.setNewsApi()
    },
    filters: {
      formatDate(time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    },
    methods: {
      preview() {
        this.$refs.dialog.open()
      },
      setNewsApi() {
        api.Get('/pub/index')
          .then(res => {
            this.topic = res['topic']; //今日头条接口数据
            this.activity = res['activity']; //活动接口数据
            this.financing = res['financing']; //融资项目
            this.incubator = res['incubator']; //创谷空间展示
            this.mentor = res['mentor']; //创业导师
            this.office = res['office']; //双创办公室
            this.provider = res['provider']; //服务商接口数据
          });
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



