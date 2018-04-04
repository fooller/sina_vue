<template>
  <div class="wb" >
    <div class="wb_nv">
      <div id="lflf" ref="lf" @scroll="scroll_fn" class="wb_nav_item">
        <div class="nav_box" :class="{line:index ==3 || index == 7}" v-for="(item,index) in tab_list" :key="index">
          <div v-show="index != 3 && index != 7">
            {{item.item_name}}
          </div>          
          <fieldset>
            <legend  v-show="index == 3" style="padding-bottom:20px;">
              <!-- <a>设置</a> -->
            </legend>
            <legend v-show="index == 7">
              <a><i class="iconfont icon-set"></i></a>
            </legend>
          </fieldset>
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
          <div class="publisher_c" :class="{publisher_c_color:colorBorder}">
            <textarea ref="textarea" @focus="colorBorder=true" @blur="colorBorder=false" v-model="publish_text" class="publisher_c_textarea"></textarea>
          </div>
          <div class="publisher_b">
            <div class="kind">
              <a @click="faceFn"><i style="color:#ffa405" class="iconfont icon-biaoqing"></i>表情</a>
              <a><i style="color:#84c002" class="iconfont icon-tupian"></i>图片</a>
              <a><i style="color:#54A8E5" class="iconfont icon-shipin1"></i>视频</a>
              <a><i style="color:#54A8E5" class="iconfont icon-huati"></i>话题</a>
              <a><i style="color:#ffa405" class="iconfont icon-shandian"></i>头条文章</a>
              <a>...</a>
            </div>
            <div class="func">
              <span @click='menuShowFn'>{{menuVal}}</span>
              <span><i @click='menuShowFn' class="iconfont icon-jiantou-copy-copy"></i></span>
              <a @click.stop = "publish">发布</a>
              <div class="menu_list" v-show="menu_show">
                <ul>
                  <li @click.stop="menuClick(item)" v-for="(item,index) in menu_list" :key="index">{{item.value}}</li>
                </ul>
              </div>
            </div>
            <div class="face" v-show="face_show">
                <div class="sj">
                  <i class="iconfont icon-sanjiaotop"></i>
                </div>
                <div class="faces_box">
                  <div class="faces">
                    <ul>
                      <li ref="faces" @mouseleave="faceMouseLeaveFn(index)" @mouseover="faceMouseOverFn(index)" @click="selFace(item)" v-for="(item,index) in 96" :key="index"><i class="em em-baby"></i></li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="wb_main_c_homefeed">
          <div class="homefeed">
            <div class="wb_tab">
              <div class="wb_tab_ul">
                <ul>
                  <li v-for="(item,index) in wb_tab_ul_list" :key="index" ><span><a>{{item.item_name}}</a></span><span><i class="iconfont icon-sanjiaotop"></i></span></li>
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
                <div class="list_item" v-for="(item,index) in list" :key="index">
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
        <div class="wb_card_rank">
          <div class="card_title">
            <h4>
              <span><a>{{wb_card_rank.card_title.title}}</a></span>
              <div>
                <a><i></i>{{wb_card_rank.card_title.button}}</a>
              </div>
            </h4>
          </div>
          <div class="card_list">
            <ul>
              <li v-for="(item,index) in wb_card_rank.card_list" :key="index">
                <i>{{item.order}}</i>
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emoji from "node-emoji";
import { release, list } from "../../api/assets.js";
import wb_json from '../../wb.json';
export default {
  data() {
    return {
      tab_list: wb_json.tab_list,
      menu_list: wb_json.menu_list,
      wb_tab_ul_list:wb_json.wb_tab_ul_list,
      login_bottom:wb_json.login_bottom,
      wb_card_rank:wb_json.wb_card_rank,
      publish_text: "",
      menuVal: "公开",
      menu_show: false,
      face_show: false,
      colorBorder: false,
      list: []
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll_fn);
  },
  created() {
    let emoji_coffee = emoji.get("coffee");
    console.log(emoji_coffee);
    list().then(res => {
      this.list = res.data;
    });
  },
  methods: {
    faceMouseOverFn(index) {
      // console.log(this.$refs.faces[index]);
      this.$refs.faces[index].style.borderColor = "#f50";
      // this.$refs.faces[index].style.borderWidth = '1px';
      this.$refs.faces[index].style.borderStyle = "solid";
    },
    faceMouseLeaveFn(index) {
      this.$refs.faces[index].style.borderColor = "#cccccc";
      // this.$refs.faces[index].style.borderRight = 'none';
      // this.$refs.faces[index].style.borderTop = 'none';
    },
    selFace(item) {
      this.face_show = false;
    },
    faceFn() {
      this.face_show = !this.face_show;
    },
    menuShowFn() {
      this.menu_show = !this.menu_show;
    },
    menuClick(item) {
      this.menu_show = false;
      this.menuVal = item.value;
    },
    scroll_fn() {
      console.log(document.documentElement.scrollTop);
      console.log(document.getElementById("lflf").scrollTop);
    },
    // 发布
    publish() {
      if (!this.publish_text) {
        this.timeOutBKG(100);
        return;
      }
      let formdata = new FormData();
      formdata.append("content", this.publish_text);
      formdata.append("userId", this.$cookie.get("id"));
      formdata.append("file", null);
      release(formdata).then(res => {
        console.log(res);
      });
      console.log("发布内容为：" + this.publish_text);
      this.publish_text = "";
      this.list.push({ content: this.publish_text });
    },

    // utils .....................//
    // 自定义时间，改变背景色
    timeOutBKG(time) {
      let i = 0;
      setInterval(() => {
        if (i == 0) {
          this.$refs.textarea.style.backgroundColor = "rgb(255,238,238)";
        } else if (i == 1) {
          this.$refs.textarea.style.backgroundColor = "rgb(255,204,204)";
        } else if (i == 2) {
          this.$refs.textarea.style.backgroundColor = "rgb(255,221,221)";
        } else if (i == 3) {
          this.$refs.textarea.style.backgroundColor = "rgb(255,238,238)";
        } else if (i == 4) {
          this.$refs.textarea.style.backgroundColor = "rgb(255,255,255)";
        }
        i++;
        if (i == 4) {
          return;
        }
      }, time);
    }
  }
};
</script>
<style lang="less" scoped>
.wb {
  background-color: rgb(180, 218, 240);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
          .publisher_c_textarea_1 {
            background-color: blueviolet;
          }
          .publisher_c_textarea_2 {
            background-color: beige;
          }
          .publisher_c_textarea_3 {
            background-color: aqua;
          }
          .publisher_c_textarea_4 {
            background-color: blueviolet;
          }
        }
        .publisher_c_color {
          border: 1px solid #fa7d3c;
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
              // width: 30px;
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
          .face {
            position: relative;
            .sj {
              position: absolute;
              top: 35px;
              left: -560px;
              i {
                color: #f50;
                font-size: 30px;
                border-width: 7px;
              }
            }
            .faces_box {
              position: absolute;
              top: 50px;
              left: -580px;
              // left: 10px;
              width: 420px;
              height: 300px;
              border: 1px solid #cccccc;
              background-color: #ffffff;
              .faces {
                padding: 26px 16px 15px;
                ul {
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  li {
                    width: 32px;
                    height: 32px;
                    border-left: 1px solid #cccccc;
                    border-bottom: 1px solid #cccccc;
                    text-align: center;
                    padding-top: 5px;
                  }
                  li:nth-child(12n) {
                    border-right: 1px solid #cccccc;
                  }
                  li:nth-child(1) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(2) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(3) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(4) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(5) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(6) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(7) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(8) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(9) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(10) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(11) {
                    border-top: 1px solid #cccccc;
                  }
                  li:nth-child(12) {
                    border-top: 1px solid #cccccc;
                  }
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
              span {
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


