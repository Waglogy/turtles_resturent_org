<template>
    <div>
      <!-- Hero Section -->
      <header class="bg-olive-green text-white py-8">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold">Event Booking</h1>
          <p class="mt-2 text-lg">Join us for an unforgettable experience!</p>
          <p class="mt-4">Date: <span class="font-semibold">March 25, 2024</span> | Location: <span class="font-semibold">Gangtok</span></p>
        </div>
      </header>
  
      <!-- Booking Form -->
      <section class="py-12 bg-gray-100">
        <div class="container mx-auto max-w-lg bg-white shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-bold text-center mb-4">Reserve Your Spot</h2>
          <form @submit.prevent="submitBooking">
            <div class="mb-4">
              <label for="name" class="block text-gray-700">Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="Your Name"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-olive-green">
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="Your Email"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-olive-green">
            </div>
            <div class="mb-4">
              <label for="tickets" class="block text-gray-700">Number of Tickets</label>
              <select id="tickets" v-model="form.tickets"
                class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-olive-green">
                <option value="" disabled>Select Number of Tickets</option>
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <button type="submit"
              class="w-full bg-olive-green text-white font-bold py-2 px-4 rounded-lg hover:bg-olive-green-dark">
              Book Now
            </button>
          </form>
        </div>
      </section>
  
      <!-- Event Details Section -->
      <section class="py-12">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center text-charcoal-gray">Event Details</h2>
          <p class="text-center mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This event will cover topics such as innovation,
            leadership, and networking.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div class="p-6 bg-white shadow-lg rounded-lg">
              <h3 class="text-xl font-semibold mb-2">Session 1: Innovation</h3>
              <p class="text-gray-600">Explore the latest trends in innovation.</p>
            </div>
            <div class="p-6 bg-white shadow-lg rounded-lg">
              <h3 class="text-xl font-semibold mb-2">Session 2: Leadership</h3>
              <p class="text-gray-600">Learn about effective leadership techniques.</p>
            </div>
            <div class="p-6 bg-white shadow-lg rounded-lg">
              <h3 class="text-xl font-semibold mb-2">Session 3: Networking</h3>
              <p class="text-gray-600">Meet industry experts and build connections.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-charcoal-gray text-white py-6">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 Turtles Restaurant & Bar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          tickets: '',
        },
      };
    },
    methods: {
      submitBooking() {
        // Handle booking submission
        alert(`Thank you, ${this.form.name}! Your booking for ${this.form.tickets} tickets has been submitted.`);
      },
    },
  };
  </script>
  
  <style>
  .bg-olive-green {
    background-color: #3A6507;
  }
  
  .bg-olive-green-dark {
    background-color: #2C4E05;
  }
  
  .text-charcoal-gray {
    color: #333333;
  }
  </style>
  