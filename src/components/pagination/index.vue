<template>
  <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[12, 24, 36, 48]"
      :page-size="12"
      layout="total, sizes, prev, pager, next"
      :total="pagination.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'pagination',
  props: ['pagination'],
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
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
