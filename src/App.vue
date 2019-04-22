<template>
  <div id="app">
    <img src="./assets/logo.png">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div>
      一级路由：
      {{ $route.name}} : {{ $route.meta.keepAlive }}
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log('created App')
  },
  activated () {
    console.log('activated App')
  },
  deactivated () {
    console.log('deactivated App')
  },
  beforeDestroy () {
    console.log('beforeDestroy App')
  },
  destroyed () {
    console.log('destroyed App')
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
