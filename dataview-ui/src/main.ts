import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import ElementPlus from 'element-plus'
// import locale from 'element-plus/lib/locale/lang/zh-cn'

require('./mock/index')

const app:any = createApp(App)
// app.use(ElementPlus, { locale })
app.use(store).use(router).mount('#app')
