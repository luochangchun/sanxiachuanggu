<template>
    <div>
        <el-row :gutter="10"style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
            <el-col :lg="12" :md="12" :sm="12" :xs="12" :offset="6" style="background-color:#fff;padding:30px 25px 15px 0">
                <el-form :model="problemForm" :rules="problemRules" ref="trainForm" label-width="200px" class="demo-ruleForm">
                    <el-form-item label="行业类别" prop="classifyId">
                        <el-select v-model="problemForm.businessId">
                            <el-option label="类别一" value="shanghai"></el-option>
                            <el-option label="类别二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="难题及需求标题" prop="title">
                        <el-input v-model="problemForm.title" placeholder="请输入你的技术难题标题"></el-input>
                    </el-form-item>

                    <el-form-item label="难题及需求描述" prop="mentorId">
                        <el-input type="textarea" v-model="problemForm.mentorId"placeholder="请描述你的技术难题"></el-input>
                    </el-form-item>

                    <el-form-item label="企业名称" prop="enterprise">
                        <el-input v-model="problemForm.enterprise" placeholder="请输入企业名称"></el-input>
                    </el-form-item>

                    <el-form-item label="联系人" prop="contact">
                        <el-input v-model="problemForm.contact" placeholder="请输入联系人姓名"></el-input>
                    </el-form-item>

                    <el-form-item label="产品与项目" prop="product">
                        <el-input type="textarea" v-model="problemForm.product"placeholder="请输入企业项目与产品"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="problemForm.phone" placeholder="请输入联系人手机号码"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button @click="publishForm('problemForm')" style="background-color: #f48100;border:none;color:#fff;">发布</el-button>
                        <el-button @click="resetForm('problemForm')">取消</el-button>
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
				let re = /^1[34578]\d{9}$/;
				if (value === "" || !re.test(value) || value.length < 11) {
					callback(new Error("请输入正确手机号！"));
				} else {
					callback();
				}
			};
			return {
				problemForm: {
					businessId: '',//需求类别
					title: '',//难题及需求标题
					mentorId: '',//难题及需求描述
					enterprise: '',//企业名称
					contact: '',//联系人姓名
					product: '',//产品与项目
					phone: ''//联系电话
				},
				problemRules: {
					businessId: [{
						required: true,
						message: '请选择需求类别',
						trigger: 'change'
					}],
					title: [{
						required: true,
						message: '请输入难题及需求标题',
						trigger: 'blur'
					}],
					mentorId: [{
						required: true,
						message: '请输入难题及需求描述',
						trigger: 'blur'
					}],
					enterprise: [{
						required: true,
						message: '请输入企业名称',
						trigger: 'blur'
                    }],
					contact: [{
						required: true,
						validator: validateContact,
						message: '请输入联系人姓名',
						trigger: 'blur'
					}],
					product: [{
						required: true,
						message: '请输入产品与项目',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						validator: validatePhone,
						message: '请输入手机号',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			publishForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						var params = {
							"businessId": this.problemForm.classifyId,
							"title": this.problemForm.title,
							"mentorId": this.problemForm.mentorId,
							"enterprise": this.problemForm.enterprise,
                            "contact": this.problemForm.contact,
							"product": this.problemForm.product,
							"phone": this.problemForm.phone
						};
						api.Post('/consult', params)
							.then(res => {
								console.log(res);
								if(res['msg'] == null) {
									alert("发布难题成功!");
								}
							});
					} else {
						console.log('发布难题失败!');
						return false;
					}
				});
			},
		}
	}
</script>

<style>

</style>