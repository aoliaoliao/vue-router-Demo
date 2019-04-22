<template>
  <div>
    ComponentB
  </div>
</template>

<script>
export default {
  name: 'component-B',
  created () {
    console.log('created ComponentB')
  },
  activated () {
    console.log('activated ComponentB')
  },
  deactivated () {
    console.log('deactivated ComponentB')
  },
  beforeDestroy () {
    console.log('beforeDestroy ComponentB')
  },
  destroyed () {
    console.log('destroyed ComponentB')
  }
}
</script>
