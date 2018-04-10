<template>
  <div class="nav">
      <div id="lflf" ref="lf"  class="nav_item">
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
</template>
<script>
import wb_json from "../../wb.json";
export default {
  data() {
    return {
      tab_list: wb_json.tab_list
    };
  }
};
</script>
<style lang="less" scoped>
.nav {
  .nav_item {
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
</style>

