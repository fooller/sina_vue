<template>
  <div>
    <el-upload
      action="loginuser/addPhoto"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :multiple="false">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <div class="container">
      <div class="sep" v-for="(item,index) in images" :key="index">
        <div class="list_item">
          <!-- <transition> -->
            <!-- <img :src="item" alt="" width="400" height="300"> -->
            <!-- <img src="../assets/images/WechatIMG8.jpg"> -->
            <div class="image-hover img-ellipse-square image" :class="{'img-ellipse-square-left':imgFlag}" @click.stop="imageClick"></div>
          <!-- </transition> -->
          <!-- <transition name="slide-fade"> -->
            <div class="comment image-hover" v-show="imgFlag">
              <div class="comment_list">
                <div class="comment_item" v-for="item in 10" :key="item">
                  <div class="left">
                    周明润
                  </div>
                  <div class="right">
                      111111111111
                  </div>
                </div>     
              </div>
              <div class="comment_button">
                <div class="left">
                  <input type="text" width="100" height="30"/>
                </div>
                <div class="rigth">
                  <el-button type="success" icon="el-icon-message" size="mini" round ></el-button>
                </div>
              </div>         
            </div>
          <!-- </transition> -->
        </div>
       </div>
    </div>
     
  </div>
</template>
<script>
import {findImg,addImg} from '../api/assets.js';
export default {
  data() {
    return {
      images:[],
      imgFlag: false,
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  created(){
    findImg().then(res => {
      console.log('回调成功');
      console.log(res.data);
      this.images = res.data;
    })
  },
  methods: {
    imageClick() {
      this.imgFlag = !this.imgFlag;
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
};
</script>
<style lang="less" scoped>
@import "../static/css/image.css";
.image {
  background: #ffffff url("../assets/images/dinner.jpeg") -100px -100px;
}
.sep {
  border: #ffffff 20px solid;
}

.list_item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .comment {
    width: 350px;
    height: 280px;
    background-color: #f50;
    align-items: center;
    margin-top: 80px;
    margin-right: 20px;
    transition: all 0.7s ease 0s;
    .comment_list {
      height: 230px;
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 30px;
      overflow-y: scroll;
      overflow-x: hidden;
      .comment_item {
        height: auto;
        margin: 5px;
        border-radius: 5px;
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        .left {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          background-color: #111111;
          color: #ffffff;
          font-size: 12px;
          line-height: 40px;
          text-align: center;
        }
        .right {
          height: auto;
          margin: 5px;
        }
      }
    }
    .comment_button {
      display: flex;
      flex-direction: row;
      position: relative;
      left: 5px;
      right: 0;
      bottom: 0;
      height: 30px;
      // background-color: #2c7e25;
      .left {
        input {
          border: none;
          border-radius: 5px;
          width: 250px;
          height: 28px;
          padding-left: 10px;
        }
      }
      .right {
        background-color: #ffffff;
        width: 100px;
        height: 30px;
        align-items: flex-end;
        margin-right: 0;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>


