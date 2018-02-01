<template>
    <div>
        <el-row :gutter="0" style="background-color:rgb(238, 238, 238);padding-top: 50px;padding-bottom: 50px;">
            <div class="container min650">
                <el-col :lg="14" :md="10" :sm="10" :offset="5" style="background-color:#fff;padding:30px 25px 15px 0">
                    <h1 class="tc f16 b result_title">项目成果转化发布</h1>
                <el-form :model="resultForm" :rules="resultRules" ref="resultForm" label-width="150px" class="demo-ruleForm"size="mini">
                        <el-form-item label="成果名称" prop="resultsName">
                            <el-input type="text" v-model="resultForm.resultsName" placeholder="请输入成果名称" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="成果权利人名称" prop="rightName">
                            <el-input type="text" v-model="resultForm.rightName" placeholder="请输入成果权利人名称"></el-input>
                        </el-form-item>
                        <el-form-item label="成果所属方" prop="belongsTo">
                            <el-input type="text" v-model="resultForm.belongsTo" placeholder="请输入成果所属方"></el-input>
                        </el-form-item>
                        <el-form-item label="联系人" prop="name">
                            <el-input type="text" v-model="resultForm.name" placeholder="请输入联系人姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="phone">
                            <el-input type="text" v-model="resultForm.phone" placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="mail">
                            <el-input type="text" v-model="resultForm.mail" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item label="成果类别" prop="resultsId">
                            <el-select v-model="resultForm.resultsId">
                                <!--<el-option :label="item['value']" :value="item['id']" v-for="(item, index) in category" :key="index">-->
                                <el-option label="发明专利" value="0"></el-option>
                                <el-option label="实用新型专利" value="1"></el-option>
                                <el-option label="技术秘密" value="2"></el-option>
                                <el-option label="软件著作权" value="3"></el-option>
                                <el-option label="集成电路布图设计" value="4"></el-option>
                                <el-option label="经鉴定或评价的科技成果" value="5"></el-option>
                                <el-option label="其他" value="6"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="成熟度" prop="mature">
                            <el-select v-model="resultForm.mature">
                                <el-option label="研发" value="3"></el-option>
                                <el-option label="中试" value="2"></el-option>
                                <el-option label="小试" value="1"></el-option>
                                <el-option label="其他" value="0"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="应用领域" prop="fieldId">
                            <el-checkbox-group v-model="resultForm.fieldId">
                                <!--<el-checkbox :label="item['value']" :value="item.id" v-for="(item, index) in field" :key="index"></el-checkbox>-->
                                <el-checkbox label="新进制造" name="type"></el-checkbox>
                                <el-checkbox label="航天航空及交通" name="type"></el-checkbox>
                                <el-checkbox label="光机电一体化" name="type"></el-checkbox>
                                <el-checkbox label="生物技术" name="type"></el-checkbox>
                                <el-checkbox label="新材料" name="type"></el-checkbox>
                                <el-checkbox label="新能源与高效节能" name="type"></el-checkbox>
                                <el-checkbox label="环境保护" name="type"></el-checkbox>
                                <el-checkbox label="地球,空间与海洋" name="type"></el-checkbox>
                                <el-checkbox label="核技术应用" name="type"></el-checkbox>
                                <el-checkbox label="医药和医学工程" name="type"></el-checkbox>
                                <el-checkbox label="农业" name="type"></el-checkbox>
                                <el-checkbox label="石油,化工" name="type"></el-checkbox>
                                <el-checkbox label="人文社科" name="type"></el-checkbox>
                                <el-checkbox label="其他" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="成果描述" prop="describes">
                            <el-input type="textarea" :rows="5" v-model="resultForm.describes" placeholder="请输入你的成果描述（250字内）"></el-input>
                        </el-form-item>
                        <el-form-item label="市场前景分析" prop="market">
                            <el-input type="textarea" :rows="5" v-model="resultForm.market" placeholder="请输入市场前景分析（250字内）"></el-input>
                        </el-form-item>
                        <el-form-item label="与同类成果相比的优势分析" prop="advantage">
                            <el-input type="textarea" :rows="5" v-model="resultForm.advantage" placeholder="请输入与同类成果相比的优势分析（250字内）"></el-input>
                        </el-form-item>
                        <el-form-item label="合作形式" prop="plan">
                            <el-select v-model="resultForm.plan">
                                <el-option label="一次转让" value="1"></el-option>
                                <el-option label="分地区转让" value="2"></el-option>
                                <el-option label="技术入股" value="3"></el-option>
                                <el-option label="使用许可" value="4"></el-option>
                                <el-option label="其他" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="可否向国外推介" prop="toPromote">
                            <el-radio-group v-model="resultForm.toPromote">
                                <el-radio label="true">可</el-radio>
                                <el-radio label="false">不可</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="能否提供英文版本" prop="englishVersion">
                            <el-radio-group v-model="resultForm.englishVersion">
                                <el-radio label="true">能</el-radio>
                                <el-radio label="false">否</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="预估标的金额(万元)" prop="money">
                            <el-input v-model="resultForm.money" placeholder="请输入预估标的金额"></el-input>
                        </el-form-item>

                        <!--<el-form-item label="有效期至" prop="date | formatDate">-->
                            <!--<el-date-picker v-model="resultForm.date | formatDate" type="date" placeholder="选择日期时间">-->
                            <!--</el-date-picker>-->
                        <!--</el-form-item>-->
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('resultForm')">发布</el-button>
                        <!--<el-button @click="publishForm('resultForm')" style="background-color: #f48100;border:none;color:#fff;">发布</el-button>-->
                        <!--<el-button @click="resetForm('resultForm')">取消</el-button>-->
                    </el-form-item>
                </el-form>
            </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    import api from "../axios/api.js";
    import { formatDate } from "../../static/js/date.js";
    export default {
        data() {
            //联系人
            let validateName = (rule, value, callback) => {
                let re = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/;
                if (
                    value === "" ||
                    !re.test(value) ||
                    value.length < 2 ||
                    value.length > 5
                ) {
                    callback(new Error("请输入联系人姓名！"));
                } else {
                    callback();
                }
            };
            //联系方式
            let validatePhone = (rule, value, callback) => {
                let re = /(^1[34578]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)/;
                if (value === "" || !re.test(value) || value.length < 7) {
                    console.log(value);
                    callback(new Error("请输入正确联系方式！"));
                } else {
                    callback();
                }
            };
            //邮箱
            let validateEmail = (rule, value, callback) => {
                let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (value === "" || !re.test(value) ) {
                    console.log(value);
                    callback(new Error("请输入正确邮箱！"));
                } else {
                    callback();
                }
            };

            return {
                category: "",
                field: "",
                mature: "",
                resultForm: {
                    resultsName: "",//成果名称
                    rightName: "",//成果权利人名称
                    belongsTo: "",//成果所属方
                    name: "", //联系人姓名
                    phone: "", //联系电话
                    mail: "",//邮箱
                    resultsId: "",//成果类别
                    mature: "",//成熟度
                    fieldId: [],//应用领域
                    describes: "",//成果描述
                    market: "",//市场前景分析
                    advantage: "",//与同类成果相比的优势分析
                    plan: "",//合作形式
                    toPromote: "",//可否向国外推介
                    englishVersion: "",//能否提供英文版本
                    money: "",//预估标的金额(万元)
//                    date: "",//日期时间
                },
                resultRules: {
                    resultsName: [
                        {
                            required: true,
                            message: "请输入成果名称",
                            trigger: "blur"
                        }
                    ],
                    rightName: [
                        {
                            required: true,
                            message: "请输入成果权利人名称",
                            trigger: "blur"
                        }
                    ],
                    belongsTo: [
                        {
                            required: true,
                            message: "请输入成果所属方",
                            trigger: "blur"
                        }
                    ],
                    name: [
                        {
                            required: true,
                            validator: validateName,
                            message: "请输入联系人姓名",
                            trigger: "blur"
                        }
                    ],
                    phone: [
                        {
                            required: true,
                            validator: validatePhone,
                            message: "请输入联系方式",
                            trigger: "blur"
                        }
                    ],
                    mail: [
                        {
                            required: true,
                            validator: validateEmail,
                            message: "请输入邮箱",
                            trigger: "blur"
                        }
                    ],
                    resultsId: [
                        {
                            required: true,
                            message: "请选择成果类别",
                            trigger: "change"
                        }
                    ],
                    mature: [
                        {
                            required: true,
                            message: "请选择成熟度",
                            trigger: "change"
                        }
                    ],
                    fieldId: [
                        {
                            type: 'array',
                            required: true,
                            message: "请选择应用领域",
                            trigger: "change"
                        }
                    ],
                    describes: [
                        {
                            required: true,
                            message: "请输入成果描述",
                            trigger: "change"
                        },
                        { min: 2, max: 250, message: '最多250个字符', trigger: 'blur' }
                    ],
                    market: [
                        {
                            required: true,
                            message: "请输入市场前景分析",
                            trigger: "change"
                        },
                        { min: 2, max: 250, message: '最多250个字符', trigger: 'blur' }
                    ],
                    advantage: [
                        {
                            required: true,
                            message: "请输入与同类成果相比的优势分析",
                            trigger: "change"
                        },
                        { min: 2, max: 250, message: '最多250个字符', trigger: 'blur' }
                    ],
                    plan: [
                        {
                            required: true,
                            message: "请选择合作形式",
                            trigger: "change"
                        }
                    ],
                    toPromote: [
                        {
                            required: true,
                            message: "请选择可否向国外推介",
                            trigger: "change"
                        }
                    ],
                    englishVersion: [
                        {
                            required: true,
                            message: "请选择能否提供英文版本",
                            trigger: "change"
                        }
                    ],
                    money: [
                        {
                            required: true,
                            message: "请输入预估标的金额(万元)",
                            trigger: "change"
                        }
                    ],
//                    date: [
//                        {
//                            required: true,
//                            message: "请输入日期",
//                            trigger: "change"
//                        }
//                    ],
                }
            };
        },
        created() {
//            this.getCategory();
//            this.getField();
            this.openResultForm()
        },

        computed: {
            headers() {
                let userinfoStr = window.localStorage.getItem("userinfo");
                if (userinfoStr) {
                    let user = JSON.parse(userinfoStr);
                    return {
                        Authorization: "Bearer " + user["msg"]
                    };
                }
            }
        },

        methods: {
//            timeChage(val) {
//                console.log(val);
//                let d = new Date(val);
//                this.date = d.getFullYear() + '.' + (d.getMonth()+1) + '.' + d.getDate();
//            },


            //先登录再发布
//            LoginFirst() {
////                var this = this;
//                if(this.loginFlag) {
//                    if (this.resultFormVisible == true) {
//                        this.resultFormVisible = false;
//                    } else {
//                        this.resultFormVisible = true;
//                        this.initShare();
//                    }
//                } else {
//                    this.$router.push({//你需要接受路由的参数再跳转
//                        path: '/login'
//                    });
//                }
//            },

            openResultForm() {
                let userinfoStr = window.localStorage.getItem('userinfo');
                if (userinfoStr) {
//                    this.openFlag = true;
                    var url = "/science/technology";
                    api.Post(url).then(res => {
                        this.resultForm = res;
                    });
                } else {
                    let redirect = decodeURIComponent('/login');
                    this.$router.push({
                        path: redirect
                    });
                }
            },



            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
//                        let userinfo = JSON.parse(window.localStorage.getItem('userinfo'));
//                        var date = new Date(this.resultForm.date).getTime();
//                        let url = "/science/technology";
                        var params = {
                            resultsName: this.resultForm.resultsName,//成果名称
                            rightName:  this.resultForm.rightName,//成果权利人名称
                            belongsTo:  this.resultForm.belongsTo,//成果所属方
                            name: this.resultForm.name, //联系人姓名
                            phone: this.resultForm.phone, //联系电话
                            mail:  this.resultForm.mail,//邮箱
                            resultsId:  this.resultForm.resultsId,//成果类别
                            mature:  this.resultForm.mature,//成熟度
                            fieldId: this.resultForm.fieldId,//应用领域
                            describes:  this.resultForm.describes,//成果描述
                            market:  this.resultForm.market,//市场前景分析
                            advantage:  this.resultForm.advantage,//与同类成果相比的优势分析
                            plan:  this.resultForm.plan,//合作形式
                            toPromote:  this.resultForm.toPromote,//可否向国外推介
                            englishVersion:  this.resultForm.englishVersion,//能否提供英文版本
                            money:  this.resultForm.money,//预估标的金额(万元)
//                            date: this.resultForm.date,//日期时间
                        };
                        api.Post("/science/technology", params).then(res => {
                            console.log(res);
                            if (res["suc"] == true) {
                                this.$confirm("提交成功", "提示", {
                                    confirmButtonText: "确定",
                                    cancelButtonText: "取消",
                                    type: "success"
                                })
                                    .then(() => {
                                        window.history.go(-1);
                                    })
                                    .catch(() => {
                                        //点击取消
                                    });
                            } else {
                                this.$message(res["msg"]);
                            }
                        });
                    } else {
                        console.log("项目成果转化发布失败!");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

//            getCategory() {
//                //成果类别
//                api.Get("/dict/results").then(res => {
//                    this.category = res;
//                });
//            },
//            getField() {
//                //应用领域
//                api.Get("/dict/application").then(res => {
//                    this.field = res;
//                });
//            },

        },
//        filters: {
//            formatDate(time) {
//                let date = new Date(time);
//                return formatDate(date, "yyyy-MM-dd hh:mm");
//            }
//        }
    };




</script>
<style>
    .resultForm {
        width: 600px;
        background-color: #fff;
        padding: 30px;
        margin-left: auto;
        margin-right: auto;
    }
    .result_title {
        color: #06affe;
        border-bottom: 2px solid #06affe;
        margin-bottom: 22px;
        line-height:30px;
    }
</style>