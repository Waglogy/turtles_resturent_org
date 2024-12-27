<template>
    <div class="min-h-screen bg-beige-100">
      <!-- Hero Section -->
      <section class="relative h-64 sm:h-80 md:h-96 bg-cover bg-center" style="background-image: url('/about-hero.jpg');">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-pacifico text-white text-center">About Turtles</h1>
        </div>
      </section>
  
      <!-- Inspiration Section -->
      <section class="py-16 px-6 sm:px-12 lg:px-24">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-pacifico text-olive-green mb-8 text-center">Inspired by Turtles, Crafted for You</h2>
          <div class="space-y-6 text-gray-700">
            <p>
              Turtles Restaurant & Bar gets its inspiration from sea turtles. Known for their resilience and persistence, we salute and respect these wonderful creatures for their passionate outlook towards life.
            </p>
            <p>
              We have built our restaurant with the same resilience and love for life, right by the beautiful shores of Morjim Beach, also known as Turtle Beach, one of the world's Turtle Nesting Spots in North Goa.
            </p>
            <p>
              Offering varied options for your tastebuds to dance, our menu features Continental, Thai, Himalayan, North Indian, selected Goan, and Chef Special cuisines, which will delight your senses. Our handcrafted cocktails perfectly complement our dishes, enhancing your dining experience with every sip.
            </p>
            <p class="font-bold">
              Join us to experience the true spirit of Goa with unforgettable food experiences and memories!
            </p>
          </div>
        </div>
      </section>
  
      <!-- Visionaries Section -->
      <section class="py-16 px-6 sm:px-12 lg:px-24 bg-olive-green text-white">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-pacifico mb-12 text-center">Meet the Visionaries Behind Turtles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div v-for="visionary in visionaries" :key="visionary.name" class="space-y-4">
             
              <h3 class="text-2xl text-black font-bold text-center">{{ visionary.name }}</h3>
              <p class="text-center text-justify text-black">{{ visionary.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="py-16 px-6 sm:px-12 lg:px-24 text-center">
        <h2 class="text-3xl sm:text-4xl font-pacifico text-olive-green mb-8">Experience the Turtles Difference</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Come and immerse yourself in the unique atmosphere of Turtles Restaurant & Bar. Enjoy our delicious cuisine, refreshing drinks, and breathtaking views of Morjim Beach.</p>
        <a href="/reserve" class="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block">
          Reserve Your Table
        </a>
      </section>
  
    
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const visionaries = ref([
    {
      name: 'Paul M.',
     
      description: 'Having a vast experience in the marine industry, M. Paul delivers unparalleled service excellence and careful focus on detail to Turtles. His commitment to ensuring a smooth and pleasant experience for each guest comes from his extensive background of professional success. Paul s transition to the hospitality industry demonstrates his dedication to accuracy, dependability, and innovation, turning Turtles into a sanctuary for visitors looking for a mix of good food and relaxation near the beach in North Goa.'
    },
    {
      name: 'Paul R.',
      
      description: 'Former Marine Commando R. Paul, from Indias Naval Special Forces brings his adventurous spirit and passion for culinary arts to Turtles. Having experience in combat, underwater diving, and rescue, he brings resilience and leadership to this seaside sanctuary. After 15 years of devoted work, he now focuses his talents on the hospitality industry, crafting an experience as lively as the sunsets in Morjim and as distinct as the turtle nesting site.'
    }
  ]);
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap');
  
  :root {
    --color-beige: #faf1e8;
    --color-olive-green: #3A6507;
    --color-cyan: #00BCD4;
    --color-orange: #FF6A3A;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
  }
  
  .font-pacifico {
    font-family: 'Pacifico', cursive;
  }
  
  .bg-beige-100 {
    background-color: var(--color-beige);
  }
  
  .bg-olive-green {
    background-color: var(--color-olive-green);
  }
  
  .text-olive-green {
    color: var(--color-olive-green);
  }
  
  .bg-cyan-500 {
    background-color: var(--color-cyan);
  }
  
  .bg-cyan-600 {
    background-color: #0097A7;
  }
  </style>