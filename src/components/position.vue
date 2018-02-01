<template>
	<div>
		<el-row :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
			<el-col :lg="10" :md="10" :sm="10" :xs="10" :offset="7" style="background-color:#fff;padding:30px 25px 15px 0">
				<el-form :model="employForm" :rules="employRules" ref=employForm " label-width="100px " class="demo-ruleForm ">
	                    <el-form-item label="姓名 " prop="name ">
	                        <el-input v-model="employForm.name "></el-input>
	                    </el-form-item>
	                    <el-form-item label="联系方式 " prop="phone ">
	                        <el-input v-model="employForm.phone "></el-input>
	                    </el-form-item>
	                    <el-form-item label="邮箱 " prop="email ">
	                        <el-input v-model="employForm.email "></el-input>
	                    </el-form-item>
	                    <el-form-item label="性别 " prop="gender " >
	                        <el-radio-group v-model="employForm.gender "style="width:50%; ">
	                            <el-radio label="女 "></el-radio>
	                            <el-radio label="男 "></el-radio>
	                            <el-radio label="无 "></el-radio>
	                        </el-radio-group>
	                        <!--<el-button type="file " style="background-color: #ddd;border:none;color:#fff; ">简历上传</el-button>-->
	                    </el-form-item>
	                    <el-form-item>
	                        <el-button @click="empForm( 'employForm') " style="background-color: #f48100;border:none;color:#fff; ">提交申请</el-button>
	                        <el-button @click="resetForm( 'employForm') ">取消</el-button>
	                    </el-form-item>
	                </el-form>
	            </el-col>
	        </el-row>
	    </div>
</template>

<script>
	import api from '../axios/api.js'
	export default {
		data() {
			//联系方式
			let validatePhone = (rule, value, callback) => {
				let re = /(^1[34578]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)/;
				if (value === "" || !re.test(value) || value.length < 7) {
					callback(new Error("请输入正确联系方式！"));
				} else {
					callback();
				}
			};
			//姓名
			let validateName = (rule, value, callback) => {
				let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
				if (value === "" || !re.test(value) || value.length < 2 || value.length > 5) {
					callback(new Error("请输入联系人姓名！"));
				} else {
					callback();
				}
			};
			return {
				employForm: {
					name: '',
					phone: '',
					email: '',
					gender: '',
				},
				employRules: {
					name: [{
						required: true,
						validator: validateName,
						message: '请输入联系人姓名',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						validator: validatePhone,
						message: '请输入正确联系方式',
						trigger: 'blur'
					}],
					email: [{
						required: true,
						message: '请输入邮箱',
						trigger: 'blur'
					}],
					gender: [{
						required: true,
						message: '请选择性别',
						trigger: 'change'
					}]
				}
			};
		},
		methods: {
			empForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						//						let id = this.$route.params.id;
						var createTime = new Date();
						var createAt = Number(createTime);
						var params = {
							//							"incubatorId": id,
							"name": this.employForm.name,
							"phone": this.employForm.phone,
							"email": this.employForm.email,
							"gender": this.employForm.gender,
						}
						api.Post('/recruit/apply', params)
							.then(res => {
								if (res['suc'] == true) {
									this.$message('提交应聘申请成功！');
								} else if (res['suc'] == false) {
									this.$message('提交应聘申请失败！');
								}
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

<style>

</style>