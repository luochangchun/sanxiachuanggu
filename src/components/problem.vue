<template>
  <div>
    <el-row v-if="!problemFlag" :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
      <el-col :lg="12" :md="12" :sm="12" :xs="12" :offset="6" style="background-color:#fff;padding:30px 25px 15px 0">
        <h1 class="tc f18" style="color:#0089e3;margin-bottom:30px;">服务需求发布</h1>
        <el-form :model="serviceForm" :rules="serviceRules" ref="serviceForm" label-width="200px" class="demo-ruleForm">
          <el-form-item label="需求类别" prop="classifyId">
            <el-select v-model="serviceForm.businessId" @change="change">
              <el-option :label="item['value']" :value="item['id']" v-for="(item, index) in category" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="需求标题" prop="title">
            <el-input v-model="serviceForm.title" placeholder="请输入你的技术难题标题"></el-input>
          </el-form-item>
          <el-form-item label="需求描述" prop="needs">
            <el-input type="textarea" v-model="serviceForm.needs" placeholder="请描述你的技术难题"></el-input>
          </el-form-item>
          <el-form-item label="企业名称" prop="enterprise">
            <el-input v-model="serviceForm.enterprise" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contact">
            <el-input v-model="serviceForm.contact" placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="serviceForm.phone" placeholder="请输入联系人手机号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="publishForm('serviceForm')" style="background-color: #f48100;border:none;color:#fff;">发布</el-button>
            <el-button @click="resetForm('serviceForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row v-if="problemFlag" :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
      <el-col :lg="12" :md="12" :sm="12" :xs="12" :offset="6" style="background-color:#fff;padding:30px 25px 15px 0">
        <h1 class="tc f18" style="color:#0089e3;margin-bottom:30px;">企业技术难题及需求发布</h1>
        <el-form :model="cosnultForm" :rules="cosnultRules" ref="cosnultForm" label-width="200px" class="demo-ruleForm">
          <el-form-item label="行业类别" prop="classifyId">
            <el-select v-model="cosnultForm.businessId">
              <el-option :label="item['value']" :value="item['id']" v-for="(item, index) in category" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难题及需求标题" prop="title">
            <el-input v-model="cosnultForm.title" placeholder="请输入你的技术难题标题"></el-input>
          </el-form-item>
          <el-form-item label="难题及需求描述" prop="content">
            <el-input type="textarea" v-model="cosnultForm.content" placeholder="请描述你的技术难题"></el-input>
          </el-form-item>
          <el-form-item label="企业名称" prop="enterprise">
            <el-input v-model="cosnultForm.enterprise" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="产品与项目" prop="product">
            <el-input type="textarea" v-model="cosnultForm.product" placeholder="请输入企业项目与产品"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contact">
            <el-input v-model="cosnultForm.contact" placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="cosnultForm.phone" placeholder="请输入联系人手机号码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="consultForm('cosnultForm')" style="background-color: #f48100;border:none;color:#fff;">发布</el-button>
            <el-button @click="resetForm('cosnultForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import api from "../axios/api.js";
  export default {
    data() {
      let validateContact = (rule, value, callback) => {
        let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
        if (
          value === "" ||
          !re.test(value) ||
          value.length < 2 ||
          value.length > 5
        ) {
          callback(new Error("请输入联系人姓名！"));
        } else {
          callback();
        }
      };
      //手机号
      let validatePhone = (rule, value, callback) => {
        let re = /^1[34578]\d{9}$/;
        if (value === "" || !re.test(value) || value.length < 11) {
          callback(new Error("请输入正确手机号！"));
        } else {
          callback();
        }
      };
      return {
        category: "",
        problemFlag: false,
        serviceForm: {
          businessId: "", //需求类别
          title: "", //难题及需求标题
          mentorId: "", //难题及需求描述
          enterprise: "", //企业名称
          contact: "", //联系人姓名
          product: "", //产品与项目
          phone: "" //联系电话
        },
        serviceRules: {
          businessId: [{
            required: true,
            message: "请选择需求类别",
            trigger: "change"
          }],
          title: [{
            required: true,
            message: "请输入难题及需求标题",
            trigger: "blur"
          }],
          mentorId: [{
            required: true,
            message: "请输入难题及需求描述",
            trigger: "blur"
          }],
          enterprise: [{
            required: true,
            message: "请输入企业名称",
            trigger: "blur"
          }],
          contact: [{
            required: true,
            validator: validateContact,
            message: "请输入联系人姓名",
            trigger: "blur"
          }],
          product: [{
            required: true,
            message: "请输入产品与项目",
            trigger: "blur"
          }],
          phone: [{
            required: true,
            validator: validatePhone,
            message: "请输入手机号",
            trigger: "blur"
          }]
        },
        cosnultForm: {
          businessId: "", //需求类别
          title: "", //难题及需求标题
          mentorId: "", //难题及需求描述
          enterprise: "", //企业名称
          contact: "", //联系人姓名
          product: "", //产品与项目
          phone: "", //联系电话
          content: ""
        },
        cosnultRules: {
          businessId: [{
            required: true,
            message: "请选择需求类别",
            trigger: "change"
          }],
          enterprise: [{
            required: true,
            message: "请输入企业名称",
            trigger: "blur"
          }],
          contact: [{
            required: true,
            validator: validateContact,
            message: "请输入联系人姓名",
            trigger: "blur"
          }],
          phone: [{
            required: true,
            validator: validatePhone,
            message: "请输入手机号",
            trigger: "blur"
          }],
          title: [{
            required: true,
            message: "请输入难题及需求标题",
            trigger: "blur"
          }],
          content: [{
            required: true,
            message: "请输入咨询内容",
            trigger: "blur"
          }],
          product: [{
            // required: true,
            message: "请输入产品与项目",
            trigger: "blur"
          }]
        }
      };
    },
    created() {
      let type = this.$route.params.type;
      if (type == "enterprise") {
        // alert('服务需求页面');
        this.getServiceClass();
      } else if (type == "consult") {
        this.problemFlag = true;
        this.getConsultClass();
      }
    },
    methods: {
      publishForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            var params = {
              businessId: this.serviceForm.businessId,
              enterprise: this.serviceForm.enterprise,
              contact: this.serviceForm.contact,
              phone: this.serviceForm.phone,
              title: this.serviceForm.title,
              needs: this.serviceForm.needs
            };
            api.Post("/enterprise/apply", params).then(res => {
              console.log(res);
              if (res["suc"] == true) {
                this.$message('服务需求发布成功');
              } else {
                this.$message(res["msg"]);
              }
            });
          } else {
            console.log("发布难题失败!");
            return false;
          }
        });
      },
      consultForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            var params = {
              businessId: this.cosnultForm.businessId,
              enterprise: this.cosnultForm.enterprise,
              contact: this.cosnultForm.contact,
              phone: this.cosnultForm.phone,
              title: this.cosnultForm.title,
              content: this.cosnultForm.content,
              product: this.cosnultForm.product,
              mentorId: 0
            };
            api.Post("/consult", params).then(res => {
              console.log(res);
              if (res["suc"] == true) {
                this.$message('服务需求发布成功');
              } else {
                this.$message(res["msg"]);
              }
            });
          } else {
            console.log("发布难题失败!");
            return false;
          }
        });
      },
      change: function() {
        console.log(this.cosnultForm.businessId)
      },
      getServiceClass() { //发布需求分类
        api.Get("/dict/service").then(res => {
          this.category = res;
        });
      },
      getConsultClass() { //发布难题分类
        api.Get("/dict/consult").then(res => {
          this.category = res;
        });
      },
    }
  };
</script>
