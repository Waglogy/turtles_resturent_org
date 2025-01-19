<template>
  <div class="menu-viewer">
    <div class="pdf-toolbar">
      <h1 class="text-3xl font-pacifico text-olive-green mb-4">Our Menu</h1>
      <div class="toolbar-buttons">
        <button @click="prevPage" class="nav-btn" :disabled="currentPage === 0">
          <ChevronLeftIcon class="h-5 w-5" /> Previous
        </button>
        <span class="page-indicator">{{ currentPage + 1 }} / {{ totalPages }}</span>
        <button @click="nextPage" class="nav-btn" :disabled="currentPage === totalPages - 1">
          <ChevronRightIcon class="h-5 w-5" /> Next
        </button>
        <button @click="$router.go(-1)" class="close-btn">
          <XIcon class="h-5 w-5" /> Close
        </button>
      </div>
    </div>

    <div class="menu-container" 
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd">
      <div v-if="loading" class="loading-overlay">
        <LoadingScreen />
      </div>
      
      <div class="book">
        <div class="pages-container" :style="pagesContainerStyle">
          <div v-for="(page, index) in menuPages" 
               :key="index"
               class="page"
               :class="getPageClasses(index)"
               :style="getPageStyles(index)">
            <img :src="page" 
                 :alt="`Menu page ${index + 1}`"
                 class="menu-image"
                 @load="handleImageLoad" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-vue-next';
import LoadingScreen from './LoadingScreen.vue';

// Simulate menu pages (replace with your actual images)
const menuPages = [
  require('@/assets/menu/1.png'),
  require('@/assets/menu/2.png'),
  require('@/assets/menu/3.png'),
  require('@/assets/menu/4.png'),
  require('@/assets/menu/5.png'),
  require('@/assets/menu/6.png'),
  require('@/assets/menu/7.png'),
  require('@/assets/menu/8.png'),
  require('@/assets/menu/9.png'),
  require('@/assets/menu/10.png'),
  require('@/assets/menu/11.png'),
  require('@/assets/menu/12.png'),
  require('@/assets/menu/13.png'),
  require('@/assets/menu/14.png')
];

const loading = ref(true);
const currentPage = ref(0);
const totalPages = menuPages.length;
const loadedImages = ref(0);
const touchStartX = ref(0);

// Handle image loading
const handleImageLoad = () => {
  loadedImages.value++;
  if (loadedImages.value === menuPages.length) {
    loading.value = false;
  }
};

// Page navigation
const nextPage = () => {
  if (currentPage.value < totalPages - 1) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

// Touch handling
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  e.preventDefault();
};

const handleTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX.value - touchEndX;

  if (Math.abs(diff) > 50) { // Minimum swipe distance
    if (diff > 0) {
      nextPage();
    } else {
      prevPage();
    }
  }
};

// Computed styles and classes
const pagesContainerStyle = computed(() => ({
  transform: `translateX(${-currentPage.value * 100}%)`,
}));

const getPageClasses = (index) => ({
  'active': index === currentPage.value,
  'prev': index === currentPage.value - 1,
  'next': index === currentPage.value + 1,
});

const getPageStyles = (index) => ({
  transform: index === currentPage.value ? 'rotateY(0deg)' : 
            index < currentPage.value ? 'rotateY(-180deg)' : 'rotateY(0deg)',
  zIndex: index === currentPage.value ? 2 : 1,
});
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
  align-items: center;
}

.menu-container {
  flex: 1;
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  perspective: 2000px;
}

.book {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.pages-container {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  transform-origin: left center;
  backface-visibility: hidden;
}

.menu-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
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
  z-index: 10;
}

.nav-btn {
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #4CAF50;
  color: white;
  transition: all 0.3s ease;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-indicator {
  padding: 8px 16px;
  background: #ffffff;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.close-btn {
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ff6347;
  color: white;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled),
.close-btn:hover {
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
    flex-wrap: wrap;
  }

  .menu-container {
    margin: 0 -10px;
    border-radius: 0;
  }
}

@media (prefers-color-scheme: dark) {
  .menu-container {
    background: #ffffff;
  }
}

/* Page flip animations */
.page.active {
  transform: rotateY(0deg);
  z-index: 2;
}

.page.prev {
  transform: rotateY(-180deg);
  z-index: 1;
}

.page.next {
  transform: rotateY(0deg);
  z-index: 1;
}
</style>