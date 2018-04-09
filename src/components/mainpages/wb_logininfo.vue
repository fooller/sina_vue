<template>
  <div class="logininfo">
          <div class="login_top">
            <img src="../../assets/images/miss.jpg" width="60" height="60">
          </div>
          <div class="login_bottom">
            <div class="name_box">
              <a>{{login_bottom.desc}}</a>
              <a><i class="iconfont"></i></a>
              <a></a>
            </div>
            <ul>
              <li v-for="(item ,index) in login_bottom.list" :key="index">
                <strong>{{item.num}}</strong>
                <span>{{item.tab}}</span>
              </li>
            </ul>
          </div>
        </div>
</template>
<script>
import wb_json from "../../wb.json";
export default {
  data() {
    return {
      login_bottom: wb_json.login_bottom
    };
  }
};
</script>
<style lang="less" scoped>
.logininfo {
  margin-left: 10px;
  width: 230px;
  .login_top {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 230px;
    height: 75px;
    background-color: #888888;
    img {
      border-radius: 50%;
      border: 2px solid rgb(135, 199, 255);
      background-color: antiquewhite;
      margin-bottom: 50px;
      position: relative;
      top: 30px;
      left: 85px;
    }
  }
  .login_bottom {
    padding: 20px 15px 15px 15px;
    widows: 230px;
    height: 90px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #ffffff;
    .name_box {
      font-size: 13px;
      a {
        color: #000;
      }
    }
    ul {
      display: flex;
      padding: 10px;
      li {
        display: flex;
        flex-direction: column;
        width: 65px;
        text-align: center;
        border-right: 1px solid #d9d9d9;
        strong {
          height: 18px;
          font-size: 18px;
        }
        span {
          height: 15px;
          font-size: 10px;
          color: #888;
        }
      }
      li:last-child {
        border-right: none;
      }
    }
  }
}
</style>
