<template>
  <div>
    <h1 class="f16 b">账户设置</h1>
    <el-row style="padding-left:40px;">
      <p class="f16 b" style="width:50%;padding:10px 0;border-bottom:1px solid #eee;margin-bottom:20px;">修改个人资料</p>
      <el-col class="userImg" :lg="24" :md="24" :sm="24" :xs="24">
        <el-upload :headers="headers" class="avatar-uploader" action="http://www.sanxiachuanggu.com/servant/file" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
      <el-col :lg="24" :md="24" :sm="24" :xs="24">
        <el-form :model="userForm" :rules="userRules" ref="userForm" label-width="80px">
          <el-form-item label="用户名:">
            <p style="display:inline-block">{{name}}</p>
          </el-form-item>
          <el-form-item label="昵称:" prop="nickname">
            <el-input v-show="flag" type="tel" v-model="userForm.nickname" auto-complete="off" placeholder="请输入昵称" style="width:200px;"></el-input>
            <p v-show="!flag" style="display:inline-block;">{{nickName}}</p>
            <span v-show="!flag" style="border:1px solid #eee;background-color:#0089e3;padding:6px 10px;border-radius:5px;color:#fff;" @click="modfityName">修改</span>
            <span v-show="flag" style="border:1px solid #eee;background-color:#0089e3;padding:6px 10px;border-radius:5px;color:#fff;" @click="submitName">确认</span>
            <span v-show="flag" style="border:1px solid #eee;background-color:#0089e3;padding:6px 10px;border-radius:5px;color:#fff;" @click="cancelName">取消</span>
          </el-form-item>
          <el-form-item label="联系方式:">
            <p>{{name}}</p>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .userImg h1 {
    font-size: 18px;
    font-weight: bold;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
  import api from '../../axios/api.js'
  export default {
    data() {
      return {
        nickName: '',
        name: '',
        imageUrl: '',
        labelPosition: 'left',
        flag: false,
        userForm: {
          nickname: "",
        },
        userRules: {
          nickname: [{
            required: true,
            message: '昵称',
            trigger: 'blur'
          }]
        },
      };
    },
    created() {
      let userinfoStr = window.localStorage.getItem('userinfo');
      if (userinfoStr) {
        let user = JSON.parse(userinfoStr);
        this.nickName = user['data']['nickname'];
        this.name = user['data']['name'];
        this.imageUrl = user['data']['avatar'];
      }
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
      beforeUpload(file) {
        let fd = new Formdata()
        fd.append('key', file, 'fileName')
        // 自己上传文件 想加什么都可以
        return false // 返回false不会自动上传
      },
      handleAvatarSuccess(res, file) {
        let userinfoStr = window.localStorage.getItem('userinfo');
        if (userinfoStr) {
          let user = JSON.parse(userinfoStr);
          this.imageUrl = res['data']['uri'];
          let params = {
            id: user['data']['id'],
            avatarId: res['data']['id'],
            avatar: res['data']['uri']
          }
          user['data']['avatar'] = res['data']['uri'];
          user = JSON.stringify(user);
          api.Put('/account/update', params)
            .then(res => {
              if (res["suc"] == true) {
                this.$message('上传成功');
                
                window.localStorage.setItem('userinfo', user); //将修改后的昵称修改后存到localstorage
                window.location.reload();
              }
              if (res["suc"] == false) {
                this.$message(res['msg']);
              }
            });
        }
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/*';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
      },
      modfityName() {
        this.flag = true;
      },
      cancelName() {
        this.flag = false;
      },
      submitName() {
        this.flag = false;
        let userinfoStr = window.localStorage.getItem('userinfo');
        if (userinfoStr) {
          let user = JSON.parse(userinfoStr);
          var params = {
            "id": user['data']['id'],
            "nickname": this.userForm.nickname,
          }
          api.Put('/account/update', params)
            .then(res => {
              if (res['suc'] == true) {
                let userinfoStr = window.localStorage.getItem('userinfo');
                if (userinfoStr) {
                  let user = JSON.parse(userinfoStr);
                  user['data']['nickname'] = this.userForm.nickname;
                  user = JSON.stringify(user);
                  window.localStorage.setItem('userinfo', user); //将修改后的昵称修改后存到localstorage
                  window.location.reload();
                }
              }
            });
        }
      }
    }
  }
</script>