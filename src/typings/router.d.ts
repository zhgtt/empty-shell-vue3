import 'vue-router'

/**
 * 自定义路由中 meta 的类型，用于菜单转换的逻辑，覆盖 vue-router 中的 RouteMeta 类型
 */
declare module 'vue-router' {
  interface RouteMeta {
    // 对应菜单的名称，也是当前页面 document 的标题
    title?: string

    // 对应菜单的图标
    icon?: string

    // 对应菜单的外链 url
    href?: string
  }
}
