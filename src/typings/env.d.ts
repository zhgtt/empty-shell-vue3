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

    // 是否需要菜单相关的逻辑，默认为 true
    readonly VITE_MENU_ENABLE: boolean
  }
}

/**
 * 声明 import.meta 类型
 */
interface ImportMeta {
  readonly env: Env.ImportMeta
}
