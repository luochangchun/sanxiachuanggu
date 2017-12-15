<template>
  <div>
    <el-row v-if="!problemFlag" :gutter="0" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
      <el-col :lg="12" :md="12" :sm="12" :xs="12" :offset="6" style="background-color:#fff;padding:30px 25px 15px 0">
        <h1 class="tc f18" style="color:#0089e3;margin-bottom:30px;">服务需求发布</h1>
        <el-form :model="serviceForm" :rules="serviceRules" ref="serviceForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="需求类别" prop="classifyId">
            <el-select v-model="serviceForm.classifyId">
              {{serviceForm.classifyId}}
              <el-option :label="item['value']" :value="item['id']" v-for="(item, index) in category" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="需求标题" prop="title">
            <el-input v-model="serviceForm.title" placeholder="请输入你的需求标题"></el-input>
          </el-form-item>
          <el-form-item label="需求描述" prop="needs">
            <el-input type="textarea" :rows="5" v-model="serviceForm.needs" placeholder="请输入你的需求描述（250字内）"></el-input>
          </el-form-item>
          <el-form-item label="企业名称" prop="enterprise">
            <el-input v-model="serviceForm.enterprise" placeholder="请输入企业名称"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contact">
            <el-input v-model="serviceForm.contact" placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="serviceForm.phone" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="publishForm('serviceForm')" style="background-color: #f48100;border:none;color:#fff;">发布</el-button>
            <el-button @click="resetForm('serviceForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row v-if="problemFlag" :gutter="0" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
      <el-col :lg="12" :md="12" :sm="12" :xs="12" :offset="6" style="background-color:#fff;padding:30px 25px 15px 0">
        <h1 class="tc f18" style="color:#0089e3;margin-bottom:30px;">企业技术难题及需求发布</h1>
        <el-form :model="cosnultForm" :rules="cosnultRules" ref="cosnultForm" label-width="200px" class="demo-ruleForm">
          <el-form-item label="难题类别" prop="classifyId">
            <el-select v-model="cosnultForm.classifyId">
              <el-option :label="item['value']" :value="item['id']" v-for="(item, index) in category" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难题及需求标题" prop="title">
            <el-input v-model="cosnultForm.title" placeholder="请输入你的技术难题标题"></el-input>
          </el-form-item>
          <el-form-item label="难题及需求描述" prop="content">
            <el-input type="textarea" :rows="5" v-model="cosnultForm.content" placeholder="请描述你的技术难题（250字内）"></el-input>
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
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="cosnultForm.phone" placeholder="请输入联系方式"></el-input>
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
    //联系方式
    let validatePhone = (rule, value, callback) => {
      let re = /(^1[34578]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)/;
      if (value === "" || !re.test(value) || value.length < 7) {
        console.log(value);
        callback(new Error("请输入正确联系方式！"));
      } else {
        callback();
      }
    };
    return {
      category: "",
      problemFlag: false,
      serviceForm: {
        classifyId: "", //需求类别
        title: "", //难题及需求标题
        mentorId: "", //难题及需求描述
        enterprise: "", //企业名称
        contact: "", //联系人姓名
        product: "", //产品与项目
        phone: "", //联系电话
        needs: "", //服务需求
      },
      serviceRules: {
        classifyId: [
          {
            required: true,
            type: "number",
            message: "请选择需求类别",
            trigger: "change"
          }
        ],
        title: [
          {
            required: true,
            message: "请输入难题及需求标题",
            trigger: "blur"
          }
        ],
        mentorId: [
          {
            required: true,
            message: "请输入难题及需求描述",
            trigger: "blur"
          }
        ],
        enterprise: [
          {
            required: true,
            message: "请输入企业名称",
            trigger: "blur"
          }
        ],
        contact: [
          {
            required: true,
            message: "请输入联系人姓名",
            trigger: "blur"
          },
          { min: 1, max: 10, message: '最多10个字符', trigger: 'blur' }
        ],
        needs: [
          {
            required: true,
            message: "请输入服务需求描述",
            trigger: "blur"
          },
          { min: 2, max: 250, message: '最多250个字符', trigger: 'blur' }
        ],
        product: [
          {
            required: true,
            message: "请输入产品与项目",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            validator: validatePhone,
            message: "请输入联系方式",
            trigger: "blur"
          }
        ]
      },
      cosnultForm: {
        classifyId: "", //需求类别
        title: "", //难题及需求标题
        mentorId: "", //难题及需求描述
        enterprise: "", //企业名称
        contact: "", //联系人姓名
        product: "", //产品与项目
        phone: "", //联系电话
        content: ""
      },
      cosnultRules: {
        classifyId: [
          {
            required: true,
            type: "number",
            message: "请选择难题类别",
            trigger: "change"
          }
        ],
        enterprise: [
          {
            required: true,
            message: "请输入企业名称",
            trigger: "blur"
          },
          { min: 1, max: 20, message: "最多 20 个字符", trigger: "blur" }
        ],
        contact: [
          {
            required: true,
            message: "请输入联系人姓名",
            trigger: "blur"
          },
          { min: 1, max: 10, message: "最多 10 个字符", trigger: "blur" }
        ],
        phone: [
          {
            required: true,
            validator: validatePhone,
            message: "请输入正确联系方式",
            trigger: "blur"
          }
        ],
        title: [
          {
            required: true,
            message: "请输入难题及需求标题",
            trigger: "blur"
          },
          { min: 1, max: 40, message: "最多 40 个字符", trigger: "blur" }
        ],
        content: [
          {
            required: true,
            message: "请输入咨询内容",
            trigger: "blur"
          },
          { min: 2, max: 250, message: '最多250个字符', trigger: 'blur' }
        ],
        product: [
          {
            // required: true,
            message: "请输入产品与项目",
            trigger: "blur"
          }
        ]
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
            classifyId: this.serviceForm.classifyId,
            enterprise: this.serviceForm.enterprise,
            contact: this.serviceForm.contact,
            phone: this.serviceForm.phone,
            title: this.serviceForm.title,
            needs: this.serviceForm.needs
          };
          api.Post("/enterprise/apply", params).then(res => {
            console.log(res);
            if (res["suc"] == true) {
              this.$message("服务需求发布成功");
              window.history.go(-1);
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
              this.$message("服务需求发布成功");
              window.history.go(-1);
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
    resetForm(formName) {
      window.history.go(-1);
    },
    change: function() {
      console.log(this.cosnultForm.businessId);
    },
    getServiceClass() {
      //发布需求分类
      api.Get("/dict/service").then(res => {
        this.category = res;
      });
    },
    getConsultClass() {
      //发布难题分类
      api.Get("/dict/consult").then(res => {
        this.category = res;
      });
    }
  }
};
</script>
