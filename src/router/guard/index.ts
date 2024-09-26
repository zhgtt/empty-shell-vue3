/**
 * 路由守卫、监控、拦截 相关逻辑
 */
import type { Router } from 'vue-router'
import { createCommonRouteGuard } from './common'
import { createAccessRouteGuard } from './access'

export function createRouterGuard(router: Router) {
  /** 通用守卫配置 */
  createCommonRouteGuard(router)

  /** 权限守卫配置 */
  createAccessRouteGuard(router)
}
