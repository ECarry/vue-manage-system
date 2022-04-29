<template>
  <div class="list-card">
    <div class="list-card-operation"></div>
    <div class="list-card-items">
      <el-skeleton :loading="loading" animated :count="1" style="display: flex; flex-flow: row wrap" >
        <template slot="template">
          <el-skeleton-item variant="image" style="width: 250px; height: 250px;" />
          <div>
            <el-skeleton-item variant="h3" style="width: 120px" />
            <div
              style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px; width: 250px"
            >
              <el-skeleton-item variant="text" style="margin-right: 16px; width: 140px;" />
              <el-skeleton-item variant="text" style="width: 64px;" />
            </div>
          </div>
        </template>
        <template>
          <Card v-for="(photo, index) in photos" :key="index" :photo="photo" style="margin: 12px"/>
        </template>
      </el-skeleton>
    </div>
    <div class="list-card-pagination" v-if="!loading">
      <Pagination :pagination="pagination"/>
    </div>
  </div>
</template>
<script>
import Card from '@/components/card/index'
import Pagination from '@/components/pagination/index'

export default {
  name: 'photo',
  components: {
    Card,
    Pagination
  },
  data () {
    return {
      loading: true,
      photos: [],
      pagination: {
        total: ''
      }
    }
  },
  methods: {
    getPhotoData () {
      this.loading = true
      this.$request.get('http://127.0.0.1:8000/api/image')
        .then(
          res => {
            console.log('------------res-------------', res.data)
            this.photos = res.data.results
            this.pagination.total = res.data.count
            this.loading = false
          }
        )
        .catch(
          error => {
            console.log(error)
            this.loading = false
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
