<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1 class="contact-title">Contact Us</h1>
      <p class="contact-subtitle">We’re Just a Message Away!</p>
      <p class="contact-description">Have a question, craving, or plan to chill at Turtles? Reach out—we’d love to hear from you!</p>
    </div>

    <div class="contact-container">
      <!-- Contact Information -->
      <div class="contact-info">
        <h2>How to Reach Us</h2>
        <p><span role="img" aria-label="phone">📞</span> Call Us: +91 092700 11045</p>
        <p><span role="img" aria-label="email">📧</span> Email Us: turtlesmorjim@gmail.com</p>
        <br>
        <h3>Planning a party or a special event?</h3>
        <p><span role="img" aria-label="party">🎉</span> Click the button to book your event now:</p>
        <br>
        <button @click="bookEvent" class="contact-button">Call Us Now</button>
      </div>

      <!-- Google Maps -->
      <div class="map-location">
        <h2>Find Us on the Map</h2>
        <p>Get directions to Turtles, Morjim, right here:</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.7091860190257!2d73.72357231530016!3d15.558766309387945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf5f9b9c5f88d1%3A0x432a6a5cb39cc687!2sTurtle%20Beach%20Road%2C%20Morjim%2C%20Goa!5e0!3m2!1sen!2sin!4v1602135680794!5m2!1sen!2sin"
          width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>
        <p><strong>Our Location:</strong> Turtle Beach Road, Morjim, Goa</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    bookEvent() {
      // This will open the phone dialer with the phone number
      window.location.href = "tel:+919270011045";
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding: 50px;
  font-family: "Poppins", sans-serif;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
}

.contact-title {
  font-family: "Pacifico", cursive;
  font-size: 2.5rem;
  color: #3A6507;
}

.contact-subtitle {
  font-size: 1.5rem;
  color: #333;
}

.contact-description {
  font-size: 1rem;
  color: #333;
  margin-top: 15px;
}

.contact-container {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
}

.contact-info,
.map-location {
  padding: 20px;
  border-radius: 50px;
  width: 45%;
  max-width: 500px;
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
}

.contact-button {
  background: #00BCD4;
  color: #fff;
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
}

.contact-button:hover {
  background: #ff6347;
}

.map-location iframe {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 768px) {
  .contact-page {
    padding: 30px;
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

  .contact-button {
    padding: 10px;
    font-size: 0.9rem;
  }
}
</style>
