<template>
  <div class="tag">
    <el-tag
    :key="tag.name"
    v-for="tag in tags"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)">
    {{ tag.label }}
  </el-tag>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Tag',
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    handleClose (tag) {
      this.close(tag)
    }
  }
}
</script>
<style lang="less" scoped>
.tag {
  height: 60px;
  display: flex;
  align-items: center;
  .el-tag {
    margin: 0 10px;
  }
}
</style>
