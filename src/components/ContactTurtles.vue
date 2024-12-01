<template>
    <div class="contact-page">
      <div class="contact-header">
        <h1 class="contact-title">Get in Touch</h1>
        <p class="contact-subtitle">We'd love to hear from you!</p>
      </div>
      <div class="contact-container">
        <!-- Contact Form -->
        <div class="contact-form">
          <h2>Contact Us</h2>
          <form @submit.prevent="submitContactForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                v-model="contactForm.name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="contactForm.email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="contactForm.message"
                placeholder="Write your message here"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
  
        <!-- Location & Social Media -->
        <div class="contact-info">
          <h2>Visit Us</h2>
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31208.769755110317!2d73.74954347284636!3d15.348021815547053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe98a1bd5c9d9%3A0xb72c12f485dcbfae!2sTurtle%20Beach%2C%20Goa!5e0!3m2!1sen!2sin!4v1693927893765!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="social-links">
            <p>Follow us on:</p>
            <a href="https://facebook.com" target="_blank" class="social-icon">Facebook</a>
            <a href="https://instagram.com" target="_blank" class="social-icon">Instagram</a>
            <a href="https://twitter.com" target="_blank" class="social-icon">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contactForm: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
        submitContactForm() {
  const { name, email, message } = this.contactForm;

  const confirmationMessage = `
    Thank you, ${name}! 
    Your message: "${message}" has been sent. 
    We will get back to you at ${email}.
  `;

  alert(confirmationMessage);

  // Clear form after submission
  this.contactForm.name = "";
  this.contactForm.email = "";
  this.contactForm.message = "";
}

    },
  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 50px;
    background: url('../assets/19.jpg') center/cover no-repeat;
    font-family: "Poppins", sans-serif;
    color: #333;
  }
  
  .contact-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .contact-title {
    font-family: "Pacifico", cursive;
    font-size: 2.5rem;
    color: #00BCD4;
  }
  
  .contact-subtitle {
    font-size: 1.2rem;
    color: #ffffff;
  }
  
  .contact-container {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .contact-form,
  .contact-info {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 45%;
    max-width: 500px;
  }
  
  .contact-form h2,
  .contact-info h2 {
    margin-bottom: 15px;
    font-family: "Raleway", sans-serif;
    font-size: 1.8rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input   {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 50px;
    font-size: 1rem;
  }
  textarea {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 35px;
    font-size: 1rem;
  }
  
  .submit-button {
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
  
  .submit-button:hover {
    background: #ff6347;
  }
  
  .map {
    width: 100%;
    height: 300px;
    border: none;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  
  .social-links {
    text-align: center;
  }
  
  .social-links p {
    margin-bottom: 10px;
  }
  
  .social-icon {
    display: inline-block;
    margin: 5px;
    text-decoration: none;
    color: #00BCD4;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .social-icon:hover {
    color: #ff6347;
  }
  /* Responsive styles for smaller devices */
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
    font-size: 1rem;
  }

  .contact-container {
    flex-direction: column; /* Stack the form and info vertically */
    align-items: center; /* Center-align items */
  }

  .contact-form,
  .contact-info {
    width: 90%; /* Reduce width to fit smaller screens */
    padding: 20px;
  }

  .contact-form h2,
  .contact-info h2 {
    font-size: 1.5rem; /* Adjust header size */
  }

  .form-group {
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 95%; /* Make inputs fill the available space */
    font-size: 0.9rem; /* Adjust font size for smaller screens */
  }

  .submit-button {
    padding: 12px; /* Reduce padding for smaller screens */
    font-size: 1rem; /* Adjust font size */
  }

  .map {
    height: 200px; /* Reduce map height for smaller screens */
  }

  .social-links p {
    font-size: 0.9rem;
  }

  .social-icon {
    margin: 3px; /* Reduce spacing for social icons */
    font-size: 0.9rem; /* Adjust font size */
  }
}

@media screen and (max-width: 480px) {
  .contact-title {
    font-size: 1.8rem;
  }

  .contact-subtitle {
    font-size: 0.9rem;
  }

  .map {
    height: 150px; /* Further reduce map height for very small screens */
  }

  .submit-button {
    padding: 10px; /* Further reduce padding */
    font-size: 0.9rem; /* Adjust button text size */
  }

  .social-icon {
    font-size: 0.8rem; /* Smaller font for icons */
  }
}
  </style>
  