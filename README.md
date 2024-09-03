# Vue3 空壳子项目

| 📢 **说明**

1. 学习项目之一。。
2. 主要借鉴学习 [soybean-admin](https://github.com/soybeanjs/soybean-admin)，这是个优秀的项目；
3. 该项目主要包含一些基础的配置项和插件，是一个能拿来直接使用的模板，继续开发和完善；

---

## 项目目录（基本） 🗂️

```bash
├──📁.vscode                # 项目 vscode 的配置
├──📁public                 # 静态资源 该目录下静态资源应该避免被项目 js 引用
├──📁src                    # 源代码
│   ├──📁api                    # 接口请求
│   │   ├──📁methods                # 业务接口文件，所有的接口都放在这里
│   ├──📁assets                 # 图片，字体等静态资源
│   │   ├──📁svg-icons              # 存放本地 svg 图标的目录
│   ├──📁components             # 项目公共组件
│   │   ├──📁common                 # 全局使用的公共组件，如 主题切换、logo 等
│   │   ├──📁custom                 # 自定义全局组件，如 SvgIcon 等
│   ├──📁constants              # 项目全局常量
│   ├──📁hooks                  # 项目全局 hooks 钩子函数
│   ├──📁layouts                # 页面布局组件
│   ├──📁plugins                # 项目中使用到的插件配置，如 UI 组件库、国际化 等
│   │   ├──📄assets.ts              # 引入第三方插件的静态资源
│   ├──📁router                 # 路由
│   ├──📁store                  # 状态管理
│   ├──📁typings                # 声明 ts 类型的文件
│   ├──📁styles                 # 全局 css 文件
│   ├──📁utils                  # 项目公共方法、工具
│   ├──📁views                  # 页面文件
│   │   ├──📁_builtin               # 一些内置的页面组件放在这里，如 404 等
│   ├──📄App.vue                # 入口页面
│   └──📄main.ts                # 入口 加载组件 初始化
├──📁vite-config            # vite 拆分出的配置项，如 proxy、plugins 等
│   ├──📄plugins.ts             # vite 相关的插件配置
├──📄.env                   # 环境变量（公共环境，不区分，定义一些公共的变量，也可以是开发环境）
├──📄.env.production        # 环境变量（生产环境）
├──📄.env.test              # 环境变量（测试环境）
├──📄.gitignore             # 定义 git 过滤的文件
├──📄eslint.config.js       # eslint 配置文件
├──📄index.html             # 主页面
├──📄package.json           # 依赖、脚本文件
├──📄pnpm-lock.yaml         # pnpm 本地依赖
├──📄README.md              # 项目说明文件
├──📄tsconfig.app.js        # tsconfig 对项目应用的配置文件
├──📄tsconfig.json          # tsconfig 配置文件
├──📄tsconfig.node.json     # tsconfig 对 node 环境配置文件
├──📄uno.config.ts          # unocss 配置文件
└──📄vite.config.ts         # vite 配置文件
```

| 📢 **说明**

1. 基本的目录文件已形成，每个文件都有自己的作用和分工，如 `src/plugins`、`src/hooks`、`src/typings` 等等；
2. 每个文件都有对应的注释，方便理解；
3. 对核心文件 `vite.config.ts` 和 `main.ts` 进行了封装以及详细的注释；

---

## 拥有的功能点 & 配置 🚀

以下是该壳子期望拥有的功能点和配置项，可以继续进行拓展开发，持续更新中...

### 🤔 eslint 代码检查 & 格式化

1. 支持 eslint 代码检查和格式化，由 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 插件支持，该插件内置了很多常用的 eslint 规则，包括 ts、vue 等；
2. 支持 unocss 的代码检查，以及 html、css 的格式化；
3. 无需安装 prettier 插件，但是需要在 Webstorm 或 VS Code 编辑器中手动进行配置，比如保存代码时自动格式化；

| 📢 **注意**

- 设置了代码自动保存格式化后，如果更改了 eslint 的规则，但是自动保存不生效，可以重新设置下编辑器的 eslint 配置；

### 🤨 git 代码提交检查 & 规范

1. 支持 git 代码提交检查，以及 commit 提交信息规范；建议由命令行进行操作；
2. git 代码提交检查由 [lint-staged](https://github.com/lint-staged/lint-staged) 和 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 支持；
3. git commit 提交信息规范由 [git-commit-msg-linter](https://github.com/legend80s/git-commit-msg-linter) 支持；

| 📢 **特别情况**

- 可以选择跳过代码检查和提交规范，提交时写成以下命令即可；

```bash
git commit '提交信息示例' --no-verify
```

- 在提交记录时，如果遇到 commit 校验不生效的情况，可以 **清除下 pnpm 的缓存**，然后再卸载并重新安装该插件即可

### 😑 Typescript 支持

1. 支持 ts 类型检查，vite5 版本以上，配置文件由 `tsconfig.app.json（主应用，如 src 目录下的文件）` 和 `tsconfig.node.json（node 环境，如 vite.config.ts 文件）` 构成；

| 📢 **注意**

- 全局的类型说明都需定义在 `src/typings` 目录下，比如 env 变量等；

### 🙄 常用插件 & 封装

1. 引入了一些常用的插件，如 [UnoCSS](https://unocss.dev/)、[pinia](https://pinia.vuejs.org/zh/)、[vueUse](https://vueuse.org/) 等；
2. 引入了一些拓展插件，如 nprogress 进度条、[es-toolkit（替代 lodash）](https://github.com/toss/es-toolkit) 等；
3. [TODO] 简单封装了利用 unocss 实现主题切换的逻辑；
4. 支持 jsx / tsx 编写 vue 组件，由 `@vitejs/plugin-vue-jsx` 插件支持，有些场景可能会需要，简单的组件开发推荐查看文章 [CSDN: Vue3中TSX的使用方式](https://blog.csdn.net/xyphf/article/details/134387575)；

### 😴 接口请求 & 封装

1. [TODO] 对接口请求进行了简单封装，由 [alovajs](https://alova.js.org/zh-CN/) 支持，采用 hooks 的形式进行接口请求；

### 😵 路由管理 & 封装

1. [TODO] 对 [vue-router](https://router.vuejs.org/zh/) 进行了简单封装，支持根据文件自动引入静态路由，由 []() 插件支持；

### 😶 自定义组件

1. 支持组件 **按需引入、自动引入**，相关的简单配置已经写好，只需要继续添加对应的 UI 组件库的配置代码即可，由 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 插件支持；
2. 简单封装了 `SvgIcon` 图标组件，支持自动引入本地项目中的 svg 图标，由 [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) 插件支持，支持引入 [iconify](https://iconify.design/docs/) 的图标，由 `@iconify/vue` 插件支持；还支持引入 [IconPark](https://iconpark.oceanengine.com/official) 的图标，由 `@icon-park/vue-next` 插件支持，这个图标库是比较整齐、美观的；

---

## 某些插件介绍 📦️

### iconify 图标插件

1. 支持自动动态按需引入图标，由 [unplugin-icons](https://github.com/unplugin/unplugin-icons) 插件支持，可结合 `unplugin-vue-components` 插件实现，**这个功能项目中没有实现**，可以自行尝试，个人觉得必要性不大，毕竟使用场景不多，实现方式推荐查看文章 [CSDN: 如何在vue3+vite中优雅的使用iconify图标](https://blog.csdn.net/weixin_46872121/article/details/138212930)；
2. 推荐一个支持 **中文搜索** iconify 图标库的网站: [yesicon](https://yesicon.app/)；

---

## 参考学习资料 🔗

- [vue 官方文档 - 框架介绍](https://cn.vuejs.org/)

---
