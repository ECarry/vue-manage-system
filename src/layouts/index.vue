<template>
  <el-container style="height:100%">
    <el-aside width="200px">
      <AsideComponent/>
    </el-aside>

    <el-container>
      <el-header>
        <HeaderComponent/>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
</el-container>
</template>
<script>
import AsideComponent from './components/AsideComponent'
import HeaderComponent from './components/HeaderComponent'

export default {
  name: 'layout',
  components: {
    AsideComponent,
    HeaderComponent
  }
}
</script>
<style lang="less">
.el-aside {
  border: none;
}
.el-header {
  background: rgb(60, 65, 69);
}
</style>
