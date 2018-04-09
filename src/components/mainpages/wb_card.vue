<template>
  <div class="card">
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
</template>
<script>
import wb_json from "../../wb.json";
export default {
  data() {
    return {
      wb_card_rank: wb_json.wb_card_rank
    };
  }
};
</script>
<style lang="less" scoped>
.card {
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
</style>
