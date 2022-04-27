import Mock from 'mockjs'

export default {
  getDashboardData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: 'Js',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Python',
            value: Mock.Random.float(200, 6000, 0, 2)
          },
          {
            name: 'Java',
            value: Mock.Random.float(5000, 30000, 0, 2)
          },
          {
            name: 'Go',
            value: Mock.Random.float(200, 3000, 0, 2)
          },
          {
            name: 'PHP',
            value: Mock.Random.float(400, 5000, 0, 2)
          }
        ]
      }
    }
  }
}
