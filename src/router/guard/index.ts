/**
 * @description: 对路由进行 全局监控、拦截，包含 进度条、title、路由处理 等
 */
import type { Router } from 'vue-router'
import { createProgressGuard } from './progress'
import { createRouteGuard } from './route'
import { createDocumentTitleGuard } from './title'

export function createRouterGuard(router: Router) {
  createProgressGuard(router)
  createRouteGuard(router)
  createDocumentTitleGuard(router)
}
