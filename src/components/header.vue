<template>
  <div class="header">
    <div class="top" style="background-color:#0089e3">
      <div class="container" style="margin-top:0;">
        <el-row :gutter="0">
          <el-col :xs="0" :sm="0" :md="6" :lg="6">
            <p class="solgan_word f14">集众智而生·筑时代之城</p>
          </el-col>
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :offset="12">
            <a v-if="loginFlag" href="javascript:;" @click="logout" class="text r">退出</a>
            <router-link v-if="loginFlag" to="/demand_comm_service/01" class="text r">个人中心</router-link>
            <router-link v-if="!loginFlag" to="/register" class="text r">免费注册</router-link>
            <i class="r hr">&nbsp;&nbsp;|&nbsp;&nbsp;</i>
            <router-link v-if="!loginFlag" to="/login" class="text cur r">登录</router-link>
            <p v-if="loginFlag" class="text r">{{nickname}}</p>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="main">
      <div class="container clear" style="position:relative;display:block;height:auto;overflow: inherit;">
        <router-link to="/index" class="l logo"><img src="static/img/logo.png" alt="" class="padder-vx"></router-link>
        <div class="nav nav_pc">
          <div id="menu-button">菜单</div>
          <ul>
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li>
              <router-link to="/news">创谷资讯</router-link>
            </li>
            <li>
              <router-link to="/office_list_policy">双创办公室</router-link>
            </li>
            <li class='has-sub'>
              <router-link to="/map">创谷空间</router-link>
              <ul>
                <li>
                  <router-link to="/map">创谷空间</router-link>
                </li>
                <li>
                  <router-link to="/attract/1">招商信息</router-link>
                </li>
                <li>
                  <router-link to="/attract/2">求租信息</router-link>
                </li>
              </ul>
            </li>
            <li class='has-sub'>
              <router-link to="/incubators">双创空间</router-link>
              <ul>
                <li>
                  <router-link to="/incubators">双创空间</router-link>
                </li>
                <li>
                  <router-link to="/attract_college/1">招商信息</router-link>
                </li>
                <li>
                  <router-link to="/attract_college/2">求租信息</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/college">创谷学院</router-link>
            </li>
            <li class='has-sub'>
              <router-link to="/service">创谷企业</router-link>
              <ul>
                <li>
                  <router-link to="/service">创谷企业</router-link>
                </li>
                <li>
                  <router-link to="/need">服务需求</router-link>
                </li>
              </ul>
            </li>
            <li class='has-sub'>
              <router-link to="/research">创谷研究</router-link>
              <ul>
                <li>
                  <router-link to="/research">创谷研究</router-link>
                </li>
                <li>
                  <router-link to="/question">技术难题及需求</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/financing">投融资库</router-link>
            </li>
<<<<<<< HEAD
            <li>
              <router-link to="/mine">关于我们</router-link>
            </li>
          </ul>
        </div>
        <!-- <div class="nav nav_mobile r">
          <div id="menu-button" @click='showMenu()'>菜单</div>
          <ul v-show="visible">
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li @click='showMenu_sub()'>
              <span class="submenu-button submenu-opened"></span>
              <router-link to="/news">创谷资讯</router-link>
            </li>
            <li @click='showMenu_sub()'>
              <span class="submenu-button submenu-opened"></span>
              <router-link to="/office_list_policy">双创办公室</router-link>
            </li>
            <li class='has-sub'>
              <router-link to="/map">创谷空间</router-link>
              <ul>
                <li>
                  <router-link to="/map">创谷空间</router-link>
                </li>
                <li>
                  <router-link to="/attract/1">招商信息</router-link>
                </li>
                <li>
                  <router-link to="/attract/2">求租信息</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/incubators">双创空间</router-link>
              <ul>
                <li>
                  <router-link to="/incubators">双创空间</router-link>
                </li>
                <li>
                  <router-link to="/attract_college/1">招商信息</router-link>
                </li>
                <li>
                  <router-link to="/attract_college/2">求租信息</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/college">创谷学院</router-link>
              <ul>
                <li>
                  <router-link to="/service">创谷企业</router-link>
                </li>
                <li>
                  <router-link to="/need">服务需求</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/service">创谷企业</router-link>
              <ul>
                <li>
                  <router-link to="/research">创谷研究</router-link>
                </li>
                <li>
                  <router-link to="/question">技术难题及需求</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/research">创谷研究</router-link>
            </li>
            <li>
              <router-link to="/financing">投融资库</router-link>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <!--客服-->
    <div class="call">
      <div>
        <!--电话-->
        <div id="telnumber" class="text-center">
          <a href="tel:027-59103557" style="color:unset;">
            <img src="static/img/dianhua.png" alt="">
            <!--<i class="el-icon-phone animate_opatoshow animate_start"></i>-->
          </a>
          <span class="text-xs block">
             <i class="el-icon-phone"></i> 027-59103580<br>
          </span>
        </div>
        <!--QQ-->
        <div id="qq" class="text-center">
          <img src="static/img/qq.png" alt="">
          <!--<i class="icon fa fa-qq animate_opatoshow animate_start"></i>-->
          <span class="text-xs block">
             <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=3453276422&amp;site=qq&amp;menu=yes" target="_blank" class="pull-left text-2x padder-xs tras-03 b-r b-r-dashed">
               <img src="static/img/qq.png" alt="" >
             </a>
             <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=3425454889&amp;site=qq&amp;menu=yes" target="_blank" class="pull-left text-2x padder-xs tras-03 b-r b-r-dashed">
                <img src="static/img/qq.png" alt="" >
             </a>
          </span>
        </div>
        <!--微信-->
        <div id="code" class="text-center tras-03">
          <img src="static/img/weixin.png" alt="">
          <span class="text-xs" style="line-height:10px;box-shadow:0 0 10px 5px #ddd;">
            <img src="static/img/QR_code.735cca2.jpg" style="width:120px; height:120px;">
          </span>
        </div>
