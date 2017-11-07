<template>
    <div class="activity_para">
        <div class="padder-v-xxl">
            <div class="container">
                <el-row :gutter="10">
                    <el-col :lg="24">
                        <div class="padder-v">
                            <div class="content">
                                <!-- <img style="max-width:600px;" :src="photos" alt=""> -->
                                <div style="min-height:300px;border:none" class="wrapper" v-html="content || '暂无数据'"></div>
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
                photos: '',
                content: '',
            }
        },
        created() {
            let id = this.$route.params.id;
            this.getActivity(id);
        },
        methods: {
            getActivity(id) {
                api.Get('/article/' + id)
                    .then(res => {
                        if(res['content'] == null) {
                        } else {
                            this.photos = res['icon']
                            this.content = res['content']
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
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px;
}

.stamp img {
    display: block;
    height: 90px;
    max-width: 100%;
    margin-bottom: 50px;
}
</style>
