<template>
  <div class="logo">
    <router-link to="/">
    <i class="ri-camera-2-line"></i>
    <span>ECarry</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'LogoComponent'
}
</script>

<style lang="less" scoped>
/* 文字基础颜色 覆盖颜色 */
@font-base-color: #4e5969;

@font-face {
  font-family: "Yellowtail";
  src: url("@/assets/fonts/Yellowtail-Regular.ttf");
}

.logo {
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  color: @font-base-color;
  font-family: 'Yellowtail', cursive;
  a:-webkit-any-link{
    color: @font-base-color;
  }
  cursor: pointer;
  .logo-icon {
    margin-right: 10px;
  }
  span{
    margin-left: 15px;
  &::selection{
     background: none;
   }
  }
}
</style>
