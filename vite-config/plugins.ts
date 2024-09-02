/**
 * vite 相关的所有插件都在这里定义 & 注册
 */
import process from 'node:process';
import path from 'node:path';
import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCss from 'unocss/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
/**
 * 以下是和 按需自动引入 相关的插件
 * @plugin unplugin-vue-components - 插件除支持自动引入 第三方 UI 组件外，也支持自动引入 src/components 下的所有组件，组件中需要定义 name
 */
import Components from 'unplugin-vue-components/vite';
// import {  } from 'unplugin-vue-components/resolvers' // 引入所支持的 UI 组件库的解析器

/**
 * @description: 封装 vite 插件的引入和注册
 * @param viteEnv - vite 环境变量
 * @param isBuild - 是否为打包状态，默认为 false
 */
export function setupVitePlugins(viteEnv: Env.ImportMeta, isBuild = false) {
  // console.log('isBuild ====', viteEnv.BASE_URL, isBuild)
  // 获取环境变量
  const { VITE_ICON_LOCAL_PREFIX = 'local-icon' } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icons');

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    UnoCss(),

    /**
     * @description: 自动引入 UI 组件
     * @key dts - 指定 unplugin-vue-components 插件自动生成的 d.ts 文件路径，默认是根目录（无需自己手动创建）
     * @key resolvers - 解析器，用来解析所支持的 UI 组件库
     */
    Components({
      dts: 'src/typings/components.d.ts', // 这个文件会自动生成
      resolvers: [],
    }),

    /**
     * @description: 自动引入 svg 图标，注册该该插件之后，还需在 main.ts 中引入对应的脚本
     * @key iconDirs - 指定 svg 图标在项目中存放的目录
     * @key symbolId - 配置生成的 symbolId 的格式，默认为 icon-[dir]-[name]
     * @key inject - 配置在哪个标签中插入 svg 图标，默认为 body
     * @key customDomId - 自定义 svg 这个 DOM 的 id，默认为 __svg__icons__dom__
     */
    createSvgIconsPlugin({
      iconDirs: [localIconPath],
      symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`, // 图标前缀可在 env 中自定义，默认为 local-icon
      inject: 'body-last',
      customDomId: '__SVG_LOCAL_ICONS__',
    }),
  ];

  return vitePlugins;
}
