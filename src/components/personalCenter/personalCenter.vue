<template>
    <div class="personalCenter">
        <div class="container">
            <el-row>
                <el-col :span="24" class="main">
                    <aside class="menu-expanded">
                        <el-menu router mode="vertical" default-active="/demand_comm_service01" class="el-menu-vertical-demo center_left" theme="light">
                            <el-menu-item-group title="个人中心">
                                <el-menu-item index='/demand_comm_service01'>
                                    <p>服务需求</p><i class="el-icon-arrow-right"></i></el-menu-item>
                                <el-menu-item index="/demand_comm_service02">
                                    <p>技术难题及需求</p><i class="el-icon-arrow-right"></i></el-menu-item>
                                <el-menu-item index="/demand_comm_service03">
                                    <p>融资需求</p><i class="el-icon-arrow-right"></i></el-menu-item>
                                <el-menu-item index="/demand_comm_service04">
                                    <p>招商讯息</p><i class="el-icon-arrow-right"></i></el-menu-item>
                                <el-menu-item index="/demand_comm_service05">
                                    <p>求租讯息</p><i class="el-icon-arrow-right"></i></el-menu-item>
                                <!-- <el-menu-item index="/demand_comm_service06">
                                    <p>招聘讯息</p><i class="el-icon-arrow-right"></i></el-menu-item> -->
                            </el-menu-item-group>
                            <el-menu-item-group title="账号设置">
                                <el-menu-item index="/personalInformation">
                                    <p>个人资料</p><i class="el-icon-arrow-right"></i></el-menu-item>
                                <el-menu-item index="/passwordSetting">
                                    <p>密码设置</p><i class="el-icon-arrow-right"></i></el-menu-item>
                            </el-menu-item-group>
                        </el-menu>
                    </aside>
                    <section class="content-container">
                        <router-view></router-view>
                    </section>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import api from '../../axios/api.js'
    export default {
        data() {
            return {
                title:''
            }
        },
        updated() { //路径及按键操作时调用
            this.updateForcus();
        },
        mounted() { //载入时调用，F5刷新会起效
            this.updateForcus();
        },
        methods: {
            updateForcus() {
                var path = this.$route.path;
                if (path == "/demand_comm_service01") {
                    this.title = '服务需求列表';
                    console.log('服务需求列表');
                }
                // } else if (path == "/demand_comm_service/2") {
                //     this.title = '技术难题';
                //     console.log('技术难题');
                // } else if (path == "/demand_comm_service/3") {
                //     this.title = '融资需求';
                //     console.log('融资需求');
                // } else if (path == "/demand_comm_service/4") {
                //     this.title = '招商讯息';
                //     console.log('招商讯息');
                // } else if (path == "/demand_comm_service/5") {
                //     this.title = '求租讯息';
                //     console.log('求租讯息');
                // } else if (path == "/demand_comm_service/6") {
                //     this.title = '招聘信息';
                //     console.log('招聘信息');
                // }
                //更新nav的当前active
                //经测试F5刷新只会调用mounted，路径访问及鼠标点击只会调用updated。
            },
        }
    }
</script>