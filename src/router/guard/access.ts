/**
 * 路由守卫，监控路由的 登录状态、权限 等
 */
import type { Router } from 'vue-router'

export function createAccessRouteGuard(router: Router) {
  router.beforeEach((_to, _from, next) => {
    next()
  })
}
