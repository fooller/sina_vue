<template>
  <div id="app">
    <keep-alive>
       <transition name="fadein" mode="out-in">
            <router-view></router-view>
        </transition>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "appHome"
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "./static/css/reset";

body {
  background-color: rgb(246, 246, 246);
  // height: 100%;
  // overflow: hidden;
}
// 修改vux中search组件的样式
.vux-search-box {
  .weui-icon-clear::before {
    display: none;
  }
  // input::-webkit-search-cancel-button ::before{display: none;}
  .weui-search-bar {
    .weui-search-bar__form {
      .weui-search-bar__label {
        top: 5px;
      }
    }
    .weui-search-bar__cancel-btn {
      font-size: 14px;
    }
  }
}
// 修改loading组件的样式
.weui-loading_toast {
  .weui-toast {
    width: 100px;
    height: 100px;
  }
}
// android和ios的head样式
.head {
  height: 45px;
  width: 100%;
  line-height: 40px;
  color: #ffffff;
  background-color: #1885fc;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  .left {
    position: absolute;
    left: 15px;
    top: 0;
  }
  .right {
    position: absolute;
    right: 15px;
    top: 0;
  }
}
.head.ios {
  background-color: #35495e;
  height: 65px;
  padding-top: 20px;
  .left {
    top: 20px;
  }
  .right {
    top: 20px;
  }
}

#app {
  height: 100%;
}
</style>
