<template>
    <div class="activity_para">
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-breadcrumb separator="/" class="padder-vx">
                        <el-breadcrumb-item :to="{ path: '/' }">创谷学院</el-breadcrumb-item>
                        <el-breadcrumb-item>优秀讲师</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-col :xs="24" :sm="24" :md="10" :lg="8">
                    <div class="padder-v">
                        <img :src="tutorDetail['photo']" alt="" class="tutorImg">
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="14" :lg="10">
                    <div class="padder-v">
                        <p class="f18 b">{{tutorDetail['name'] || "暂无数据"}}</p>
                        <hr class="line-w">
                        <p class="clearfix"><span class="l" style="width:70px;">个人简介：</span><span class="l" style="width:400px">{{tutorDetail['intro'] || "暂无数据"}} </span></p>
                        <p class="clearfix"><span class="l" style="width:70px;">关注领域：</span><span class="l" style="width:400px">{{tutorDetail['talent'] || "暂无数据"}} </span></p>
                        <p class="clearfix"><span class="l" style="width:70px;">所获荣誉：</span><span class="l" style="width:400px">{{tutorDetail['cert'] || "暂无数据"}}</span></p>
                        <router-link v-if="tutorDetail['type'] == 3" :to="{name:'tutorProblem', params: {businessId:tutorDetail.businessId,id:tutorDetail.id}}" style="margin:0!important" class="tc white tutorBtn">
                            技术咨询
                        </router-link>
                    </div>
                </el-col>
            </el-row>
            <el-row v-if="tutorDetail['type'] == 3" :gutter="10" class="incubators_details_text" style="background-color: #fff;padding:15px;margin-top:20px;margin-bottom:50px">
                <p v-html="content"></p>
            </el-row>
            <el-row v-if="tutorDetail['type'] == 4">
                <el-col :xs="24" :sm="24" :md="10" :lg="8">
                    <div class="padder-v"></div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="14" :lg="10" v-if="myMsg_flag" style="margin-bottom: 30px;">
                    <div class="answer_list_title">
                        <p class="tc">讲师解答</p>
                    </div>
                    <div class="answer_list_body">
                        <div class="item clearfix" v-for="(item, index) in MyMsg" :key="index" @mouseover="show_single_flag(index)" @mouseout="hide_single_flag(index)">
                            <div class="clearfix">
                                <p class="l name text-ellipsis">功夫熊猫</p>
                                <p class="r time">{{item['createAt'] | formatDate}}</p>
                                <p class="l question">{{item['content']}}</p>
                                <a class="r more" href="javascript:;"  v-if="index==0">展开</a>
                            </div>
                            <div class="owner">
                                <p class="name" style="width:auto">周培<span style="color:#8590a6">&nbsp;回复&nbsp;</span>功夫熊猫</p>
                                <p class="replyMess">123</p>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="10" :lg="8">
                    <div class="padder-v"></div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="14" :lg="10" style="padding-top:20px;border-top: 1px solid #dddddd;">
                    <h1 class="f20">问题留言:</h1>
                    <div class="padder-v">
                        <el-form label-width="0px" class="demo-ruleForm" :model="askForm" :rules="askRules" ref="askForm">
                            <el-form-item label="" prop="askMess">
                                <el-input type="textarea" v-model="askForm.askMess" :rows="7" placeholder="有什么问题，你在这里提问"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" class="tutorBtn r" @click.stop.prevent="askBtn('askForm')">提交问题</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
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
      id: "",
      tutorDetail: "",
      content: "",
      single_active: [false, false, false, false],
      demo_active: [false, false, false, false],
      myMsg_flag: false,
      show_flag: false,
      MyMsg: "", //个人留言列表
      askForm: {
        askMess: ""
      },
      askRules: {
        askMess: [
          {
            required: true,
            message: "请填写要咨询的问题",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    let id = this.$route.params.id;
    this.getTutor(id);
    this.id = id;
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  methods: {
    getTutor(id) {
      api.Get("/indie/" + id).then(res => {
        this.tutorDetail = res;
        if (!res["detail"]) {
          this.content = "暂无数据";
        } else {
          this.content = res["detail"]["content"];
        }
        this.getMyMsg();
      });
    },
    askBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var params = {
            subjectId: this.id,
            type: 3,
            content: this.askForm.askMess
          };
          api.Post("/indie/question", params).then(res => {
            if (res["suc"] == true) {
              this.$message("提交成功!");
              this.getMyMsg();
            } else if (res["suc"] == false) {
              this.$message(res["msg"]);
            }
          });
        }
      });
    },
    getMyMsg() {
      let url = "/indie/my/msg/" + "10" + "/" + "1";
      api.Get(url).then(res => {
        if (res["data"].length > 0) {
          this.myMsg_flag = true;
          this.MyMsg = res["data"];
        } else {
          this.myMsg_flag = false;
        }
      });
    },
    open() {
        
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
.answer_list_body {
  margin-top: 18px;
  font-size: 14px;
  font-weight: bold;
}
.answer_list_body .item {
  border-bottom: 1px solid #f0f2f7;
}
.answer_list_body .name,
.answer_list_body .question,
.answer_list_body .time,
.answer_list_body .reply {
  margin-bottom: 5px;
  line-height: 24px;
}
.answer_list_body .name {
  width: 70px;
  color: #262626;
}
.answer_list_body .question {
  width: 80%;
  color: #262626;
  word-break: break-all;
}
.answer_list_body .time {
  color: #8590a6;
}
.answer_list_body .reply {
  line-height: 24px;
  color: #8590a6;
}
.answer_list_body .more {
  color: #91d2fc;
  cursor: pointer;
}

.answer_list_body .owner {
  padding-top: 5px;
  border-top: 1px solid #f0f2f7;
}
.answer_list_body .owner .replyMess {
  color: #262626 !important;
}
</style>
