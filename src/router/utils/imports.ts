/**
 * 对一些常量或方法进行导出，方便在项目内引用
 */
import type { RouteComponent, RouteRecordRaw } from 'vue-router'
import type { RouteLayout } from '@/typings/router'

import BaseLayout from '@/layouts/base-layout/index.vue'
import BlankLayout from '@/layouts/blank-layout/index.vue'

const { VITE_ROOT_ROUTE_REDIRECT = '/home' } = import.meta.env

/**
 * @description: 定义路由布局组件 👇
 */
export const layouts: Record<RouteLayout, RouteComponent | (() => Promise<RouteComponent>)> = {
  base: BaseLayout,
  blank: BlankLayout,
}

/**
 * @description: 定义根路由，该路由主要用来指定所有页面的布局容器，它是固定的 👇
 */
export const ROOT_ROUTE: RouteRecordRaw = {
  name: 'root',
  path: '/',
  redirect: VITE_ROOT_ROUTE_REDIRECT,
  meta: {
    title: 'root',
  },
}

/**
 * @description: 定义空白布局路由，如果某些路由属性中定义了 blank: true，则这些路由会在转换逻辑中被 push 在这里 👇
 */
export const blankLayoutRoutes: RouteRecordRaw[] = [
  // 也可以自行添加，参考以下被注释掉的数据格式（当然不推荐这样做）
  // {
  //   path: '/:404(.*)',
  //   children: [
  //     {
  //       name: 'not-found',
  //       path: '',
  //       component: () => import('@/views/[...404].vue'),
  //     },
  //   ],
  //   component: BlankLayout,
  // },
]
