// 这里 export 一个空对象，是为了防止 ts 不识别下面代码定义的类型
export {}

declare global {
  /**
   * @description: 定义挂载在 window 下的实例对象
   */
  export interface Window {
    // 加载进度条 nprogress
    NProgress?: import('nprogress').NProgress
  }
}
