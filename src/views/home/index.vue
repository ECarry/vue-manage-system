<template>
  <div>
    <div class="sidenav">
      <SideNav/>
    </div>
    <div class="content">
      <Content/>
    </div>
  </div>
</template>

<script>
import SideNav from './components/SideNav'
import Content from './components/Content'

export default {
  name: 'home',
  components: {
    SideNav,
    Content
  }
}
</script>

<style lang="less">
.sidenav {
  position: fixed;
  width: 300px;
  height: 100%;
  left: 0;
  top: 0;
  padding: 30px 0 20px 40px;
}

.content {
  position: relative;
  left: 300px;
  padding: 30px;
  width: calc(100vw - 360px);
  height: calc(100vh - 60px);
  display: flex;
}

</style>
