<template>
    <div class="activity_para">
        <!-- <div>
            <div class="container">
                <el-row :gutter="10">
                    <el-col :xs="24" :sm="24" :md="10" :lg="8">
                        <div class="padder-v">
                            <img src="http://www.egowork.com/themes/egowork/img/tra_de.jpg" alt="">
                        </div>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="14" :lg="10">
                        <div class="padder-v">
                            <p class="f18 b">{{activity['name'] || "暂无数据"}}</p>
                            <hr class="line-w">
                            <p> 活动时间：{{startAt | formatDate}} -- {{endAt | formatDate}}</p> <hr class="line-w">
                            <p> 地点：{{activity['location'] || "暂无数据"}} </p>
                            <p> 人数限额：{{activity['total'] || "暂无数据"}}人 </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div> -->
        <div class="padder-v-xxl">
            <div class="container">
                <el-row :gutter="10">
                    <el-col :lg="24">
                        <div class="padder-v">
                            <!-- <p class="f24">活动票种</p>
                            <div class="stamp rel">
                                <img src="http://www.egowork.com/themes/egowork/img/bg_ticket.png" class="img-responsive h-xs">
                                <p class="abs f18" style="top:30px;left:30px;color:#fff;">免费</p>
                            </div> -->
                            <div class="content">
                                <div class="wrapper">
                                    {{content || '暂无数据'}}
                                </div>
                                <!-- <p class="f24">
                                    <span>活动内容</span>
                                    <router-link to="/train">
                                        <button style="">活动申请</button>
                                    </router-link>
                                </p>
                                <div class="wrapper">
                                    <p>陈文强</p>
                                    <p><br></p>
                                    <p>武汉泰利美信医疗科技有限公司CEO。首都医科大学医学本科，清华大学工业设计专业硕士。</p>
                                    <p><br></p>
                                    <p>资深顶级医疗外企职业经理人，曾供职于GE、KODAK及BARCO，历任产品线经理、销售总监、以及大中华区业务负责人。</p>
                                    <p><br></p>
                                    <p>DEMO China创业导师，医疗组评委。</p>
                                    <p>四、活动内容</p>
                                    <p><br></p>
                                    <p>1．结合陈老师的亲身经历讲解创业初期存在的问题；</p>
                                    <p>2．告诉你如何避免创业中的各种雷坑；</p>
                                    <p>3．现场和陈老师一对一交流，答疑解惑。</p>
                                    <p>陈文强</p>
                                    <p><br></p>
                                    <p>武汉泰利美信医疗科技有限公司CEO。首都医科大学医学本科，清华大学工业设计专业硕士。</p>
                                    <p><br></p>
                                    <p>资深顶级医疗外企职业经理人，曾供职于GE、KODAK及BARCO，历任产品线经理、销售总监、以及大中华区业务负责人。</p>
                                    <p><br></p>
                                    <p>DEMO China创业导师，医疗组评委。</p>
                                    <p>四、活动内容</p>
                                    <p><br></p>
                                    <p>1．结合陈老师的亲身经历讲解创业初期存在的问题；</p>
                                    <p>2．告诉你如何避免创业中的各种雷坑；</p>
                                    <p>3．现场和陈老师一对一交流，答疑解惑。</p>
                                </div> -->
                            </div>

                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
    import api from '../axios/api.js'
    import {formatDate} from '../../static/js/date.js'
    export default {
        data() {
            return {
                activity: '',
                photos: '',
                startAt: '',
                endAt: '',
                content: '',
            }
        },
        created() {
            let id = this.$route.params.id;
            this.getActivity(id);
        },
        methods: {
            getActivity(id) {
                api.Get('/activity/' + id)
                    .then(res => {
                        if(res['activity'] == null) {
                            this.startAt="暂无数据"
                            this.endAt="暂无数据"
                            this.content="暂无数据"
                        } else {
                            this.activity = res['activity'];
                            this.photos = res['photos'];
                            this.startAt = res['activity']['startAt'];
                            this.endAt = res['activity']['endAt'];
                            this.content= res['activity']['detail']['content']
                        }
                    })
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time)
                return formatDate(date,'yyyy-MM-dd hh:mm')
            }
        }
    }
</script>
<style scoped>
    .f24 span{
        float:left;
    }
    .f24 button{
        float:right;
        background-color: #f48100;
        border: none;
        color: #fff;
        border-radius: 4px;
        width: 90px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }

.wrapper{
    clear:both;
}
.activity_para {
    height: auto;
    min-height: 100%;
}
.line-w {
    margin-top: 5px;
    margin-bottom: 10px;
    border: 0;
    border-top: 2px solid #eee;
    margin-right: 30%;
}

.padder-v-xxl {
    padding-top: 50px;
    padding-bottom: 50px;
}

.wrapper {
    /*border: 1px solid rgba(0, 0, 0, 0.05);*/
    padding: 15px;
}

.stamp img {
    display: block;
    height: 90px;
    max-width: 100%;
    margin-bottom: 50px;
}
</style>
