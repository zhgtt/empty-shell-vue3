<script setup lang="ts">
definePage({
  name: 'home',
  meta: {
    title: '首页面',
  },
})

const router = useRouter()

function handleClick() {
  router.push('/demo')
}
</script>

<template>
  <h1>这才是真正的首页面！！！！😐😐😐😐😐</h1>
  <button @click="handleClick">
    点击跳转
  </button>
</template>

<style scoped>

</style>
