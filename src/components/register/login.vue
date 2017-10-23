<template>
    <div class="login">
        <div class="container">
            <div class="login_wrap">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24">
                        <el-form label-width="80px" class="login_form">
                            <el-form-item class="tc f18 b">账号登录</el-form-item>
                            <el-form-item label="手机号码:">
                                <el-input placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-form-item label="登录密码:">
                                <el-input placeholder="密码长度为6-16位，可由字母和数字组成，区分大小写"></el-input>
                            </el-form-item>
                            <el-form-item class="loginBtn">
                                <el-button type="primary">登录</el-button>
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
//    loginData(){
//		this.axios.post(this.ajax_head+'http://192.168.11.222/apidocs/#/pub/post_pub_sign_in', {
//
//		})
//    }
</script>
