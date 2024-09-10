/**
 * 对 全局的状态管理 进行配置和封装
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'

export function setupStore(app: App) {
  const store = createPinia()

  store.use()

  app.use(store)
}
