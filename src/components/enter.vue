<template>
	<div>
		<el-row :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
			<div class="container">
				<el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#fff;padding:30px 25px 15px 0">
					<p class="tc b f20">孵化器入驻申请表</p>
				</el-col>
				<el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#fff;padding:0px 25px 15px 0">
					<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="enter-ruleForm">
						<el-form-item label="公司名称" prop="enterprise">
							<el-input type="text" v-model="ruleForm.enterprise"></el-input>
						</el-form-item>
						<el-form-item label="团队人数" prop="employees">
							<el-input type="number" v-model="ruleForm.employees"></el-input>
						</el-form-item>
						<el-form-item label="成立情况" prop="period">
							<el-radio-group v-model="ruleForm.period">
								<el-radio label="筹建"></el-radio>
								<el-radio label="初建"></el-radio>
								<el-radio label="2年以内"></el-radio>
								<el-radio label="2年以上"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="是否毕业3年内大学生" prop="fresh">
							<el-radio-group v-model="ruleForm.fresh">
								<el-radio label="true">是</el-radio>
								<el-radio label="false">否</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="公司经营范围" prop="scope">
							<el-input type="text" v-model="ruleForm.scope"></el-input>
						</el-form-item>
						<el-form-item label="所需办公面积/工位" prop="area">
							<el-input type="number" v-model="ruleForm.area"></el-input>
						</el-form-item>
						<el-form-item label="联系人" prop="contact">
							<el-input type="text" v-model="ruleForm.contact"></el-input>
						</el-form-item>
						<el-form-item label="联系电话" prop="phone">
							<el-input type="tel" v-model="ruleForm.phone"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button @click="submitForm('ruleForm')" style="background-color: #f48100;border:none;color:#fff;">提交申请</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</div>
		</el-row>
	</div>
</template>

<script>
import api from "../axios/api.js";
export default {
  data() {
    let validatePhone = (rule, value, callback) => {
      let re = /(^1[34578]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)/;
      if (value === "" || !re.test(value) || value.length < 7) {
        callback(new Error("请输入正确联系方式！"));
      } else {
        callback();
      }
    };
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
    return {
      ruleForm: {
        enterprise: "", //企业名称
        scope: "", //经营范围
        period: "", //成立情况
        fresh: "", //是否三年内毕业大学生
        employees: "", //团队人数
        area: "", //所需办公面积/工位数
        contact: "", //联系人姓名
        phone: "" //联系人联系方式
      },
      rules: {
        enterprise: [
          {
            required: true,
            message: "请填写公司名称",
            trigger: "blur"
          }
        ],
        scope: [
          {
            required: true,
            message: "请填写公司经营范围",
            trigger: "blur"
          }
        ],
        period: [
          {
            required: true,
            message: "请填写成立情况",
            trigger: "blur"
          }
        ],
        fresh: [
          {
            required: true,
            message: "请选择是否三年内毕业大学生",
            trigger: "blur"
          }
        ],
        employees: [
          {
            required: true,
            message: "请输入团队人数",
            trigger: "blur"
          }
        ],
        area: [
          {
            required: true,
            message: "请输入所需办公面积/工位数",
            trigger: "blur"
          }
        ],
        contact: [
          {
            required: true,
            message: "请输入联系人姓名",
            validator: validateContact,
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            validator: validatePhone,
            message: "请输入正确联系方式",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let id = this.$route.params.id;
          var createTime = new Date();
          var createAt = Number(createTime);
          var params = {
            incubatorId: id,
            enterprise: this.ruleForm.enterprise,
            scope: this.ruleForm.scope,
            period: this.ruleForm.period,
            fresh: this.ruleForm.fresh,
            employees: this.ruleForm.employees,
            area: this.ruleForm.area,
            contact: this.ruleForm.contact,
            phone: this.ruleForm.phone,
            createAt: createAt
          };
          api.Post("/qb/apply", params).then(res => {
            if (res["suc"] == true) {
              this.$confirm("登录成功", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              })
                .then(() => {
                  let id = this.$route.params.id;
                  let redirect = decodeURIComponent("/incubators_details/");
                  this.$router.push({
                    path: redirect + id
                  });
                })
                .catch(() => {
                  //点击取消
                });
            } else if (res["suc"] == false) {
              alert(res["msg"]);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.enter-ruleForm {
  width: 440px;
  margin: 0 auto;
}
</style>