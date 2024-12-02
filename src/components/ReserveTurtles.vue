<template>
    <div class="reserve-page">
      <div class="booking-form">
        <h2>Reserve Your Spot at Turtles</h2>
        <form @submit.prevent="sendToWhatsApp">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input type="date" id="date" v-model="formData.date" required />
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <input type="time" id="time" v-model="formData.time" required />
          </div>
          <div class="form-group">
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
          <div class="form-group">
            <label for="special">Special Requests</label>
            <textarea
              id="special"
              v-model="formData.special"
              placeholder="Add any special requests (optional)"
            ></textarea>
          </div>
          <button type="submit" class="submit-button">Reserve Now</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: "",
          phone: "",
          date: "",
          time: "",
          guests: 1,
          special: "",
        },
      };
    },
    methods: {
      sendToWhatsApp() {
        const { name, phone, date, time, guests, special } = this.formData;
  
        const message = `
          Hi, I would like to reserve a table at Turtles Beach, Goa:
          - Name: ${name}
          - Phone: ${phone}
          - Date: ${date}
          - Time: ${time}
          - Number of Guests: ${guests}
          - Special Requests: ${special || "None"}
        `.trim();
  
        const whatsappUrl = `https://wa.me/<Your_WhatsApp_Number>?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .reserve-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background: url('../assets/1.jpg') center/cover no-repeat;
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
  
  .booking-form h2 {
    margin-bottom: 20px;
    
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


  </style>
  
