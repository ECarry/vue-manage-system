<template>
  <div class="list-card">
    <div class="list-card-operation">
      <el-button type="primary" size="medium" @click="dialogFormVisible = true">上传</el-button>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <!--====================UPLAOD DIALOG==========================-->
        <el-form :model="form">
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="拍摄时间" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.date"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="地点" :label-width="formLabelWidth">
            <el-input v-model="form.locale" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="简介" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="form.desc">
            </el-input>
          </el-form-item>
          <el-form-item label="上传" :label-width="formLabelWidth">
            <input type="file" ref="fileEle" accept="image/png,image/jpeg,image/jpg">
          </el-form-item>
          <el-form-item label="类型" :label-width="formLabelWidth">
              <el-select v-model="form.type" placeholder="请选择">
                <el-option
                  v-for="item in type"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleUpload()">确 定</el-button>
        </div>
      </el-dialog>
      <!----------------------END UPLAOD DIALOG-------------------------->
      <div class="search-input">
        <el-input
          placeholder="请输入搜索内容"
          prefix-icon="el-icon-search"
          size="medium">
        </el-input>
      </div>
    </div>
    <div class="list-card-items">
      <el-skeleton :loading="loading" animated :count="1" style="display: flex; flex-flow: row wrap; justify-content: space-between;" >
        <template slot="template">
          <el-skeleton-item variant="image" style="width: 250px; height: 250px;" />
          <div>
            <el-skeleton-item variant="h3" style="width: 120px" />
            <div
              style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px; width: 250px"
            >
              <el-skeleton-item variant="text" style="margin-right: 16px; width: 140px;" />
              <el-skeleton-item variant="text" style="width: 64px;" />
            </div>
          </div>
        </template>
        <template>
          <Card v-for="(photo, index) in photos" :key="index" :photo="photo" style="margin: 12px"/>
        </template>
      </el-skeleton>
    </div>
    <div class="list-card-pagination" v-if="!loading">
      <Pagination :pagination="pagination"/>
    </div>
  </div>
</template>
<script>
import Card from '@/components/card/index'
import Pagination from '@/components/pagination/index'

const TYPE = [
  {
    value: 1,
    label: 'sky'
  },
  {
    value: 2,
    label: 'person'
  }
]

export default {
  name: 'photo',
  components: {
    Card,
    Pagination
  },
  data () {
    return {
      loading: true,
      dialogFormVisible: false,
      formLabelWidth: '100px',
      imageUrl: '',
      photos: [],
      pagination: {
        total: ''
      },
      form: {
        name: '',
        date: '',
        locale: '',
        desc: '',
        image: '',
        type: ''
      },
      type: TYPE
    }
  },
  methods: {
    getPhotoData () {
      this.loading = true
      this.$request.get('http://127.0.0.1:8000/api/image')
        .then(
          res => {
            console.log('------------res-------------', res.data)
            this.photos = res.data.results
            this.pagination.total = res.data.count
            this.loading = false
          }
        )
        .catch(
          error => {
            console.log(error)
            this.loading = false
          }
        )
    },
    handleUpload () {
      const data = new FormData()
      const file = this.$refs.fileEle.files[0]
      data.append('name', this.form.name)
      data.append('shot_time', this.form.date)
      data.append('shot_local', this.form.locale)
      data.append('description', this.form.desc)
      data.append('image', file)
      data.append('type', Number(this.form.type))
      console.log(this.form.type)
      this.$request({
        url: 'http://127.0.0.1:8000/api/image',
        method: 'POST',
        data: data
      }).then(res => {
        console.log('---res---', res)
        this.dialogFormVisible = false
        this.$message.success('上传成功!')
      }).catch(error => {
        console.log('---error---', error)
        this.$message.error(error.message)
      })
    }
  },
  mounted () {
    this.getPhotoData()
  }
}
</script>
<style lang="less" scoped>
.list-card-operation {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  .search-input{
    width: 300px;
  }
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
