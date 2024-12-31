<template>
  <div class="body">
    <!-- Hero Section -->
    <section class="relative section-wave h-[85vh]" data-aos="fade-up">
      <!-- Background images -->
      <div class="absolute inset-0 bg-center transition-opacity duration-500 ease-in-out"
           v-for="(slide, index) in heroSlides" :key="slide.id"
           :style="{ 
             backgroundImage: `url(${slide.image})`, 
             opacity: currentSlide === index ? 1 : 0, 
             backgroundSize: 'cover', 
             backgroundPosition: 'center'
           }">
      </div>
      
      <!-- Semi-transparent overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <!-- Content -->
      <div class="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24" data-aos="fade-right">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-pacifico text-white mb-4" v-html="heroSlides[currentSlide].title"></h1>
        <p style="color: white;" class="text-xl font-bold sm:text-2xl text-white mb-8 max-w-2xl" v-html="heroSlides[currentSlide].description"></p>
        <a :href="heroSlides[currentSlide].ctaLink" target="_blank" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
          {{ heroSlides[currentSlide].ctaText }}
        </a>
      </div>
      
      <!-- Navigation buttons -->
      <div class="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        <button v-for="(slide, index) in heroSlides" :key="slide.id"
                @click="currentSlide = index"
                class="w-3 h-3 rounded-full transition-all duration-300 ease-in-out"
                :class="currentSlide === index ? 'bg-white scale-125' : 'bg-gray-400'">
        </button>
      </div>

      <!-- Animated Waves -->
      <div class="wave-container">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>
    </section>

    <!-- Events Section -->
    <section class="py-16 px-6 sm:px-12 lg:px-24" data-aos="fade-up">
      <h1 class="text-4xl font-pacifico text-olive-green mb-8 text-center">Upcoming Events</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="event in events" 
             :key="event.id" 
             class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
             data-aos="fade-up"
             :data-aos-delay="event.id * 100">
          <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ event.title }}</h2>
            <p class="text-gray-600 mb-4">{{ event.date }}</p>
            <a :href="event.link" target="_blank" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300">
              Reserve a Spot
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <section class="py-16 px-6 sm:px-12 lg:px-24 text-white" data-aos="fade-up">
      <h1 class="text-4xl font-pacifico mb-8 text-center">Menu Highlights</h1>
      <div class="relative">
        <div class="overflow-hidden" ref="sliderContainer">
          <div class="flex transition-transform duration-300 ease-in-out" 
               :style="{ transform: `translateX(-${currentSlides * 100}%)` }">
            <div v-for="item in menuHighlights" 
                 :key="item.id" 
                 class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-4"
                 data-aos="fade-up"
                 :data-aos-delay="item.id * 100">
              <div class="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
                <div class="relative overflow-hidden rounded-lg">
                  <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover transition duration-300 transform group-hover:scale-110">
                  <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <p class="text-white bg-white font-bold text-center px-4">{{ item.description }}</p>
                  </div>
                </div>
                <h3 class="mt-2 text-lg text-black font-semibold">{{ item.name }}</h3>
              </div>
            </div>
          </div>
        </div>
        <button @click="prevSlides" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="nextSlides" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div class="text-center mt-12">
        <a href="/Turtles_Menu .pdf" target="_blank" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
          Check out our Full Menu
        </a>
      </div>
    </section>

    <!-- Tipsy Turtle Section -->
    <section class="py-0 px-6 sm:px-12 lg:px-24 relative overflow-hidden" data-aos="fade-up">
      <div class="max-w-4xl mx-auto text-center relative z-10 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
        <div class="text-center sm:text-left sm:mr-8 mb-8 sm:mb-0" data-aos="fade-right">
          <h1 class="text-4xl font-pacifico text-olive-green mb-4">Oh, and don't miss out on the Tipsy Turtle!</h1>
          <p class="text-xl mb-8">One per person, please!</p>
          <a href="/Turtles_Menu .pdf" target="_blank" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
            Sip Through Our Bar Menu
          </a>
        </div>
        <img 
          :src="trispy" 
          alt="Turtle Cutout" 
          class="w-full max-w-sm sm:mt-8 sm:mx-auto sm:top-auto sm:right-auto transform transition-all duration-300 hover:scale-105"
          data-aos="fade-left"
        >
      </div>
      <div class="wave-container bottom-wave">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>
    </section>

    <!-- Customer Reviews Section -->
    <section class="py-16 px-6 sm:px-12 lg:px-24 bg-beige-100" data-aos="fade-up">
      <h1 class="text-4xl font-pacifico text-olive-green mb-8 text-center">Turtley Good Times</h1>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(photo, index) in customerPhotos" 
             :key="index" 
             class="aspect-square overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
             data-aos="fade-up"
             :data-aos-delay="index * 100">
          <img :src="photo" :alt="`Customer photo ${index + 1}`" class="w-full h-full object-cover">
        </div>
      </div>
      <p class="text-2xl font-pacifico text-olive-green mt-8 text-center" data-aos="fade-up">
        "Come for the food, stay for the vibes."
      </p>
    </section>

    <!-- FAQ Section -->
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
// Single import for Vue composables
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Image imports
import slide1 from "../assets/banner1.jpg";
import slide2 from "../assets/gallery/2.jpg";
import slide3 from "../assets/banner3.jpg";
import food1 from "../assets/food/Cream Of Tomato Basil Soup.jpeg";
import food2 from "../assets/food/Drums Of Heaven (Chicken Lollipop)4.jpeg";
import food3 from "../assets/food/Eggs-Benedict-9.jpg";
import food4 from "../assets/food/Margarita Pizza.jpeg";
import food5 from "../assets/food/Papaya Lassi.jpeg";
import food6 from "../assets/food/Tomato_Cheese_Sandwich_Recipe-1.jpg";
import food7 from "../assets/food/Veg. Momo.jpeg";
import food8 from "../assets/food/Veg. Quesadilla.jpeg";
import trispy from "../assets/11.png";
import gall1 from "../assets/gallery/6.jpg";
import gall2 from "../assets/gallery/2.jpg";
import gall3 from "../assets/gallery/9.jpg";
import gall4 from "../assets/gallery/4.jpg";
import gall5 from "../assets/gallery/5.jpg";
import gall6 from "../assets/gallery/1.jpg";
import gall7 from "../assets/gallery/7.jpg";
import gall8 from "../assets/gallery/8.jpg";

