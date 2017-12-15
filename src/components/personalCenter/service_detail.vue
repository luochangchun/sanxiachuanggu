<template>
  <!--需求详情-->
  <div class="show_need">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item>您所在的位置 :</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/demand_comm_service01' }">服务需求列表</el-breadcrumb-item>
      <el-breadcrumb-item>需求详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="need_import">
      <h3>{{data['title']}}</h3>
      <p>{{data['enterprise']}} | 需求类型: <span v-for="n in searchService" :key="n" v-if="n['id'] == data['classifyId']">{{n['value']}}</span> | 联系人: {{data['contact']}} | 联系方式: {{data['phone']}} | {{data['createAt'] | formatDate}} | <span v-if="data['status'] == 1">待解决</span>
        <span v-if="data['status'] == 2">进行中</span>
        <span v-if="data['status'] == 3">已解决</span>
        <span v-if="data['status'] == 4">被驳回</span></p>
      <p style="border-bottom:none;margin-top:30px;">{{data['needs']}}</p>
    </div>
  </div>
</template>

<script>
  import api from "../../axios/api.js";
  import {
    formatDate
  } from '../../../static/js/date.js'
  export default {
    data() {
      return {
        data: '',
        searchService: '',
      };
    },
    filters: {
      formatDate(time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    created() {
      let id = this.$route.params.id;
      this.getservice(id);
    },
    methods: {
      service() {
        var url = "/dict/service";
        api.Get(url).then(res => {
          this.searchService = res;
        });
      },
      getservice(id) {
        api.Get("/enterprise/apply/" + id).then(res => {
          this.data = res;
          this.service();
        });
      }
    }
  };
</script>

<style scoped>
  .need_import {
    padding: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
    /* box-shadow: 0 0 15px #999; */
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
    margin-left: 84%;
    margin-top: 20px;
  }
</style>
