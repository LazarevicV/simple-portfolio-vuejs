<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BlogView"
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center">
    <h1 class="text-slate-100 text-5xl font-bold mb-10">Coming soon, hopefully</h1>

    <RouterLink
      class="text-white w-48 rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-lg font-medium transition-all shadow-md hover:shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:bg-blue-800 disabled:pointer-events-none disabled:opacity-50"
      to="/">
      Go Back
    </RouterLink>
  </div>
</template>

<style scoped>

</style>