<template>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="photo.url" class="image">
    <div style="padding: 14px;">
      <span>{{ photo.name }}</span>
      <div class="bottom clearfix">
        <time class="time">{{ photo.date }}</time>
        <el-button type="text" class="button">操作按钮</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'card',
  props: ['photo']
}
</script>
<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
