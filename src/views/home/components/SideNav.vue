<template>
  <div class="sidenav-content">
    <Logo/>
    <div class="nav">
      <router-link to="/">Meditate on the golden coast</router-link>
      <router-link to="/">SkyPixel Creator</router-link>
      <router-link to="/">Amoy, China</router-link>
      <a>Personal</a>
      <a>Contact</a>
    </div>
    <div class="icon">
      <a href="https://www.instagram.com/ecarry233/"><i class="ri-instagram-line"></i></a>
      <i class="ri-weibo-line"></i>
      <i class="ri-github-line"></i>
      <i class="ri-twitter-line"></i>
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
    a:-webkit-any-link{
      color: @font-base-color;
    }
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