// Hero slides data
const heroSlides = [
  {
    id: 1,
    title: 'Sea, Eat, Repeat.',
    description: 'Your table near the shore is just a click away!',
    image: slide1,
    ctaText: 'Reserve it now',
    ctaLink: '/reserve'
  },
  {
    id: 2,
    title: 'Relax, we\'ve got you covered',
    description: 'Food, drinks, and ocean sounds - just show up!',
    image: slide2,
    ctaText: 'Navigate to Turtles',
    ctaLink: 'https://maps.app.goo.gl/pX7iM4cd1WRXsth57'
  },
  {
    id: 3,
    title: 'Experience Goa Vibes',
    description: 'Immerse yourself in the local flavors and atmosphere',
    image: slide3,
    ctaText: 'Explore Menu',
    ctaLink: '/Turtles_Menu .pdf'
  }
];

// Reactive references
const currentSlide = ref(0);
const slideInterval = ref(null);
const currentSlides = ref(0);
const sliderContainer = ref(null);
const menuSlideInterval = ref(null);
const activeFaq = ref(null);

// Methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length;
};

const nextSlides = () => {
  currentSlides.value = (currentSlides.value + 1) % menuHighlights.length;
};

const prevSlides = () => {
  currentSlides.value = (currentSlides.value - 1 + menuHighlights.length) % menuHighlights.length;
};

