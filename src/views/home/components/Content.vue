<template>
  <div>
    <div class="img-content">
      <img :src="imgUrl" alt="" @click="handleClick">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      imgUrl: 'https://w.wallhaven.cc/full/8o/wallhaven-8oev1j.jpg'
    }
  }
}
</script>

<style lang="less" scoped>
/* 文字基础颜色 覆盖颜色 */
@font-base-color: #4e5969;
@font-hover-color: #1d2129;

  .img-content {
    width: calc(100vw - 360px);
    height: calc(100vh - 60px);
    background-color: rgb(250, 250, 253);
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      max-height: 100%;
      max-width: 100%;
      &:hover{
        cursor: pointer;
      }
    }
  }
</style>
