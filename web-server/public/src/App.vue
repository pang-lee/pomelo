<template>
  <div>
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </component>
    </transition>
  </div>
</template>

<script>
const default_layout = 'default'

module.exports = {
  computed: {
    layout(){
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  },
}
</script>

<style></style>