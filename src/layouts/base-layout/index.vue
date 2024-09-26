<script setup lang="ts">
/**
 * 基础布局容器
 */
import { GlobalContent, GlobalFooter, GlobalHeader, GlobalSidebar } from '../modules'

defineOptions({
  name: 'BaseLayout',
})
</script>

<template>
  <div class="flex">
    <!-- 顶部导航 -->
    <GlobalHeader />

    <!-- 侧边栏 -->
    <GlobalSidebar />

    <!-- 主体内容 -->
    <GlobalContent />

    <!-- 底部内容 -->
    <GlobalFooter />
  </div>
</template>

<style scoped>

</style>
