<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  beforeCreate () {
    document.title = this.$route.meta.title
  }
}
</script>
<style lang="">

</style>
