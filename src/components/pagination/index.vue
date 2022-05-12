<template>
  <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[12, 24, 36, 48]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next"
      :total="pagination.total">
    </el-pagination>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'pagination',
  props: ['pagination'],
  computed: {
    ...mapState({
      currentPage: state => state.page.currentPage,
      pageSize: state => state.page.pageSize
    })
  },
  methods: {
    ...mapMutations({
      size: 'handleSizeChange',
      currentPageChange: 'handleCurrentChange'
    }),
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.size(val)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPageChange(val)
    }
  }
}
</script>
<style lang="less" scoped>
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
</style>
