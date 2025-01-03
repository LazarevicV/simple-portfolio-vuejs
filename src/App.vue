<script setup lang="ts">
import { RouterView } from 'vue-router'
import {SpeedInsights} from "@vercel/speed-insights/vue";
</script>

<template>
  <div>
    <SpeedInsights />
    <div
      :class="'min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900 md:p-2 sm:p-2'">
      <RouterView />
    </div>
  </div>
</template>

