import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import store from './store'
app.use(store)

import router from './router'
app.use(router)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementIcons from '@element-plus/icons'
// 将 element-plus 的图标库注册到全局
for (var key in ElementIcons) {
  app.component(`ElIcon${ElementIcons[key].name}`, ElementIcons[key])
}
app.use(ElementPlus, {
  size: store.state.settings.elementSize
})

import { useI18n } from './locales'
useI18n(app)

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
app.use(ContextMenu)

import globalProperties from '@/util/global.properties'
globalProperties(app)

// 自定义指令
import directive from '@/util/directive'
directive(app)

// 错误日志上报
import errorLog from '@/util/error.log'
errorLog(app)

// 加载 svg 图标
import 'virtual:svg-icons-register'
import 'remixicon/fonts/remixicon.css'

// 全局样式
import '@/assets/styles/globals.scss'

// PWA
// import './pwa'

app.mount('#app')
