<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-image :src="photo.image" style="width: 250px; height: 250px" fit="cover" lazy></el-image>
    <div style="padding: 14px;">
      <span>{{ photo.name }}</span>
      <div class="bottom clearfix">
        <time class="time">{{ photo.shot_time }}</time>
        <el-popconfirm
          title="确定删除吗？"
        >
          <el-button slot="reference" type="text" class="button"><i class="el-icon-delete"></i></el-button>
        </el-popconfirm>
        <el-button type="text" class="button"><i class="el-icon-edit"></i></el-button>
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

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