const startSlideShow = () => {
  stopSlideShow();
  menuSlideInterval.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopSlideShow = () => {
  if (menuSlideInterval.value) {
    clearInterval(menuSlideInterval.value);
    menuSlideInterval.value = null;
  }
};

const toggleFaq = (id) => {
  activeFaq.value = activeFaq.value === id ? null : id;
};

// Data
const events = [
  {
    id: 1,
    title: 'Live Music Night',
    date: 'Every Friday, 7 PM',
    image: slide1,
    link: '/book-event'
  },
  {
    id: 2,
    title: 'Seafood Festival',
    date: 'First Saturday of every month',
    image: slide3,
    link: '/book-event'
  },
  {
    id: 3,
    title: 'Sunset Yoga',
    date: 'Every Sunday, 5 PM',
    image: slide2,
    link: '/book-event'
  }
];

const menuHighlights = [
  { id: 1, name: 'Cream Of Tomato Basil Soup', image: food1, description: 'Cream Of Tomato Basil Soup' },
  { id: 2, name: 'Drums Of Heaven (Chicken Lollipop)', image: food2, description: 'Drums Of Heaven (Chicken Lollipop)' },
  { id: 3, name: 'Egg Benedict', image: food3, description: 'Egg Benedict' },
  { id: 4, name: 'Margarita Pizza', image: food4, description: 'Margarita Pizza' },
  { id: 5, name: 'Papaya Lassi', image: food5, description: 'Papaya Lassi' },
  { id: 6, name: 'Cheese Tomato Sandwich', image: food6, description: 'Cheese Tomato Sandwich' },
  { id: 7, name: 'Veg. Momo', image: food7, description: 'Veg. Momo' },
  { id: 8, name: 'Veg. Quesadilla', image: food8, description: 'Veg. Quesadilla' }
];

const customerPhotos = [
  gall1, gall2, gall3, gall4, gall5, gall6, gall7, gall8
];

const faqs = [
  { id: 1, question: 'What are the opening hours of Turtles Restaurant & Bar in Morjim, Goa?', answer: 'Turtles is open daily from 10 AM to 11 PM.' },
  { id: 2, question: 'Does Turtles, Morjim offer vegetarian and vegan food options?', answer: 'Yes, we offer a variety of vegetarian and vegan dishes.' },
  { id: 3, question: 'Is it necessary to make a reservation for dining?', answer: 'Reservations are not mandatory, but recommended to book during peak hours. To book the machan, reservation is required.' },
  { id: 4, question: 'What types of cocktails and beverages do you serve?', answer: 'We serve a range of signature cocktails, mocktails, local spirits, and international beverages.' },
  { id: 5, question: 'Is it a family-friendly restaurant near Turtle Beach?', answer: 'Yes, Turtles is family-friendly with a cozy ambiance for all age groups.' },
  { id: 6, question: 'Does Turtles host live music events or sundowner gigs in Morjim?', answer: 'Yes, we host live music and sundowner events frequently. Check our Instagram @turltes.goa for more.' },
  { id: 7, question: 'Is there parking space available nearby?', answer: 'Yes, parking space is available near the restaurant.' },
  { id: 8, question: 'Is it a pet-friendly restaurant?', answer: 'We welcome pets with open arms.' },
  { id: 9, question: 'Do you offer gluten-free or customized meal options?', answer: 'Yes, we provide gluten-free and customizable meals upon request.' },
  { id: 10, question: 'What makes Turtles a must-visit spot in Morjim Beach?', answer: 'Just a shells throw away from the turtle beach (where Chapora river meets the sea). With a variety of cuisines, signature cocktails, delicious food, good music, and laid-back chill vibes, its the perfect spot to relax, dine and soak in the Goa spirit.' },
  { id: 11, question: 'How can I reach Turtles Restaurant & Bar from Morjim Beach?', answer: 'Were a short walk from Morjim Beach. Use Google Maps to navigate.' }
];

onMounted(() => {
  // Initialize AOS with proper configuration
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false, // Changed to false to allow animations to repeat
    mirror: true, // Enable animations when scrolling up
    offset: 50,
    delay: 100, // Add a small delay to ensure elements are properly positioned
    anchorPlacement: 'top-bottom' // Trigger animation when the top of the element hits the bottom of the viewport
  });

  // Re-initialize AOS on route change or dynamic content updates
  window.addEventListener('load', () => {
    AOS.refresh();
  });

  // Previous onMounted code remains the same
  slideInterval.value = setInterval(nextSlide, 5000);
  
  if (sliderContainer.value) {
    sliderContainer.value.addEventListener('mouseenter', stopSlideShow);
    sliderContainer.value.addEventListener('mouseleave', startSlideShow);
  }
});
</script>

  <style scoped>
  .body{
    background-color: #faf1e8;
  }
  .heroarea {
    position: relative;
    background-size: cover; /* Ensure the image covers the whole area */
    background-position: center;
    height: 33rem;
    color: #faf1e8;
    background-color: #faf1e8;
  }
  
  /* Hero Content */
  .hero-content {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    max-width: 70%;
    
  }
 
  .hero-content h1 {
    font-size: 2.7rem;
    margin-bottom: 1rem;
    color: #3A6507;
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-style: normal;
  }
  
  .hero-content p {
    font-size: 1.2rem;
    line-height: 1.5;
   
    margin-bottom: 2rem;
    color:#333333;
  }
 
  .cta-button-primarys {
  display: inline-block;
  background: #00BCD4;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button-primarys:hover { /* Remove the space */
  background: #ff6347;
}

