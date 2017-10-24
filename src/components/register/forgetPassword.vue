<template>
    <div class="login">
        <div class="container">
            <div class="login_wrap">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-form label-width="80px" class="login_form forget_form">
                            <el-form-item class="tc f18 b">找回密码</el-form-item>
                            <el-form-item label="手机号码:">
                                <el-input placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-row :gutter="10">
                                <el-col :xs="18" :sm="18" :md="18" :lg="18">
                                    <el-form-item label="验证码:">
                                        <el-input placeholder="请输入短信验证码"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="6" :sm="6" :md="6" :lg="6">
                                    <el-button type="primary" class="yz">获取验证码</el-button>
                                </el-col>
                            </el-row>
                            <el-form-item class="loginBtn">
                                <el-button type="primary">下一步</el-button>
                                <router-link to="/login" class="r f12">返回登录</router-link>
                            </el-form-item>
                        </el-form>
                        <el-form label-width="120px" class="login_form forget_form"  v-show="false">
                            <el-form-item class="tc f18 b">找回密码</el-form-item>
                            <el-form-item label="新密码:">
                                <el-input placeholder="请输入新密码"></el-input>
                            </el-form-item>
                            <el-form-item label="确认新密码:">
                                <el-input placeholder="请确认新密码"></el-input>
                            </el-form-item>
                            <el-form-item class="loginBtn">
                                <el-button type="primary">确认</el-button>
                                <a href="#" class="r f12">返回登录</a>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
