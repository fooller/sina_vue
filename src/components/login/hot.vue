<template>
  <div class="hot">
      <header>
        <el-carousel trigger="click" height="350px" width="650px">
            <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item" alt="" height="350" width="100%">
            </el-carousel-item>
        </el-carousel>
      </header>
      <div class="body">
          <ul class="list">
              <li class="list_item" v-for="(item,index) in imgList" :key="index">
                  <div class="item_left">
                      <img :src="item" width="182" height="102" alt="">
                  </div>
                  <div class="item_right">
                      <a class="view_">
                          @zhou
                      </a>
                      <div class="view_text">
                          想看看，这张图能有多少个赞
                      </div>
                      <div class="view_quote">
                          <i class="iconfont icon-shebei"></i>
                          <span>雷佳音</span>
                          <span>2018年01月31日14:59:03</span>
                          <span class="ri"><i class="iconfont icon-shebei"></i>1111</span>
                          <span class="ri"><i class="iconfont icon-shebei"></i>1111 &nbsp;&nbsp;|&nbsp;&nbsp;</span>
                          <span class="ri"><i class="iconfont icon-shebei"></i>1111 &nbsp;&nbsp;|&nbsp;&nbsp;</span>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import a from "../../assets/images/1.jpg";
import b from "../../assets/images/2.jpg";
import weibo1 from "../../assets/images/weibo1.jpg";
import weibo2 from "../../assets/images/weibo2.jpg";
import weibo3 from "../../assets/images/weibo3.jpg";
import weibo4 from "../../assets/images/weibo4.jpg";
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.imgList.push(weibo1);
    this.imgList.push(weibo2);
    this.imgList.push(weibo3);
    this.imgList.push(weibo4);
  }
};
</script>
<style lang="less" scoped>
.hot {
  padding: 0 15px;
  .body {
    .list {
      display: flex;
      flex-direction: column;
      .list_item {
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px 0 10px 0;
        .item_left {
          height: 102px;
        }
        .item_right {
          width: 100%;
          padding: 10px 20px;
          height: 102px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .view_{
              color: #f50;
          }
          .view_text {
              color: #000000;
              font-size: 15px;
          }
          .view_quote {
            width: 100%;
            i {
              font-size: 15px;
            }
            span {
              color: #888888;
              font-size: 13px;
            }
            .ri {
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>


