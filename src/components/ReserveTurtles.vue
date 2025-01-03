<template>
  <div class="reserve-page">
    <div class="booking-form" data-aos="zoom-in">
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
          <label for="date">Date</label>
          <input type="date" id="date" v-model="formData.date" required />
        </div>
        <div class="form-group" data-aos="fade-up" data-aos-delay="400">
          <label for="time">Time</label>
          <input type="time" id="time" v-model="formData.time" required />
        </div>
        <div class="form-group" data-aos="fade-up" data-aos-delay="500">
          <label for="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            v-model="formData.guests"
            placeholder="Enter the number of guests"
            min="1"
            required
          />
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
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const formData = ref({
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: 1,
  special: "",
});

const loading = ref(false);
const error = ref(null);

const handleSubmit = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const requestData = {
      username: formData.value.name,
      phone: parseInt(formData.value.phone),
      reserveDate: formData.value.date,
      reserveTime: formData.value.time,
      numberOfGuests: parseInt(formData.value.guests),
      specialRequest: formData.value.special
    };

    const response = await axios.post('https://turtles-steel.vercel.app/api/reserve', requestData);
    
    if (response.status === 200) {
      alert('Reservation submitted successfully!');
      // Reset form after successful submission
      formData.value = {
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
        special: "",
      };
    }
  } catch (err) {
    error.value = 'Failed to submit reservation. Please try again.';
    console.error('Error:', err);
  } finally {
    loading.value = false;
  }
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
textarea {
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
  textarea {
    font-size: 0.9rem; /* Adjust font size for smaller screens */
    padding: 8px; /* Slightly reduce padding */
    border-radius: 10px; /* Simplify the radius for consistency */
  }

  .submit-button {
    font-size: 1.2rem; /* Smaller button text size */
    padding: 15px; /* Reduce padding for better spacing */
    border-radius: 10px; /* Match smaller screen elements */
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
  textarea {
    font-size: 0.8rem;
    padding: 5px;
  }

  .submit-button {
    font-size: 1rem;
    padding: 10px;
  }
}

@media (max-width: 768px) {
  input,
  textarea {
    font-size: 1rem; /* Increase font size for better readability */
    padding: 12px; /* Add more padding */
    border-radius: 15px; /* Slightly larger radius for a rounded effect */
  }

  .submit-button {
    font-size: 1.4rem; /* Adjust button size */
    padding: 18px; /* Increase padding for the button */
    border-radius: 15px;
  }
}

@media (max-width: 480px) {
  input,
  textarea {
    font-size: 1.1rem; /* Even larger font for smaller devices */
    padding: 10px 4px ; /* Further increase padding */
    border-radius: 20px; /* Make fields more rounded */
  }

  .submit-button {
    font-size: 1.2rem; /* Adjust button size */
    padding: 16px; /* Adjust padding for the button */
    border-radius: 20px;
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
  
