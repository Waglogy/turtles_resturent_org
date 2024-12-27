<template>
  <footer class="footer text-white py-12 px-6 sm:px-12 lg:px-24">
    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 class="text-2xl font-pacifico mb-4">Turtles</h3>
        <p>Experience the best of Goan cuisine and vibes at Morjim Beach.</p>
      </div>
      <div>
        <h4 class="text-xl font-bold mb-4">Contact Us</h4>
        <p>Email: info@turtlesrestaurant.com</p>
        <p>Phone: +91 123 456 7890</p>
      </div>
      <div>
        <h4 class="text-xl font-bold mb-4">Location</h4>
        <p>Morjim Beach, Goa, India</p>
        <p>Open daily: 10 AM to 11 PM</p>
      </div>
      <div>
        <h4 class="text-xl font-bold mb-4">Follow Us</h4>
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-cyan-300 transition duration-300">
            <i class="fab fa-facebook-f"></i> <!-- Facebook Icon -->
          </a>
          <a href="#" class="text-white hover:text-cyan-300 transition duration-300">
            <i class="fab fa-instagram"></i> <!-- Instagram Icon -->
          </a>
          <a href="#" class="text-white hover:text-cyan-300 transition duration-300">
            <i class="fab fa-twitter"></i> <!-- Twitter Icon -->
          </a>
        </div>
      </div>
    </div>

    <!-- CTA Buttons Section -->
    <!-- <div class="cta-buttons mt-8 text-center">
      <a href="tel:+911234567890" class="cta-btn text-lg bg-green-500 px-6 py-3 rounded-md text-white hover:bg-green-600 transition">Got questions? Call us now!</a>
      <a href="https://goo.gl/maps" class="cta-btn text-lg bg-blue-500 px-6 py-3 rounded-md text-white hover:bg-blue-600 transition">Find Us</a>
      <a href="/delivery" class="cta-btn text-lg bg-orange-500 px-6 py-3 rounded-md text-white hover:bg-orange-600 transition">Get a taste of Turtles at home!</a>
    </div> -->

    <!-- Copyright Section at the Bottom -->
    <div class="mt-8 text-center footer-copyright">
      <p>&copy; 2023 Turtles Restaurant & Bar. All rights reserved.</p>
      <p>Made with love by <a href="https://www.waglogy.in" class="text-cyan-300 hover:text-cyan-400 transition">Waglogy</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterTur",
};
</script>

<style scoped>
.footer {
  position: relative;
  background: url('../assets/21.jpg') center/cover no-repeat;
  color: white;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value (0.5) for transparency */
  z-index: 1;
}

.footer > * {
  position: relative;
  z-index: 2;
}

.cta-buttons {
  display: flex;
  justify-content: space-around;
  gap: 16px;
  margin-top: 24px;
}

.cta-btn {
  font-size: 1.125rem;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.footer-copyright {
  margin-top: 32px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-copyright a {
  text-decoration: none;
}
</style>
