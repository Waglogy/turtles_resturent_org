<template>
    <div class="event-booking-page">
      <div class="event-header">
        <h1 class="event-title">Event Booking</h1>
        <p class="event-subtitle">Book your spot for an exciting event!</p>
      </div>
      <div class="event-container">
        <!-- Event Booking Form -->
        <div class="event-form">
          <h2>Book Your Event</h2>
          <form @submit.prevent="submitBookingForm">
            <div class="form-group">
              <label for="event-name">Event Name</label>
              <input
                type="text"
                id="event-name"
                v-model="eventForm.eventName"
                placeholder="Enter the event name"
                required
              />
            </div>
            <div class="form-group">
              <label for="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                v-model="eventForm.fullName"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="eventForm.email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                v-model="eventForm.phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div class="form-group">
              <label for="number-of-guests">Number of Guests</label>
              <input
                type="number"
                id="number-of-guests"
                v-model="eventForm.guests"
                placeholder="Enter number of guests"
                min="1"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message (Optional)</label>
              <textarea
                id="message"
                v-model="eventForm.message"
                placeholder="Any special requests or message"
                rows="4"
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="submit-button" 
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Booking...' : 'Book Event' }}
            </button>
          </form>
        </div>
  
        <!-- Event Information -->
       
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        eventForm: {
          eventName: "",
          fullName: "",
          email: "",
          phone: "",
          guests: 1,
          message: "",
        },
        isSubmitting: false,
      };
    },
    methods: {
      async submitBookingForm() {
        this.isSubmitting = true;
        try {
          // Format the data according to your API requirements
          const requestData = {
            eventName: this.eventForm.eventName,
            fullName: this.eventForm.fullName,
            email: this.eventForm.email,
            phone: this.eventForm.phone,
            numberOfGuests: parseInt(this.eventForm.guests),
            message: this.eventForm.message
          };

          console.log('Sending data:', requestData); // Debug log

          const response = await fetch('https://turtles-steel.vercel.app/api/events', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
          });

          console.log('Response status:', response.status); // Debug log

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Server error:', errorData); // Debug log
            throw new Error(errorData.message || 'Booking failed');
          }

          const responseData = await response.json();
          console.log('Success response:', responseData); // Debug log
          
          alert(`Thank you, ${this.eventForm.fullName}! Your booking has been confirmed.`);
          this.resetForm();
        } catch (error) {
          console.error('Submission error:', error);
          alert(`Error: ${error.message || 'Failed to submit booking. Please try again.'}`);
        } finally {
          this.isSubmitting = false;
        }
      },

      resetForm() {
        this.eventForm = {
          eventName: "",
          fullName: "",
          email: "",
          phone: "",
          guests: 1,
          message: "",
        };
      }
    },
  };
  </script>
  
  <style scoped>
  .event-booking-page {
    padding: 50px;
    background: url('../assets/19.jpg') center/cover no-repeat;
    font-family: "Poppins", sans-serif;
    color: #333;
  }
  
  .event-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .event-title {
    font-family: "Pacifico", cursive;
    font-size: 2.5rem;
    color: #00BCD4;
  }
  
  .event-subtitle {
    font-size: 1.2rem;
    color: #ffffff;
  }
  
  .event-container {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .event-form,
  .event-info {
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 45%;
    max-width: 500px;
  }
  
  .event-form h2,
  .event-info h2 {
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
  
  input,
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
  
  .event-info ul {
    list-style-type: none;
    padding: 0;
  }
  
  .event-info li {
    margin-bottom: 10px;
  }
  
  @media screen and (max-width: 768px) {
    .event-booking-page {
      padding: 30px;
    }
  
    .event-header {
      margin-bottom: 30px;
    }
  
    .event-title {
      font-size: 2rem;
    }
  
    .event-subtitle {
      font-size: 1rem;
    }
  
    .event-container {
      flex-direction: column;
      align-items: center;
    }
  
    .event-form,
    .event-info {
      width: 90%;
      padding: 20px;
    }
  
    .event-form h2,
    .event-info h2 {
      font-size: 1.5rem;
    }
  
    input,
    textarea {
      width: 95%;
      font-size: 0.9rem;
    }
  
    .submit-button {
      padding: 12px;
      font-size: 1rem;
    }
  }
  
  @media screen and (max-width: 480px) {
    .event-title {
      font-size: 1.8rem;
    }
  
    .event-subtitle {
      font-size: 0.9rem;
    }
  
    .submit-button {
      padding: 10px;
      font-size: 0.9rem;
    }
  }
  </style>
  