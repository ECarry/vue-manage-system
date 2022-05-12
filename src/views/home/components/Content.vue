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
      imgUrl: '',
      images: []
    }
  },
  methods: {
    getPhotoData () {
      this.loading = true
      this.$request.get('http://127.0.0.1:8000/api/image')
        .then(
          res => {
            console.log('------------res-------------', res)
            this.images = res.results
            // const count = Math.ceil(Math.random() * (res.count + 1)) - 1
            this.imgUrl = res.results[10].image
          }
        )
        .catch(
          error => {
            console.log(error)
            this.loading = false
          }
        )
    },
    handleClick () {
      console.log('next')
      this.imgUrl = this.images[2].image
    }
  },
  created () {
    this.getPhotoData()
  }
}
</script>

<style lang="less" scoped>
/* 文字基础颜色 覆盖颜色 */
@font-base-color: #4e5969;
@font-hover-color: #1d2129;

.img-content {
  height: calc(100vh - 60px);
  width: calc(100vw - 370px);
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

@media screen and (max-width: 1200px) {
  .img-content{
    width: calc(100vw - 60px);
  }

}
</style>
