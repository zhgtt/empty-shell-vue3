<script setup lang="ts">
import Home from './views/home/Home'

defineOptions({
  name: 'App',
})
</script>

<template>
  <!--   路由页面    -->
  空页面 Hello
  <RouterView />
  <RouterLink to="touch-pan">
    链接
  </RouterLink>
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

  <br>

  <Home />
</template>

<style scoped></style>