.cta-button-primarys a {
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  font-style: normal;
  color: #ffffff;
}
  .cta-button-primary {
  display: inline-block;
  background: #00BCD4;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button-primary:hover { /* Remove the space */
  background: #ff6347;
}

.cta-button-primary a {
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  font-style: normal;
  color: #ffffff;
}

.cta-button-secondary {
  display: inline-block;
  background: #FF6A3A;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button-secondary:hover { /* Remove the space */
  background: #00BCD4;
}

.cta-button-secondary a {
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  font-style: normal;
  color: #ffffff;
}



  
  .pacifico-regular {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-style: normal;
}


.raleway-h1  {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}
.poppins {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
} 

  h1{
    color: #3A6507;
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-style: normal;
  }
  h2{
    font-family: "Pacifico", cursive;
    font-weight: 500;
    font-style: normal;
    color: #3A6507;
  }
  p{
    color: #333333;
    font-family: 'Poppins', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  }
  button{
    font-family: 'Poppins', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  }
  /* Carousel Controls */
  .carousel-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 10;
  }
  
  .carousel-control {
   
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    padding: 10px 20px;
  }
  
  .carousel-dots {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
  }
  
  .dot.active {
    background: #e5533d;
  }
  
  /* Wave */
  .wave {
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    color: #faf1e8;
  }
  
  .wave svg {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    
  }
.text{
    
/* Cyan (#00BCD4) for main CTAs
Orange (#FF6A3A) for secondary CTAs */
/* Charcoal Grey (#333333) for all body text 
Olive Green (#3A6507) for headings or highlighted text */
/* Text
Heading: Poppins
Body: Raleway
Highlighting a word or two: Pacifico  */



}
/* call-to-action-area css start here */
.call-to-action-area{
 
    
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
/* Event Section */
.event-section {
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}

.event-container {
  position: relative; /* Relative to position child elements */
  background-color: #3A6507;
  height: 85vh;
  width: 88%;

  margin: 0rem 5rem;
  border-radius: 40px;
  overflow: hidden; /* Ensure no content overflows the container */
}

/* Carousel Images */
.carousel-images {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.5s ease-in-out;
}

.carousel-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Bottom-Left Text */
.event-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

/* Top-Right Button */
.event-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #00BCD4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.event-button:hover {
  background-color: #e5533d;
}

/* Slider Controls */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #e5533d;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px 20px;
  z-index: 10;
}

.carousel-control.left {
  left: 0px; /* Outside the event-container */
}

.carousel-control.right {
  right: 0px; /* Outside the event-container */
}

.carousel-control:hover {
  background: rgba(0, 0, 0, 0.7);
}
/* Event Section Styling */



.event-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.event-carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.event-carousel-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color:#ff6347;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px 20px;
  z-index: 1000;
}

.event-carousel-control.left {
  left: 0px;
}

.event-carousel-control.right {
  right: 0px;
}

