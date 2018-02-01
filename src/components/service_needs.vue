<template>
	<div>
		<el-row :gutter="10" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
			<el-col :lg="10" :md="10" :sm="10" :xs="10" :offset="7" style="background-color:#fff;padding:30px 25px 15px 0">
				<el-form :model="serviceNeedsForm" :rules="serviceNeedsRules" ref="trainForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="需求类别" prop="classifyId">
						<el-select v-model="serviceNeedsForm.classifyId">
							<el-option label="类别一" value="shanghai"></el-option>
							<el-option label="类别二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="需求标题" prop="title">
						<el-input v-model="serviceNeedsForm.title" placeholder="请输入你的需求标题"></el-input>
					</el-form-item>
					<el-form-item label="需求描述" prop="needs">
						<el-input type="textarea" v-model="serviceNeedsForm.needs" placeholder="请描述你的需求"></el-input>
					</el-form-item>
					<el-form-item label="企业名称" prop="enterprise">
						<el-input v-model="serviceNeedsForm.enterprise" placeholder="请输入企业名称"></el-input>
					</el-form-item>
					<el-form-item label="联系人" prop="contact">
						<el-input v-model="serviceNeedsForm.contact" placeholder="请输入联系人姓名"></el-input>
					</el-form-item>
					<el-form-item label="联系方式" prop="phone">
						<el-input v-model="serviceNeedsForm.phone" placeholder="请输入联系方式"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button @click="sureForm('serviceNeedsForm')" style="background-color: #f48100;border:none;color:#fff;">确定</el-button>
						<el-button @click="resetForm('serviceNeedsForm')">取消</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>


<script type="text/ecmascript-6">
	import api from '../axios/api.js'
	export default {
		data() {
			//企业名称
			//			let validateEnterprise = (rule, value, callback) => {
			//				let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
			//				if (value === "" || !re.test(value) || value.length < 2 || value.length > 5) {
			//					callback(new Error("请输入企业名称!"));
			//				} else {
			//					callback();
			//				}
			//			};
			//联系人姓名
			let validateContact = (rule, value, callback) => {
				let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
				if (value === "" || !re.test(value) || value.length < 2 || value.length > 5) {
					callback(new Error("请输入联系人姓名！"));
				} else {
					callback();
				}
			};
			//手机号
			let validatePhone = (rule, value, callback) => {
				let re = /(^1[34578]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)/;
				if (value === "" || !re.test(value) || value.length < 7) {
					callback(new Error("请输入联系方式！"));
				} else {
					callback();
				}
			};
			return {
				serviceNeedsForm: {
					classifyId: '', //需求类别
					title: '', //需求标题
					needs: '', //需求描述
					enterprise: '', //企业名称
					contact: '', //联系人姓名
					phone: '' //联系电话
				},
				serviceNeedsRules: {
					classifyId: [{
						required: true,
						message: '请选择需求类别',
						trigger: 'change'
					}],
					title: [{
						required: true,
						message: '请输入需求标题',
						trigger: 'blur'
					}],
					needs: [{
						required: true,
						message: '请输入需求描述',
						trigger: 'blur'
					}],
					contact: [{
						required: true,
						validator: validateContact,
						message: '请输入联系人姓名',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						validator: validatePhone,
						message: '请输入联系方式',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			sureForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						var params = {
							//							"classifyId": this.serviceNeedsForm.classifyId,
							//							"title": this.serviceNeedsForm.title,
							//							"needs": this.serviceNeedsForm.needs,
							"captcha": this.serviceNeedsForm.captcha,
							//							"enterprise": this.serviceNeedsForm.enterprise,
							"phone": this.serviceNeedsForm.phone
						};
						api.Post('/enterprise/apply', params)
							.then(res => {
								console.log(res);
								if (res['msg'] == null) {
									alert("发布需求成功");
								}
							});
					} else {
						console.log('发布需求失败!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>

</style>