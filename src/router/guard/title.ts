/**
 * description: 监控路由页面跳转时，在浏览器标签页上显示的 title
 */
import type { Router } from 'vue-router'
import { useTitle } from '@vueuse/core'

export function createDocumentTitleGuard(router: Router) {
  router.afterEach((to) => {
    const { title } = to.meta

    const documentTitle = title // 后面支持国际化

    useTitle(documentTitle)
  })
}
