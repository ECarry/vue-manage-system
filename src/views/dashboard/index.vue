<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  methods: {
    getDate () {
      this.$request.get('/dashboard/getdata')
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.getDate()
  }
}
</script>
<style lang="">

</style>
