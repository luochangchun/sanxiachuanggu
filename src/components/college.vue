<template>
    <div>
        <el-row :gutter="0">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="banner_img" style="backgroundImage: url(../static/img/cg.jpg)">
                    <!-- <img src="../../static/img/cg.jpg" alt=""> -->
                </div>
            </el-col>
        </el-row>
        <!--title-->
        <div class="container" style="margin-top:40px;margin-bottom:40px;">
            <!-- <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="common_title">
                    <h1 class="tc">全面完善的服务商体系</h1>
                    <h1 class="tc">高效解决企业发展所需的各类服务</h1>
                </div>
            </el-col> -->
            <el-row :gutter="10">
                <!--左部分导师-->
                <el-col :lg="12" :md="12" :sm="24" :xs="24" style="padding-right:20px;">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <h2 class="common_sub_title">
                                <p class="tc white">创业导师</p>
                                <div class="line"></div>
                            </h2>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color: rgb(250,250,250);">
                            <div class="s_teacher_list" v-for="(item , index) in tutorList" :key="index">
                                <el-row style="">
                                    <router-link :to="{ name: 'tutorDetail', params: { id: item.id} }">
                                        <el-col :lg="6" :md="6" :sm="6" :xs="6">
                                            <div class="teacher_img">
                                                <img :src="item.photo" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :lg="18" :md="18" :sm="18" :xs="18">
                                            <h1>{{item.name}}</h1>
                                            <p>简介:{{item.intro}}</p>
                                            <p>工作单位:{{item.university}}</p>
                                            <div class="teacher_float_p">
                                                <p>职称:{{item.title}}</p>
                                                <p>关注领域:{{item.field}}</p>
                                            </div>
                                        </el-col>
                                    </router-link>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                    <!--分页-->
                    <el-row :gutter="10" style="margin-bottom: 50px;margin-top:50px;">
                        <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                            <div class="block">
                                <el-pagination :current-page="1" :total="TutorPages" @current-change="handleCurrentChange" layout="prev, pager, next">
                                </el-pagination>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <!--右部分-->
                <el-col :lg="12" :md="12" :sm="24" :xs="24" style="padding-left:20px;border-left:1px solid #ccc">
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <h2 class="common_sub_title">
                                <p class="tc white">培训</p>
                                <div class="line"></div>
                            </h2>
                        </el-col>
                    </el-row>
                    <!--培训-->
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="s_teacher_list" v-for="(item , index) in TrainList" :key="index">
                                <el-row style="">
                                    <router-link :to="{ name: 'train_detail', params: { id: item.id} }">
                                        <el-col :lg="4" :md="4" :sm="4" :xs="4">
                                            <div class="train_img">
                                                <img :src="item.icon" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :lg="20" :md="20" :sm="20" :xs="20">
                                            <div class="train_float_btn clearfix">
                                                <h1>{{item.name}}</h1>
                                                <button v-if="item.status==2" class="activity_button btn1">进行中</button>
                                                <button v-if="item.status==3" class="activity_button btn2">已结束</button>
                                            </div>
                                            <div class="teacher_float_p ">
                                                <p>时间 : {{item['startAt'] | formatDate}}</p>
                                                <p>地点 : {{item.location}}</p>
                                            </div>
                                            <p style="clear: both">人数限额 : {{item.total}}</p>
                                        </el-col>
                                    </router-link>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                    <!--分页-->
                    <el-row :gutter="10" style="margin-top:50px;">
                        <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                            <div class="block">
                                <el-pagination :current-page="1" :total="TrainPages" @current-change="getTrainList" layout="prev, pager, next">
                                </el-pagination>
                            </div>
                        </el-col>
                    </el-row>
                    <!--活动-->
                    <el-row style="margin-top:60px;">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <h2 class="common_sub_title">
                                <p class="tc white">活动</p>
                                <div class="line"></div>
                            </h2>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="s_teacher_list" v-for="(item , index) in activityList" :key="index">
                                <el-row style="">
                                    <router-link :to="{name:'train_detail', params: {id:item.id} }">
                                        <el-col :lg="4" :md="4" :sm="4" :xs="4">
                                            <div class="train_img">
                                                <img :src="item.icon" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :lg="20" :md="20" :sm="20" :xs="20">
                                            <div class="train_float_btn clearfix">
                                                <h1>{{item.name}}</h1>
                                                <button v-if="item.status==2" class="activity_button btn1">进行中</button>
                                                <button v-if="item.status==3" class="activity_button btn2">已结束</button>
                                            </div>
                                            <div class="teacher_float_p">
                                                <p>时间 : {{item['startAt'] | formatDate}}</p>
                                                <p>地点 : {{item.location}}</p>
                                            </div>
                                            <p style="clear: both">人数限额 : {{item.total}}</p>
                                        </el-col>
                                    </router-link>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                    <!--分页-->
                    <el-row :gutter="10" style="margin-top:50px;">
                        <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                            <div class="block">
                                <el-pagination :current-page="1" :total="activityPages" @current-change="getActivityList" layout="prev, pager, next">
                                </el-pagination>
                            </div>
                        </el-col>
                    </el-row>
                    <!--招聘/培训需求-->
                    <el-row style="margin-top: 60px;">
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <h2 class="common_sub_title">
                                <p class="tc white">招聘/培训需求</p>
                                <div class="line"></div>
                            </h2>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <div class="s_teacher_list" v-for="(item , index) in needData" :key="index">
                                <el-row>
                                    <el-col :lg="24" :md="24" :sm="24" :xs="24">
                                        <router-link :to="{ name: 'needDetail', params: { id: item.id} }">
                                            <div class="train_float_btn clearfix">
                                                <h1>{{item['title']}}</h1>
                                            </div>
                                            <p style="clear: both">企业名称 : {{item['enterprise']}}</p>
                                            <div class="teacher_float_p">
                                                <p>联系人 : {{item['contact']}}</p>
                                                <p>联系方式 : {{item['phone']}}</p>
                                            </div>
                                        </router-link>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                    <!--分页-->
                    <el-row :gutter="10" style="margin-top:50px;">
                        <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                            <div class="block">
                                <el-pagination :current-page="1" :total="totalPages" @current-change="getInviteList" layout="prev, pager, next">
                                </el-pagination>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import api from "../axios/api.js";
