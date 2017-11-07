<template>
  <div>
    <el-row :gutter="10">
      <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
        <el-row :gutter="10">
          <el-col :lg="16" :md="24" :sm="24" :xs="24">
            <!--行业分类-->
            <div>
              <el-row :gutter="10">
                <el-col :lg="20" :md="22" :sm="22" :xs="22">
                  <h3 class="padder-v">行业分类</h3>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane :label='item.value' :name="item.cname" :cid="item.id" v-for="(item, index) in category" :key="index">
                      <el-tabs type="card" v-model="activeName2" @tab-click="handleClick2">
                        <el-tab-pane label="全部需求" name="first" :cid="item.id" :st="0"></el-tab-pane>
                        <el-tab-pane label="未处理" name="second" :cid="item.id" :st="1"></el-tab-pane>
                        <el-tab-pane label="待解决" name="third" :cid="item.id" :st="2"></el-tab-pane>
                        <el-tab-pane label="已解决" name="fourth" :cid="item.id" :st="3"></el-tab-pane>
                      </el-tabs>
                      <el-row class="need_xq" style="background-color:#eee;">
                        <el-col :lg="10" :md="10" :sm="10" :xs="10">
                          <p style="color:#000">需求</p>
                        </el-col>
                        <el-col :lg="3" :md="3" :sm="3" :xs="3">
                          <p style="color:#000">联系人</p>
                        </el-col>
                        <el-col :lg="5" :md="5" :sm="5" :xs="5">
                          <p style="color:#000">联系方式</p>
                        </el-col>
                        <el-col :lg="5" :md="5" :sm="5" :xs="5">
                          <p style="color:#000">发布时间</p>
                        </el-col>
                      </el-row>
                      <p v-show="noData" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                      <a v-for="(item,index) in needData" :key="index" @click="openDetail(item.id)">
                        <el-row v-show="!noData" :gutter="0" class="need_xq">
                          <el-col :lg="10" :md="10" :sm="10" :xs="10" class="need_xq_p">
                            <p class="text-ellipsis">{{item['title']}}</span></p>
                          </el-col>
                          <el-col :lg="3" :md="3" :sm="3" :xs="3">
                            <p class="text-ellipsis">{{item['contact']}}</p>
                          </el-col>
                          <el-col :lg="5" :md="5" :sm="5" :xs="5">
                            <p>{{item['phone']}}</p>
                          </el-col>
                          <el-col :lg="5" :md="5" :sm="5" :xs="5">
                            <p>{{item['createAt'] | formatDate}}</p>
                          </el-col>
                        </el-row>
                      </a>
                      <!--分页-->
                      <el-row :gutter="10" style="margin: 50px 0;">
                        <el-col :lg="8" :md="8" :sm="24" :xs="24" :offset="8">
                          <div class="block">
                            <el-pagination :current-page="1" :total="totalPages" @current-change="handleCurrentChange" layout="prev, pager, next"></el-pagination>
                          </div>
                        </el-col>
                      </el-row>
                    </el-tab-pane>
                  </el-tabs>
                </el-col>
                <el-col :lg="4" :md="4" :sm="2" :xs="2">
                  <router-link :to="{name:'problem', params: {type:'enterprise'}}">
                    <button class="show_btn">发布问题</button>
                  </router-link>
                </el-col>
              </el-row>
              <!--导航切换-->
            </div>
            <!--需求详情-->
            <div v-show="openFlag" class="show_need_mask" @click="closeDetail"></div>
            <div v-show="openFlag" class="show_need">
              <div class="need_import">
                <h3>{{openData['needs']}}</h3>
                <p>企业名称: {{openData['enterprise']}} | 需求类型: {{openData['title']}} | 联系人: {{openData['contact']}} | 联系方式: {{openData['phone']}} | <span>{{openData['createAt'] | formatDate}}</span> | <span v-if="openData.status == 1">审核通过</span></p>
                <h1 v-if="openData.status == 3"></h1>
                <p v-if="openData.status == 3"></p>
              </div>
              <h1>请输入留言</h1>
              <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="msg">
              </el-input>
              <button @click.stop.prevent="enterpriseMsg(openData['id'])">留言</button>
              <button @click.stop.prevent="closeDetail">取消</button>
            </div>
          </el-col>
          <!--热门排行-->
          <el-col :lg="8" :md="24" :sm="24" :xs="24">
            <el-row :gutter="10">
              <el-col :lg="24" :md="24" :sm="24" :xs="24">
                <div class="news-rightlist">
                  <div class="news-hot">热门排行</div>
                  <ul>
                    <li v-for="( item,index ) in rankData" :key="index" @click="openDetail(item['id'])">
                      <p><span>{{index+1}}</span>{{item['title']}}</p>
                    </li>
                  </ul>
                </div>
                <!--导师推荐-->
                <div class="news-rightlist">
                  <div class="news-hot">服务商推荐</div>
                  <ul>
                    <p v-show="recommendFlag" style="font-size:12px;line-height:30px;">此栏目暂无数据</p>
                    <li v-for="( item,index ) in recommend" :key="index" class="need_teacher" v-show="!recommendFlag">
                      <el-row :gutter="10" style="margin-bottom: 10px;">
                        <el-col :lg="8" :md="8" :sm="8" :xs="8">
                          <img :src="item['icon']" alt="">
                        </el-col>
                        <el-col :lg="16" :md="16" :sm="16" :xs="16">
                          <p>{{item['name']}}</p>
                          <p class="text-ellipsis">{{item['intro']}}</p>
                        </el-col>
                      </el-row>
                    </li>
                  </ul>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
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
        activeName: "tab1",
        activeName2: "first",
        show_need: false,
        textarea: "",
        category: "",
        needData: "",
        noData: false,
        openFlag: false,
        openData: "",
        msg: "",
        rankData: "",
        recommend: '', //导师推荐
        recommendFlag: false //导师有无数据标记
      };
    },
    created() {
      this.getServiceClass();
      this.initRank();
    },
    methods: {
      getServiceClass() {
        api.Get("/dict/service").then(res => {
          this.category = res;
          this.category.forEach((value, index, array) => {
            this.category[index]["cname"] = "tab" + (index + 1);
            if (index == 0) {
              this.initServicesList(this.category[index]["id"]);
            }
          });
        });
      },
      handleClick(tab, event) {
        this.initServicesList(tab["$attrs"]["cid"]);
        this.activeName2 = "first";
      },
      handleClick2(tab, event) {
        this.selectServicesList(tab["$attrs"]["cid"], tab["$attrs"]["st"]);
      },
      initServicesList(cid) {
        var url = "/enterprise/apply/" + "10" + "/" + "1" + "?cid=" + cid;
        api.Get(url).then(res => {
          this.needData = res["page"]["data"];
          this.recommend = res["recommend"];
          if (this.needData.length == 0) {
            this.noData = true;
          } else if (this.needData.length > 0) {
            this.noData = false;
            this.needData = res["page"]["data"];
            this.totalPages = res["page"]["totalPages"] * 10;
          }
          // 导师推荐
          if (this.recommend.length == 0) {
            this.recommendFlag = true;
          } else if (this.recommend.length > 0) {
            this.recommendFlag = false;
            this.recommend = res["recommend"];
          }
        });
      },
      selectServicesList(cid, st) {
        if (st == 0) {
          var url = "/enterprise/apply/" + "10" + "/" + "1" + "?cid=" + cid;
        } else {
          var url =
            "/enterprise/apply/" + "10" + "/" + "1" + "?cid=" + cid + "&st=" + st;
        }
        api.Get(url).then(res => {
          this.needData = res["page"]["data"];
          this.recommend = res["recommend"];
          if (this.needData.length == 0) {
            this.noData = true;
          } else if (this.needData.length > 0) {
            this.noData = false;
            this.needData = res["page"]["data"];
            this.totalPages = res["page"]["totalPages"] * 10;
          }
          // 导师推荐
          if (this.recommend.length == 0) {
            this.recommendFlag = true;
          } else if (this.recommend.length > 0) {
            this.recommendFlag = false;
            this.recommend = res["recommend"];
          }
        });
      },
      handleCurrentChange(val) {
        //获取到当前分页页码，获取当前页面数据
        var url = "/enterprise/apply/" + "10" + "/" + val;
        api.Get(url).then(res => {
          this.needData = res["page"]["data"];
          this.totalPages = res["page"]["totalPages"] * 10;
        });
      },
      //打开服务需求详情
      openDetail(id) {
        let userinfoStr = window.localStorage.getItem('userinfo');
        if (userinfoStr) {
          this.openFlag = true;
          var url = "/enterprise/apply/" + id;
          api.Get(url).then(res => {
            this.openData = res;
          });
        } else {
          let redirect = decodeURIComponent('/login');
          this.$router.push({
            path: redirect
          });
        }
      },
      //关闭服务需求详情
      closeDetail() {
        this.openFlag = false;
      },
      //留言
      enterpriseMsg(id) {
        let params = {
          subjectId: id,
          content: this.msg
        };
        api.Get("/enterprise/apply/" + id).then(res => {
          this.openData = res;
        });
        var url = "/enterprise/apply/msg";
        api.Post(url, params).then(res => {
          if (res['suc'] == true) {
            this.$message('留言提交成功');
            this.openFlag = false;
          } else if (res['suc'] == false) {
            this.$message(res['msg']);
            this.openFlag = false;
          }
        });
      },
      initRank() {
        var url = "/enterprise/apply/rank/10";
        api.Get(url).then(res => {
          this.rankData = res;
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
  /*面包屑导航*/
  .el-breadcrumb {
    font-size: 13px;
    line-height: 3;
    margin-top: 10px;
  }
  .show_need_mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
  .show_need {
    position: fixed;
    top: 20%;
    left: 50%;
    margin-left: -335px;
    padding: 10px;
    background-color: #fff;
    z-index: 100;
    border: 1px solid #eee;
    border-radius: 5px;
  }
  .show_need p {
    line-height: 30px;
    margin-top: 10px;
  }
  .need_import {
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .need_import h3 {
    font-size: 16px;
    font-weight: normal;
    color: #666;
  }
  .need_import p {
    font-weight: normal;
    font-size: 12px;
    color: #999;
    line-height: 20px;
    border-bottom: 1px solid #ddd;
    margin-top: 10px;
  }
  .need_import h1 {
    height: 30px;
    line-height: 30px;
    font-weight: normal;
    font-size: 12px;
    color: #666;
    margin-top: 15px;
  }
  .show_need button {
    border: none;
    background-color: #f48100;
    color: #fff;
    font-size: 14px;
    width: 70px;
    height: 28px;
    border-radius: 4px;
    margin-right: 10px;
    float: right;
    margin-top: 20px;
  }
  /*行业分类*/
  .show_btn {
    border: none;
    background-color: #f48100;
    color: #fff;
    font-size: 14px;
    width: 70px;
    height: 28px;
    border-radius: 4px;
    margin-left: 30px;
  }
  @media (min-width: 768px) {
    .classify ul li {
      float: left;
      margin-right: 3%;
      font-size: 12px;
      color: #0089e3;
    }
    .show_btn {
      border: none;
      background-color: #f48100;
      color: #fff;
      font-size: 12px;
      width: 70px;
      height: 28px;
      border-radius: 4px;
      margin-left: 20px;
      text-align: center;
      margin-top: 28px;
    }
  }
  @media (min-width: 992px) {
    .show_btn {
      border: none;
      background-color: #f48100;
      color: #fff;
      font-size: 12px;
      width: 60px;
      height: 28px;
      border-radius: 4px;
      margin-left: 0;
      margin-top: 28px;
    }
  }
  @media (min-width: 1200px) {
    .show_btn {
      border: none;
      background-color: #f48100;
      color: #fff;
      font-size: 12px;
      width: 70px;
      height: 28px;
      border-radius: 4px;
      margin-left: 30px;
      margin-top: 28px;
    }
  }
  /*企业技术难题及需求*/
  .need_xq {
    border-bottom: 1px solid #ddd;
  }
  .need_xq:hover {
    border-bottom: 1px solid #91d3ff;
  }
  .need_xq p {
    height: 38px;
    line-height: 38px;
    color: #0089e3;
    font-size: 12px;
    cursor: pointer;
    margin:0;
    text-align: center;
  }
  .need_xq p span {
    margin-left: 10px;
    color: #999;
    font-size: 12px;
  }
  /*热门排行*/
  .news-rightlist {
    box-shadow: 0 0 10px #ddd;
    width: 100%;
    padding: 0 10px 20px 20px;
    margin-bottom: 50px;
    margin-top: 40px;
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
  .news-rightlist ul li {
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
  /*导师推荐*/
  .need_teacher div img {
    width: 100px;
    height: 80px;
    max-height: 80px;
    border-radius: 50%;
    padding: 16px 0;
  }
  .need_teacher div p {
    line-height: 30px;
    font-size: 14px;
  }
  .need_teacher div p:first-child {
    /* margin-top: 25px; */
  }
  .need_teacher div button {
    border: none;
    background-color: #f48100;
    color: #fff;
    font-size: 14px;
    width: 70px;
    height: 28px;
    border-radius: 4px;
    margin-top: 25px;
  }
</style>