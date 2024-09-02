import antfu from '@antfu/eslint-config';

export default antfu(
  // 设置项，指定启用哪些插件和 ignores
  {
    // 开启 vue、typescript 的检查（可以不配置，因为默认是支持并开启的）
    vue: true,
    typescript: true,

    // 开启 unocss 的检查，需要安装 @unocss/eslint-plugin 插件
    unocss: true,

    // 指定哪些文件不需要 eslint 检查
    ignores: ['public', 'dist*'],

    // 开启对 html、css、markdown 的格式化，需要安装 eslint-plugin-format 插件
    formatters: {
      css: true, // 默认使用 prettier
      html: true, // 默认使用 prettier
      markdown: 'prettier', // 还可以选择使用 dprint 格式化工具
    },
  },

  // 设置全局的规则
  {
    rules: {
      'style/semi': ['error', 'always'], // 强制末尾加分号
    },
  },

  // 设置指定文件的规则，这里指定 vue 文件
  {
    files: ['src/**/*.vue'],
    rules: {
      'vue/valid-template-root': 'warn', // 是否允许模板内容为空，默认是 error
    },
  },
);
