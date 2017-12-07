<template>
  <div class="activity_para">
    <div class="container">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24">
          <el-breadcrumb separator="/" class="padder-vx">
            <el-breadcrumb-item :to="{ path: '/need' }">服务需求列表</el-breadcrumb-item>
            <el-breadcrumb-item>需求详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="padder-v">
            <div class="need_import">
              <h3 style="margin-bottom:10px;">{{openData['title']}}</h3>
              <p>企业名称: {{openData['enterprise']}} | 需求类型: {{openData['title']}} | 联系人: {{openData['contact']}} | 联系方式: {{openData['phone']}} | <span>发布时间：{{openData['createAt'] | formatDate}}</span> | <span v-if="openData.status == 1">审核通过</span></p>
              <h1 v-if="openData.status == 3"></h1>
              <p>需求描述: {{openData['content']}}</p>
            </div>
          </div>
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="padding-top:20px;border-top: 1px solid #dddddd;">
              <h1 class="f20">问题留言:</h1>
              <div class="padder-v">
                <el-form label-width="0px" class="demo-Form" :model="askForm" :rules="askRules" ref="askForm">
                  <el-form-item label="" prop="askMess">
                    <el-input type="textarea" v-model="askForm.askMess" :rows="3" placeholder="有什么问题，你在这里提问"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" class="tutorBtn r" @click="askBtn('askForm')">提交问题</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-col>
          </el-row>
          <el-row v-if="noData">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="margin-bottom: 30px;">
              <div class="need_list">
                <h1 class="f20">留言列表</h1>
                <div class="list_item" v-for="(item, index) in replyList" :key="index">
                  <p class="clearfix"><span class="l name">{{item['name']}}</span> <span class="r">{{item['createAt'] | formatDate}}</span></p>
                  <!-- <p>{{item['content']}} <a href="javascript:;" class="r" @click="demand(item['id'])">回复</a></p> -->
                  <p class="huifu">{{item['content']}}</p>
                </div>
                <!-- <div class="huifuSubmit">
                  <el-form label-width="0px" class="demo-Form" :model="replyForm" :rules="replyRules" ref="replyForm">
                    <el-form-item label="" prop="replyMess">
                      <el-input type="textarea" v-model="replyForm.replyMess" :rows="2" placeholder="写下你的评论"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" class="tutorBtn r" @click.stop.prevent="replyBtn('replyForm')">评论</el-button>
                    </el-form-item>
                  </el-form>
                </div> -->
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="7" push="1">
          <el-row :gutter="10">
            <el-col :lg="24" :md="24" :sm="24" :xs="24">
              <div class="news-rightlist">
                <div class="news-hot">热门排行</div>
                <ul>
                  <li v-for="( item,index ) in rankData" :key="index" @click="openDetail(item['id'])">
                    <router-link :to="{ name: 'consultDetail', params: { id: item.id} }"><span>{{index+1}}</span>{{item['title']}}</router-link>
                  </li>
                </ul>
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
  import {
    formatDate
  } from "../../static/js/date.js";
  export default {
    data() {
      return {
        id: "",
        openData: "",
        replyList: "",
        rankData: "",
        noData: false,
        askForm: {
          askMess: ""
        },
        askRules: {
          askMess: [{
            required: true,
            message: "请写下你的留言",
            trigger: "blur"
          }]
        },
        replyForm: {
          replyMess: ""
        },
        replyRules: {
          replyMess: [{
            message: "请写下你的评论",
            trigger: "blur"
          }]
        }
      };
    },
    created() {
      let id = this.$route.params.id;
      this.getService(id);
      this.id = id;
      this.getReplyList();
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, "yyyy-MM-dd hh:mm");
      }
    },
    methods: {
      getService(id) {
        let userinfoStr = window.localStorage.getItem("userinfo");
        if (userinfoStr) {
          this.openFlag = true;
          var url = "/consult/" + id;
          api.Get(url).then(res => {
            this.openData = res;
            this.initRank();
          });
        } else {
          let redirect = decodeURIComponent("/login");
          this.$router.push({
            path: redirect
          });
        }
      },
      askBtn(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            var params = {
              subjectId: this.id,
              content: this.askForm.askMess
            };
            api.Post("/enterprise/apply/msg", params).then(res => {
              if (res["suc"] == true) {
                this.$message("提交成功!");
                this.getReplyList();
              } else if (res["suc"] == false) {
                this.$message(res["msg"]);
              }
            });
          }
        });
      },
      getReplyList() {
        let url = "/consult/msg/" + this.$route.params.id + "/" + "10" + "/" + "1";
        api.Get(url).then(res => {
          if (res["data"].length > 0) {
            this.replyList = res["data"];
            this.noData = true;
          } else {
            this.noData = false;
          }
        });
      },
      initRank() {
        var url = "/consult/rank/10";
        api.Get(url).then(res => {
          this.rankData = res;
        });
      }
    },
    watch: {
      '$route' (to, from) {
       window.location.reload();
      }
    }
  };
</script>

<style scoped>
  .activity_para {
    height: auto;
    min-height: 100%;
  }
  .activity_para p {
    margin: 0 0 10px;
    line-height: 24px;
  }
  .activity_para h1,
  .activity_para p {
    color: #666;
  }
  .tutorImg {
    width: 220px;
    height: 220px;
    border-radius: 50%;
  }
  .line-w {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 0;
    border-top: 2px solid #eee;
    margin-right: 30%;
  }
  .wrapper {
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px;
  }
  .tutorBtn {
    display: inline-block;
    background-color: #f48100;
    border-color: #f48100;
    padding: 5px 6px;
    border-radius: 5px;
  }
  .answer_list_title {
    height: 40px;
    background-color: #f1f1f1;
    width: 100%;
  }
  .answer_list_title p {
    width: 110px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    display: inline-block;
    margin: 0;
    border-top: 2px solid #0089e3;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
  }
  .need_list h1 {
    font-weight: bold;
    color: #666;
    margin-bottom: 20px;
  }
  .list_item {
    font-size: 12px;
    border-bottom: 1px dashed #ddd;
    margin-bottom: 10px;
  }
  .list_item a {
    color: #f48100;
    font-size: 12px;
  }
  .list_item .name {
    color: #0089e3;
  }
  .list_item .huifu {
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 20px;
  }
  /*热门排行*/
  .news-rightlist {
    box-shadow: 0 0 10px #ddd;
    width: 100%;
    padding: 0 10px 20px 20px;
    margin-bottom: 50px;
    margin-top: 40px;
    box-sizing: border-box;
  }
  .news-hot {
    position: relative;
    top: -11px;
    left: 20px;
    background-color: #fff;
    width: 30%;
    text-align: center;
    color: #0089e3;
    font-weight: 600;
    font-size: 16px;
  }
  .news-button button {
    border: none;
    background-color: #ff0000;
    float: right;
    margin-right: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .news-rightlist ul li,.news-rightlist ul a {
    clear: both;
    line-height: 30px;
    color: #a1a1a1;
    font-size: 14px;
    letter-spacing: 1px;
  }
  .news-rightlist ul li span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #0089e3;
    color: #fff;
    text-align: center;
    line-height: 20px;
    margin-right: 10px;
  }
</style>
