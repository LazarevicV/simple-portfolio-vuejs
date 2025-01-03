<template>
  <div :class="'min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900'">
    <!-- Name and Position -->
    <div class="mb-6">
      <h1 class="text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
        Vukadin Lazarevic
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mt-2">Teaching Assistant @ RAF</p>
      <a href="mailto:vukadinlazarevic@gmail.com" class="text-blue-600 hover:underline dark:text-blue-400 mt-1">
        vukadinlazarevic@gmail.com
      </a>
    </div>

    <!-- Links -->
    <div class="space-y-3">
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        class="text-blue-600 font-medium hover:underline dark:text-blue-400">
        LinkedIn
      </a>
      <a
        href="https://github.com/your-profile"
        target="_blank"
        class="text-blue-600 font-medium hover:underline dark:text-blue-400">
        GitHub
      </a>
      <a
        href="https://yourblog.com"
        target="_blank"
        class="text-blue-600 font-medium hover:underline dark:text-blue-400">
        Blog
      </a>
      <a
        href="/about"
        class="text-blue-600 font-medium hover:underline dark:text-blue-400">
        About
      </a>
    </div>

    <!-- Footer -->
    <footer class="absolute bottom-4 text-gray-500 text-sm dark:text-gray-400">
      Designed by Vukadin Lazarevic | Powered by Vue.js & TailwindCSS
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
</style>
