<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-image :src="photo.image" style="width: 250px; height: 250px" fit="cover" lazy></el-image>
    <div style="padding: 14px;">
      <span>{{ photo.name }}</span>
      <div class="bottom clearfix">
        <time class="time">{{ photo.shot_time }}</time>
        <el-popconfirm
          confirm-button-text='好的'
          cancel-button-text='不用了'
          icon="el-icon-info"
          icon-color="red"
          title="确定删除吗？"
          @confirm="handlerDelete(photo.id)"
          @cancel="handlerCancel()"
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
  props: ['photo'],
  methods: {
    handlerDelete (id) {
      console.log('----------ID-----------', id)
      this.$request.delete('http://127.0.0.1:8000/api/image/' + id)
        .then(
          res => {
            this.$message.success('删除成功!')
          }
        )
    },
    handlerCancel () {
      this.$message.info('取消删除!')
    }
  }
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
