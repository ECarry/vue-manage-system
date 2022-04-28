<template>
  <div class="card-content">
    <el-row type="flex" style="flex-wrap: wrap">
      <el-col :span="4" v-for="(photo, index) in photos" :key="index" :offset="index > 0 ? 1 : 0">
        <Card :photo="photo"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Card from '@/components/card/index'

export default {
  name: 'cloudHost',
  components: {
    Card
  },
  data () {
    return {
      photos: {}
    }
  },
  methods: {
    getPhotoData () {
      this.$request.get('/api/photo')
        .then(
          res => {
            this.photos = res.data.data
          }
        )
    }
  },
  mounted () {
    this.getPhotoData()
  }
}
</script>
<style lang="less">

</style>
