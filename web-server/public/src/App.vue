<template>
  <div>
    <navbar></navbar>
    <hr/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <hr/>
  </div>
</template>

<script>
const navbar = require('./components/navbar.vue')

module.exports = {
  name: 'app',
  components:{
    navbar
  }

}
</script>

<style></style>