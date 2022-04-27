<template>
  <el-container style="height:100%">
    <el-aside width="auto">
      <AsideComponent/>
    </el-aside>

    <el-container>
      <el-header>
        <HeaderComponent/>
      </el-header>
      <TagComponent/>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
</el-container>
</template>
<script>
import AsideComponent from './components/AsideComponent'
import HeaderComponent from './components/HeaderComponent'
import TagComponent from './components/TagComponent.vue'

export default {
  name: 'layout',
  components: {
    AsideComponent,
    HeaderComponent,
    TagComponent
  }
}
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-aside {
  border: none;
}
.el-header {
  background: rgb(60, 65, 69);
}
</style>
