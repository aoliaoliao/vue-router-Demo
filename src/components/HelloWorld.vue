<template>
  <div class="hello">
    <router-view></router-view>
    <router-link to="/index/a">To A</router-link>
    <router-link to="/index/b">To B</router-link>
    <router-link to="/c">To C</router-link>

    <div>
      二级路由：
      {{ $route.name}} : {{ $route.meta.keepAlive }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    console.log('created helloworld')
  },
  activated () {
    console.log('activated helloworld')
  },
  deactivated () {
    console.log('deactivated helloworld')
  },
  beforeDestroy () {
    console.log('beforeDestroy helloworld')
  },
  destroyed () {
    console.log('destroyed helloworld')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
