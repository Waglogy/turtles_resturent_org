<template>
  <div class="reserve-page">
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
      <button @click="redirectToHome" class="ok-button">OK</button>
    </div>
    <div v-else class="booking-form" data-aos="zoom-in">
      <h1 data-aos="fade-down">Reserve Your Spot at Turtles</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group" data-aos="fade-up" data-aos-delay="100">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group" data-aos="fade-up" data-aos-delay="200">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div class="form-group" data-aos="fade-up" data-aos-delay="300">
          <label for="altPhone">Alternate Phone Number</label>
          <input
            type="tel"
            id="altPhone"
            v-model="formData.altPhone"
            placeholder="Enter your alternate phone number"
          />
        </div>
        <div class="form-group" data-aos="fade-up" data-aos-delay="400">
          <label for="date">Date</label>
          <input type="date" id="date" v-model="formData.date" required />
        </div>
        <div class="form-group" data-aos="fade-up" data-aos-delay="500">
          <label for="table">Table</label>
          <select id="table" v-model="formData.table" required>
            <option value="2 Seater">2 Seater</option>
            <option value="4 Seater">4 Seater</option>
            <option value="6 Seater">6 Seater</option>
            <option value="8 Seater">8 Seater</option>
            <option value="Machan">Machan</option>
          </select>
        </div>
        <div class="form-group" data-aos="fade-up" data-aos-delay="600">
          <label for="special">Special Requests</label>
          <textarea
            id="special"
            v-model="formData.special"
            placeholder="Add any special requests (optional)"
          ></textarea>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <button 
          type="submit" 
          class="submit-button" 
          data-aos="fade-up" 
          data-aos-delay="700"
          :disabled="loading"
        >
          {{ loading ? 'Submitting...' : 'Reserve Now' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const formData = ref({
  name: "",
  phone: "",
  altPhone: "",
  date: "",
  table: "",
  special: "",
});

const loading = ref(false);
const error = ref(null);
const successMessage = ref("");
const router = useRouter();

const handleSubmit = async () => {
  loading.value = true;
  error.value = null;
  successMessage.value = "";
  
  try {
    const requestData = {
      username: formData.value.name,
      phone: formData.value.phone,
      altPhone: formData.value.altPhone,
      reserveDate: formData.value.date,
      table: formData.value.table,
      specialRequest: formData.value.special
    };

    // Send email using EmailJS
    await emailjs.send('service_empq6or', 'template_iwcfah3', {
      to_name: 'Turtles Restaurant',
      from_name: requestData.username,
      phone: requestData.phone,
      alt_phone: requestData.altPhone,
      reserve_date: requestData.reserveDate,
      table: requestData.table,
      special_request: requestData.specialRequest
    }, 'Ox15g1wPOAJofphXz');

    successMessage.value = 'Thank you for your reservation request! We\'ve received your booking and will give you a confirmation call shortly. Stay tuned!';
    
    // Reset form after successful submission
    formData.value = {
      name: "",
      phone: "",
      altPhone: "",
      date: "",
      table: "",
      special: "",
    };
  } catch (err) {
    error.value = 'Failed to submit reservation. Please try again.';
    console.error('Error:', err);
  } finally {
    loading.value = false;
  }
};

const redirectToHome = () => {
  router.push('/');
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
.reserve-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background: url('../assets/banner1.jpg') center/cover no-repeat;
  padding: 60px;
}

.booking-form {
  background: rgba(255, 255, 255, 0.9);
  padding: 70px;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;
}

.booking-form h1 {
  margin-bottom: 20px;
  font-size: xx-large;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1em;
}

textarea {
  resize: none;
}

.submit-button {
  background: #00BCD4;
  color: #fff;
  border: none;
  padding: 20px;
  width: 100%;
  border-radius: 50px;
  font-size: 2em;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-button:hover {
  background: #ff6347;
}

.success-message {
  background: #ffffff;
  color: black;
  padding: 20px;
  border-radius: 20px;
  border:2px #00BCD4;
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.2em;
  font-weight: 1rem;
  font-family: "Pacifico", cursive; 
  max-width: 450px;
  width: 100%;
}

.ok-button {
  background: #fff;
  color: #00BCD4;
  border: 2px solid #00BCD4;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;
}

.ok-button:hover {
  background:  #00BCD4;
  color: #000000;
}

h2 {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
  color:#ff6347 ;
}

.raleway-h1  {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}

.label {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
} 

@media (max-width: 768px) {
  .reserve-page {
    padding: 30px;
    background-size: cover; /* Ensure background adjusts for smaller screens */
  }

  .booking-form {
    padding: 30px;
    border-radius: 20px; /* Smaller radius for compact designs */
    max-width: 100%; /* Take full width for smaller screens */
    box-shadow: none; /* Simplify design for performance on smaller devices */
  }

  .booking-form h2 {
    font-size: 1.8rem; /* Adjust heading size */
  }

  input,
  textarea,
  select {
    font-size: 0.9rem; /* Adjust font size for smaller screens */
    padding: 8px; /* Slightly reduce padding */
    border-radius: 10px; /* Simplify the radius for consistency */
  }

  .submit-button {
    font-size: 1.2rem; /* Smaller button text size */
    padding: 15px; /* Reduce padding for better spacing */
    border-radius: 10px; /* Match smaller screen elements */
  }

  .success-message {
    font-size: 1rem; /* Adjust success message size */
    padding: 15px; /* Adjust padding */
    border-radius: 10px; /* Adjust border radius */
  }

  .ok-button {
    font-size: 0.9rem; /* Adjust button size */
    padding: 8px 16px; /* Adjust padding */
  }
}

@media (max-width: 480px) {
  .reserve-page {
    padding: 20px;
  }

  .booking-form {
    padding: 20px;
    border-radius: 10px;
  }

  .booking-form h2 {
    font-size: 1.5rem;
  }

  input,
  textarea,
  select {
    font-size: 0.8rem;
    padding: 5px;
  }

  .submit-button {
    font-size: 1rem;
    padding: 10px;
  }

  .success-message {
    font-size: 0.9rem; /* Adjust success message size */
    padding: 10px; /* Adjust padding */
    border-radius: 10px; /* Adjust border radius */
  }

  .ok-button {
    font-size: 0.8rem; /* Adjust button size */
    padding: 6px 12px; /* Adjust padding */
  }
}

@media (max-width: 768px) {
  input,
  textarea,
  select {
    font-size: 1rem; /* Increase font size for better readability */
    padding: 12px; /* Add more padding */
    border-radius: 15px; /* Slightly larger radius for a rounded effect */
  }

  .submit-button {
    font-size: 1.4rem; /* Adjust button size */
    padding: 18px; /* Increase padding for the button */
    border-radius: 15px;
  }

  .success-message {
    font-size: 1.1rem; /* Adjust success message size */
    padding: 18px; /* Adjust padding */
    border-radius: 15px; /* Adjust border radius */
  }

  .ok-button {
    font-size: 1rem; /* Adjust button size */
    padding: 10px 20px; /* Adjust padding */
  }
}

@media (max-width: 480px) {
  input,
  textarea,
  select {
    font-size: 1.1rem; /* Even larger font for smaller devices */
    padding: 10px 4px ; /* Further increase padding */
    border-radius: 20px; /* Make fields more rounded */
  }

  .submit-button {
    font-size: 1.2rem; /* Adjust button size */
    padding: 16px; /* Adjust padding for the button */
    border-radius: 20px;
  }

  .success-message {
    font-size: 1rem; /* Adjust success message size */
    padding: 16px; /* Adjust padding */
    border-radius: 20px; /* Adjust border radius */
  }

  .ok-button {
    font-size: 0.9rem; /* Adjust button size */
    padding: 8px 16px; /* Adjust padding */
  }
}

.error-message {
  color: #ff0000;
  margin: 10px 0;
  text-align: center;
}

.submit-button:disabled {
  background: #cccccc;
  cursor: not-allowed;
}
</style>

