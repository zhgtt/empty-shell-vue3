// 主应用页面
import App from './App.vue'

// 引入第三方插件的注册方法、静态资源
import './plugins/assets'
import { setupNProgress } from './plugins'

// 引入自定义的注册方法，如 路由、状态管理 等
import { setupRouter } from './router'
import { setupStore } from './store'

// 引入全局 css 资源
import './styles/global.css' // 全局 css

/**
 * 注册 & 挂载全局 app 节点
 */
async function setupApp() {
  // 挂载自定义、第三方插件，🆎 要放在创建 app 的前面
  setupNProgress()

  // 挂载全局 app 节点
  const app = createApp(App)

  // 挂载全局状态管理
  setupStore(app)

  // 挂载路由
  await setupRouter(app)

  // 挂载 DOM 节点
  app.mount('#app')
}

await setupApp()
