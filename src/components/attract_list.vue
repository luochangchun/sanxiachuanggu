<template>
  <div>
    <el-row :gutter="0" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
      <el-col :lg="14" :md="10" :sm="10" :xs="10" :offset="5">
        <el-form :model="tenancyForm" :rules="tenancyRules" ref="tenancyForm" label-width="120px" class="tenancyForm">
          <el-form-item class="tc f18 b">发布{{typeFlag}}信息</el-form-item>
          <el-form-item label="标题" prop="title">
            <el-input type="text" v-model="tenancyForm.title"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contact">
            <el-input type="text" v-model="tenancyForm.contact"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input type="tel" v-model="tenancyForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="区域" prop="district">
            <el-input type="text" v-model="tenancyForm.district"></el-input>
          </el-form-item>
          <el-form-item label="楼盘名称" prop="building">
            <el-input type="text" v-model="tenancyForm.building"></el-input>
          </el-form-item>
          <el-form-item label="楼盘类型" prop="buildingType">
            <el-select v-model="tenancyForm.buildingType">
              <el-option :label="item['label']" :value="item['value']" v-for="(item, index) in options" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="环境图片" v-if="typeFlag == '招商'">
            <el-upload :headers="headers" :data="upLoadData" class="upload-demo" ref="upload" action="http://192.168.11.222/servant/file/batch" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :file-list="fileList">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="面积（平米）" prop="area">
            <el-input type="number" v-model="tenancyForm.area"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input type="text" v-model="tenancyForm.address"></el-input>
          </el-form-item>
          <el-form-item label="价格" prop="area">
            <el-input type="number" v-model="tenancyForm.price"></el-input>
          </el-form-item>
          <el-form-item label="单位" prop="unit">
            <el-select v-model="tenancyForm.unit">
              <el-option :label="item['label']" :value="item['value']" v-for="(item, index) in units" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否工位租赁" prop="cubicle">
            <el-radio-group v-model="tenancyForm.cubicle">
              <el-radio label="true">是</el-radio>
              <el-radio label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="编辑文章" prop="content">
            <vue-editor v-model="tenancyForm.content"></vue-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('tenancyForm')">发布</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .info {
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>

