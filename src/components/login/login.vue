<template>
  <div class="login">
    <header>
      <div class="lf">
        <div class="logo">
          <i class="el-icon-picture"></i>
          <span>微博</span>
        </div>
        <el-input @keyup.enter.native.stop="search_btn" size="mini" placeholder="请输入内容" v-model="value_search" class="input-search">
          <el-button @click.native="search_btn" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <ul class="ri">
        <li>
          <i class="el-icon-picture"></i>
          <span>首页</span>
        </li>
        <li>
          <i class="el-icon-picture"></i>
          <span>视频</span>
        </li>
        <li>
          <i class="el-icon-picture"></i>
          <span>发现</span>
        </li>
        <li>
          <i class="el-icon-picture"></i>
          <span>游戏</span>
        </li>
        <li>
          <i class="el-icon-picture"></i>
          <span>注册</span>
        </li>
        <li>
          <i class="el-icon-picture"></i>
          <span>登陆</span>
        </li>
      </ul>
    </header>
    <div class="body">
      <ul class="nav">
        <li class="item" ref="navs" v-for="(item,index) in navs" :key="index" @click.stop="navClick(index)" @mouseover="navMouseOver(index)" @mouseout="navMouseOut(index)">{{item.name}}</li>
      </ul>
      <div class="main">
        <div class="content">
          <transition>
            <router-view></router-view>
          </transition>
        </div>
        <div class="login">
            <div class="login_form">
              <div class="form">
                <el-menu :default-active="1+''" class="el-menu-demo" mode="horizontal">
                  <el-menu-item style="width:125px;text-align:center;" :selected="true" index="1">账号登陆</el-menu-item>
                  <el-menu-item style="width:125px;text-align:center;" index="2">安全登陆</el-menu-item>
                </el-menu>
                <el-input placeholder="请输入内容" v-model="form.username" style="padding:15px 0 5px 0;">
                  <template slot="prepend">用户</template>
                </el-input>
                <el-input placeholder="请输入内容" v-model="form.password" type="password" style="padding:5px 0;">
                  <template slot="prepend">密码</template>
                </el-input>
                <div style="height:5px;"></div>
                <drag-verify :width="dragV.width" 
                  :height="dragV.height" 
                  :text="dragV.text" 
                  :success-text="dragV.successText" 
                  :background="dragV.background" 
                  :progress-bar-bg="dragV.progressBarBg" 
                  :completed-bg="dragV.completedBg" 
                  :handler-bg="dragV.handlerBg" 
                  :handler-icon="dragV.handlerIcon" 
                  :text-size="dragV.textSize" 
                  :success-icon="dragV.handlerIcon" 
                  :circle="dragV.getShape"
                  @passcallback="dragV_btn">
                </drag-verify>
                <el-button @click.native="login_btn" style="width:270px;background-color:rgb(255,129,64);color:#ffffff;margin-top:5px;">登陆</el-button>
                <div style="color:#888888;font-size:12px;padding:15px 0;">
                  还没有微博？<a @click.stop="to_newlogin_fn" style="color:#f50;">立即注册!</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dragVerify from "vue-drag-verify";
export default {
  components: {
    dragVerify
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        code: false
      },
      dragV: {
        width: 270,
        height: 40,
        text: "开始校验",
        successText: "校验成功",
        background: "#cccccc",
        progressBarBg: "#FFFF99",
        completedBg: "#66cc66",
        handlerBg: "#fff",
        textSize: "15px",
        getShape: false,
        handlerIcon: "icon-xuanze11"
      },
      value_search: "",
      navClickIndex: 0,
      navs: [
        { name: "热门" },
        { name: "头条" },
        { name: "视频" },
        { name: "新鲜事" },
        { name: "榜单" },
        { name: "搞笑" },
        { name: "社会" },
        { name: "时尚" },
        { name: "军事" },
        { name: "美女" },
        { name: "体育" },
        { name: "动漫" }
      ]
    };
  },
  created() {},
  mounted() {
    this.$refs.navs[0].classList.add("active");
  },
  methods: {
    to_newlogin_fn(){
      // this.$router.push({name:'newlogin'});
      // this.$router.push({ name : 'newlogin'})
      window.open("#newlogin");
    },
    login_btn() {
      if (!this.form.code) {
        this.$message({
          message: '请先校验',
          type: 'warning'
        });
        // return false;
      }
      this.$router.push({ path : '/wb_main'})
    },
    dragV_btn() {
      this.form.code = true;
    },
    search_btn() {
      console.log("开始执行搜索的方法,获取到的值为：" + this.value_search);
    },
    navClick(index) {
      // 改变样式
      this.$refs.navs[this.navClickIndex].classList.remove("active");
      this.navClickIndex = index;
      this.$refs.navs[index].classList.add("active");
      // 路由跳转
    },
    navMouseOver(index) {
      // 改变样式
      this.$refs.navs[index].classList.add("active");
    },
    navMouseOut(index) {
      // 改变样式
      if (this.navClickIndex == index) return;
      this.$refs.navs[index].classList.remove("active");
    }
  },
  watch:{
    'form.code':function(val){
      console.log(val);
      if (val == true) {
        this.$message({
          message: '校验成功',
          type: 'success'
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  background-color: #ffffff;
  height: 100%;
  header {
    position: fixed;
    width: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    bottom: 0;
    height: 50px;
    text-align: center;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: 2px solid #f50;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    background-color: rgba(255, 255, 255, 0.8);
    .lf {
      color: #000000;
      display: flex;
      width: 25%;
      .logo {
        width: 200px;
        i {
          font-size: 30px;
          color: #f50;
        }
        span {
          font-size: 16px;
          color: #888888;
        }
      }
      .input-search {
        padding: 10px 0 0 20px;
      }
    }
    .ri {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      li {
        padding-right: 20px;
        i {
          color: #f50;
          font-size: 20px;
        }
        span {
          display: inline-flex;
          width: 30px;
          color: #000000;
          font-size: 14px;
        }
      }
    }
  }
  .body {
    position: fixed;
    top: 0;
    padding-top: 60px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    // overflow-y: scroll;
    .nav {
      position: relative;
      top: 0;
      bottom: auto;
      left: 0;
      right: 0;
      background-color: #ffffff;
      flex-grow: 0.5;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .item {
        align-self: flex-end;
        width: 100px;
        text-align: center;
        padding: 10px 0 10px 0;
        margin: 2px 0 2px 0;
        background-color: #ffffff;
        border-radius: 3px;
        color: #000000;
        font-size: 18px;
      }
      .active {
        color: #ffffff;
        background-image: linear-gradient(
          180deg,
          rgb(178, 233, 175),
          rgb(71, 206, 175)
        );
      }
    }
    .main {
      position: relative;
      overflow-y: scroll;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #ffffff;
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      .content {
        flex-grow: 1;
      }
      .login {
        background-color: #ffffff;
        flex-grow: 1;
        .login_form {
          width: 340px;
          // height: 340px;
          background-color: #f2f2f5;
          display: flex;
          justify-content: center;
          .form {
            width: 300px;
            margin: 20px 0;
            background-color: #ffffff;
            align-self: center;
            padding: 0 15px 5px 15px;
          }
        }
      }
    }
  }
}
</style>

