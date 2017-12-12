<template>
	<div>
		<el-row :gutter="0" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
			<div class="container min650">
				<el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#fff;padding:30px 25px 15px 0">
					<p class="tc b f20">发布融资项目</p>
				</el-col>
				<el-col :lg="24" :md="24" :sm="24" :xs="24" style="background-color:#fff;padding:0px 25px 15px 0">
					<el-form :model="applyForm" :rules="applyRules" ref="applyForm" label-width="140px" class="enter-ruleForm">
						<el-form-item label="创始人姓名" prop="founder">
							<el-input type="text" v-model="applyForm.founder"></el-input>
						</el-form-item>
						<el-form-item label="创始人出生日期" prop="birth">
							<el-date-picker v-model="applyForm.birth" type="date" placeholder="选择日期时间" @change="timeChage(applyForm.birth)">
							</el-date-picker>
						</el-form-item>
						<el-form-item label="学历" prop="edu">
							<el-select v-model="applyForm.edu">
								<el-option :label="item['value']" :value="item['index']" v-for="(item, index) in edus" :key="index"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="毕业院校" prop="graduate">
							<el-input type="text" v-model="applyForm.graduate"></el-input>
						</el-form-item>
						<el-form-item label="专业" prop="specialty">
							<el-input type="text" v-model="applyForm.specialty"></el-input>
						</el-form-item>
						<el-form-item label="创始人简介" prop="founderIntro">
							<el-input type="textarea" v-model="applyForm.founderIntro"></el-input>
						</el-form-item>
						<el-form-item label="行业类别" prop="businessId">
							<el-select v-model="applyForm.businessId">
								<el-option :label="item['value']" :value="item['id']" v-for="(item, index) in category" :key="index"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="项目名称" prop="name">
							<el-input type="text" v-model="applyForm.name"></el-input>
						</el-form-item>
						<el-form-item label="融资状态" prop="status">
							<el-radio-group v-model="applyForm.status">
								<el-radio label="1" :key='1'>未融资</el-radio>
								<el-radio label="2" :key='2'>天使轮</el-radio>
								<el-radio label="3" :key='3'>Pre-A或A轮</el-radio>
								<el-radio label="4" :key='4'>B轮和以上</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="已完成融资" prop="archived">
							<el-input type="number" v-model="applyForm.archived"></el-input>
						</el-form-item>
						<el-form-item label="融资目标" prop="financing">
							<el-input type="number" v-model="applyForm.financing"></el-input>
						</el-form-item>
						<el-form-item label="融资金额单位" prop="unit">
							<el-radio-group v-model="applyForm.unit">
								<el-radio label="万元" :key='1'></el-radio>
								<el-radio label="百万元" :key='2'></el-radio>
								<el-radio label="千万元" :key='3'></el-radio>
								<el-radio label="亿元" :key='4'></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="项目封面图片" prop="logo">
							<!-- <el-upload class="upload-demo" :headers="headers" action="http://www.sanxiachuanggu.com/servant/file" :on-success="handleAvatarSuccess" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
										<el-button size="small" type="primary">点击上传</el-button>
										<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
									</el-upload> -->
							<el-upload :headers="headers" class="avatar-uploader" action="http://www.sanxiachuanggu.com/servant/file" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
						</el-form-item>
						<el-form-item label="项目简介" prop="intro">
							<el-input type="textarea" v-model="applyForm.intro"></el-input>
						</el-form-item>
						<el-form-item label="团队规模" prop="scale">
							<el-input type="number" v-model="applyForm.scale"></el-input>
						</el-form-item>
						<el-form-item label="项目进度情况" prop="progress">
							<el-input type="textarea" v-model="applyForm.progress"></el-input>
						</el-form-item>
						<el-form-item label="项目说明" prop="what">
							<el-input type="textarea" v-model="applyForm.what"></el-input>
						</el-form-item>
						<el-form-item label="项目展示" prop="how">
							<el-input type="textarea" v-model="applyForm.how"></el-input>
						</el-form-item>
						<el-form-item label="投资理由" prop="why">
							<el-input type="textarea" v-model="applyForm.why"></el-input>
						</el-form-item>
						<el-form-item label="持股比例(%)" prop="ratio">
							<el-input type="number" v-model="applyForm.ratio"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button @click="submitForm('applyForm')" style="background-color: #f48100;border:none;color:#fff;">发布</el-button>
							<el-button @click="resetForm('applyForm')">取消</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</div>
		</el-row>
	</div>
</template>
<style scoped>
	.enter-ruleForm {
		width: 520px;
		margin: 0 auto;
	}
