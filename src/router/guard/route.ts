/**
 * 对路由进行 监控、拦截，处理一些路由相关的鉴权等逻辑
 */
import type { Router } from 'vue-router'

export function createRouteGuard(router: Router) {
  router.beforeEach((_to, _from, next) => {
    next()
  })
}
