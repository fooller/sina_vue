<template>
  <div class="tab">
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
</template>
<script>
import wb_json from "../../wb.json";
export default {
  data() {
    return {
      wb_tab_ul_list: wb_json.wb_tab_ul_list
    };
  }
};
</script>
<style lang="less" scoped>
.tab {
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
</style>


