import antfu from '@antfu/eslint-config'

export default antfu(
  // 设置项，指定启用哪些插件和 ignores
  {
    // 开启 unocss 的检查
    unocss: true,

    // 指定哪些文件不需要 eslint 检查
    ignores: ['public', 'dist*'],

    // 开启对 html、css、markdown 的格式化
    formatters: {
      css: true, // 默认使用 prettier
      html: true, // 默认使用 prettier
      markdown: 'prettier', // 还可以选择使用 dprint 格式化工具
    },
  },

  // 设置全局的规则
  {
    rules: {
      // 'style/semi': [1, 'always'], // 强制末尾加分号，默认为 'error'；（该规则取默认的就行，无需设置，这里只是做个示例）
      'unused-imports/no-unused-imports': 'warn',
    },
  },

  // 设置指定文件的规则
  {
    files: ['src/**/*.vue'],
    rules: {},
  },
)
