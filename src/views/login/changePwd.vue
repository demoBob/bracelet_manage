<!--  -->
<template>
  <div class="changePwd">
    <img src="../../../static/images/logo.png" class="changePwdlogo"/>
    <div class="form">
      <div style="height: 70px;border-bottom: 1px solid white;line-height: 70px;font-size: 26px;">
        修改密码
      </div>
      <el-input placeholder="旧密码" v-model="oldpassword" style="width:70%;margin:40px 0px 0px;font-size:16px;">
        <template slot="prepend">
          <i class="el-icon-goods" style="font-size:28px;"></i>
        </template>
      </el-input>
       <el-input placeholder="新密码" v-model="newpassword" style="width:70%;margin:25px 0px;font-size:16px;">
        <template slot="prepend">
          <i class="el-icon-s-goods" style="font-size:28px;"></i>
        </template>
      </el-input>
      <a style="display: block;float: right;width: 48%;color: #65696d;text-decoration: none;cursor: pointer;" @click="changePwd">返回登录</a>
      <!-- <el-button type="primary" style="display:block;width:70%;margin:0 auto;">登   录</el-button> -->
      <div class="btn" @click="changePwd">修改</div>
    </div>
    <div class="changePwdinfo">CEM运动健康管理系统 © 2021 华盛昌 All Rights Reserved</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  oldpassword:"",
  newpassword:""
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  changePwd(){
    var data = {};
    data["oldpassword"] = this.$md5(this.oldpassword).toUpperCase();
    data["newpassword"] = this.$md5(this.newpassword).toUpperCase();
    //console.log("data",data);
    this.$axios
        .post(`${this.$ip}/v1/management/users/password/update`, data)
        .then(res => {
          if (res.data) {
            let data = res.data;
            console.log("登录接口",data);
            if (data.code == "E_0000_0000") {
              this.success("用户密码修改成功");
              this.$router.push('/login');
            } else {
              this.warning(data.msg);
            }
          }
          //this.callback = true;
        })
        .catch(res => {
          //this.callback = true;
          console.log(res);
        });
  },
  login(){
    this.$router.push('/');
  },
  success(val) {
      this.$message({
        message: val,
        type: "success"
      });
    },
    warning(val) {
      this.$message.error(`Error：${val}`);
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import "/css/changePwd.less";
</style>