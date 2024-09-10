<script setup lang="ts">
/**
 * @description: unplugin-vue-router 的插件之一，用于自定义当前页面配置，比如自定义 name、redirect（重定向）、meta、alias 等属性，会和自动生成的路由合并，🆎 会覆盖定义的公共的属性；
 * 🆎 这里因为使用了 unplugin-auto-import 插件，无需自行引入
 */

// 🆎 与 vue-router 中的 RouteRecordRaw 类型做了一个合并
definePage({
  name: 'demo',
  meta: {
    title: 'Demo 页面',
    icon: '',
    // ... 🆎 自定义其他属性，路由转换菜单 的逻辑中需要这些属性
  },
})

const router = useRouter()

function hanleClick() {
  router.push('/')
}
</script>

<template>
  Demo 测试页面

  <br>
  <br>
  <br>

  <RouterLink to="_builtin/404">
    链接
  </RouterLink>
  <button @click="hanleClick">
    跳转 about 页面
  </button>

  <br>
  <br>
  <br>

  <SvgIcon name="moon" class="text-3xl" />
  <SvgIcon name="twemoji:face-blowing-a-kiss" type="iconify" class="text-2xl" />
  <SvgIcon name="aiming" type="icon-park" class="text-2xl" />
  <SvgIcon
    name="hourglass-null" type="icon-park"
    :icon-option="{ theme: 'two-tone', size: '2em', fill: ['#F53F3F', '#FDCDC5'] }"
  />
  <SvgIcon
    name="camera" type="icon-park"
    :icon-option="{ theme: 'multi-color', size: '2em', fill: ['#333', '#F53F3F', '#FFF', '#FDCDC5'] }"
  />
</template>

<style scoped>

</style>
