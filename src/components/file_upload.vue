<template>
  <div class="file_save">
    
    <div class="clickUp">
      <p>点击上传</p>
        <el-upload
            class="upload-demo"
            action="/loginuser/addPhoto"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
              multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
    </div>
    <div class="headImg">
      <p>用户头像上传</p>
      <el-upload
        class="avatar-uploader"
        action="/loginuser/addPhoto"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="imgWall">
      <p>照片墙</p>
      <el-upload
        action="/loginuser/addPhoto"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="fileList">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>

    <div class="imgList">
      <p>图片列表缩略图</p>
      <el-upload
        class="upload-demo"
        action="/loginuser/addPhoto"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>

    <div class="unAutoUpload">
      <p>手动上传</p>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="/loginuser/addPhoto"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>
<script>
import { addPhoto, findImg, delFile } from "../api/assets.js";
export default {
  data() {
    return {
      fileList: [],
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    /*
      点击上传方法开始
    */
    handleRemove(file, fileList) {
      console.log("删除文件");
      let data = {
        id: file.id,
        name: file.name,
        path: file.path,
        type: file.type
      };
      delFile(data).then(res => {});
    },
    handlePreview(file) {
      console.log(file);
      console.log("点击文件，进行预览");
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      console.log("上传成功的");
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    /*
      点击上传方法结束
    */

    /*
      头像上传开始
    */
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    /*
      头像上传结束
    */

    /*
      照片墙方法开始
    */
    handleRemove(file, fileList) {
      console.log(file, fileList);
      console.log("删除文件");
      let data = {
        id: file.id,
        name: file.name,
        path: file.path,
        type: file.type
      };
      delFile(data).then(res => {});
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log("图片预览");
    },
    /*
      照片墙方法结束
    */

    submitUpload() {
      this.$refs.upload.submit();
    }
  },
  mounted() {
    findImg().then(res => {
      this.fileList = res.data;
    });
  }
};
</script>
<style lang="less" scoped>
.file_save {
  display: flex;
  flex-direction: column;
}
.clickUp {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-radius: 13px;
  padding: 15px;
  margin-bottom: 20px;
  color: #409eff;
  p {
    display: block;
    padding-bottom: 10px;
  }
}
.headImg {
  p {
    display: block;
    padding: 15px 0 15px 0;
  }
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 13px;
  color: #409eff;
  margin-bottom: 20px;
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #7d9dc9;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    border: 1px dashed #d9d9d9;
  }
}
.imgWall {
  p {
    display: block;
    padding-bottom: 15px;
  }
  padding: 15px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #409eff;
  border-radius: 13px;
  margin-bottom: 20px;
}
.imgList {
  p {
    display: block;
    padding-bottom: 15px;
  }
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 13px;
  padding: 15px;
  color: #409eff;
  margin-bottom: 20px;
}
.unAutoUpload {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 13px;
  color: #409eff;
  p{
    display: block;
    padding-bottom: 15px;
  }
}
</style>

