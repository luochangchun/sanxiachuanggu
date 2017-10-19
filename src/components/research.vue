    <template>
        <div>
            <!--header-->
            <commonHeader></commonHeader>
            <commonSwiper></commonSwiper>
            <!--院校展示-->
            <el-row :gutter="10"style="margin-bottom: 50px;">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="title" id="title-school">
                        <h1>院校展示</h1>
                        <p>ENTREPRENEURIAL MENTOP</p>
                        <hr>
                        <span></span>
                        <div class="r more_plus"></div>
                    </div>
                    <el-row :gutter="10">
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item, index) in schoolList" class="schoolList">
                            <img :src="item.image" alt="" style="border:1px solid #ddd;">
                            <span>{{item.school}}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!--创业导师团-->
            <div style="background-color: #eee;padding-bottom: 50px;">
                <el-row :gutter="10">
                    <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                        <div class="title" id="title-teacher">
                            <h1>创业导师团</h1>
                            <p>ENTREPRENEURIAL MENTOP</p>
                            <hr>
                            <span></span>
                            <div class="r more_plus"></div>
                        </div>
                        <el-row :gutter="10">
                            <el-col :lg="6" :md="6" :sm="12" :xs="24" v-for="(item, index) in 4">
                                <div class="research-teacher">
                                    <img src="../../static/img/b.png" alt="">
                                    <div>
                                        <h3>指导老师:钟学保</h3>
                                        <p>教师简介:07年毕业于中欧国际工商管理学院获得MBA研究生学位,2014年至今担任江汉区政协常委委员,先后任武汉中小企业协会常务副会长,武汉中小企业协会对外交流合作分会会长,江汉区高新技术企业联合会副会长.</p>
                                    </div>
                                    <div>
                                        <button>查看更多>></button>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </div>
            <!--校园人才-->
            <el-row :gutter="10">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="title" id="title-talents">
                        <h1>校园人才</h1>
                        <p>ENTREPRENEURIAL MENTOP</p>
                        <hr>
                        <span></span>
                        <div class="r more_plus"></div>
                    </div>
                    <el-row :gutter="10" style="margin-bottom: 50px;">
                        <el-col :lg="12" :md="12" :sm="12" :xs="24" v-for="(item, index) in 4">
                            <el-row>
                                <el-col :lg="6" :md="6" :sm="6" :xs="24">
                                    <div class="research-teacher-img">
                                        <img src="../../static/img/b.png" alt="">
                                    </div>
                                </el-col>
                                <el-col :lg="17" :md="17" :sm="17" :xs="24" :offset="1">
                                    <p class="research-name">钟学保</p>
                                    <p class="research-school">武汉大学</p>
                                    <p class="research-text">
                                        校绩成果:07年毕业于中欧国际工商管理学院获得MBA研究生学位,2014年至今担任江汉区政协常委委员,先后任武汉中小企业协会常务副会长,武汉中小企业协会对外交流合作分会会长,江汉区高新技术企业联合会副会长.
                                    </p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!-- footer -->
            <commonFooter></commonFooter>
        </div>
    </template>

    <script type="text/ecmascript-6">
		import api from '../axios/api.js'
		import Header from '../components/header.vue'
		import Swiper from '../components/swiper.vue'
		import Footer from '../components/footer.vue'
		export default {
        	data() {
        		return{
					schoolList:[
                        {
							image:'../../static/img/x_03.png',
                            school:'武汉大学',
                        },
						{
							image:'../../static/img/x_05.png',
							school:'华中科技大学',
						},
						{
							image:'../../static/img/x_07.png',
							school:'三峡大学',
						},
						{
							image:'../../static/img/x_09.png',
							school:'中南民族大学',
						},
						{
							image:'../../static/img/x_11.png',
							school:'武汉轻工大学',
						}
                    ]
                      }
                 },
			methods: {

			},
			components: {
				commonHeader: Header,
				commonFooter: Footer,
				commonSwiper: Swiper
			},
        }
    </script>

    <style>
        /*院校展示*/
        .schoolList{
            position: relative;

        }
        .schoolList span{
            position: absolute;
            bottom:20px;
            left:30%;
            font-size:14px;
            text-align: center;
        }
        .schoolList img{
            width:100%;
        }
        /*定位*/
        #title-school{
            position:relative;
        }
        #title-school span{
            position: absolute;
            top: 48px;
            left:45%;
        }


        /***********************title****************************/
        .title{
            text-align: center;
            margin-top: 25px;
            margin-bottom: 25px;
        }
        .title h1{
            color:#0089e3;
            font-size:18px;
            font-weight:600;
        }
        .title p{
            color:#ddd;
            font-size: 10px;
        }
        .title hr{
            width:30%;
            border:1px solid #454b60;
        }
        .title span{
            display: block;
            border:2px solid #0089e3;
            width:10%;
        }
        .title div{
            margin-top: -42px;

        }
        /*定位*/
        #title-teacher{
            position:relative;
        }
        #title-teacher span{
            position: absolute;
            top: 48px;
            left:45%;
        }


        /*创业导师团*/
        .research-teacher{
            background-color:#0068b7;
            padding-top: 20px;
            margin-top: 30px;
        }
        .research-teacher img{
            border-radius: 50%;
            width:40%;
            margin-right: auto;
            margin-left: auto;
            display: block;
        }
        .research-teacher div{
            margin-left:30px;
            margin-right:30px;
            text-align: center;
            color:#fff;
            margin-top: 10px;
        }
        .research-teacher div h3{
            font-size:14px;
            font-weight: normal;
            line-height:30px;
        }
        .research-teacher div p{
            font-size:12px;
            font-weight: normal;
            line-height:20px;
        }
        .research-teacher button{
            width:100px;
            line-height: 26px;
            border-radius:4px;
            background-color:#f48100;
            color:#fff;
            font-size:14px;
            border:none;
            margin: 30px auto;
        }


        /*校园人才*/
        .research-teacher-img img{
            border-radius: 50%;
            width:100px;
        }
        .research-name{
            font-size: 16px;
            color:#666;
            line-height:30px;
        }
        .research-school{
            font-size: 14px;
            color:#666;
            line-height:20px;
        }
        .research-text{
            font-size: 12px;
            color:#999;
            line-height:20px;
        }
        /*定位*/
        #title-talents{
            position:relative;
        }
        #title-talents span{
            position: absolute;
            top: 48px;
            left:45%;
        }
    </style>