const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  transpileDependencies: ['element-plus'], //依赖element-plus
  // chainWebpack(config) {
  //   config.entry('main').add('babel-polyfill') // main是入口js文件
  // }
}
)
