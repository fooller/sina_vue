

<template>
  <div class="release">
    <transition-group name="list-complete" tag="p">
        <div class="list_item list-complete-item" v-for="item in list" :key="item.time">
            <div class="top">
                <div class="lf_face">
                <a><img width="50" height="50" src="../../assets/images/miss.jpg" alt=""></a>
                </div>
                <div class="ri_detail">
                    <div class="ri_detail_userinfo"><a>Miss</a><a><i></i></a></div>
                    <div class="ri_detail_info"><a>02月06日11:25</a>来自<a>韩三岁的iPhone客户端</a></div>
                    <div class="ri_detail_content">
                    <a>#miss直播</a>
                    2018.2.5晚上7点
                    <br>
                    <a><i></i>网页链接</a>
                    <br>
                    <p>{{item.content}}</p>
                    </div>
                    <div class="ri_detail_media">
                    <div class="media_box">
                        <ul class="media_box_ul">
                        <li class="media_box_li">
                            <img>
                            <i></i>
                            <i></i>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div class="wb_detail_handle">
                <ul class="wb_detail_handle_ul">
                <li class="wb_detail_handle_li">
                    <a><i class="iconfont icon-shoucang1"></i>收藏</a>
                </li>
                <li class="wb_detail_handle_li">
                    <a><i class="iconfont icon-icon--"></i>转发</a>
                </li>
                <li class="wb_detail_handle_li">
                    <a><i class="iconfont icon-iconfontpinglun"></i>评论</a>
                </li>
                <li class="wb_detail_handle_li">
                    <a><i class="iconfont icon-zan1"></i>赞</a>
                </li>
                </ul>
            </div>
        </div>
    </transition-group>
  </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array,
            default:[]
        }
    }
};
</script>
<style lang="less" scoped>
.release {
  .list-complete-item {
    transition: all 1s;
  }
  .list-complete-enter,
  .list-complete-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
  margin: 10px 0;
  height: 100%;
  width: 600px;
  height: auto;
  // border-radius: 5px;
  .list_item {
    padding: 20px 20px 0 20px;
    background-color: #ffffff;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      .lf_face {
        img {
          border-radius: 50%;
        }
      }
      .ri_detail {
        width: 500px;
        margin-left: 10px;
        .ri_detail_userinfo {
          padding-bottom: 7px;
          a {
            color: #000;
          }
        }
        .ri_detail_info {
          padding-bottom: 5px;
          color: #888888;
          a {
            font-size: 10px;
          }
        }
        .ri_detail_content {
          color: #000;
          font-size: 15px;
          a {
            display: inline-flex;
            color: red;
            font-size: 14px;
            padding-bottom: 5px;
          }
          p {
            line-height: 20px;
            font-size: 14px;
          }
        }
        .ri_detail_media {
        }
      }
    }
    .wb_detail_handle {
      border-top: 1px solid #f2f2f5;
      .wb_detail_handle_ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 38px;
        padding-top: 10px;
        padding-bottom: 10px;
        .wb_detail_handle_li {
          width: 150px;
          text-align: center;
          font-size: 12px;
          color: #808080;
          border-right: 1px solid #dadada;
        }
        .wb_detail_handle_li:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
