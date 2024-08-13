<script setup lang="ts">
import type { WatermarkProps } from 'naive-ui'
import { computed } from 'vue'

defineOptions({
  name: 'App',
})

/**
 * @description - 水印设置项
 */
const watermarkProps = computed<WatermarkProps>(() => {
  return {
    content: '大家辛苦以下，一切都会好的',
    cross: true,
    fullscreen: true,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 400,
    width: 384,
    height: 384,
    xOffset: 12,
    yOffset: 60,
    rotate: -15,
  }
})
</script>

<template>
  <NConfigProvider class="h-full flex">
    <AppProvider>
      <!--   路由页面    -->
      <RouterView />
      <NButton>按钮1111111111</NButton>
      <!--   水印   -->
      <NWatermark v-bind="watermarkProps" />
    </AppProvider>
  </NConfigProvider>
</template>

<style scoped>

</style>
