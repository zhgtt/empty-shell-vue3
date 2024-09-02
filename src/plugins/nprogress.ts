/**
 * @description: 对 nprogress 加载进度条插件 进行封装，让其方法暴露到 window 中，便全局使用
 */
import NProgress from 'nprogress';

export function setupNProgress() {
  /**
   * @description: 配置 nprogress，它接收一个对象为参数，对象中包含的属性如下
   * @key easing - 动画类型，缓动效果
   * @key speed - 动画速度，单位为毫秒
   */
  NProgress.configure({ easing: 'ease', speed: 500 });

  // 挂载到 window 中，需在 global.d.ts 文件中声明类型
  window.NProgress = NProgress;
}
