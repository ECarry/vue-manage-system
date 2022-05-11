<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    >
    <Logo style="margin: 30px"/>
    <el-menu-item :index="menu.path" v-for="menu in noChildrenMenu" :key="menu.path" @click="clickMenu(menu)">
      <i :class="'ri-' + menu.icon"></i>
      <span slot="title">{{ menu.label }}</span>
    </el-menu-item>

    <el-submenu :index="menu.path" v-for="menu in hasChildrenMenu" :key="menu.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ menu.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="menu.path + item.path" v-for="item in menu.children" :key="item.path" @click="clickMenu(item)">{{ item.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>
<script>
import Logo from '@/components/logo/index'
export default {
  name: 'Aside',
  components: {
    Logo
  },
  data () {
    return {
      asideMenu: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          label: '控制面板',
          icon: 'dashboard-line'
        },
        {
          path: '/admin/photo',
          name: 'photo',
          label: '我的相册',
          icon: 'camera-line'
        },
        {
          path: '/admin/user',
          name: 'user',
          label: '用户中心',
          icon: 'user-line'
        }
      ]
    }
  },
  computed: {
    // 过滤无子菜单的目录
    noChildrenMenu () {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildrenMenu () {
      return this.asideMenu.filter(item => item.children)
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    }
  },
  methods: {
    clickMenu (item) {
      this.$store.commit('selectMenu', item)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
.el-menu {
  height: 100%;
  i{
    font-size: 18px;
    margin-right: 10px;
  }
}
.el-menu-vertical-demo {
  border: none;
}
</style>
