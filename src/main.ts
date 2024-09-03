import { createApp } from 'vue'

// 引入第三方插件的静态资源
import './plugins/assets'

// 引入全局 css 资源
import './style.css'

// 主应用页面
import App from './App.vue'

// 引入自定义的注册方法，比如 路由、状态管理、第三方插件处理 等
import { setupRouter } from './router'
import { setupNProgress } from './plugins'

/**
 * 注册 & 挂载全局 app 节点
 */
async function setupApp() {
  // 挂载自定义、第三方插件
  setupNProgress()

  // 挂载全局 app 节点
  const app = createApp(App)

  // 挂载路由
  await setupRouter(app)

  app.mount('#app')
}

await setupApp()
