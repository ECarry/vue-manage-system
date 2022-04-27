<template>
  <header>
    <div class="left-content">
      <i class="el-icon-s-unfold" @click="collapseMenu" v-if="isCollapse"></i>
      <i class="el-icon-s-fold" @click="collapseMenu" v-else></i>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">控制面板</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: currentMenu.name }" v-if="currentMenu">{{ currentMenu.label }}</el-breadcrumb-item>
      </el-breadcrumb>

    </div>

    <div class="right-content">
      <el-dropdown>
        <el-avatar :src="Avator"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      Avator: require('@/assets/avator.png')
    }
  },
  computed: {
    ...mapState({
      currentMenu: state => state.tab.currentMenu,
      isCollapse: state => state.tab.isCollapse
    })
  },
  methods: {
    collapseMenu () {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>
<style lang="less" scoped>
header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-content{
    display: flex;
    align-items: center;
    i{
    color: rgb(89, 94, 98);
    font-size: 22px;
    cursor: pointer;
    margin-right: 20px;
    &:hover{
      color: #fff;
    }
    }
  }
  .right-content {
    display: flex;
    align-items: center;
    .el-avatar{
      cursor: pointer;
    }
  }
}
</style>

<style lang="less">
.el-breadcrumb{
  .el-breadcrumb__item {
    .el-breadcrumb__inner {
      color: rgb(89, 94, 98);
      &:hover {
        color: #fff;
      }
    }
    &:last-child {
      .el-breadcrumb__inner {
        color: #409EFF;
        &:hover {
          color: #fff;
        }
      }
  }
  }
}

</style>
