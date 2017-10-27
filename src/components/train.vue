<template>
    <div>
        <el-row :gutter="10"style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
            <el-col :lg="10" :md="10" :sm="10" :xs="10" :offset="7" style="background-color:#fff;padding:30px 25px 15px 0">
                <el-form :model="trainForm" :rules="trainRules" ref="trainForm" label-width="100px" class="demo-ruleForm">

                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="trainForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="trainForm.phone"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button @click="submitForm('ruleForm')" style="background-color: #f48100;border:none;color:#fff;">确定</el-button>
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
			//输入电话号码
			let validatePhone = (rule, value, callback) => {
				let re = /^1[34578]\d{9}$/;
				if (value === "" || !re.test(value) || value.length < 11) {
					callback(new Error("请输入正确手机号！"));
				} else {
					callback();
				}
			};
			let validateName = (rule, value, callback) => {
				let n = /^[\u4e00-\u9fa5]+$/;
				if (value === "" || !re.test(value) || value.length > 4) {
					callback(new Error("请输入正确姓名！"));
				} else {
					callback();
				}
			};
			return {
				trainForm: {
					phone: '',
                    name: ''
                },
				trainRules: {
					phone: [{
                        required: true,
                        validator: validatePhone,
                        message: '请输入正确手机号',
                        trigger: 'blur'
                }],
                    name: [{
						required: true,
						validator: validatePhone,
						message: '请输入正确姓名',
						trigger: 'blur'
                    }],
            }
		}
	},
        methods: {

		}
	}

//			return {
//				ruleForm: {
//					name: '',
//					number: '',
//
//				},
//				rules: {
//					name: [
//						{ required: true, message: '请输入姓名', trigger: 'blur' }
//					],
//					number: [
//						{ required: true, message: '请输入手机号', trigger: 'blur' }
//					],
//				}
//			};
//		},
//		methods: {
//			submitForm(formName) {
//				this.$refs[formName].validate((valid) => {
//					if (valid) {
//						alert('submit!');
//					} else {
//						console.log('error submit!!');
//						return false;
//					}
//				});
//			},
//		}
//	}
</script>

<style>

</style>