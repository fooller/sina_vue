<template>
  <div>
    <el-menu :router="true" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <!-- <el-switch v-model="isCollapse" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
    <el-submenu index="1">
        <template slot="title">
        <i class="el-icon-picture"></i>
        <span slot="title">表单</span>
        </template>
        <el-menu-item-group>
        <span slot="title">文件</span>
        <el-menu-item index="fileUpload">文件上传</el-menu-item>
        <!-- <el-menu-item index="1-2">美丽的你</el-menu-item> -->
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu>
    <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item> -->
    <!-- <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
    </el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  created(){

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>


