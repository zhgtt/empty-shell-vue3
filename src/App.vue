<script setup lang="ts">
import SvgIcon from '@/components/custom/SvgIcon.vue';

defineOptions({
  name: 'App',
});
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
</template>

<style scoped></style>
