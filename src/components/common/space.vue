<template>
  <div>
    这是一个模板
  </div>
</template>
<script>

import { Confirm, TransferDomDirective as TransferDom } from "vux";
import { http, getQueryString } from "../../utils/common";
export default {
  created() {
  },
  directives: {
    TransferDom
  },
  data() {
    return {
    };
  },
  components: {
    Confirm
  },
  methods: {
  }
};
</script>
<style lang="less">

</style>
