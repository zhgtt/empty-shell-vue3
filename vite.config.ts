import process from 'node:process'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
// 引入自定义的模块
import { setupVitePlugins } from './vite-config/plugins'

/**
 * @param mode - 当前项目的运行环境
 * @param command - 当前项目处于什么状态，打包状态还是开发状态
 */
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  /**
   * loadEnv() - 获取自定义的环境变量对象
   * process.cwd() - 获取当前工作目录，也就是项目根目录，它被用来指定从哪个目录加载环境变量，需安装 @types/node
   * prefixes - 指定要加载的环境变量的前缀，默认为 VITE_，也就是只加载 _VITE 开头的变量，如果设置为 ''，则加载全部的变量（包含 vite 自带的）
   */
  const env = loadEnv(mode, process.cwd()) as unknown as Env.ImportMeta

  return {
    base: '/',

    resolve: {
      // 🐸 配置路径别名，配置之后需要在 tsconfig.app.json 中添加 paths，再重启编辑器，以便 Typescript 能够识别到这些路径
      alias: {
        /**
         * import.meta.url - 获取当前文件的 url
         * new URL() - 相对于 import.meta.url 解析当前路径，返回一个 URL 格式的字符串
         * fileURLToPath() - 将 URL 返回的字符串转换为系统文件路径
         */
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // vite 插件
    plugins: setupVitePlugins(env, command === 'build'),

    // vite 本地服务
    server: {
      port: 3001,
    },
  }
})
