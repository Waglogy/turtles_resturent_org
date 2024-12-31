<template>
  <div class="menu-viewer">
    <div class="pdf-toolbar">
      <h1 class="text-3xl font-pacifico text-olive-green mb-4">Our Menu</h1>
      <div class="toolbar-buttons">
        <a :href="driveDownloadUrl" target="_blank" class="download-btn">
          <i class="fas fa-download"></i> Download Menu
        </a>
        <button @click="$router.go(-1)" class="close-btn">
          <i class="fas fa-times"></i> Close
        </button>
      </div>
    </div>

    <div class="pdf-container">
      <div v-if="loading" class="loading-overlay">
        <LoadingScreen />
      </div>
      
      <!-- Updated Google Drive Embed with your specific file ID -->
      <iframe
        src="https://drive.google.com/file/d/1mergqwzSBot9aZVyITUeoGuQ3h_udxZF/preview"
        class="pdf-frame"
        @load="handleLoaded"
        @error="handleError"
        allow="autoplay"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoadingScreen from './LoadingScreen.vue';

const loading = ref(true);
const driveDownloadUrl = "https://drive.google.com/file/d/1mergqwzSBot9aZVyITUeoGuQ3h_udxZF/view?usp=drive_link";

const handleLoaded = () => {
  loading.value = false;
};

const handleError = (error) => {
  console.error('PDF Error:', error);
  loading.value = false;
};
</script>

<style scoped>
.menu-viewer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #faf1e8;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.pdf-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
}

.toolbar-buttons {
  display: flex;
  gap: 10px;
}

.pdf-container {
  flex: 1;
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}

.pdf-frame {
  width: 100%;
  height: 100%;
  border: none;
  background: white;
  min-height: calc(100vh - 200px);
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 2;
}

.download-btn, .close-btn {
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

.download-btn {
  background: #4CAF50;
  color: white;
}

.close-btn {
  background: #ff6347;
  color: white;
}

.download-btn:hover, .close-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .menu-viewer {
    padding: 10px;
  }

  .pdf-toolbar {
    flex-direction: column;
    gap: 10px;
  }

  .toolbar-buttons {
    width: 100%;
    justify-content: center;
  }

  .pdf-container {
    margin: 0 -10px;
    border-radius: 0;
  }

  .pdf-frame {
    min-height: calc(100vh - 150px);
  }
}

@media (prefers-color-scheme: dark) {
  .pdf-container {
    background: #ffffff;
  }
}
</style> 