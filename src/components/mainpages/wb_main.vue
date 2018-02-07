<template>
  <div class="wb" >
    <div class="wb_nv">
      <div id="lflf" ref="lf" @scroll="scroll_fn" class="wb_nav_item">
        <div class="nav_box">
          首页
        </div>
        <div class="nav_box">
          我的收藏
        </div>
        <div class="nav_box">
          我的赞
        </div>
        <div class="nav_box line">
          <fieldset>
            <legend>
              <!-- <a>设置</a> -->
            </legend>
          </fieldset>
        </div>
        <div class="nav_box">
          热门微博
        </div>
        <div class="nav_box">
          热门视频
        </div>
        <div class="nav_box line">
          <fieldset>
            <legend>
              <a><i class="iconfont icon-set"></i></a>
            </legend>
          </fieldset>
        </div>
        <div class="nav_box">
          好友圈
        </div>
        <div class="nav_box">
          特别关注
        </div>
        <div class="nav_box">
          V+微博
        </div>
        <div class="nav_box">
          游戏
        </div>
        <div class="nav_box">
          群微博
        </div>
        <div class="nav_box">
          悄悄关注
        </div>
      </div>
    </div>
    <div class="wb_main">
      <div class="wb_main_c">
        <div class="wb_main_c_publishertop">
          <div class="publisher_t">
            <div class="t_p">
              <p>有什么新鲜事想告诉大家？</p>
            </div>
            <div class="t_a_c">
              <a>世界再大也要回家！你的#春运2018#有什么故事呢>></a>
            </div>
            <div>
              <a>热门微博</a>
            </div>
          </div>
          <div class="publisher_c">
            <textarea class="publisher_c_textarea"></textarea>
          </div>
          <div class="publisher_b">
            <div class="kind">
              <a><i style="color:#ffa405" class="iconfont icon-biaoqing"></i>表情</a>
              <a><i style="color:#84c002" class="iconfont icon-tupian"></i>图片</a>
              <a><i style="color:#54A8E5" class="iconfont icon-shipin1"></i>视频</a>
              <a><i style="color:#54A8E5" class="iconfont icon-huati"></i>话题</a>
              <a><i style="color:#ffa405" class="iconfont icon-shandian"></i>头条文章</a>
              <a>...</a>
            </div>
            <div class="func">
              <span>公开</span>
              <span><i class="iconfont icon-jiantou-copy-copy"></i></span>
              <a>发布</a>
              <div class="menu_list">
                <ul>
                  <li>公开</li>
                  <li>好友圈</li>
                  <li>仅自己可见</li>
                  <li>群可见</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="wb_main_c_homefeed">
          <div class="homefeed">
            <div class="wb_tab">
              <div class="wb_tab_ul">
                <ul>
                  <li><span><a>全部</a></span><span><i class="iconfont icon-sanjiaotop"></i></span></li>
                  <li><span><a>原创</a></span><span><i class="iconfont icon-sanjiaotop"></i></span></li>
                  <li><span><a>图片</a></span><span><i class="iconfont icon-sanjiaotop"></i></span></li>
                  <li><span><a>视频</a></span><span><i class="iconfont icon-sanjiaotop"></i></span></li>
                  <li><span><a>音乐</a></span><span><i class="iconfont icon-sanjiaotop"></i></span></li>
                  <li><span><a>文章</a></span><span><i class="iconfont icon-sanjiaotop"></i></span></li>
                </ul>
              </div>
              <div class="wb_tab_search">
                <div class="search">
                  <input type="search">
                  <span><i class="iconfont icon-sousuo"></i></span>
                  <span><i class="iconfont icon-triangle-bottom"></i></span>
                </div>
              </div>
            </div>
            <div class="wb_main_c_list">
                <div class="list_item">
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
                      <p>随飞机奔跑空投是方向，追逐98K和八倍镜的力量！今夜我们都是追梦人~
                          转发评论微博，即有机会获得Miss定制版雷柏V760机械键盘（3个名额） ​​​​</p>
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
          </div>
        </div>
      </div>
      <div class="wb_main_r">
        <div class="wb_main_r_login">
          <div class="login_top">
            <img src="../../assets/images/miss.jpg" width="60" height="60">
          </div>
          <div class="login_bottom">
            <div class="name_box">
              <a>一封写个自己的信toMe</a>
              <a><i class="iconfont"></i></a>
              <a></a>
            </div>
            <ul>
              <li>
                <strong>6</strong>
                <span>关注</span>
              </li>
              <li>
                <strong>5</strong>
                <span>粉丝</span>
              </li>
              <li>
                <strong>13</strong>
                <span>微博</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="wb_card_rank">
          <div class="card_title">
            <h4>
              <span><a>亚洲动漫排行榜</a></span>
              <div>
                <a><i></i>换一换</a>
              </div>
            </h4>
          </div>
          <div class="card_list">
            <ul>
              <li>
                <i>1</i>
                <span>凤囚凰</span>
              </li>
              <li>
                <i>2</i>
                <span>19天</span>
              </li>
              <li>
                <i>3</i>
                <span>天行九歌</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab_list: [
        { item_name: "首页" },
        { item_name: "我的收藏" },
        { item_name: "我的赞" },
        { item_name: "一个横线" },
        { item_name: "热门微博" },
        { item_name: "热门视频" },
        { item_name: "好友圈" },
        { item_name: "特别关注" },
        { item_name: "v+微博" },
        { item_name: "游戏" },
        { item_name: "群关注" },
        { item_name: "悄悄关注" }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll_fn);
  },
  methods: {
    scroll_fn() {
      console.log(document.documentElement.scrollTop);
      console.log(document.getElementById("lflf").scrollTop);
    }
  }
};
</script>
<style lang="less" scoped>
.wb {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(180, 218, 240);
  .wb_nv {
    .wb_nav_item {
      color: #ffffff;
      font-size: 12px;
      position: fixed;
      top: 60px;
      bottom: 0;
      width: 150px;
      background-color: rgba(70, 149, 194, 0.3);
      height: 100%;
      .nav_box {
        width: 150px;
        height: 30px;
        padding-left: 34px;
        line-height: 30px;
      }
      .line {
        height: 12px;
        padding-left: 0;
        height: 23px;
        fieldset {
          display: block;
          padding: 0 0 0 120px;
          zoom: 1;
          clear: both;
          border-top-width: 1px;
          border-top-style: solid;
          border-top-color: rgba(255, 255, 255, 0.2);
          line-height: 22px;
          legend {
            a {
              i {
                color: #ffffff;
                font-weight: 1000px;
              }
            }
          }
        }
      }
    }
  }

  .wb_main {
    margin-top: 60px;
    margin-left: 150px;
    width: 850px;
    background-color: rgba(70, 149, 194, 0.3);
    display: flex;
    flex-direction: row;
    .wb_main_c {
      width: 600px;
      height: 100%;
      .wb_main_c_publishertop {
        width: 600px;
        height: 165px;
        background-color: #ffffff;
        padding: 10px;
        border-radius: 5px;
        .publisher_t {
          height: 20px;
          color: blue;
          font-size: 13px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .t_p {
            flex-grow: 0.4;
          }
          .t_a_c {
            flex-grow: 0.4;
          }
          .t_a_r {
            flex-grow: 0.2;
          }
          a {
            color: #f50;
            font-size: 13px;
          }
          a:last-child {
            // float: right;
          }
        }
        .publisher_c {
          border: 1px solid #cccccc;
          padding: 5px;
          .publisher_c_textarea {
            height: 68px;
            width: 568px;
            margin: 0;
            padding: 0;
            border-style: none;
            border-width: 0px;
            font-size: 14px;
            line-height: 18px;
            overflow: hidden;
            outline: none;
            word-wrap: break-word;
          }
        }
        .publisher_b {
          display: flex;
          flex-direction: row;
          .kind {
            flex-grow: 0.65;
            height: 24px;
            line-height: 24px;
            padding-top: 20px;

            a {
              display: inline-block;
              font-size: 12px;
              margin: 0 18px 0 0;
              color: #333;
              vertical-align: middle;
              i {
                vertical-align: middle;
                padding-right: 5px;
                font-size: 20px;
              }
            }
          }
          .func {
            flex-grow: 0.35;
            display: flex;
            justify-content: flex-end;
            position: relative;
            span {
              padding-top: 22px;
              font-size: 13px;
              width: 30px;
              i {
              }
            }
            a {
              // 发布
              margin: 12px 0 0 5px;
              width: 80px;
              height: 30px;
              text-align: center;
              background-color: rgb(255, 190, 162);
              line-height: 30px;
              color: #ffffff;
              border-radius: 3px;
            }
            .menu_list {
              position: absolute;
              top: 40px;
              left: -20px;
              ul {
                background-color: rgba(255, 255, 255, 1);
                border: 1px solid #cccccc;
                width: 100px;
                box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
                li {
                  font-size: 12px;
                  padding: 7px 10px;
                  height: 30px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
      .wb_main_c_homefeed {
        .homefeed {
          margin: 10px 0;
          .wb_tab {
            display: flex;
            flex-direction: row;
            height: 38px;
            background-color: #ffffff;
            border-radius: 5px;
            .wb_tab_ul {
              flex-grow: 0.5;
              ul {
                display: flex;
                flex-direction: row;
                font-size: 12px;
                li {
                  display: flex;
                  flex-direction: column;
                  width: 52px;
                  padding-left: 14px;
                  span {
                    height: 31px;
                    line-height: 37px;
                    a {
                      color: #333;
                    }
                  }
                  span:last-child {
                    height: 10px;
                    line-height: 10px;
                    i {
                      color: rgb(135, 199, 255);
                      font-size: 22px;
                    }
                  }
                }
              }
            }
            .wb_tab_search {
              .search {
                input[type="search"] {
                  -webkit-appearance: none;
                }
                input::-webkit-search-cancel-button {
                  display: none;
                }
                input {
                  font-size: 14px;
                  color: #888888;
                  height: 26px;
                  width: 178px;
                  line-height: 26px;
                  padding-left: 10px;
                }
                border: 1px solid #cccccc;
                margin-top: 6px;
                span {
                  i {
                    font-size: 14px;
                  }
                }
                span:last-child {
                  i {
                    font-size: 13px;
                    color: #333;
                  }
                }
              }
            }
          }
        }
      }
      .wb_main_c_list {
        margin: 10px 0;
        background-color: #ffffff;
        height: 100%;
        width: 600px;
        height: auto;
        padding: 20px 20px 0 20px;
        border-radius: 5px;
        .list_item {
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
    .wb_main_r {
      .wb_main_r_login {
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
      .wb_card_rank {
        margin: 10px 0 0 10px;
        height: 281px;
        width: 230px;
        border-radius: 5px;
        background-color: #ffffff;
        .card_title {
          height: 39px;
          border-bottom: 1px solid #f2f2f5;
          padding: 0 16px;
          line-height: 39px;
          h4 {
            display: flex;
            justify-content: space-between;
            color: #333;
            span {
              a {
                color: #f50;
                font-size: 13px;
              }
            }
            div {
              a {
                font-size: 10px;
              }
            }
          }
        }
        .card_list {
          ul {
            li {
              height: 49px;
              line-height: 49px;
              border-bottom: 1px solid #f2f2f5;
              padding-left: 16px;
              i {
                background-color: #f50;
                display: inline-block;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                color: #ffffff;
                text-align: center;
                line-height: 14px;
                vertical-align: middle;
                margin-right: 5px;
                font-size: 10px;
              }
              span{
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
}
</style>


