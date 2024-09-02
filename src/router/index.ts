/**
 * 对 路由 进行配置和封装，可以在 env 中自定义设置路由模式，默认是 history
 */
import type { App } from 'vue';
import { type RouterHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

// 获取环境变量
const { VITE_ROUTER_HISTORY_MODE = 'history', VITE_BASE_URL } = import.meta.env;

/**
 * @description: 定义路由模式，因为它是可配置的，以对象的形式实现，它包含的属性和值如下
 * @key history - 历史记录模式
 * @key hash - hash 模式，路径会带一个 #
 * @key memory - 适用于 node 环境和 SSR 环境的模式，不会有历史记录，不推荐在 浏览器 中使用（这里不推荐）
 * @value createWebHistory | createWebHashHistory | createMemoryHistory - 创建路由模式，它是个函数，接受一个基础路径字符串作为参数。这个基础路径会被附加到每个路由的前面，使得整个应用可以在一个子路径下运行
 *
 * @类型解释: Record<K, T> - 这是一个泛型工具类型，它接收两个类型参数 K 和 T，并创建一个新类型，该类型的键是 K 的 联合类型 中的每个成员，值都是 T 类型
 */
const historyCreatorMap: Record<Env.RouterHistoryMode, (base?: string) => RouterHistory> = {
  history: createWebHistory,
  hash: createWebHashHistory,
};

/**
 * @description: 创建路由，它接收一个对象作为参数，对象中包含的属性如下
 * @key history - 是一个函数，它返回一个 RouterHistory 对象
 * @key routes - 是一个数组，它包含所有路由的配置信息
 */
export const router = createRouter(
  {
    history: historyCreatorMap[VITE_ROUTER_HISTORY_MODE](VITE_BASE_URL),
    routes: [],
  },
);

/**
 * @description: 设置 vue 的路由
 */
export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady(); // 等待路由加载完毕，它是个异步函数，返回一个 promise
}
