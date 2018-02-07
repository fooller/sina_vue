<template>
  <div class="mainpage">
    <header>
      <div class="headImage">
        <img src="../assets/images/dinner.jpeg" width="50" height="50" alt="">
      </div>
    </header>
    <div class="body">
      <tab></tab>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>
<script>
import tab from "../components/maintab.vue";
export default {
  components: {
    tab
  },
  data(){
    return {
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
    }
  }
};
</script>
<style lang="less" scoped>
@import "mainpage.less";
</style>


