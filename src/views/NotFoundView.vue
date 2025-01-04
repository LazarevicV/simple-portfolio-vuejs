<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NotFoundView"
})
</script>

<template>
  <div class="not-found">
    <h1 class="text-red-700 text-5xl font-bold mb-10">Page not found! 404!</h1>
    <RouterLink
      class="text-white w-48 rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-lg font-medium transition-all shadow-md hover:shadow-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:bg-red-800 disabled:pointer-events-none disabled:opacity-50"
      to="/">
      Go Back
    </RouterLink>
  </div>
</template>

<style scoped>

</style>