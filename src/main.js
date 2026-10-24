import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

// 导入路由实例
import router from './router'

// 创建 Vue 应用实例
const app = createApp(App)
const pinia = createPinia()

// 使用路由实例
app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')