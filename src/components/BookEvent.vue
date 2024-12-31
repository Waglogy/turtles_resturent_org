<template>
  <div class="booking-container">
    <div class="booking-form">
      <h1 class="text-3xl font-pacifico text-olive-green mb-6">Book Event</h1>
      
      <form @submit.prevent="submitBookingForm" class="space-y-6">
        <!-- Event Name (read-only) -->
        <div class="form-group">
          <label for="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            v-model="eventForm.eventName"
            readonly
            class="readonly-field"
          />
        </div>

        <!-- Full Name -->
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            v-model="eventForm.fullName"
            required
            placeholder="Enter your full name"
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="eventForm.email"
            required
            placeholder="Enter your email"
          />
        </div>

        <!-- Phone -->
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            v-model="eventForm.phone"
            required
            placeholder="Enter your phone number"
          />
        </div>

        <!-- Number of Guests -->
        <div class="form-group">
          <label for="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            v-model="eventForm.guests"
            min="1"
            required
          />
        </div>

        <!-- Special Request -->
        <div class="form-group">
          <label for="message">Special Request (Optional)</label>
          <textarea
            id="message"
            v-model="eventForm.message"
            rows="4"
            placeholder="Any special requests or notes?"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          class="submit-btn"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Booking...' : 'Book Now' }}
        </button>
      </form>
    </div>

    <!-- Thank You Popup -->
    <div v-if="showThankYou" class="popup-overlay">
      <div class="thank-you-popup">
        <div class="popup-content">
          <i class="fas fa-check-circle text-5xl text-green-500 mb-4"></i>
          <h2 class="text-2xl font-pacifico text-olive-green mb-3">Thank You!</h2>
          <p class="mb-4">Your booking has been confirmed, {{ eventForm.fullName }}!</p>
          <p class="mb-6 text-gray-600">We'll send you a confirmation email shortly.</p>
          <button @click="closeThankYou" class="close-btn">
            Back to Home
          </button>
        </div>
      </div>
    </div>

    <!-- Loading Screen -->
    <LoadingScreen v-if="isSubmitting" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import LoadingScreen from './LoadingScreen.vue';

const route = useRoute();
const router = useRouter();
const isSubmitting = ref(false);

const eventForm = ref({
  eventId: '',
  eventName: '',
  fullName: '',
  email: '',
  phone: '',
  guests: 1,
  message: ''
});

onMounted(() => {
  const { eventId, eventName } = route.query;
  if (eventId && eventName) {
    eventForm.value.eventId = eventId;
    eventForm.value.eventName = decodeURIComponent(eventName);
  }
});

const showThankYou = ref(false);

const closeThankYou = () => {
  showThankYou.value = false;
  router.push('/');
};

const submitBookingForm = async () => {
  isSubmitting.value = true;
  
  try {
    const requestData = {
      eventId: eventForm.value.eventId,
      fullName: eventForm.value.fullName,
      phone: parseInt(eventForm.value.phone),
      guests: parseInt(eventForm.value.guests),
      email: eventForm.value.email,
      message: eventForm.value.message.trim() || undefined
    };

    const response = await fetch('https://turtles-steel.vercel.app/api/events/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to book event');
    }

    await response.json();
    showThankYou.value = true; // Show thank you popup instead of alert
  } catch (error) {
    console.error('Booking error:', error);
    alert(error.message || 'Failed to book event. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.booking-container {
  min-height: 100vh;
  padding: 2rem;
  background: #faf1e8;
}

.booking-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
  font-size: 1.1rem;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #00BCD4;
}

.readonly-field {
  background-color: #f5f5f5;
  cursor: not-allowed;
  border-color: #ddd;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: #00BCD4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background-color: #0097A7;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  transform: none;
}

/* Thank You Popup Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.thank-you-popup {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  animation: popIn 0.3s ease-out;
}

.popup-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-btn {
  padding: 0.75rem 2rem;
  background-color: #00BCD4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background-color: #0097A7;
  transform: translateY(-2px);
}

@keyframes popIn {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .booking-container {
    padding: 1rem;
  }

  .booking-form {
    padding: 1.5rem;
    margin: 0.5rem;
  }
}
</style>
  