.event-carousel-dots {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.event-carousel-dots .dot {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.event-carousel-dots .dot.active {
  background: white;
}

/* Text and Button Inside Event Carousel */
.carousel-text {
  position: absolute;
  bottom: 2%;
  left: 4%;
  color: white;
  font-size:0.9rem;
  font-family: "Poppins", sans-serif;
    
    
    color: #faf1e8;
  
}
.carousel-text h2{
  font-size: 1rem;
}
.carousel-text {
  font-weight: 100px;
}

.carousel-text .borderbox {
  border: 3px solid #ffffff; /* Set the border width, style, and color */
  padding: 2px 40px; /* Add spacing inside the box for better appearance */
  display: inline-block; /* Ensure the box wraps tightly around the text */
  border-radius: 50px; /* Optional: Add rounded corners to the box */
}



.carousel-text h2 {
  font-size: rem;
  color: #ffffff;
}




.trisply-turtles{
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding-right: 70px;
    padding-left: 70px;
}
.trisply-content{
    display: flex;
    flex-direction: column;
    margin-top:20px ;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 30px;
}

.trisply-img{
    margin-top:20px ;
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 20px;
}
.turtles-good-time {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem;
}
.turtles-good-time h2{
  font-size: 3rem;
}
.gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Add space between rows */
}

.row {
  display: flex;
  justify-content: center;
  gap: 1rem; /* Space between images */
  flex-wrap: wrap;
}

.row img {
  width: 100%;
  max-width: 200px; /* Set maximum image width */
  height: auto;
  border-radius: 15px; /* Border radius for rounded corners */
  object-fit: cover; /* Ensure images cover the space */
}
.food-caroser-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    flex-direction: column;
}
.food-caroser-area h2{
  font-size: 3rem;
}
.food-carosel {
    display: flex;

    gap: 15px; /* Spacing between food items */
}

.food-item {
    width: 150px; /* Size of the square */
    height: 150px; /* Size of the square */
    border: 2px solid #edde53; /* Border of the square */
    border-radius: 10px; /* Border radius to make corners rounded */
    overflow: hidden; /* Ensures image fits inside the box */
    display: flex;
    justify-content: center;
    align-items: center;
}