import { formatDate } from "../../static/js/date.js";
export default {
  data() {
    return {
      tutorList: "", //导师
      TrainList: "", //培训
      activityList: "", //活动
      needData: "", //招聘/培训需求
      totalPages: "",
      TutorPages: "",
      TrainPages: "",
      activityPages: ""
    };
  },
  created() {
    this.initTutorList();
    this.setTronsApi();
    this.initServicesList();
  },
  methods: {
    //导师
    initTutorList() {
      let url = "/indie/" + "3" + "/" + "12" + "/" + "1";
      api.Get(url).then(res => {
        this.tutorList = res["data"];
        this.TutorPages = res["totalPages"] * 10;
      });
    },
    // 导师分页
    handleCurrentChange(val) {
      //获取到当前分页页码，获取当前页面数据
      var url = "/indie/" + "3" + "/" + "12" + "/" + val;
      api.Get(url).then(res => {
        this.tutorList = res["data"];
        this.TutorPages = res["totalPages"] * 10;
      });
    },
    //培训与活动
    setTronsApi() {
      var url2 = "/activity/" + "2" + "/" + "4" + "/" + "1";
      api.Get(url2).then(res => {
        this.TrainList = res["data"];
        this.TrainPages = res["totalPages"] * 10;
      });
      var url1 = "/activity/" + "1" + "/" + "4" + "/" + "1";
      api.Get(url1).then(res => {
        this.activityList = res["data"];
        this.activityPages = res["totalPages"] * 10;
      });
    },
    getTrainList(val) {
      //获取到当前分页页码，获取当前页面数据
      var url = "/activity/" + "2" + "/" + "4" + "/" + val;
      api.Get(url).then(res => {
        this.TrainList = res["data"];
        this.TrainPages = res["totalPages"] * 10;
      });
    },
    getActivityList(val) {
      //获取到当前分页页码，获取当前页面数据
      var url = "/activity/" + "1" + "/" + "4" + "/" + val;
      api.Get(url).then(res => {
        this.activityList = res["data"];
        this.activityPages = res["totalPages"] * 10;
      });
    },
    //招聘/培训需求
    initServicesList() {
      var url = "/enterprise/apply/" + "4" + "/" + "1" + "?cid=57";
      api.Get(url).then(res => {
        this.needData = res["page"]["data"];
        this.totalPages = res["page"]["totalPages"] * 10;
      });
    },
    getInviteList(val) {
      //获取到当前分页页码，获取当前页面数据
      var url = "/enterprise/apply/" + "4" + "/" + val + "?cid=57";
      api.Get(url).then(res => {
        this.needData = res["page"]["data"];
        this.totalPages = res["page"]["totalPages"] * 10;
      });
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
/*导师*/
.s_teacher_list {
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #ccc;
  margin-left: 10px;
  margin-right: 10px;
}
.teacher_img img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.teacher_float_p p:first-child {
  margin-right: 100px;
}
.teacher_float_p p {
  float: left;
}
.s_teacher_list p {
  color: #666;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
}
.s_teacher_list h1 {
  color: #333;
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
}
/*培训*/
.train_img img {
  width: 80px;
  height: 80px;
  margin-right: 30px;
  border-radius: 4px;
}
.train_float_btn h1 {
  float: left;
}
.train_float_btn button {
  width: 80px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  font-size: 14px;
  border: none;
  float: right;
  margin-top: 6px;
}
.btn1 {
  background-color: #23b4f8;
  color: #fff;
}
.btn2 {
  background-color: #ccc;
  color: #999;
}
/*活动专区*/
/*精彩瞬间*/
</style>