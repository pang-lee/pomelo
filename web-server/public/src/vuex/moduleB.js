const moduleB = {
  namespaced: true,
    state: () => ({
      count:5
    }),
    getters: {
      getcount(state){
          return state.count
      }
    },
}

module.exports = moduleB  