=======
          </ul>
        </div>
        <!-- <div class="nav nav_mobile r">
          <div id="menu-button" @click='showMenu()'>菜单</div>
          <ul v-show="visible">
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li @click='showMenu_sub()'>
              <span class="submenu-button submenu-opened"></span>
              <router-link to="/news">创谷资讯</router-link>
            </li>
            <li @click='showMenu_sub()'>
              <span class="submenu-button submenu-opened"></span>
              <router-link to="/office_list_policy">双创办公室</router-link>
            </li>
            <li class='has-sub'>
              <router-link to="/map">创谷空间</router-link>
              <ul>
                <li>
                  <router-link to="/map">创谷空间</router-link>
                </li>
                <li>
                  <router-link to="/attract/1">招商信息</router-link>
                </li>
                <li>
                  <router-link to="/attract/2">求租信息</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/incubators">双创空间</router-link>
              <ul>
                <li>
                  <router-link to="/incubators">双创空间</router-link>
                </li>
                <li>
                  <router-link to="/attract_college/1">招商信息</router-link>
                </li>
                <li>
                  <router-link to="/attract_college/2">求租信息</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/college">创谷学院</router-link>
              <ul>
                <li>
                  <router-link to="/service">创谷企业</router-link>
                </li>
                <li>
                  <router-link to="/need">服务需求</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/service">创谷企业</router-link>
              <ul>
                <li>
                  <router-link to="/research">创谷研究</router-link>
                </li>
                <li>
                  <router-link to="/question">技术难题及需求</router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/research">创谷研究</router-link>
            </li>
            <li>
              <router-link to="/financing">投融资库</router-link>
            </li>
          </ul>
        </div> -->
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from "./store/types";
  import api from "../axios/api.js";
  export default {
    data() {
      return {
        visible: false,
        visible_sub: false,
        nickname: "",
        loginFlag: false //显示登录后用户名，和用户中心标记
      };
    },
    mounted() {
      let userInfoStr = window.localStorage.getItem('userinfo');
      if (userInfoStr) {
        let userinfo = JSON.parse(userInfoStr);
        this.loginFlag = true;
        this.nickname = userinfo['data']['nickname'];
      }
    },
    methods: {
      showMenu() {
        if (this.visible == true) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      },
      showMenu_sub() {
        if (this.visible_sub == true) {
          this.visible_sub = false;
        } else {
          this.visible_sub = true;
        }
      },
      logout() {
        this.$confirm('退出当前账号, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.localStorage.clear();
          window.location.reload();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    }
  };
</script>

<style scoped>
  .header {
    padding-bottom: 84px;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;
  }
  .top {
    background-color: #0089e3;
  }
  .header .top .el-col {
    padding: 10px 0;
  }
  .solgan_word {
    color: #fff;
    padding: 0;
  }
  .header .text {
    display: inline-block;
    padding: 0 5px;
    color: #fff;
  }
  .header .cur {
    padding: 0 10px;
    background-color: #f48100;
    border-radius: 3px;
  }
  .header .hr {
    color: #fff;
  }
  .el-col-xs-0 {
    display: none;
  }
  @media (min-width: 768px) {
    .el-col-xs-0 {
      display: none;
    }
  }
  @media (min-width: 992px) {
    .el-col-xs-0 {
      display: block;
    }
  }
  .nav,
  .nav ul,
  .nav ul li,
  .nav ul li a,
  .nav #menu-button {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    line-height: 1;
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .nav:after,
  .nav>ul:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
  .nav #menu-button {
    display: none;
  }
  .nav {
    width: auto;
    line-height: 1;
    background: #ffffff;
    padding: 12px 0;
    display: block;
    position: absolute;
    right: 0;
    z-index: 10;
  }
  .nav>ul>li {
    float: left;
  }
  .nav.align-center>ul {
    font-size: 0;
    text-align: center;
  }
  .nav.align-center>ul>li {
    display: inline-block;
    float: none;
  }
  .nav.align-center ul ul {
    text-align: left;
  }
  .nav.align-right>ul>li {
    float: right;
  }
  .nav.align-right ul ul {
    text-align: right;
  }
  .nav>ul>li>a {
    line-height: 20px;
    padding: 16px 10px;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000000;
    -webkit-transition: color 0.2s ease;
    -moz-transition: color 0.2s ease;
    -ms-transition: color 0.2s ease;
    -o-transition: color 0.2s ease;
    transition: color 0.2s ease;
  }
  .nav>ul>li:hover>a,
  .nav>ul>li.active>a {
    color: #0089e3;
    border-bottom: 2px solid #0089e3;
  }
  .nav ul li .active {
    color: #0089e3;
    border-bottom: 2px solid #0089e3;
  }
  .nav>ul>li.has-sub>a {
    padding-right: 25px;
  }
  .nav>ul>li.has-sub>a::after {
    position: absolute;
    top: 22px;
    right: 10px;
    width: 6px;
    height: 6px;
    border-bottom: 1px solid #000000;
    border-right: 1px solid #000000;
    content: "";
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: border-color 0.2s ease;
    -moz-transition: border-color 0.2s ease;
    -ms-transition: border-color 0.2s ease;
    -o-transition: border-color 0.2s ease;
    transition: border-color 0.2s ease;
  }
  .nav>ul>li.has-sub:hover>a::after {
    border-color: #009ae1;
  }
  .nav ul ul {
    position: absolute;
    left: -9999px;
  }
  .nav li:hover>ul {
    left: auto;
  }
  .nav.align-right li:hover>ul {
    right: 0;
  }
  .nav ul ul ul {
    margin-left: 100%;
    top: 0;
  }
  .nav.align-right ul ul ul {
    margin-left: 0;
    margin-right: 100%;
  }
  .nav ul ul li {
    height: 0;
    -webkit-transition: height 0.2s ease;
    -moz-transition: height 0.2s ease;
    -ms-transition: height 0.2s ease;
    -o-transition: height 0.2s ease;
    transition: height 0.2s ease;
  }
  .nav ul li:hover>ul>li {
    height: 32px;
  }
  .nav ul ul li a {
    padding: 10px 20px;
    width: 160px;
    font-size: 12px;
    background: #333333;
    text-decoration: none;
    color: #dddddd;
    -webkit-transition: color 0.2s ease;
    -moz-transition: color 0.2s ease;
    -ms-transition: color 0.2s ease;
    -o-transition: color 0.2s ease;
    transition: color 0.2s ease;
  }
  .nav ul ul li:hover>a,
  .nav ul ul li a:hover {
    color: #ffffff;
  }
  .nav ul ul li.has-sub>a::after {
    position: absolute;
    top: 13px;
    right: 10px;
    width: 4px;
    height: 4px;
    border-bottom: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    content: "";
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transition: border-color 0.2s ease;
    -moz-transition: border-color 0.2s ease;
    -ms-transition: border-color 0.2s ease;
    -o-transition: border-color 0.2s ease;
    transition: border-color 0.2s ease;
  }
  .nav.align-right ul ul li.has-sub>a::after {
    right: auto;
    left: 10px;
    border-bottom: 0;
    border-right: 0;
    border-top: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
  }
  .nav ul ul li.has-sub:hover>a::after {
    border-color: #ffffff;
  }
  @media all and (min-width: 1200px) {
    .nav_pc {
      display: block;
    }
    .nav_mobile {
      display: none;
    }
  }
@media all and (max-width: 768px) {
  .logo{
    display: none;
  }
  .header {
    width: 750px;
<<<<<<< HEAD
    padding: 0;
  }
  .nav {
    position: static;
=======
    /* padding: 0; */
  }
  .nav {
    height: 80px;
    left: 0;
    /* margin-bottom: 80px; */
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
  }
  .el-col-offset-12 {
    margin-left:40%;
  }
  .nav>ul>li>a {
    padding: 16px 8px;
    font-size: 14px;
  }
}
<<<<<<< HEAD
  /*客服*/
  .call img{
    width:24px;
    height:24px;
    padding-top: 8px;
    margin-bottom: 8px;
  }
  .call{
    position: fixed;
    top:50%;
    right:0;
    z-index:100000;
  }
  /*电话*/
  #telnumber {
    margin-top: -80px;
    background: rgba(19, 206, 102, 0.8);
    color: rgba(255, 255, 255, 0.7);
    border-radius: 4px 0 0 0;
    line-height: 40px;
    font-size: 24px;
    width:40px;
    height:40px;
  }
  #telnumber span {
    display: none;
    position: absolute;
    right: 60px;
    width: 120px;
    top: -80px;
    padding-left: 10px;
    padding-right: 10px;
    background: rgba(19, 206, 102, 1);
    border-radius: 4px;
  }
  .text-xs {
    font-size: 12px;
  }
  #telnumber p {
    display: none;
    font-size: 12px;
    line-height: 14px;
    margin-top: 6px;
  }
  #telnumber:hover {
    background: rgba(19, 206, 102, 1);
    color: white;
  }
  #telnumber:hover span {
    display: block;
  }
  #telnumber span::after {
    border-left-color: rgba(6, 146, 63, 1);
    content: "";
    display: block;
    position: absolute;
    right: -26px;
    top: 0;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    z-index: 1111;
  }

  /*QQ*/
  #qq:hover {
    background: rgba(244, 129, 0, 1);
    color: white;
  }
  #qq {
    margin-top: 0;
    background: rgba(244, 129, 0, 0.8);
    color: rgba(255, 255, 255, 0.7);
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 24px;
    z-index: 999;
    cursor: pointer;
  }
  #qq span {
    display: none;
    position: absolute;
    right: 60px;
    width: 90px;
    top: -40px;
    background: rgba(244, 129, 0, 1);
    border-radius: 4px;
  }
  .text-xs {
    font-size: 12px;
  }
  .tras-03 {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  .text-2x {
  font-size: 2em;
  }
  #qq span a {
    color: rgb(232, 207, 255);
  }
  .b-r-dashed {
    border-right-style: dashed !important;
  }
  .b-r {
    border-right: 1px solid #dee5e7;
  }
  .padder-xs {
    padding-right: 10px;
    padding-left: 10px;
  }
  .text-2x {
    font-size: 2em;
  }
  .pull-left {
    float: left !important;
  }
  #qq span::after {
    border-left-color: rgba(244, 129, 0, 1);
    content: "";
    display: block;
    position: absolute;
    right: -26px;
    top: 0;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    z-index: 1111;
  }
  #qq:hover span {
    display: block;
  }
  #code {
    margin-top: 0;
    background: rgba(0, 137, 227, 0.8);
    color: rgba(255, 255, 255, 0.7);
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 24px;
    z-index: 999;
    cursor: pointer;
  }
  .tras-03 {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  .text-center {
    text-align: center;
  }
  #code span {
    display: none;
    position: absolute;
    right: 60px;
    top: 0;
    padding: 2px;
    /* padding-right: 10px; */
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
  }
  .text-xs {
    font-size: 12px;
  }
  #code span::after {
    border-left-color: rgba(0, 137, 227, 0.8);
    content: "";
    display: block;
    position: absolute;
    right: -26px;
    top: 0;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    z-index: 1111;
  }
  #code:hover {
    background: rgba(0, 137, 227, 1);
    color: white;
  }
  #code:hover span {
    display: block;
  }

  /*客服*/

=======
 
>>>>>>> e635a5d43f7fbfd5b3e492f48905c787457e575f
</style>
