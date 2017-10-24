<template>
    <div class="login">
        <div class="container">
            <div class="login_wrap">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-form label-width="90px" class="login_form" :model="loginForm" :rules="loginRules" ref="loginForm">
                            <el-form-item class="tc f18 b">账号登录</el-form-item>
                            <el-form-item label="手机号码:" prop="phone">
                                <el-input type="tel" v-model="loginForm.phone" auto-complete="off" placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-form-item label="登录密码:" prop="pass">
                                <el-input type="password" v-model="loginForm.pass" auto-complete="off" placeholder="密码长度为6-16位，可由字母和数字组成，区分大小写"></el-input>
                            </el-form-item>
                            <el-form-item class="loginBtn">
                                <el-button type="primary" @click="login('loginForm')">登录</el-button>
                                <a href="#" class="r f12">立即注册</a>
                                <a href="#" class="r f12">忘记密码&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../axios/api.js'
    export default {
        data() {
            // 个人用户注册
            let validatePhone = (rule, value, callback) => {
                let re = /^1[34578]\d{9}$/;
                if (value === "" || !re.test(value) || value.length < 11) {
                    callback(new Error("请输入正确手机号！"));
                } else {
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                let re = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/;
                if (value === "" || !re.test(value) || value.length < 6 || value.length > 16) {
                    callback(new Error("密码长度为6-16位，可由字母和数字组成，区分大小写"));
                } else {
                    callback();
                }
            };
            return {
                loginForm: {
                    phone: "",
                    pass: ""
                },
                loginRules: {
                    phone: [
                        {
                            required: true,
                            validator: validatePhone,
                            message: '请输入正确手机号',
                            trigger: 'blur'
                        }
                    ],
                    pass: [{
                            required: true,
                            validator: validatePass,
                            trigger: "blur"
                        }
                    ],  
                },
            }
        },
        methods: {
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var params = {
                            "phone": this.loginForm.phone,
                            "password": this.loginForm.pass
                        }
                        api.Post('/sign/in', params)
                            .then(res => {
                                alert(res.msg);
                                console.log(res);
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>
