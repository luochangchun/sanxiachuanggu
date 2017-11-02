<template>
    <div>
        <h1 class="f16 b">密码设置</h1>
        <el-form :model="personalForm" :rules="personalRules" ref="personalForm" label-width="120px" class="settingPassword_form">
            <el-form-item label="用户名:">
                <p>{{nickName}}</p>
            </el-form-item>
            <el-form-item label="旧密码:" prop="oldPass">
                <el-input type="password" placeholder="请输入输入旧密码" v-model="personalForm.oldPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码:" prop="pass">
                <el-input type="password" placeholder="请输入输入新密码" v-model="personalForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="checkPass">
                <el-input type="password" placeholder="确认密码必须和新密码一致" v-model="personalForm.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="passStting('personalForm')">完成修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import api from "../../axios/api.js";
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      let re = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/;
      if (
        value === "" ||
        !re.test(value) ||
        value.length < 6 ||
        value.length > 16
      ) {
        callback(new Error("密码长度为6-16位，可由字母和数字组成，区分大小写"));
      } else {
        if (this.personalForm.checkPass !== "") {
          this.$refs.personalForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      let re = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/;
      if (
        value === "" ||
        !re.test(value) ||
        value.length < 6 ||
        value.length > 16
      ) {
        callback(new Error("密码长度为6-16位，可由字母和数字组成，区分大小写"));
      } else if (value !== this.personalForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      nickName:'',
      personalForm: {
        oldPass: "",
        pass: "",
        checkPass: ""
      },
      personalRules: {
          oldPass: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur"
          }
        ],
        pass: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur"
          }
        ],
        checkPass: [
          {
            required: true,
            validator: validatePass2,
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
      let userInfo=api.GetCookie("userInfo");
      let user=JSON.parse(userInfo);
      this.nickName = user['data']['nickname'];
  },
  methods: {
    // 个人注册
    passStting(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let userId = window.localStorage.getItem('userId');
          var params = {
            id: userId,
            oldPass: this.personalForm.oldPass,
            newPass: this.personalForm.pass
          };
          let url='/account/modify';
          api.Put(url, params).then(res => {
            if (res["succ"] == true) {
              alert("修改成功");
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
