<template>
    <nav>
      <div class="navlogo">
        <h1>Turtles</h1>
      </div>
      <div class="hamburger" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div :class="['navlist', { active: isMenuOpen }]">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reserve">Reserve</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #faf1e8;
    position: relative; /* Add this for proper positioning */
    z-index: 10; /* Ensure it stays above other content */
  }
  
  .navlogo h1 {
    color: #3a6507;
  }
  
  .navlist {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }
  
  .navlist ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }
  
  .navlist li a {
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    text-decoration: none;
  }
  
  .navlist li a:hover {
    text-decoration: underline;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
  }
  
  .hamburger .bar {
    width: 25px;
    height: 3px;
    background-color: #333333; /* Ensure visibility */
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .navlist {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 81px;
     
      right: 50px;
      background-color: #faf1e8;
      border-radius: 1px;
      padding: 120px;
      gap: 10px;
      z-index: 100; /* Ensure menu is on top of all content */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .navlist.active {
      display: flex;
    }
  
    .navlist ul {
      flex-direction: column;
      gap: 10px;
    }
  
    .navlist li a {
      color: #333333; /* Ensure visibility on dark background */
    }
  
    .hamburger {
      display: flex;
    }
  }
  
 
  
  </style>
  