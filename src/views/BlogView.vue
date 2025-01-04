<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { Toast } from 'primevue';

export default defineComponent({
  name: 'BlogView',
  components: {
    Toast,
  },
  setup() {
    const toast = useToast();
    const isShaking = ref(false);

    const showMessage = () => {
      toast.add({
        severity: 'contrast',
        summary: 'Sorry for the inconvenience',
        detail: 'The blog page is currently under the process of development and is not yet fully up and running.',
        life: 5000, // Display duration in milliseconds
      });

      // Trigger the shake effect
      isShaking.value = true;

      // Remove shake class after animation completes
      setTimeout(() => {
        isShaking.value = false;
      }, 2000); // Duration of shake effect
    };

    return {
      showMessage,
      isShaking
    };
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center">
    <div class="notifikacija">
      <Toast />
    </div>
    <h1
      @click="showMessage"
      :class="{'shake': isShaking}"
      class="text-slate-100 text-5xl font-bold mb-10">
      Coming soon, hopefully
    </h1>

    <RouterLink
      class="text-white w-48 rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-lg font-medium transition-all shadow-md hover:shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:bg-blue-800 disabled:pointer-events-none disabled:opacity-50"
      to="/">
      Go Back
    </RouterLink>
  </div>
</template>

<style scoped>
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}

.shake {
  animation: shake 0.5s ease-in-out 0s 3; /* Shake for 3 times with 0.5s duration each */
}
</style>
