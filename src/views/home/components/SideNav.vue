<template>
  <div class="sidenav-content">
    <Logo/>
    <div class="nav">
      <router-link>Meditate on the golden coast</router-link>
      <router-link>SkyPixel Creator</router-link>
      <router-link>Nature</router-link>
      <a>Stereotype</a>
      <a>Invisible</a>
      <a>Amoy, China</a>
      <a>Contat</a>
    </div>
    <div class="icon">
      <i class="ri-instagram-line"></i>
      <i class="ri-weibo-line"></i>
      <i class="ri-github-line"></i>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logo/index'

export default {
  name: 'SideNav',
  components: {
    Logo
  }
}
</script>

<style lang="less" scoped>
/* 文字基础颜色 覆盖颜色 */
@font-base-color: #4e5969;
@font-hover-color: #1d2129;

  .nav {
    margin: 30px auto;
    a {
      display: block;
      line-height: 30px;
      font-size: 14px;
      color: @font-base-color;
      transition: color 0.3s ease;
      font-weight: 500;
      &:hover {
        cursor: pointer;
        color: @font-hover-color;
      }
      &::selection {
        background: none;
      }
    }
    a:last-child {
      margin-top: 50px;
    }
    a.active{
      cursor: pointer;
      color: @font-hover-color;
      font-weight: 600;
    }
  }
  .icon {
    font-size: 26px;
    color: @font-base-color;
    i {
      margin-right: 10px;
      &:hover{
        color: @font-hover-color;
        cursor: pointer;
      }
      &:visited{
        color: @font-base-color;
      }
    }
  }
</style>
