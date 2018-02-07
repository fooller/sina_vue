<template>
  <div class="login" v-loading="load" element-loading-text="" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
      <header>

      </header>
      <div class="body">
          <div class="form">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="姓名">
                    <el-input style="width:200px;" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input style="width:200px;" type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click.native="login" round>用户登陆</el-button>
                    <el-button @click.native="tourist" round>游客登陆</el-button>
                </el-form-item>
              </el-form>
          </div>
      </div>
      <footer class="footer">

      </footer>
  </div>
</template>
<script>
import { login } from "../api/assets.js";
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      load: false
    };
  },
  methods: {
    login() {
      this.load = true;
      let data = { userName: this.form.name, passWord: this.form.password };
      login(data).then(res => {
        if (res.data.status == 200) {
          setTimeout(() => {
            this.$router.push({ name: "list" });
            this.load = false;
          }, 2000);
        } else {
          this.load = false;
          this.$notify.error({
            title: "错误",
            message: "账号或密码错误❌"
          });
        }
      });
    },
    tourist() {}
  }
};
</script>
<style lang="less" scoped>
@import "login.less";
</style>


