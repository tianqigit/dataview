import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import ElementPlus from 'element-plus'
// import locale from 'element-plus/lib/locale/lang/zh-cn'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import installElementPlus from './plugins/element'
require('./mock/index')

const app:any = createApp(App)
// installElementPlus(app)
// app.use(ElementPlus, { locale })



import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// 注册ElementPlus
app.use(ElementPlus, {
  locale, // 语⾔设置
  size: 'medium' // 尺⼨设置
//   size: Cookies.get('size') || 'medium' // 尺⼨设置
})


app.use(store).use(router).mount('#app')
