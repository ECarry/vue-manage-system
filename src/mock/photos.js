import Mock from 'mockjs'

export default {
  getPhotoData: () => {
    return {
      code: 20000,
      data: [
        {
          name: '好吃的水果',
          date: Mock.Random.date('yyyy-MM-dd'),
          url: Mock.Random.image('250x250')
        },
        {
          name: '好吃的水果',
          date: Mock.Random.date('yyyy-MM-dd'),
          url: Mock.Random.image('250x250')
        },
        {
          name: '好吃的水果',
          date: Mock.Random.date('yyyy-MM-dd'),
          url: Mock.Random.image('250x250')
        },
        {
          name: '好吃的水果',
          date: Mock.Random.date('yyyy-MM-dd'),
          url: Mock.Random.image('250x250')
        },
        {
          name: '好吃的水果',
          date: Mock.Random.date('yyyy-MM-dd'),
          url: Mock.Random.image('250x250')
        },
        {
          name: '好吃的水果',
          date: Mock.Random.date('yyyy-MM-dd'),
          url: Mock.Random.image('250x250')
        },
        {
          name: '好吃的水果',
          date: Mock.Random.date('yyyy-MM-dd'),
          url: Mock.Random.image('250x250')
        }
      ]

    }
  }
}