<script>
  import {
    VueEditor
  } from "vue2-editor";
  import api from "../axios/api.js";
  export default {
    components: {
      VueEditor
    },
    data() {
      let validatePhone = (rule, value, callback) => {
        let re = /(^1[34578]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)/;
        if (value === "" || !re.test(value) || value.length < 7) {
          console.log(value);
          callback(new Error("请输入正确联系方式！"));
        } else {
          callback();
        }
      };
      let validateName = (rule, value, callback) => {
        let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
        if (
          value === "" ||
          !re.test(value) ||
          value.length < 2 ||
          value.length > 5
        ) {
          callback(new Error("请输入联系人姓名"));
        } else {
          callback();
        }
      };
      return {
        upLoadData: {
          guid: null
        },
        fileList: [],
        typeFlag: "",
        htmlForEditor: null,
        form: {},
        options: [{
            value: "写字楼",
            label: "写字楼"
          },
          {
            value: "厂房",
            label: "厂房"
          }
        ],
        units: [{
            value: "元/平米/天",
            label: "元/平米/天"
          },
          {
            value: "元/平米/月",
            label: "元/平米/月"
          },
          {
            value: "元/个/天",
            label: "元/个/天"
          },
          {
            value: "元/个/月",
            label: "元/个/月"
          },
          {
            value: "元/月",
            label: "元/月"
          }
        ],
        tenancyForm: {
          title: "",
          phone: "",
          building: "",
          buildingType: "",
          area: "",
          address: "",
          price: "",
          unit: "",
          cubicle: "",
          content: ""
        },
        tenancyRules: {
          title: [{
            required: true,
            message: "请输入标题",
            trigger: "blur"
          },
          { min: 1, max: 80, message: '最多 80 个字符', trigger: 'blur' }],
          contact: [{
            required: true,
            validator: validateName,
            message: "请输入联系人",
            trigger: "blur"
          },
          { min: 1, max: 10, message: '最多 10 个字符', trigger: 'blur' }],
          phone: [{
            required: true,
            validator: validatePhone,
            message: "请输入正确联系方式",
            trigger: "blur"
          }],
          building: [{
            required: true,
            message: "请输入楼盘名称",
            trigger: "blur"
          },
          { min: 1, max: 30, message: '最多 30 个字符', trigger: 'blur' }],
          district: [{
            // required: true,
            message: "请输入求租区域",
            trigger: "blur"
          },
          { min: 1, max: 45, message: '最多 45 个字符', trigger: 'blur' }],
          area: [{
            required: true,
            message: "请输入面积",
            trigger: "blur"
          },
          { min: 1, max: 30, message: '最多 30 个字符', trigger: 'blur' }],
          address: [{
            required: true,
            message: "请输入地址/地段",
            trigger: "blur"
          },
          { min: 1, max: 100, message: '最多 100 个字符', trigger: 'blur' }],
          price: [{
            required: true,
            message: "请输入每平米价格",
            trigger: "blur"
          },
          { min: 1, max: 30, message: '最多 30 个字符', trigger: 'blur' }],
          unit: [{
            required: true,
            message: "请输入单位",
            trigger: "blur"
          }],
          cubicle: [{
            // required: true,
            message: "请选择工位是否能租赁",
            trigger: "blur"
          }],
          content: [{
            required: true,
            message: "请输入简介",
            trigger: "blur"
          }]
        }
      };
    },
    created() {
      console.log(this.$route.params.type);
      if (this.$route.params.type == "1") {
        this.typeFlag = "招商";
      } else if (this.$route.params.type == "2") {
        this.typeFlag = "求租";
      }
    },

    computed: {
      headers() {
        let userinfoStr = window.localStorage.getItem("userinfo");
        if (userinfoStr) {
          let user = JSON.parse(userinfoStr);
          return {
            Authorization: "Bearer " + user["msg"]
          };
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        let fileId = file["response"]["data"]["id"];
        let url = "/file/" + fileId;
        api.Delete(url, {
          id: fileId
        }).then(res => {});
      },
      handlePreview(fileList) {
        console.log(fileList);
      },
      handleAvatarSuccess(res, file) {
        console.log(res["data"]["guid"]);
        this.upLoadData["guid"] = res["data"]["guid"];
      },
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            let url = "/qb/tenancy/apply";
            var params = {
              categoryId: this.$route.params.categoryId,
              type: this.$route.params.type,
              contact: this.tenancyForm.contact,
              phone: this.tenancyForm.phone,
              district: this.tenancyForm.district,
              building: this.tenancyForm.building,
              buildingType: this.tenancyForm.buildingType,
              area: this.tenancyForm.area,
              address: this.tenancyForm.address,
              price: this.tenancyForm.price,
              unit: this.tenancyForm.unit,
              cubicle: this.tenancyForm.cubicle,
              detail: {
                title: this.tenancyForm.title,
                content: this.tenancyForm.content
              },
              photos: this.upLoadData["guid"]
            };
            api.Post("/qb/tenancy/apply", params).then(res => {
              console.log(res);
              if (res["suc"] == true) {
                this.$confirm("提交成功", "提示", { 
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "success"
                  })
                  .then(() => {
                    window.history.go(-1);
                  })
                  .catch(() => {
                    //点击取消
                  });
              } else {
                this.$message(res["msg"]);
              }
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      watch: {
        $route(to, from) {
          if (this.$route.params.type == "1") {
            this.typeFlag = "招商";
          } else if (this.$route.params.type == "2") {
            this.typeFlag = "求租";
          }
        }
      }
    }
  };
</script>

<style>
  .tenancyForm {
    width: 600px;
    background-color: #fff;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
  }
  .tenancyForm .tc {
    color: #06affe;
    border-bottom: 2px solid #06affe;
  }
  .tenancyForm .tc .el-form-item__content {
    margin-left: 0 !important;
  }
  h2 {
    color: #20a0ff;
    font-size: 16px;
    font-weight: 600;
    margin: 20px 10px;
  }
  .line {
    text-align: center;
  }

</style>