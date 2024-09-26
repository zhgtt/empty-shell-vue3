/**
 * 对 env 环境变量进行类型声明
 */
declare namespace Env {
  // 声明路由模式，只支持 history | hash
  type RouterHistoryMode = 'history' | 'hash'

  // 声明 Env.ImportMeta 类型
  interface ImportMeta {
    // 项目基础路径
    readonly VITE_BASE_URL: string

    // 路由模式
    readonly VITE_ROUTER_HISTORY_MODE?: RouterHistoryMode

    // 本地 svg 图标的前缀
    readonly VITE_ICON_LOCAL_PREFIX: string

    // 自行指定路由 / 的重定向路由路径，也就是对根路由 root 指定重定向路由路径，默认为 /home
    readonly VITE_ROOT_ROUTE_REDIRECT?: string

    // 是否需要路由转换相关的逻辑，比如菜单、布局组件等，默认为 true
    // readonly VITE_ROUTE_TRANSFORM?: boolean

    // 是否需要菜单相关模块，包括菜单的生成、基础布局组件 等，默认为 true
    // readonly VITE_IS_MENU_MODE?: boolean

    // 选择布局容器组件，默认为 base 布局，包含菜单等子组件；如果设置为 blank，只是一个空白页面
    readonly VITE_LAYOUT_COMPONENT?: 'base' | 'blank'

    // 是否需要动态菜单的实现逻辑，默认为 false
    // readonly VITE_IS_MENU_DYNAMIC?: boolean
  }
}

/**
 * 声明 import.meta 类型
 */
interface ImportMeta {
  readonly env: Env.ImportMeta
}
