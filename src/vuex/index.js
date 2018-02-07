import Vue from 'vue';
import Vuex from 'vuex';
import asset from './assetapp/asset';


Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    asset:asset
  }
})
