<template>
  <div>
    ComponentC
    <router-link to="/index/a">To A</router-link>
    <router-link to="/index/b">To B</router-link>
  </div>
</template>

<script>
export default {
  name: 'component-C',
  created () {
    console.log('created ComponentC')
  },
  activated () {
    console.log('activated ComponentC')
  },
  deactivated () {
    console.log('deactivated ComponentC')
  },
  beforeDestroy () {
    console.log('beforeDestroy ComponentC')
  },
  destroyed () {
    console.log('destroyed ComponentC')
  }
}
</script>
