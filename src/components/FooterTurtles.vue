<template>
  <footer class="footer text-white py-12 px-6 sm:px-12 lg:px-24">
    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h4 class="text-xl font-bold mb-4">Contact Us</h4>
        <p>Email: turtles.goa@gmail.com</p>
        <p>Phone: 9270011045/9969352048</p>
      </div>
      <div>
        <h4 class="text-xl font-bold mb-4">Follow Us</h4>
        <div class="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61554956255141"
            target="_blank"
            class="text-white hover:text-cyan-300 transition duration-300"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/turtles.goa/"
            target="_blank"
            class="text-white hover:text-cyan-300 transition duration-300"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div>
  <h4 class="text-xl font-bold mb-4">Timings</h4>
  <div class="flex flex-col lg:flex-row  lg:items-center gap-10">
    <!-- Text Content -->
    <div>
     
      <p> 10 AM to 11 PM</p>
    </div>

    <!-- Geo Tag Location -->
    
  </div>
</div>

      <div>
  <h4 class="text-xl font-bold mb-4">Location</h4>
  <div class="flex flex-col lg:flex-column items-center lg:items-center gap-10">
    
    <!-- Geo Tag Location -->
    <div class="map-container lg:w-6/4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.5302568198404!2d73.735346!3d15.616726900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe966e7743bfb%3A0xe703e52aadd9c71c!2sTurtles%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sin!4v1738674223972!5m2!1sen!2sin"
        width="100%"
        height="150"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div> 
  </div>
</div>

     
    </div>

    <!-- Copyright Section -->
    <div class="mt-8 text-center footer-copyright">
      <p>&copy; 2024 Turtles Restaurant & Bar. All rights reserved.</p>
      <p>
        Made with love by
        <a
          href="https://www.waglogy.in"
          target="_blank"
          class="text-cyan-300 hover:text-cyan-400 transition"
          >Waglogy</a
        >
      </p>
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
  background: url("../assets/21.jpg") center/cover no-repeat;
  color: white;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.footer > * {
  position: relative;
  z-index: 2;
}

.map-container {
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
