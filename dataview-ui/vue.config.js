const { defineConfig } = require('@vue/cli-service')

// const path = require('path')
// const defaultSettings = require('./src/settings')
const { resolve } = require('path')
const path = require('path')
// const Config = require("./src/settings");

module.exports = defineConfig({


  // chainWebpack(config) {
  //   config.entry('main').add('babel-polyfill') // main是入口js文件
  // }
  publicPath: process.env.NODE_ENV === 'development' ? '/' : process.env.BASE_URL,
  outputDir: 'dist',
  assetsDir: 'static',

  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.json']
    }

  },
  transpileDependencies: ['element-plus'], //依赖element-plus
})
