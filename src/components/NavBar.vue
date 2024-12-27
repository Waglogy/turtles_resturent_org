<template>
  <nav>
    <div class="navlogo">
      <img src="../assets/Turtles_Black_Logo.png" alt="Turtles Logo" />
    </div>
    <div class="hamburger" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div :class="['navlist', { active: isMenuOpen }]">
      <ul>
        <li><a href="/"><i class="fas fa-home"></i> Home</a></li>
        <li><a href="/about"><i class="fas fa-info-circle"></i> About</a></li>
        <li><a href="https://drive.google.com/file/d/1mergqwzSBot9aZVyITUeoGuQ3h_udxZF/view?usp=sharing" target="blank"><i class="fas fa-utensils"></i> Menu</a></li>
        <li><a href="/reserve"><i class="fas fa-calendar-check"></i> Reserve</a></li>
        <li><a href="/contact"><i class="fas fa-phone-alt"></i> Contact</a></li>
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
  padding: 0 30px;
  background-color: #faf1e8;
  position: relative;
  z-index: 10;
}

/* Logo styling */
.navlogo img {
  width: 100px;
  padding: 10px;
  border-radius: 8px;
}

/* Hamburger menu styling */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Navigation list styles */
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

.navlist li {
  display: flex;
  align-items: center;
}

.navlist li a {
  color: #333333;
 
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navlist li a:hover {
  color: #3a6507;
  transform: scale(1.1);
}

/* Updated Responsive Styles */
@media (max-width: 768px) {
  nav {
    background-color:  #faf1e8;; /* Navbar color */
    height: 80px; /* Increased height */
  }

  .hamburger {
    display: flex;
  }

  .navlogo img {
    height: 50px; /* Adjusted for smaller screens */
  }

  .navlist {
    display: none;
    flex-direction: column;
    align-items: center; /* Center alignment */
    justify-content: center; /* Center alignment */
    position: absolute;
    top: 80px; /* Below navbar */
    left: 0;
    width: 100%; /* Full width */
    height: calc(100vh - 80px); /* Full screen minus navbar height */
    background-color: #e5533d;
    z-index: 100;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .navlist.active {
    display: flex;
  }

  .navlist ul {
    flex-direction: column;
    gap: 15px;
  }

  .navlist li a {
    color: #ffffff; /* Visible on new background */
    font-size: 20px;
  }

  .hamburger .bar {
    background-color: #ffffff; /* Contrast with navbar */
  }
}
</style>

