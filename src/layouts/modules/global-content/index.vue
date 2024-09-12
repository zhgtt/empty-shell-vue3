<script setup lang="ts">
/**
 * @description: 全局内容展示
 */
defineOptions({
  name: 'GlobalContent',
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition>
      <!--      <KeepAlive> -->
      <component :is="Component" />
      <!--      </KeepAlive> -->
    </Transition>
  </RouterView>
</template>

<style scoped>

</style>
