<template>
    <div class="activity_para">
        <div class="bg-info">
            <div class="container">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="24" :md="10" :lg="8">
                        <div class="padder-v">
                            <img src="http://www.egowork.com/themes/egowork/img/tra_de.jpg" alt="">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="14" :lg="10">
                        <div class="padder-v">
                            <p class="f18 b">{{train['name']}}</p>
                            <hr class="line-w">
                            <p> 时间：{{train['startAt'] | formatDate}}</p>
                            <hr class="line-w">
                            <p> 地点：{{train['location'] || "暂无数据"}} </p>
                            <p> 人数限额：{{train['total'] || "暂无数据"}}人 </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="padder-v-xx">
            <div class="container min650">
                <el-row :gutter="10">
                    <el-col :lg="24">
                        <div class="padder-v">
                            <div class="content">
                                <p class="f24">
                                    <span>内容介绍</span>
                                    <router-link :to="{ name: 'train_Application', params: { id: train['id']} }">报名申请</router-link>
                                </p>
                                <div class="wrapper" v-html="train['detail']['content']">
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24"  :lg="24">
                        <div class="content">
                            <p class="f24">
                                <span>基本信息</span>
                            </p>
                            <div class="wrapper">
                                <p> 联系人：{{train['name'] || "暂无数据"}} </p>
                                <p> 联系方式：{{train['phone'] || "暂无数据"}} </p>
                                <p> 时间：{{train['startAt'] | formatDate}} </p>
                                <p> 地点：{{train['location'] || "暂无数据"}} </p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../axios/api.js";
import { formatDate } from "../../static/js/date.js";
export default {
  data() {
    return {
      train: ""
    };
  },
  created() {
    let id = this.$route.params.id;
    this.getActivity(id);
  },
  methods: {
    getActivity(id) {
      api.Get("/activity/" + id).then(res => {
        this.train = res["activity"];
      });
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style scoped>
.f24 span {
  float: left;
  margin-bottom: 10px;
}
.f24 a {
  float: right;
  background-color: #f48100;
  border: none;
  color: #fff;
  border-radius: 4px;
  width: 90px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}
.wrapper {
  clear: both;
}
.activity_para {
  height: auto;
  min-height: 100%;
}
.bg-info {
  color: #dcf2f8;
  background-color: #0089e3;
}
.activity_para p {
  margin: 0 0 10px;
}
.line-w {
  margin-top: 5px;
  margin-bottom: 10px;
  border: 0;
  border-top: 2px solid #eee;
  margin-right: 30%;
}
.padder-v-xx {
  padding-top: 20px;
  padding-bottom: 50px;
}
.wrapper {
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 15px;
}
.stamp img {
  display: block;
  height: 90px;
  max-width: 100%;
  margin-bottom: 50px;
}
</style>
