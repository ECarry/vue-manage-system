<template>
  <div>
    <h1>User</h1>
  </div>
</template>
<script>
export default {
  name: 'user',
  beforeCreate () {
    document.title = this.$route.meta.title
  }
}
</script>
<style lang="">

</style>
