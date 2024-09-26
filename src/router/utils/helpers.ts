/**
 * 路由辅助函数方法，包含在页面 初始化/刷新 时的路由转换逻辑 等
 *
 * @类型解释: RouteRecordRaw 类型 - vue-router 的内置类型，它的第一层级路由数据，必须要有 path、children 或 redirect
 * @类型解释: DefinePage 类型 - unplugin-vue-router 的内置类型，它其实是把 RouteRecordRaw 中的 children、components、component 过滤掉了，还变成了可选的类型
 */
import type { RouteRecordRaw } from 'vue-router'
// import type { DefinePage } from 'unplugin-vue-router/runtime'

import { blankLayoutRoutes, layouts, ROOT_ROUTE } from './imports'

const { VITE_LAYOUT_COMPONENT = 'base' } = import.meta.env

/**
 * @description: 批量处理路由 👇
 * @param routes - 路由数据
 */
export function transformRoutesToViewRoutes(routes: RouteRecordRaw[]) {
  const autoRoutes = routes.flatMap(route => transformARouteToViewRoute(route))

  return { autoRoutes, blankLayoutRoutes }
}

/**
 * @description: 处理单个路由 👇
 */
export function transformARouteToViewRoute(route: RouteRecordRaw) {
  const {
    name,
    path,
    component,
    children,
    meta,
    // ...rest
  } = route

  // 针对有子路由的 route 进行递归处理
  if (children?.length) {
    children.flatMap(child => transformARouteToViewRoute(child))
  }

  // console.log('route ==== 😐😐', route)

  // 处理 基础布局 下的一些特殊逻辑
  if (VITE_LAYOUT_COMPONENT === 'base') {
    // 处理属性为 空白布局 的路由，数据格式是固定的，将数据存放在 blankLayoutRoutes 中
    const noExist = blankLayoutRoutes.findIndex(item => item.name === name) === -1

    if (meta?.blank && noExist) {
      const routeItem: RouteRecordRaw = {
        path: path || meta?.fullPath as string,
        component: layouts.blank,
        children: [
          { name, path: '', component, meta } as RouteRecordRaw,
        ],
      }

      blankLayoutRoutes.push(routeItem)
    }
  }

  return route
}

/**
 * @description: 创建根路由，指定其布局容器，完善其 children 数据 👇
 */
export function createRootRoute(children: RouteRecordRaw[]) {
  const component = layouts[VITE_LAYOUT_COMPONENT]

  if (!component)
    throw new Error('Error: 请设置正确的布局容器!')

  return { ...ROOT_ROUTE, component, children } as RouteRecordRaw
}
