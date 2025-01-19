<template>
    <div class="min-h-screen bg-beige-100">
        <section class="py-16 px-6 sm:px-12 lg:px-24" data-aos="fade-up">
      <h1 class="text-4xl font-pacifico text-olive-green mb-8 text-center">Frequently Asked Questions</h1>
      <div class="max-w-3xl mx-auto">
        <div v-for="faq in faqs" 
             :key="faq.id" 
             class="mb-6 border-b pb-4"
             data-aos="fade-up"
             :data-aos-delay="faq.id * 50">
          <div 
            @click="toggleFaq(faq.id)" 
            class="cursor-pointer flex justify-between items-center">
            <h3 class="text-xl font-bold mb-2">{{ faq.question }}</h3>
            <span class="text-2xl">{{ activeFaq === faq.id ? '−' : '+' }}</span>
          </div>
          <p 
            v-show="activeFaq === faq.id" 
            class="text-gray-700 transition-all duration-300">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </section>
  
    
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
 
  const toggleFaq = (id) => {
  activeFaq.value = activeFaq.value === id ? null : id;
};
  const faqs = [
  { id: 1, question: 'What are the opening hours of Turtles Restaurant & Bar in Morjim, Goa?', answer: 'Turtles is open daily from 10 AM to 11 PM.' },
  { id: 2, question: 'Does Turtles, Morjim offer vegetarian and vegan food options?', answer: 'Yes, we offer a variety of vegetarian and vegan dishes.' },
  { id: 3, question: 'Is it necessary to make a reservation for dining?', answer: 'Reservations are not mandatory, but recommended to book during peak hours. To book the machan, reservation is required.' },
  { id: 4, question: 'What types of cocktails and beverages do you serve?', answer: 'We serve a range of signature cocktails, mocktails, local spirits, and international beverages.' },
  { id: 5, question: 'Does Turtles host live music events or sundowner gigs in Morjim?', answer: 'Yes, we host live music and sundowner events frequently. Check our Instagram @turltes.goa for more.' },
  { id: 6, question: 'Is there parking space available nearby?', answer: 'Yes, parking space is available near the restaurant.' },
  { id: 7, question: 'Is it a pet-friendly restaurant?', answer: 'We welcome pets with open arms.' },
  { id: 8, question: 'Do you offer gluten-free or customized meal options?', answer: 'Yes, we provide gluten-free and customizable meals upon request.' },
  { id: 9, question: 'What makes Turtles a must-visit spot in Morjim Beach?', answer: 'Just a shells throw away from the turtle beach (where Chapora river meets the sea). With a variety of cuisines, signature cocktails, delicious food, good music, and laid-back chill vibes, its the perfect spot to relax, dine and soak in the Goa spirit.' },
  { id: 10, question: 'How can I reach Turtles Restaurant & Bar from Morjim Beach?', answer: 'We are short walk from Morjim Beach. Use Google Maps to navigate.' }
];
const activeFaq = ref(null);
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