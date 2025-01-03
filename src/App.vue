<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div :class="'min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900'">
    <RouterView />
  </div>
</template>

