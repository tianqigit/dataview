import Mock from 'mockjs' // 先引入安装的mockjs
// const Mock = require("mockjs");
Mock.setup({
  timeout: 400 - 600
})
// 获取 mock.Random 对象
const Random = Mock.Random;
const pre_url='http://localhost:8888/'
// const pre_url=process.env.VUE_APP_BASE_API
// 

Mock.mock(pre_url+'dataview/api/auth/login',{ // 通过mock方法，第一个参数为自定义的访问链接，第二个参数为自定义的需要返回数据
  status: 0,
  data: {
    "code": 200,
    "message": "成功",
    "obj": {
      id: 0,
      username: Mock.mock('@cname'),
      email: Mock.mock('@email'),
      province: Random.province(),
      ip: Mock.mock('@ip'),
      role: 0,
    }
  }


})