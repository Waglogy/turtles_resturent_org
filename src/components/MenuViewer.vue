<template>
  <div class="book-container">
    <div class="book">
      <!-- Loop through pages -->
      <div
        v-for="(page, index) in pages"
        :key="index"
        :class="['page', { flipped: flippedPages.includes(index) }]"
        :style="{ zIndex: pages.length - index }"
        @click="togglePage(index)"
      >
        <img :src="page" alt="Book Page" class="page-content" />
      </div>
    </div>
    <!-- Menu Download Button -->
    <div class="download-button-container">
      <button @click="downloadMenu" class="download-button">
        Download Menu PDF
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        require("@/assets/menu/1.png"), // Front cover
        ...Array.from({ length: 12 }, (_, i) =>
          require(`@/assets/menu/${i + 2}.png`)
        ), // Middle pages (2.png to 13.png)
        require("@/assets/menu/14.png"), // Back cover
      ],
      flippedPages: [], // Keeps track of flipped pages
    };
  },
  methods: {
    togglePage(index) {
      if (this.flippedPages.includes(index)) {
        // Unflip the page
        this.flippedPages = this.flippedPages.filter((i) => i !== index);
      } else {
        // Flip the page
        this.flippedPages.push(index);
      }
    },
    downloadMenu() {
      // Open the PDF in a new tab
      window.open("/Turtles_Menu.pdf", "_blank");
    },
  },
};
</script>

<style scoped>
.book-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f3f4f6;
}

.book {
  width: 400px;
  height: 500px;
  position: relative;
  perspective: 1500px; /* Ensures 3D flipping effect */
  margin-bottom: 20px; /* Adds spacing below the book */
}

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border: 1px solid #ccc;
  transform-origin: left;
  transition: transform 0.8s ease-in-out;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  backface-visibility: hidden; /* Hides the back side of the page */
}

.page.flipped {
  transform: rotateY(-180deg);
}

.page:nth-child(even) {
  transform-origin: right; /* Flip from the right for even pages */
}

.page:nth-child(odd) {
  z-index: 2;
}

.page-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.download-button-container {
  display: flex;
  justify-content: center;
}

.download-button {
  background-color: #3b5d50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #2e4a41;
}
</style>
