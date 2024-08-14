/**
 * vite 相关的所有插件都在这里定义 & 注册
 */
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'
// 以下是和 按需自动引入 相关的插件
import Components from 'unplugin-vue-components/vite'

/**
 * @description 方法 - 封装 vite 插件的引入和注册
 * @param viteEnv - vite 环境变量
 * @param isBuild - 是否为打包状态，默认为 false
 */
export function setupVitePlugins() {
  // console.log('isBuild ====', viteEnv.BASE_URL, isBuild)

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    UnoCss(),

    Components({
      // 指定 unplugin-vue-components 自动生成的 d.ts 文件路径，默认是根目录（无需自己手动创建）
      dts: 'src/typings/components.d.ts',
      // 解析器，用来解析所支持的 UI 组件库
      resolvers: [],
    }),
  ]

  return vitePlugins
}
