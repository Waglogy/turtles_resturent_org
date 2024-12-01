<template>
    <div class="menu-slider-container">
      <div class="slider-content">
        <!-- Slider items (food images) -->
        <div class="slider-items" :style="sliderStyle">
          <div class="slider-item" v-for="(item, index) in menuItems" :key="index">
            <img :src="item.image" :alt="item.name" />
          </div>
        </div>
      </div>
  
      <!-- Left and Right Arrow buttons -->
      <button class="slider-btn left-btn" @click="moveLeft">&#8592;</button>
      <button class="slider-btn right-btn" @click="moveRight">&#8594;</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0, // Track the index of the currently visible image
        menuItems: [
          { name: "Pizza", image: require('@/assets/10.jpg') },
          { name: "Burger", image: require('@/assets/9.jpg') },
          { name: "Pasta", image: require('@/assets/8.jpg') },
          { name: "Sushi", image: require('@/assets/7.jpg') },
          { name: "Salad", image: require('@/assets/6.png') },
          // Add more items as needed
        ],
      };
    },
    computed: {
      sliderStyle() {
        const offset = -(this.currentIndex * 100 / this.menuItems.length); // Calculate the offset to slide
        return {
          transform: `translateX(${offset}%)`,
          transition: 'transform 0.5s ease', // Smooth sliding transition
        };
      },
    },
    methods: {
      moveLeft() {
        // Move left, making sure we loop around the images
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.menuItems.length - 1;
        }
      },
      moveRight() {
        // Move right, looping around the images
        if (this.currentIndex < this.menuItems.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .menu-slider-container {
    position: relative;
    width: 100%;
    height: 30vh; /* Set the height of the slider to not exceed 20vh */
    overflow: hidden;
    border: 0px solid #ccc; /* Optional: Border around the slider */
    border-radius: 10px;
  }
  
  .slider-content {
    display: flex;
    height: 100%;
  }
  
  .slider-items {
    display: flex;
    transition: transform 0.5s ease; /* Smooth transition for sliding */
    height: 100%;
   
    gap: 10px; /* Add small gaps between the images */
  }
  
  .slider-item {
    flex: 0 0 20%; /* Each item takes up 20% of the width */
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  
  .slider-item img {
    max-height: 100%;
    object-fit: cover; /* Ensure the image fits well within the container */
    border-radius: 10px; /* Optional: Border radius for the images */
    width: 100%; /* Make the image fill its container */
    border: 2px solid #edde53; /* Border of the square */
    border-radius: 10px;
}
  
  .slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 1.5em;
    border-radius: 50%;
    z-index: 1;
  }
  
  .left-btn {
    left: 10px;
  }
  
  .right-btn {
    right: 10px;
  }
  
  .slider-btn:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  @media screen and (max-width: 768px) {
    .slider-btn {
      font-size: 1.2em;
      padding: 8px;
    }
  }


 
/* Existing styles */
.menu-slider-container {
  position: relative;
  width: 100%;
  height: 30vh; /* Maintain height proportionate to the viewport height */
  overflow: hidden;
  border: 0px solid #ccc; /* Optional: Border around the slider */
  border-radius: 10px;
}

.slider-content {
  display: flex;
  height: 100%;
}

.slider-items {
  display: flex;
  transition: transform 0.5s ease; /* Smooth transition for sliding */
  height: 100%;
  gap: 10px; /* Add small gaps between the images */
}

.slider-item {
  flex: 0 0 20%; /* Each item takes up 20% of the width */
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-item img {
  max-height: 100%;
  object-fit: cover; /* Ensure the image fits well within the container */
  border-radius: 10px; /* Optional: Border radius for the images */
  width: 100%; /* Make the image fill its container */
  border: 2px solid #edde53; /* Border of the square */
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5em;
  border-radius: 50%;
  z-index: 1;
}

.left-btn {
  left: 10px;
}

.right-btn {
  right: 10px;
}

.slider-btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  /* Adjust height for smaller screens */
  .menu-slider-container {
    height: 25vh;
  }

  /* Reduce the size of slider items */
  .slider-item {
    flex: 0 0 50%; /* Each item takes up 50% of the width */
  }

  /* Adjust button sizes */
  .slider-btn {
    font-size: 1.2em;
    padding: 8px;
  }
}

@media screen and (max-width: 480px) {
  /* Further adjustments for very small screens */
  .menu-slider-container {
    height: 20vh;
  }

  .slider-item {
    flex: 0 0 100%; /* Show one item per slide */
  }

  .slider-btn {
    font-size: 1em;
    padding: 6px;
  }
}







  </style>
  