.food-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures image covers the box */
}
.reserve-spot{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 60px;
}
.reserve-spot button{
margin-top: 20px;

}
.reserve-spot img{
margin-top: 0px;
height:130px ;

}
/* General Responsive Styles */
@media screen and (max-width: 1200px) {
  .heroarea {
    height: 28rem;
  }

  .hero-content {
    left: 5%;
    max-width: 80%;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .cta-button {
    padding: 10px 25px;
    font-size: 1.2rem;
  }

  .cta-buttonsec {
    font-size: 1.3rem;
  }

  .event-section {
    margin-top: 3rem;
  }

  .reserve-spot {
    text-align: center;
  }

  .reserve-spot img {
    width: 100%;
    height: auto;
  }

  .trisply-turtles {
    flex-direction: column;
    text-align: center;
  }

  .trisply-img img {
    width: 100%;
    height: auto;
  }

  .gallery .row {
    flex-direction: column;
    align-items: center;
  }

  .gallery .row img {
    width: 80%;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 992px) {
  .heroarea {
    height: 25rem;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .carousel-control {
    font-size: 1.5rem;
    padding: 8px 16px;
  }

  .carousel-dots {
    bottom: 15px;
  }

  .cta-button {
    padding: 8px 20px;
    font-size: 1.1rem;
  }

  .call-to-action-area h2 {
    font-size: 1.8rem;
  }

  .call-to-action-area h1 {
    font-size: 2rem;
  }

  .event-carousel-images {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .wave-container {
    height: 100px;
  }
  .heroarea {
    height: 20rem;
  }
  .trisply-turtles{
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;

   
}
  .food-caroser-area{
    text-align: center;
  }
  .hero-content {
    left: 5%;
    max-width: 90%;
  }
  .turtles-good-time {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0rem;
}
  .hero-content h1 {
    font-size: 1.8rem;
  }

  .hero-content p {
    font-size: 0.9rem;
  }

  .cta-button {
    padding: 8px 20px;
    font-size: 1rem;
  }

  .event-carousel {
    flex-direction: column;
    align-items: center;
  }

 
  .call-to-action-area{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .call-to-action-area {
    margin-top: 2rem;
  }

  .reserve-spot img {
    width: 100%;
    height: auto;
  }
  .reserve-spot{
  display: flex;
  flex-direction: column;
  }
  .trisply-turtles {
    flex-direction: column;
    text-align: center;
  }
  

  .trisply-img img {
    width: 50%;
    height: 10vh;
  }

  .gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gallery .row img {
    width: 90%;
    margin-bottom: 1rem;
  }
  .event-container {
  position: relative; /* Relative to position child elements */
  background-color: #3A6507;
  height: 50vh;
  width: 88%;

  margin: 0rem 0rem;
  border-radius: 40px;
  overflow: hidden; /* Ensure no content overflows the container */
}
.event-carousel {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

.event-carousel-images {
  display: flex;
  height: 50vh;
  transition: transform 0.5s ease-in-out;
}

.event-carousel-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.trisply-turtles{
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 0px;
    margin-top: 40px;
}
.trisply-content{
    display: flex;
    flex-direction: column;
    margin-top:0px ;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
}

.trisply-img{
    margin-top:0px ;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
}
.turtles-good-time {
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}
.turtles-good-time h2{
  font-size: 2rem;
}
.gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Add space between rows */
}

.row {
  display: flex;
  justify-content: center;
  gap: 1rem; /* Space between images */
  flex-wrap: wrap;
}

.row img {
  width: 100%;
  max-width: 400px; /* Set maximum image width */
  height: auto;
  border-radius: 15px; /* Border radius for rounded corners */
  object-fit: cover; /* Ensure images cover the space */
}
.cta-button-primarys {
  display: inline-block;
  background: #00BCD4;
  color: white;
  padding: 7px 30px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button-primarys:hover { /* Remove the space */
  background: #ff6347;
}

.cta-button-primarys a {
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  font-style: normal;
  color: #ffffff;
}
}

@media screen and (max-width: 480px) {
  .wave-container {
    height: 70px;
  }
  .heroarea {
    height: 18rem;
  }

  .hero-content {
    left: 5%;
    max-width: 90%;
  }

  .hero-content h1 {
    font-size: 1.5rem;
  }

  .hero-content p {
    font-size: 0.9rem;
  }

  .cta-button {
    padding: 6px 16px;
    font-size: 1rem;
  }

  .carousel-control {
    font-size: 1.2rem;
    padding: 6px 12px;
  }

  .event-carousel {
    width: 100%;
  }

  .event-carousel-images img {
    width: 100%;
  }

  .trisply-turtles {
    text-align: center;
  }

  .trisply-img img {
    width: 100%;
    height: auto;
  }

  .gallery .row img {
    width: 100%;
    margin-bottom: 1rem;
  }
  .event-container {
  position: relative; /* Relative to position child elements */
  background-color: #3A6507;
  height: 50vh;
  width: 88%;

  margin: 0rem 0rem;
  border-radius: 40px;
  overflow: hidden; /* Ensure no content overflows the container */
}
.event-carousel {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

.event-carousel-images {
  display: flex;
  height: 50vh;
  transition: transform 0.5s ease-in-out;
}

.event-carousel-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.trisply-turtles{
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 0px;
    margin-top: 40px;
}
.trisply-content{
    display: flex;
    flex-direction: column;
    margin-top:0px ;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
}

.trisply-img{
    margin-top:0px ;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
}
.turtles-good-time {
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}
.turtles-good-time h2{
  font-size: 2rem;
}
.gallery {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Add space between rows */
}

.row {
  display: flex;
  justify-content: center;
  gap: 1rem; /* Space between images */
  flex-wrap: wrap;
}

.row img {
  width: 100%;
  max-width: 400px; /* Set maximum image width */
  height: auto;
  border-radius: 15px; /* Border radius for rounded corners */
  object-fit: cover; /* Ensure images cover the space */
}
}
.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23faf1e8' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") repeat-x;
  animation: wave 20s linear infinite;
  transform-origin: center bottom;
}

.wave1 {
  animation: wave 20s linear infinite;
  opacity: 1;
  z-index: 1000;
}

.wave2 {
  animation: wave 15s linear infinite;
  opacity: 0.5;
  z-index: 999;
}

.wave3 {
  animation: wave 10s linear infinite;
  opacity: 0.2;
  z-index: 998;
}

@keyframes wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.5);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Animation classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Enhanced hover effects */
.transform {
  transition: transform 0.3s ease-in-out;
}
  </style>
  