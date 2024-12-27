<template>
  <nav>
    <div class="navlogo">
      <img src="../assets/logo .png" alt="Turtles Logo" />
    </div>
    <div class="hamburger" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div :class="['navlist', { active: isMenuOpen }]">
      <ul>
        <li><a href="/"><i class="fas fa-home"></i> Home</a></li>
        <li><a href="/about"><i class="fas fa-info-circle"></i> About</a></li> <!-- New About link -->
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
  padding: 0 20px;
  background-color: #faf1e8;
  position: relative;
  z-index: 10;
}

.navlogo img {
  width: 100px;
  padding: 10px;
  border-radius: 8px;
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

.navlist li {
  display: flex;
  align-items: center;
}

.navlist li a {
  color: #3a6507;
  /* Charcoal Grey */
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px; /* Space between icon and text */
}

.navlist li a:hover {
  color: #333333;  /* Olive Green */
  transform: scale(1.1); /* Slight scaling effect */
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
    padding: 20px;
    gap: 10px;
    z-index: 100;
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
    color: #333333;
  }

  .hamburger {
    display: flex;
  }

  .navlogo img {
    height: 40px; /* Adjust for smaller screens */
  }
}
</style>
