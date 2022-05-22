<template>
  <div class="login-container">
    <div class="login-form">
      <div class="left-content">
        <video :src="video" muted loop autoplay></video>
      </div>
      <div class="right-content">
        <div class="title">LOG IN</div>
        <div class="form">
        <label>USERNAME</label>
        <input type="text" v-model="form.username">
        <label>PASSWORD</label>
        <input type="password" v-model="form.password">
        </div>
        <button @click="handleLogin" v-if="isLoading"><i class="el-icon-loading"></i></button>
        <button @click="handleLogin" v-else>LOG IN</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      video: require('@/assets/video.mp4'),
      isLoading: false,
      form: {
        username: 'ecarry',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['setUsername', 'setToken', 'setRefresh']),
    handleLogin () {
      this.isLoading = true

      const data = { ...this.form }

      this.$request.post('http://127.0.0.1:8000/api/login/', data)
        .then(res => {
          console.log(res)
          this.setUsername(res.username)
          this.setToken(res.access)
          this.setRefresh(res.refresh)
          this.$router.push('/admin')
        })
        .then(error => {
          console.log(error)
        })
    }
  },
  beforeCreate () {
    console.log(this.$route.meta.title)
    document.title = this.$route.meta.title
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  .login-form {
    width: 1100px;
    height: 660px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(255,255,255,0.2);
    display: flex;
    overflow: hidden;
    .left-content {
      width: 600px;
      height: 660px;
      video{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right-content {
      width: 500px;
      height: 660px;
      background: #fff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 80px;
      .title {
        font-size: 38px;
        color: #69bff8;
        text-align: center;
        font-weight: 500;
        margin-bottom: 30px;
      }
      .form {
        label {
          font-size: 14px;
          display: block;
          text-align: center;
          color: #69bff8;
          margin: 20px auto;
        }
        input {
          width: 100%;
          height: 30px;
          outline: none;
          border: none;
          color: #c777b9;
          background-color: transparent;
          border-bottom: solid 1px #69bff8;
          text-align: center;
          &:focus{
            border-bottom: solid 2px #c777b9;
          }
        }
      }
      button {
        margin-top: 50px;
        height: 40px;
        outline: none;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 22px;
        color: #fff;
        background-image: linear-gradient(120deg, #76daec 0%, #c5a8de 100%);
        &:hover {
          box-shadow: 0 0 2px rgba(0,0,0,0.1);
        }
      }
    }
  }
}

@media only screen and (max-width: 700px){
  .login-form{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    .left-content{
      display: none;
    }
    .right-content{
      border-radius: 20px;
      height: 400px;
    }
  }
}
</style>
