<template>
  <div>
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
const navbar = require('./components/navbar.vue')

module.exports = {
  components:{
    navbar
  }

}
</script>

<style></style>