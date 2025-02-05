<template>
  <div class="book-container">
    <br>
    <!-- Navigation Buttons Above the Book -->
    <div class="nav-buttons-container">
      <button 
        class="nav-button" 
        @click="goToPreviousPage" 
        :disabled="currentPage <= 0"
      >
        Previous
      </button>
      <button 
        class="nav-button" 
        @click="goToNextPage" 
        :disabled="currentPage >= pages.length - 1"
      >
        Next
      </button>
    </div>

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
      currentPage: 0, // Tracks the current page being viewed
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
    goToPreviousPage() {
      if (this.currentPage > 0) {
        this.togglePage(this.currentPage - 1); // Unflip the current page
        this.currentPage--;
      }
    },
    goToNextPage() {
      if (this.currentPage < this.pages.length - 1) {
        this.togglePage(this.currentPage); // Flip the next page
        this.currentPage++;
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
/* General container settings */
.book-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure it takes full screen height */
  padding: 20px 0; /* Adds some space at the top and bottom */
  background: #f3f4f6;
}

.book {
  width: 400px;
  height: 600px;
  position: relative;
  perspective: 1500px;
  margin-bottom: 20px; /* Adds space above the footer */
}

/* Navigation buttons */
.nav-buttons-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.nav-button {
  background-color: #00BCD4;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 5px; /* Ensures spacing between buttons */
}

.nav-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.nav-button:hover:not(:disabled) {
  background-color: #2e4a41;
}

/* Book container */


/* Pages inside the book */
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border: 1px solid #ccc;
  transform-origin: left;
  transition: transform 0.8s ease-in-out;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  backface-visibility: hidden;
}

.page.flipped {
  transform: rotateY(-180deg);
}

.page:nth-child(even) {
  transform-origin: right;
}

.page:nth-child(odd) {
  z-index: 2;
}

/* Page images */
.page-content {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Download button */
.download-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.download-button {
  background-color: #00BCD4;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #2e4a41;
}

/* Responsive styles */
@media (max-width: 768px) {
  .book {
    max-width: 350px;
    max-height: 70vh;
  }
}

@media (max-width: 480px) {
  .book {
    max-width: 280px;
    max-height: 60vh;
  }

  .nav-button {
    font-size: 14px;
    padding: 8px 12px;
  }

  .download-button {
    font-size: 14px;
    padding: 10px 20px;
  }
}
</style>
