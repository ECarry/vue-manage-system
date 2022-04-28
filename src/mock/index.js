import Mock from 'mockjs'
import dashboardApi from './dashboard'
import photosApi from './photos'

Mock.setup({
  timeout: '200-2000'
})

// get /dashboard/getdata
Mock.mock(/\/dashboard\/getdata/, dashboardApi.getDashboardData)
// get /api/photo
Mock.mock(/\/api\/photo/, photosApi.getPhotoData)
