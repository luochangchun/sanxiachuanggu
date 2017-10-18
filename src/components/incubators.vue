<template>
    <div>
        <!--双创空间展示-->
        <el-row :gutter="10"style="margin-bottom: 50px;">
            <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                <div class="title" id="title-incubators">
                    <h1>院校展示</h1>
                    <p>ENTREPRENEURIAL MENTOP</p>
                    <hr>
                    <span></span>
                    <button>MORE+</button>
                </div>
                <el-row :gutter="10">
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="incubators-show">
                        <img src="../../static/img/103.png" alt="">
                        <span style="bottom: 0;right:5px;">清创</span>
                    </el-col>
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="incubators-show">
                        <img src="../../static/img/103.png" alt="">
                        <span style="bottom: 0;right:5px;">清创</span>
                    </el-col>
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="incubators-show">
                        <img src="../../static/img/103.png" alt="">
                        <span style="bottom: 0;right:5px;">清创</span>
                    </el-col>
                </el-row>
                <el-row :gutter="10"style="margin-top: 10px;">
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="incubators-show">
                        <img src="../../static/img/103.png" alt="">
                        <span style="bottom: 0;right:5px;">清创</span>
                    </el-col>
                    <el-col :lg="8" :md="8" :sm="12" :xs="24" class="incubators-show">
                        <img src="../../static/img/103.png" alt="">
                        <span style="bottom: 0;right:5px;">清创</span>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <!--职能部门展示-->
        <div style="background-color: #eee;padding-bottom: 40px;">
            <el-row :gutter="10">
                <el-col :lg="18" :md="18" :sm="18" :xs="18" :offset="3">
                    <div class="title" id="title-department">
                        <h1>创业导师团</h1>
                        <p>ENTREPRENEURIAL MENTOP</p>
                        <hr>
                        <span></span>
                        <button>MORE+</button>
                    </div>
                    <el-row :gutter="10">
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" >
                            <img src="../../static/img/zn_07.png" alt="">
                        </el-col>
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" >
                            <img src="../../static/img/zn_07.png" alt="">
                        </el-col>
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" >
                            <img src="../../static/img/zn_07.png" alt="">
                        </el-col>
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" >
                            <img src="../../static/img/zn_07.png" alt="">
                        </el-col>
                    </el-row>
                    <el-row :gutter="10"style="margin-top:10px;">
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" >
                            <img src="../../static/img/zn_07.png" alt="">
                        </el-col>
                        <el-col :lg="6" :md="6" :sm="12" :xs="24" >
                            <img src="../../static/img/zn_07.png" alt="">
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>


    </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
    /*双创空间展示*/
    .incubators-show{
        position: relative;
    }
    .incubators-show img{
        width:100%;
    }
    .incubators-show span{
        position: absolute;
        background:rgba(0,0,0,.5);
        color: #fff;
        width: 97%;
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
    /*定位*/
    #title-incubators{
        position:relative;
    }
    #title-incubators span{
        position: absolute;
        top: 48px;
        left:45%;
    }

/*职能部门展示*/
    #title-department{
        position:relative;
    }
    #title-department span{
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
    .title button{
        position: absolute;
        top: 40px;
        right:13%;
        font-size: 12px;
        color:#999;
        border-radius:4px;
        border:1px solid #ddd;
        background-color: transparent;
    }
</style>