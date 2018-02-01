<template>
    <div class="login">
        <div class="container">
            <div class="login_wrap">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-form :model="forgetForm" :rules="forgetRules" ref="forgetForm" label-width="80px" class="login_form forget_form">
                            <div v-show="!nextFlag">
                                <el-form-item class="tc f18 b">找回密码</el-form-item>
                                <el-form-item label="手机号码:">
                                    <el-input placeholder="请输入手机号码" v-model="forgetForm.phone" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-row :gutter="10">
                                    <el-col :xs="18" :sm="18" :md="18" :lg="18">
                                        <el-form-item label="验证码:">
                                            <el-input placeholder="请输入短信验证码" v-model="forgetForm.captcha" auto-complete="off"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                        <el-button type="primary" class="yz" @click="sendCaptcha" v-show="show" :disabled="!show">获取验证码</el-button>
                                        <el-button style="border-bottom:1px solid #c4c4c4;" type="primary" class="yz" v-show="!show" :disabled="!show">{{count}}s</el-button>
                                    </el-col>
                                </el-row>
                                <el-form-item class="loginBtn">
                                    <el-button type="primary" @click="nextStep">下一步</el-button>
                                    <router-link to="/login" class="r f12">返回登录</router-link>
                                </el-form-item>
                            </div>
                            <div v-show="nextFlag">
                                <el-form-item class="tc f18 b">找回密码</el-form-item>
                                <el-form-item label="新密码:">
                                    <el-input type="password" placeholder="请输入新密码" v-model="forgetForm.pass" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="确认新密码:">
                                    <el-input type="password" placeholder="请确认新密码" v-model="forgetForm.checkPass" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="loginBtn">
                                    <el-button type="primary" @click="resetPass('forgetForm')">确认</el-button>
                                    <router-link to="/login" class="r f12">返回登录</router-link>
                                </el-form-item>
                            </div>
                        </el-form>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../axios/api.js'
    const TIME_COUNT = 60;
    export default {
        data() {
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
                    if (this.forgetForm.checkPass !== "") {
                        this.$refs.forgetForm.validateField("checkPass");
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                let re = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/;
                if (value === "" || !re.test(value) || value.length < 6 || value.length > 16) {
                    callback(new Error("密码长度为6-16位，可由字母和数字组成，区分大小写"));
                } else if (value !== this.forgetForm.pass) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            return {
                show: true,
                count: '',
                timer: null,
                nextFlag:false,
                forgetForm: {
                    captcha: "",
                    pass: "",
                    checkPass: ""
                },
                forgetRules: {
                    phone: [{
                        required: true,
                        validator: validatePhone,
                        message: '请输入正确手机号',
                        trigger: 'blur'
                    }],
                    pass: [{
                            required: true,
                            validator: validatePass,
                            trigger: "blur"
                        }
                    ],
                    checkPass: [{
                        required: true,
                        validator: validatePass2,
                        trigger: "blur"
                    }]
                }
            }
        },
        methods: {
            sendCaptcha() {
                let re = /^1[34578]\d{9}$/;
                let tel = this.forgetForm.phone;
                if (this.forgetForm.phone === "" || !re.test(tel) || tel.length < 11) {
                    this.$message('请输入正确手机号');
                    return false;
                }
                let url = '/pub/captcha/' + tel;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
                api.Post(url, {})
                    .then(res => {
                       if(res['suc'] == true) {
                            this.$message('短信已发送到您手机');
                        } else if(res['suc'] == false) {
                            this.$message(res['msg']);
                        }
                    });
            },
            nextStep() {
                let re = /^1[34578]\d{9}$/;
                let tel = this.forgetForm.phone;
                let captcha = this.forgetForm.captcha;
                if (this.forgetForm.phone === "" || !re.test(tel) || tel.length < 11) {
                    this.$message('请输入正确手机号');
                    return false;
                }
                if (captcha === "") {
                    this.$message('请输入手机验证码');
                    return false;
                }
                this.nextFlag = true;
            },
            resetPass(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var params = {
                            "phone": this.forgetForm.phone,
                            "captcha": this.forgetForm.captcha,
                            "password": this.forgetForm.pass
                        }
                        api.Post('/pub/sign/reset', params)
                            .then(res => {
                                console.log(res);
                                if (res["suc"] == true) {
                                    this.$message("修改密码成功");
                                    let redirect = decodeURIComponent('/login');
                                    this.$router.push({
                                        path: redirect
                                    })
                                    // window.location.reload();
                                }
                                if (res["suc"] == false) {
                                    this.$message(res['msg']);
                                }
                            });
                    } else {
                        return false;
                    }
                });
            },
        }
    }
</script>
