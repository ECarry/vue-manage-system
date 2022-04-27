import Mock from 'mockjs'
import dashboardApi from './dashboard'

Mock.setup({
  timeout: '200-2000'
})

Mock.mock(/\/dashboard\/getdata/, dashboardApi.getDashboardData)
