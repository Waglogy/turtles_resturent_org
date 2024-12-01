<template>
    <div class="menu-page">
      <div class="menu-header">
        <h1 class="menu-title">Turtles Restaurant Menu</h1>
        <button @click="downloadMenu" class="download-button">
          Download Menu
        </button>
      </div>
      <div class="menu-section">
        <div v-for="category in menu" :key="category.name" class="menu-category">
          <h2>{{ category.name }}</h2>
          <ul>
            <li v-for="item in category.items" :key="item.name" class="menu-item">
              <div class="item-details">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-price">₹{{ item.price }}</span>
              </div>
              <p class="item-description">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menu: [
          {
            name: "Appetizers",
            items: [
              {
                name: "Garlic Bread",
                price: 150,
                description: "Freshly baked bread with a garlic butter spread.",
              },
              {
                name: "Cheese Nachos",
                price: 250,
                description: "Crispy nachos topped with melted cheese and salsa.",
              },
            ],
          },
          {
            name: "Main Course",
            items: [
              {
                name: "Grilled Fish",
                price: 550,
                description: "Seasonal fish grilled with herbs and spices.",
              },
              {
                name: "Veggie Pizza",
                price: 400,
                description: "Thin crust pizza loaded with fresh vegetables.",
              },
            ],
          },
          {
            name: "Desserts",
            items: [
              {
                name: "Chocolate Lava Cake",
                price: 200,
                description: "Warm chocolate cake with a gooey molten center.",
              },
              {
                name: "Ice Cream Sundae",
                price: 150,
                description: "Vanilla ice cream topped with nuts and chocolate syrup.",
              },
            ],
          },
          {
            name: "Beverages",
            items: [
              {
                name: "Mango Smoothie",
                price: 120,
                description: "Creamy mango smoothie made with fresh mangoes.",
              },
              {
                name: "Cappuccino",
                price: 100,
                description: "Freshly brewed coffee with a creamy foam topping.",
              },
            ],
          },
        ],
      };
    },
    methods: {
      downloadMenu() {
        const menuUrl = "/path-to-your-menu.pdf"; // Replace with the actual file path
        const link = document.createElement("a");
        link.href = menuUrl;
        link.download = "Turtles_Beach_Menu.pdf";
        link.click();
      },
    },
  };
  </script>
  
  <style scoped>
  .menu-page {
    padding: 50px;
    background: url('../assets/10.jpg') center/cover no-repeat;
    color: #333;
    font-family: "Poppins", sans-serif;
  }
  
  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .menu-title {
    font-family: "Pacifico", cursive;
    font-size: 2.5rem;
    color: #ffffff;
  }
  
  .download-button {
    background-color: #00BCD4;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 15px 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .download-button:hover {
    background-color: #ff6347;
  }
  
  .menu-section {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .menu-category {
    margin-bottom: 30px;
  }
  
  .menu-category h2 {
    font-family: "Raleway", sans-serif;
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
    border-bottom: 2px solid #ff6347;
    padding-bottom: 5px;
  }
  
  .menu-item {
    margin-bottom: 20px;
  }
  
  .item-details {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    color: #555;
  }
  
  .item-name {
    font-weight: bold;
  }
  
  .item-price {
    font-weight: bold;
    color: #00BCD4;
  }
  
  .item-description {
    font-size: 1rem;
    color: #777;
    margin-top: 5px;
  }
  @media (max-width: 768px) {
  .menu-page {
    padding: 30px; /* Adjust padding for smaller screens */
    background-size: cover;
  }

  .menu-title {
    font-size: 2rem; /* Reduce title size */
  }

  .download-button {
    font-size: 0.9rem; /* Smaller button text */
    padding: 10px 20px; /* Adjust padding */
  }

  .menu-section {
    padding: 15px; /* Compact padding */
    border-radius: 10px; /* Adjust radius for smaller screens */
  }

  .menu-category h2 {
    font-size: 1.5rem; /* Smaller category heading */
  }

  .item-details {
    font-size: 1rem; /* Adjust item details size */
  }

  .item-description {
    font-size: 0.9rem; /* Compact description text */
  }
}

@media (max-width: 480px) {
  .menu-header {
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start;
  }

  .menu-title {
    font-size: 1.8rem; /* Further reduce title size */
    margin-bottom: 10px; /* Add spacing for stacked layout */
  }

  .download-button {
    width: 100%; /* Full-width button for smaller screens */
    font-size: 0.8rem; /* Smaller text */
  }

  .menu-category h2 {
    font-size: 1.2rem;
  }

  .item-details {
    flex-direction: column; /* Stack name and price vertically */
    align-items: flex-start;
  }

  .item-price {
    margin-top: 5px; /* Add spacing when stacked */
  }

  .menu-section {
    padding: 10px;
  }
}


  </style>
  