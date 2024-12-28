<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
    <NavBar />
    <router-view />
    <FooterTurtles />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FooterTurtles from './components/FooterTurtles.vue';
import NavBar from './components/NavBar.vue';
import LoadingScreen from './components/LoadingScreen.vue';

const isLoading = ref(true);

onMounted(() => {
  // Preload important assets
  const preloadAssets = async () => {
    try {
      // Add any critical images or assets to preload here
      await Promise.all([
        // Example: preload logo or critical images
        // new Promise(resolve => {
        //   const img = new Image();
        //   img.onload = resolve;
        //   img.src = '/path-to-critical-image.jpg';
        // })
      ]);
      
      // Simulate minimum loading time for smooth transition
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Hide loading screen
      isLoading.value = false;
    } catch (error) {
      console.error('Error loading assets:', error);
      isLoading.value = false; // Hide loading screen even if there's an error
    }
  };

  // Start preloading when component mounts
  preloadAssets();
});
</script>

<style>
/* Global styles */
h1 {
  color: #3A6507;
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #3A6507;
}

li {
  color: #333333;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

/* Add smooth page transitions */
.router-view-wrapper {
  transition: opacity 0.3s ease;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Ensure the loading screen takes precedence */
.loading-screen {
  z-index: 9999;
}
</style>