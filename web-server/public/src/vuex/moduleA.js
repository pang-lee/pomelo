const moduleA = {
  namespaced: true,
    state: () => ({
      count:2
    }),
    getters: {
      getcount(state){
          return state.count
      }
    },
}

module.exports = moduleA