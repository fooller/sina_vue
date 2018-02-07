const state = {
  ios: true,
};

const mutations = {
  // 是否是ios
  ios(state, flag) {
    state.ios = flag;
  }
}

export default {
  state,
  mutations
}
