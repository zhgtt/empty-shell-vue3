<script setup lang="ts">
/**
 * @description: AppProvider 组件 - 根组件之一，用来定义 naive-ui 中的 API 组件，便于全局及 setup 之外使用
 * @link: https://www.naiveui.com/zh-CN/light/components/message#%E5%9C%A8-setup-%E5%A4%96%E4%BD%BF%E7%94%A8
 */
import { createTextVNode, defineComponent } from 'vue'
import { useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui'

defineOptions({
  name: 'AppProvider',
})

/**
 * @description: 定义一个上下文空组件，用来注册 naive-ui 的 API 组件
 */
const ContextHolder = defineComponent({
  name: 'ContextHolder',
  setup() {
    const register = () => {
      window.$loadingBar = useLoadingBar()
      window.$dialog = useDialog()
      window.$notification = useNotification()
      window.$message = useMessage()
    }
    register()

    // 返回一个空节点
    return () => createTextVNode()
  },
})
</script>

<template>
  <NLoadingBarProvider>
    <NDialogProvider>
      <NNotificationProvider>
        <NMessageProvider>
          <ContextHolder />
          <!-- 插槽 -->
          <slot />
        </NMessageProvider>
      </NNotificationProvider>
    </NDialogProvider>
  </NLoadingBarProvider>
</template>

<style scoped></style>
