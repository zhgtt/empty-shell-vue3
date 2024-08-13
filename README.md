# Vue3 空壳子项目

- 学习项目之一。。
- 主要借鉴学习 [soybean-admin](https://github.com/soybeanjs/soybean-admin)，这是个优秀的项目；
- 该项目主要包含一些基础的配置项和插件，是一个能拿来直接使用的模板，继续开发和完善；

## 拥有的功能点 & 配置

以下是该壳子已经写好的功能点和配置项，可以继续进行拓展开发，持续更新中...

### 🤫 项目目录

- 基本的目录文件已形成，每个文件都有自己的作用和分工，如 src/router、src/store、src/api、src/plugins、src/hooks、src/typings 等等；
- 每个文件都有对应的注释，方便理解；
- [TODO] 对核心文件 `vite.config.ts` 和 `main.ts` 进行了封装以及详细的注释；

### 🤔 eslint 代码检查

- 支持 eslint 代码检查和格式化，由 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 插件支持；
- 支持 unocss 的代码检查，以及 html、css 的格式化；
- 无需安装 prettier 插件，但是需要在 Webstorm 或 VS Code 编辑器中手动进行配置，比如保存代码时自动格式化；

### 🤨 git 代码提交检查 & 规范

- 支持 git 代码提交检查，以及 commit 提交信息规范；建议由命令行进行操作；
- git 代码提交检查由 `lint-staged` 和 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 支持；
- git commit 提交信息规范由 [git-commit-msg-linter](https://github.com/legend80s/git-commit-msg-linter) 支持，使用该插件时，如果遇到不生效的情况，可以 _清除下 pnpm 的缓存_，然后再卸载并重新安装该插件即可；

### 😑 Typescript 类型检查

- 支持 ts 类型检查，配置文件由 `tsconfig.app.json`（主应用，如 src 目录下的文件）和 `tsconfig.node.json`（node 环境，如 vite.config.ts 文件）构成；

### 🙄 基础插件

- [TODO] 支持一些常用必备的插件，如 unocss、vue-router、pinia、alovajs 等；
- [TODO] 对一些插件进行了封装，比如路由管理，接口请求等，只需要继续二次开发即可；

### 😶 基础组件

- [TODO] 支持一些常用的，与 UI 组件库无关联的组件封装，如 SvgIcon 组件等；
- 支持组件按需引入，相关简单配置已经写好，只需要继续添加对应的 UI 组件库的配置代码即可，由 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 插件支持；

## 参考学习资料

- [vue 官方文档 - 框架介绍](https://cn.vuejs.org/)
- [pinia 官方文档 - 状态管理](https://pinia.vuejs.org/zh/)
- [vue-router 官方文档 - 路由管理](https://router.vuejs.org/zh/)
- [alovajs 官方文档 - 接口请求库](https://alova.js.org/zh-CN/)
- [UnoCSS 官方文档 - 样式库](https://unocss.dev/)
