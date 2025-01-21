<template>
  <div class="contact-page">
    <div class="contact-header" data-aos="fade-down">
      <br><br>
      <h1 class="contact-title">Contact Us</h1>
      <p class="contact-subtitle" data-aos="fade-up" data-aos-delay="100">We're Just a Message Away!</p>
      <p class="contact-description" data-aos="fade-up" data-aos-delay="200">
        Have a question, craving, or plan to chill at Turtles? Reach out—we'd love to hear from you!
      </p>
    </div>

    <div class="contact-container">
      <!-- Contact Information -->
      <div class="contact-info" data-aos="fade-right">
        <h2 data-aos="fade-up">How to Reach Us</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          <span role="img" aria-label="phone">📞</span> Call Us: 9270011045 / 9969352048
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          <span role="img" aria-label="email">📧</span> Email Us: turtles.goa@gmail.com
        </p>
        <br>
        <h3 data-aos="fade-up" data-aos-delay="300">Planning a party or a special event?</h3>
        <p data-aos="fade-up" data-aos-delay="400">
          <span role="img" aria-label="party">🎉</span> Click the button to book your event now:
        </p>
        <br>
        <button @click="bookEvent" class="contact-button" data-aos="fade-up" data-aos-delay="500">
          Call Us Now
        </button>
      </div>

      <!-- Google Maps -->
      <div class="map-location" data-aos="fade-left">
        <h2 data-aos="fade-up">Find Us on the Map</h2>
        <p data-aos="fade-up" data-aos-delay="100">Get directions to Turtles, Morjim, right here:</p>
        <div data-aos="zoom-in" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.7091860190257!2d73.72357231530016!3d15.558766309387945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf5f9b9c5f88d1%3A0x432a6a5cb39cc687!2sTurtle%20Beach%20Road%2C%20Morjim%2C%20Goa!5e0!3m2!1sen!2sin!4v1602135680794!5m2!1sen!2sin"
            width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
          </iframe>
        </div>
        <p data-aos="fade-up" data-aos-delay="300">
          <strong>Our Location:</strong> Turtle Beach Road, Morjim, Goa
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const bookEvent = () => {
  window.location.href = "tel:+919270011045";
};

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    offset: 50
  });
});
</script>

<style scoped>
.contact-page {
  font-family: "Poppins", sans-serif;
  padding: 20px; /* Add padding for general spacing */
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.contact-title {
  font-family: "Pacifico", cursive;
  font-size: 2.5rem;
  color: #3A6507;
  line-height: 1.2; /* Added line-height for better readability */
}

.contact-subtitle {
  font-size: 1.5rem;
  color: #333;
  margin-top: 10px; /* Added spacing between title and subtitle */
}

.contact-description {
  font-size: 1rem;
  color: #333;
  margin-top: 15px;
  line-height: 1.5; /* Improve readability for longer text */
}

.contact-container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
  /* Spacing between header and content */
}

.contact-info,
.map-location {
  padding: 20px; /* Added padding for content separation */
  border-radius: 20px; /* Reduced border radius for a modern look */
  width: 45%;
  background-color: #f9f9f9; /* Optional background to distinguish sections */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
}

.contact-info h2,
.map-location h2 {
  margin-bottom: 15px;
  font-family: "Raleway", sans-serif;
  font-size: 1.8rem;
  color: #333;
}

.contact-info p,
.map-location p {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.5; /* Improve text readability */
}

.contact-button {
  background: #00BCD4;
  color: #fff;
  border: none;
  padding: 15px;
  
  margin: 20px auto; /* Add top spacing for separation */
  display: block;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for the button */
}

.contact-button:hover {
  background: #ff6347;
  transform: scale(1.05); /* Add hover effect for better interaction */
}

.map-location iframe {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 15px; /* Separate text from the iframe */
}

@media screen and (max-width: 768px) {
  .contact-page {
    padding: 15px;
  }

  .contact-header {
    margin-bottom: 30px;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-subtitle {
    font-size: 1.2rem;
  }

  .contact-container {
    flex-direction: column;
    align-items: center;
  }

  .contact-info,
  .map-location {
    width: 90%;
  }

  .contact-button {
    padding: 12px;
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .contact-title {
    font-size: 1.8rem;
  }

  .contact-subtitle {
    font-size: 1rem;
  }

  .contact-description,
  .contact-info p,
  .map-location p {
    font-size: 0.9rem;
  }

  .contact-button {
    padding: 10px;
    font-size: 0.9rem;
  }
}
</style>
