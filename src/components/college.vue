<template>
    <div>
        <!--header-->
        <commonHeader></commonHeader>
        <commonSwiper></commonSwiper>
        <!--培训-->
        <el-row :gutter="10"style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-college">
                    <h1>培训</h1>
                    <p>CULTVATE</p>
                    <hr>
                    <span></span>
                    <div class="r more_plus"></div>
                </div>
                <el-row :gutter="10">
                    <el-col :lg="6" :md="6" :sm="12" :xs="24" class="college-show"v-for="(item,index) in 4">
                        <img src="../../static/img/college_1.png" alt="">
                        <div>
                            <h6>新手创业指南手册</h6>
                            <p>从公司设立的新手创业指南手册新手创南手册新手创业指南手册新手创业指南手册...</p>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--优秀讲师-->
        <div style="background-color: #eee;padding-bottom: 50px;">
            <el-row :gutter="10">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="title" id="title-teacher">
                        <h1>优秀讲师</h1>
                        <p>GREAT SPEAKERS</p>
                        <hr>
                        <span></span>
                        <div class="r more_plus"></div>
                    </div>
                    <el-row :gutter="10">
                        <el-col :lg="11" :md="11" :sm="11" :xs="22" :offset="1" v-for="(item, index) in 4">
                            <div class="research-teacher">
                                <img src="../../static/img/college_2.png" alt="">
                                <div>
                                    <h4>指导老师:钟学保</h4>
                                    <h3>火凤凰云计算董事长</h3>
                                    <p>教师简介:07年毕业于中欧国际工商管理学院获得MBA研究生学位,2014年至今担任江汉区政协常委委员,先后任武汉中小企业协会常务副会长,武汉中小企业协会对外交流合作分会会长,江汉区高新技术企业联合会副会长.</p>
                                </div>
                                <div>
                                    <button>导师介绍</button>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <!--footer-->
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
			return {}
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
/*培训*/
    .college-show img{
        width:100%;
    }
.college-show div{
    box-shadow:0 0 10px #ddd ;
    margin-top: -5px;
    padding:1px 5px 20px 5px;
}
.college-show div h6{
    color:#666;
    font-size:14px;
    line-height:30px;
}
.college-show div p{
    color:#999;
    font-size:12px;
    line-height:20px;
}
.college-show{
    margin-bottom: 20px;
}

/*title*/
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
    margin-top: -41px;
}
#title-college{
    position:relative;
    }
#title-college span{
    position: absolute;
    top: 48px;
    left:45%;
}
    /*优秀讲师*/
#title-teacher{
    position:relative;
}
#title-teacher span{
    position: absolute;
    top: 48px;
    left:45%;
}

.research-teacher{
    background-color:#2c2b32;
    padding-top: 20px;
    margin-top: 50px;
    position: relative;
}
.research-teacher img{
    width:30%;
    margin-right: auto;
    margin-left: auto;
    display: block;
    position: absolute;
    top: -28px;
    left: -28px;
}
.research-teacher div{
    margin-left:30px;
    margin-right:30px;
    text-align: center;
    color:#fff;
    margin-top: 10px;
}
.research-teacher div h4{
    font-size:16px;
    font-weight: normal;
    line-height:30px;
    margin-left: -70px;
}
.research-teacher div h3{
    font-size:14px;
    font-weight: normal;
    line-height:30px;
    margin-left: -60px;
}
.research-teacher div p{
    font-size:12px;
    font-weight: normal;
    line-height:20px;
    margin-top: 10px;
}
.research-teacher button{
    width:100px;
    line-height: 26px;
    border-radius:12px;
    background-color:#f53436;
    color:#fff;
    font-size:14px;
    border:none;
    margin: 20px auto;
}
</style>