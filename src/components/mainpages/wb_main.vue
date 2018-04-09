<template>
  <div class="wb" >
    <!-- 左边 -->
    <Nav></Nav>
    <!-- 中间和右边 -->
    <div class="wb_main">
      <!-- 中间 -->
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
          </div>
        </div>
        <div class="wb_main_c_homefeed">
          <div class="homefeed">
            <!-- 导航：全部、原创、图片、视频等。。。 -->
            <Tab></Tab>
            <!-- 列表 -->
            <Release :list="list"></Release>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="wb_main_r">
        <!-- 个人信息 -->
        <login-info></login-info>
        <!-- 卡片 -->
        <Card></Card>
      </div>
    </div>
  </div>
</template>
<script>
import emoji from "node-emoji";
import { release, list } from "../../api/assets.js";
import wb_json from "../../wb.json";
import Nav from '../mainpages/wb_nav';
import Tab from '../mainpages/wb_tab';
import Release from '../mainpages/wb_release';
import LoginInfo from '../mainpages/wb_logininfo';
import Card from '../mainpages/wb_card';
export default {
  components:{
    Release,Nav,Tab,LoginInfo,Card
  },
  data() {
    return {
      tab_list: wb_json.tab_list,
      menu_list: wb_json.menu_list,
      publish_text: "",
      menuVal: "公开",
      menu_show: false,
      face_show: false,
      colorBorder: false,
      list: [],
      tempt: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll_fn);
  },
  created() {
    list().then(res => {
      this.list = res.data;
    });
  },
  methods: {
    faceMouseOverFn(index) {
      this.$refs.faces[index].style.borderColor = "#f50";
      this.$refs.faces[index].style.borderStyle = "solid";
    },
    faceMouseLeaveFn(index) {
      this.$refs.faces[index].style.borderColor = "#cccccc";
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
      this.list.splice(0, 0, {content:this.publish_text,time:new Date().toString()});
      this.publish_text = "";
      console.log(this.list);
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
  
  background-color: rgb(180, 218, 240);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
 

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
      
      
    }
  }
}
</style>


