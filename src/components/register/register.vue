<template>
    <div class="register">
        <div class="container" style="margin-top:100px;margin-bottom:200px;">
            <el-tabs v-model="form.activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="企业注册" name="first">
                    <div class="register_wrap">
                        <el-form :model="enterpriseForm" :rules="enterpriseRules" ref="enterpriseForm" label-width="120px" class="register_form">
                            <el-form-item label="组织机构代码:" prop="code">
                                <el-input type="text" v-model="enterpriseForm.code" placeholder="请输入组织结构代码" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="企业名称:" prop="name">
                                <el-input type="text" v-model="enterpriseForm.name" placeholder="请输入企业名称" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="联系人:" prop="contact">
                                <el-input type="text" v-model="enterpriseForm.contact" placeholder="请输入联系人姓名" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码:" prop="phone">
                                <el-input type="tel" v-model="enterpriseForm.phone" placeholder="请输入联系人手机号码" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-row :gutter="10">
                                <el-col :xs="18" :sm="18" :md="18" :lg="18">
                                    <el-form-item label="验证码:">
                                        <el-input placeholder="请输入短信验证码" v-model="enterpriseForm.captcha"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                    <el-button type="primary" @click="sendCaptcha">获取验证码</el-button>
                                </el-col>
                            </el-row>
                            <el-form-item label="登录密码:" prop="pass">
                                <el-input v-model="enterpriseForm.pass" type="password" placeholder="密码长度为6-16位，可由字母和数字组成，区分大小写" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码:" prop="checkPass">
                                <el-input v-model="enterpriseForm.checkPass" type="password" placeholder="确认密码必须和登录密码一致" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="enterpriseRegister('enterpriseForm')">立即注册</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="个人注册" name="second">
                    <div class="register_wrap">
                        <el-form :model="personalForm" :rules="personalRules" ref="personalForm" label-width="120px" class="register_form">
                            <el-form-item label="手机号码:" prop="phone">
                                <el-input type="tel" placeholder="请输入手机号码" v-model="personalForm.phone" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-row :gutter="10">
                                <el-col :xs="18" :sm="18" :md="18" :lg="18">
                                    <el-form-item label="验证码:">
                                        <el-input placeholder="请输入短信验证码" v-model="personalForm.captcha" auto-complete="off"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="8" :sm="6" :md="6" :lg="6">
                                    <el-button type="primary" @click="sendSingleCaptcha">获取验证码</el-button>
                                </el-col>
                            </el-row>
                            <el-form-item label="登录密码:" prop="pass">
                                <el-input type="password" placeholder="密码长度为6-16位，可由字母和数字组成，区分大小写" v-model="personalForm.pass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码:" prop="checkPass">
                                <el-input type="password" placeholder="确认密码必须和登录密码一致" v-model="personalForm.checkPass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="personalRegister('personalForm')">立即注册</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-tab-pane>
            </el-tabs>
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
                    if (this.personalForm.checkPass !== "") {
                        this.$refs.personalForm.validateField("checkPass");
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                let re = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/;
                if (value === "" || !re.test(value) || value.length < 6 || value.length > 16) {
                    callback(new Error("密码长度为6-16位，可由字母和数字组成，区分大小写"));
                } else if (value !== this.personalForm.pass) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            //企业用户自定义正则验证
            let validateCode = (rule, value, callback) => {
                let re = /^[0-9A-Z]{18}$/;
                if (value === "" || !re.test(value)) {
                    callback(new Error("请输入正确的机构代码！"));
                } else {
                    callback();
                }
            };
            let validateName = (rule, value, callback) => {
                let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
                if (value === "" || !re.test(value) || value.length < 2 || value.length > 5) {
                    callback(new Error("请输入企业名称!"));
                } else {
                    callback();
                }
            };
            let validateContact = (rule, value, callback) => {
                let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
                if (value === "" || !re.test(value) || value.length < 2 || value.length > 5) {
                    callback(new Error("请输入联系人姓名！"));
                } else {
                    callback();
                }
            };
            let validatePass_enterprise = (rule, value, callback) => {
                let re = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/;
                if (value === "" || !re.test(value) || value.length < 6 || value.length > 16) {
                    callback(new Error("密码长度为6-16位，可由字母和数字组成，区分大小写"));
                } else {
                    if (this.enterpriseForm.checkPass !== "") {
                        this.$refs.enterpriseForm.validateField("checkPass");
                    }
                    callback();
                }
            };
            let validateCheckPass_enterprise = (rule, value, callback) => {
                let re = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/;
                if (value === "" || !re.test(value) || value.length < 6 || value.length > 16) {
                    callback(new Error("密码长度为6-16位，可由字母和数字组成，区分大小写"));
                } else if (value !== this.enterpriseForm.pass) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    activeName2: "first"
                },
                personalForm: {
                    phone: "",
                    captcha: "",
                    pass: "",
                    checkPass: ""
                },
                enterpriseForm: {
                    code: "",
                    contact: "",
                    name: "",
                    phone: "",
                    captcha: "",
                    pass: "",
                    checkPass: ""
                },
                personalRules: {
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
                        // {
                        //     pattern: /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\`\~\-\=\,\.\;\:\<\>\?\|]{6,16}$/,
                        //     message: '密码长度为6-16位，可由字母和数字组成，区分大小写'
                        // }
                    ],
                    checkPass: [{
                        required: true,
                        validator: validatePass2,
                        trigger: "blur"
                    }]
                },
                enterpriseRules: {
                    code: [{
                        required: true,
                        validator: validateCode,
                        message: '请输入机构代码',
                        trigger: 'blur'
                    }],
                    name: [{
                        required: true,
                        validator: validateName,
                        message: '请输入企业名称',
                        trigger: 'blur'
                    }],
                    contact: [{
                        required: true,
                        validator: validateContact,
                        message: '请输入联系人姓名！',
                        trigger: 'blur'
                    }],
                    phone: [{
                        required: true,
                        validator: validatePhone,
                        message: '请输入正确手机号',
                        trigger: 'blur'
                    }],
                    pass: [{
                        required: true,
                        validator: validatePass_enterprise,
                        trigger: "blur"
                    }],
                    checkPass: [{
                        required: true,
                        validator: validateCheckPass_enterprise,
                        trigger: "blur"
                    }]
                }
            };
        },
        methods: {
            handleClick(tab, event) {
                // console.log(tab, event);
            },
            sendSingleCaptcha() {
                let re = /^1[34578]\d{9}$/;
                let tel = this.personalForm.phone;
                if (this.personalForm.phone === "" || !re.test(tel) || tel.length < 11) {
                    alert('请输入正确手机号');
                    return false;
                }
                let url = '/pub/captcha/' + tel
                api.Post(url, {})
                    .then(res => {
                        console.log(res);
                        alert(res.msg);
                    });
            },
            sendCaptcha() {
                let re = /^1[34578]\d{9}$/;
                let tel = this.enterpriseForm.phone;
                if (this.enterpriseForm.phone === "" || !re.test(tel) || tel.length < 11) {
                    alert('请输入正确手机号');
                    return false;
                }
                let url = '/pub/captcha/' + tel
                api.Post(url, {})
                    .then(res => {
                        console.log(res);
                        alert(res.msg);
                    });
            },
            // 个人注册
            personalRegister(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var params = {
                            "phone": this.personalForm.phone,
                            "captcha": this.personalForm.captcha,
                            "password": this.personalForm.pass
                        }
                        api.Post('/pub/sign/personal', params)
                            .then(res => {
                                console.log(res);
                                if (res["suc"] == true) {
                                    this.$message("注册成功");
                                    let redirect = decodeURIComponent('/index');
                                    this.$router.push({
                                        path: redirect
                                    })
                                    window.location.reload();
                                }
                                if (res["suc"] == false) {
                                    this.$message(res['msg']);
                                }
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // 企业注册
            enterpriseRegister(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var params = {
                            "code": this.enterpriseForm.code,
                            "name": this.enterpriseForm.name,
                            "contact": this.enterpriseForm.contact,
                            "phone": this.enterpriseForm.phone,
                            "captcha": this.enterpriseForm.captcha,
                            "password": this.enterpriseForm.pass
                        }
                        api.Post('/pub/sign/enterprise', params)
                            .then(res => {
                                console.log(res);
                                if (res["suc"] == true) {
                                    this.$message("注册成功");
                                    let redirect = decodeURIComponent('/index');
                                    this.$router.push({
                                        path: redirect
                                    })
                                    window.location.reload();
                                }
                                if (res["suc"] == false) {
                                    this.$message(res['msg']);
                                }
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    };
</script>
