<template>
	<div>
		<el-row :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
			<el-col :lg="10" :md="10" :sm="10" :xs="10" :offset="7" style="background-color:#fff;padding:30px 25px 15px 0">
				<el-form :model="trainForm" :rules="trainRules" ref="trainForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="姓名" prop="name">
						<el-input v-model="trainForm.name" placeholder="请输入联系人姓名"></el-input>
					</el-form-item>
					<el-form-item label="联系方式" prop="phone">
						<el-input v-model="trainForm.phone" placeholder="请输入联系方式"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button @click="submitForm('trainForm')" style="background-color: #f48100;border:none;color:#fff;">确定</el-button>
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
				let re = /(^1[34578]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)/;
				if (value === "" || !re.test(value) || value.length < 7) {
					callback(new Error("请输入联系方式！"));
				} else {
					callback();
				}
			};
			//输入姓名
			let validateName = (rule, value, callback) => {
				let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
				if (value === "" || !re.test(value) || value.length < 2 || value.length > 5) {
					callback(new Error("请输入联系人姓名！"));
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
						message: '请输入联系方式',
						trigger: 'blur'
					}],
					name: [{
						required: true,
						message: '请输入正确姓名',
						trigger: 'blur'
					},{ min: 1, max: 10, message: '最多 10 个字符', trigger: 'blur' }],
				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					let id = this.$route.params.id;
					if (valid) {
						var params = {
							"activityId": id,
							"phone": this.trainForm.phone,
							"name": this.trainForm.name
						};
						api.Post('/activity/apply', params)
							.then(res => {
								console.log(res);
								if (res['suc'] == true) {
									// alert("报名成功");
									this.$confirm('报名成功', '提示', {
										confirmButtonText: '确定',
										cancelButtonText: '取消',
										type: 'success'
									}).then(() => {
										let id = this.$route.params.id;
										let redirect = decodeURIComponent('/train_detail/');
										this.$router.push({
											path: redirect + id
										})
									}).catch(() => {
										//点击取消
									});
								} else if (res['suc'] == false) {
									this.$message(res['msg']);
									let id = this.$route.params.id;
									let redirect = decodeURIComponent('/train_detail/');
									this.$router.push({
										path: redirect + id
									})
								}
							});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>