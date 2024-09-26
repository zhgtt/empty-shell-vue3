/**
 * 创建、转换、处理 路由数据
 *
 */
// 引入自动生成的 auto-typed-router.d.ts 文件中的路由，🆎 需要在 tsconfig.app.json 中添加 types，否则会提示 ts 语法错误 👇
import { routes } from 'vue-router/auto-routes'

import { createRootRoute, transformRoutesToViewRoutes } from '../utils/helpers'

/**
 * 创建约定式路由数据及逻辑
 */
export function createVueRoutes() {
  /**
   * @description: 定义完整的路由数据，它由 根路由 ROOT_ROUTE 和 空白布局路由 blankLayoutRoutes 组成，步骤如下
   */
  try {
    // 先转换自动生成的 routes 数据，转换的过程中会根据路由属性生成 blankLayoutRoutes 的数据
    const { autoRoutes, blankLayoutRoutes } = transformRoutesToViewRoutes(routes)

    // 2. 再创建 根路由，将转换完的 routes 放在其 children 下
    const rootRoutes = createRootRoute(autoRoutes)

    console.log('allRoutes ==== 😐😐', [rootRoutes, ...blankLayoutRoutes])
    // 3. 将二者进行合并，传递给 vue-router
    return [rootRoutes, ...blankLayoutRoutes]
  }
  catch (error: any) {
    console.error(error)
    return []
  }
}
