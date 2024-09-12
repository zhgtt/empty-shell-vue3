/**
 * description: 监控路由页面跳转的 进度条
 *
 * 🆎 函数的参数中如果有多个参数，但是只用到某几个，那么其他没有用到的可以用 _xx 来表示
 */
import type { Router } from 'vue-router'

export function createProgressGuard(router: Router) {
  router.beforeEach(async (_to, _from, next) => {
    window.NProgress?.start()
    next()
  })
  router.afterEach((_to) => {
    window.NProgress?.done()
  })
}
