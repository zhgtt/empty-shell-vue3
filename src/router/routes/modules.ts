/**
 * 自定义 静态路由 集合，这些路由会合并在 routes 中，如添加一些 外链路由 等
 *
 *
 */
import type { RouteRecordRaw } from 'vue-router'
import type { DefinePage } from 'unplugin-vue-router/runtime'

/**
 * @description: 自定义外链路由集合，它会有以下几种场景
 *
 * @场景一: 非嵌套路由（一级路由）
 *
 * @场景二: 嵌套路由（子级路由，嵌套在 views 的目录中的路由） - 需要在 meta 中定义一个 parent 属性，指向外链路由的父级路由，在处理逻辑时，会将其合并到父级路由的 children 下
 *
 * @场景三: 嵌套路由（一级路由下，全是外链路由）
 */
const externalLinksRoutes: DefinePage[] = [
  {
    name: 'link',
    path: '/link',
    children: [
      {
        name: 'github',
        path: '/github',
        meta: {
          title: 'Github',
          link: 'https://github.com',
          icon: '',
        },
      },
      {
        name: 'github1',
        path: '/document-github1',
        meta: {
          title: 'Github',
          link: 'https://github.com',
          icon: '',
        },
      },
    ],
  },
  {
    name: 'document',
    path: '/document',
    children: [
      {
        name: 'github',
        path: '/document-github',
        meta: {
          title: 'Github',
          link: 'https://github.com',
          icon: '',
        },
      },
    ],
  },
  {
    name: 'vue',
    path: '/document-vue',
    meta: {
      title: 'vue',
      link: 'https://github.com',
      icon: '',
      parent: '/document',
    },
  },
]

export { externalLinksRoutes }
