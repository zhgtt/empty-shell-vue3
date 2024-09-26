import 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

/**
 * @description: 自定义 RouteMeta 的类型，用于菜单转换的逻辑，覆盖 vue-router 中的 RouteMeta 类型
 */
declare module 'vue-router' {
  interface RouteMeta {
    // 当前路由的完整路径地址（会自动生成，可以忽略）
    fullPath?: string

    // 对应菜单的名称，也是当前页面 document 的标题
    title?: string

    // 对应菜单的图标
    icon?: string

    // 是否为缓存路由
    keepAlive?: boolean

    // 对应菜单的排序
    order?: number

    // 是否隐藏该对应菜单
    hideInMenu?: boolean

    // 是否进入到空白布局容器
    blank?: boolean

    // 指定菜单跳转方式
    target?: 'self' | '_blank'

    // 指定其所在的目录是否为父级菜单（不可点击跳转的），默认为 true；🆎 仅在 index.vue 设置中才有效
    isParentMenu?: boolean

    // 指定菜单名称
    // menuName?: string

    // 是否为 常量路由，也就是该路由不会进入鉴权逻辑中，不需要登录，直接就能访问
    // constant?: boolean

    // 参数
    // query?: { [key: string]: string }[] | null
  }
}

/**
 * @description: 路由布局组件类型
 */
declare type RouteLayout = 'base' | 'blank'

/**
 * @description: 内置路由的 name
 */
declare type BuiltinRouteKey = 'home' | 'not-found' | '403'