</style>
<script>
	import api from '../axios/api.js'
	export default {
		data() {
			let validateContact = (rule, value, callback) => {
				let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
				if (value === "" || !re.test(value) || value.length < 2 || value.length > 5) {
					callback(new Error("请输入联系人姓名！"));
				} else {
					callback();
				}
			};
			return {
				fileList2: [],
				category: "",
				logo: "",
				logoId: "",
				birth: "",
				imageUrl: "",
				edus: [{
						'index': '小学',
						'value': '小学'
					},
					{
						'index': '初中',
						'value': '初中'
					},
					{
						'index': '高中',
						'value': '高中'
					},
					{
						'index': '中专',
						'value': '中专'
					},
					{
						'index': '本科',
						'value': '本科'
					},
					{
						'index': '学士',
						'value': '学士'
					},
					{
						'index': '硕士研究生',
						'value': '硕士研究生'
					},
					{
						'index': '博士研究生',
						'value': '博士研究生'
					},
					{
						'index': '博士后',
						'value': '博士后'
					},
					{
						'index': '其他',
						'value': '其他'
					},
				],
				applyForm: {
					"founder": "", //创始人姓名
					"founderIntro": "", //创始人简介
					"birth": '', //创始人出生日期
					"businessId": "", //行业类别
					"status": "", //融资状态
					"financing": "", //融资目标金额
					"archived": "", //已完成融资金额
					"unit": "", //融资金额单位
					"name": "", //项目名称
					"intro": "", //项目名称
					"scale": "", //团队规模
					"progress": "", //项目进度情况
					"what": "", //项目说明
					"how": "", //项目展示
					"why": "", //投资理由
					"ratio": "", //持股比例
					"edu": "", //学历
					"graduate": "", //毕业院校
					"specialty": "", //专业
				},
				applyRules: {
					founder: [{
						required: true,
						message: '请填写创始人姓名',
						trigger: 'blur'
					},{ min: 1, max: 20, message: '最多 20 个字符', trigger: 'blur' }],
					founderIntro: [{
						required: true,
						message: '请填写创始人简介',
						trigger: 'blur'
					},{ min: 1, max: 250, message: '最多 250 个字符', trigger: 'blur' }],
					birth: [{
						type: 'date',
						required: true,
						message: '请选择创始人出生日期',
						trigger: 'change'
					}],
					name: [{
						required: true,
						message: '请填写项目名称',
						trigger: 'blur'
					},{ min: 1, max: 20, message: '最多 20 个字符', trigger: 'blur' }],
					businessId: [{
						type: 'number',
						required: true,
						message: '请选择行业类别',
						trigger: 'change'
					}],
					status: [{
						required: true,
						message: '请选择融资状态',
						trigger: 'change'
					}],
					financing: [{
						required: true,
						message: '请填写融资目标金额',
						trigger: 'blur'
					}],
					archived: [{
						required: true,
						message: '请填写已完成融资金额',
						trigger: 'blur'
					}],
					unit: [{
						required: true,
						message: '请填写融资金额单位',
						trigger: 'change'
					}],
					intro: [{
						required: true,
						message: '请填写项目简介',
						trigger: 'blur'
					},{ min: 1, max: 140, message: '最多 140 个字符', trigger: 'blur' }],
					scale: [{
						required: true,
						message: '请填写团队规模',
						trigger: 'blur'
					},{ min: 1, max: 45, message: '最多 45 个字符', trigger: 'blur' }],
					progress: [{
						required: true,
						message: '请填写项目进度情况',
						trigger: 'blur'
					},{ min: 1, max: 45, message: '最多 45 个字符', trigger: 'blur' }],
					what: [{
						required: true,
						message: '请填写项目说明',
						trigger: 'blur'
					}],
					how: [{
						required: true,
						message: '请填写项目展示',
						trigger: 'blur'
					}],
					why: [{
						required: true,
						message: '请填写投资理由',
						trigger: 'blur'
					}],
					radio: [{
						required: true,
						message: '请填写持股比例',
						trigger: 'blur'
					},{ min: 1, max: 3, message: '最多 3 个字符', trigger: 'blur' }],
					edu: [{
						required: true,
						message: '请填写学历',
						trigger: 'change'
					}],
					graduate: [{
						required: true,
						message: '请填写毕业院校',
						trigger: 'blur'
					},{ min: 1, max: 25, message: '最多 25 个字符', trigger: 'blur' }],
					specialty: [{
						required: true,
						message: '请填写专业',
						trigger: 'blur'
					},{ min: 1, max: 25, message: '最多 25 个字符', trigger: 'blur' }],
				}
			};
		},
		created() {
			this.getBusinessClass();
		},
		computed: {
			headers() {
				let userinfoStr = window.localStorage.getItem('userinfo');
				if (userinfoStr) {
					let user = JSON.parse(userinfoStr);
					return {
						'Authorization': 'Bearer ' + user['msg']
					}
				}
			}
		},
		methods: {
			timeChage(val) {
				console.log(val);
				let d = new Date(val);
				this.birth = d.getFullYear() + '.' + (d.getMonth()+1) + '.' + d.getDate();
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						let userinfo = JSON.parse(window.localStorage.getItem('userinfo'));
						let id = userinfo['data']['id'];
						var createTime = new Date();
						var createAt = Number(createTime);
						if(this.imageUrl == "") {
							this.$message("请上传项目封面");
							return false;
						}
						var params = {
							// "id": id,
							"status": this.applyForm.status,
							"financing": this.applyForm.financing,
							"archived": this.applyForm.archived,
							"unit": this.applyForm.unit,
							"name": this.applyForm.name,
							"logoId": this.logoId,
							"logo": this.logo,
							"intro": this.applyForm.intro,
							"scale": this.applyForm.scale,
							"businessId": this.applyForm.businessId,
							"what": this.applyForm.what,
							"how": this.applyForm.how,
							"why": this.applyForm.why,
							"founder": this.applyForm.founder,
							"founderIntro": this.applyForm.founderIntro,
							"progress": this.applyForm.progress,
							"birth": this.birth,
							"ratio": this.applyForm.ratio,
							"edu": this.applyForm.edu,
							"graduate": this.applyForm.graduate,
							"specialty": this.applyForm.specialty,
							"createAt": createAt
						}
						api.Post('/finance', params)
							.then(res => {
								if (res['suc'] == true) {
									this.$message('申请成功！');
									window.history.go(-1);
								} else if (res['suc'] == false) {
									this.$message('申请失败！');
								}
							});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			getBusinessClass() { //发布需求分类
				api.Get("/dict/business").then(res => {
					this.category = res;
				});
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/*';
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isLt2M;
			},
			handleAvatarSuccess(res, file) {
				this.logoId = res['data']['id'];
				this.logo = res['data']['uri'];
				this.imageUrl = res['data']['uri'];
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			}
		}
	}
</script>

