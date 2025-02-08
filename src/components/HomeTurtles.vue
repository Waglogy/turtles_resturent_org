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
        <h1 style="color: white;" class="text-4xl sm:text-5xl lg:text-6xl font-pacifico text-white mb-4" v-html="heroSlides[currentSlide].title"></h1>
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
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-8">
        <p class="text-gray-600">Loading events...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-500">{{ error }}</p>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center w-full">
        <template v-if="events.length === 0">
          <p class="col-span-full text-center text-gray-600">No upcoming events at the moment.</p>
        </template>
        
        <!-- Center single event -->
       

        <!-- Multiple events -->
        <template v-else>
          <div v-for="event in events" 
     :key="event._id" 
     class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 w-full max-w-2xl"
     data-aos="fade-up"
     :data-aos-delay="100">
  
  <div class="flex flex-col md:flex-row">
    <!-- Image Section -->
    <img :src="event.image" 
         :alt="event.title" 
         class="w-full md:w-1/2 h-70 md:h-auto object-cover">
    
    <!-- Content Section -->
    <div class="w-full md:w-1/2 p-6 flex flex-col justify-center">
      <h2 class="text-2xl font-bold mb-3">{{ event.title }}</h2>
      <p class="text-gray-600 mb-1">{{ formatDate(event.date) }}</p>
      <p class="text-gray-600 mb-2">{{ formatTime(event.time) }}</p>
      <p class="text-gray-700 mb-4">{{ event.description }}</p>
      
      <router-link 
        :to="{ 
          name: 'BookEvent',
          query: { 
            eventId: event._id,
            eventName: event.title
          }
        }" 
        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-5 rounded-full inline-block transition duration-300 text-center self-start"
      >
        Book a Spot
      </router-link>
    </div>
  </div>
</div>

        </template>
      </div>
    </section>

    <!-- Menu Section -->
 <section class="py-16 px-6 sm:px-12 lg:px-24 text-white" data-aos="fade-up">
  <h1 class="text-4xl font-pacifico mb-8 text-center">Menu Highlights</h1>
  <div class="relative">
    <div class="overflow-hidden" ref="sliderContainer">
      <div class="flex transition-transform duration-300 ease-in-out"
           :style="{ transform: `translateX(-${currentSlides * 33.33}%)` }">
        <div v-for="item in menuHighlights" 
             :key="item.id" 
             class="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
             data-aos="fade-up"
             :data-aos-delay="item.id * 100">
          <div class="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
            <div class="relative overflow-hidden rounded-lg">
              <img :src="item.image" :alt="item.name" 
                   class="w-full shadow h-48 object-cover transition duration-300 transform group-hover:scale-110">
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p class="text-white bg-white font-bold text-center px-4">{{ item.description }}</p>
              </div>
            </div>
            <h2 class="mt-2 text-lg font-pacifico text-olive-green">{{ item.name }}</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Prev Button -->
    <button @click="prevSlides" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Next Button -->
    <button @click="nextSlides" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  <div class="text-center mt-12">
    <router-link 
      :to="{ name: 'MenuViewer' }"
      class="bg-cyan-500 shadow hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
      Check out our Full Menu
    </router-link>
  </div>
</section>


    <!-- Tipsy Turtle Section -->
    <section class="py-0 px-6 sm:px-12 lg:px-24 relative overflow-hidden" data-aos="fade-up shadow">
      <div class="max-w-4xl mx-auto text-center relative z-10 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
        <div class="text-center sm:text-left sm:mr-8 mb-8 sm:mb-0" data-aos="fade-right">
          <h1 class="text-4xl font-pacifico text-olive-green mb-4">Oh, and don't miss out on the Tipsy Turtle!</h1>
          <br>
          <router-link 
            :to="{ name: 'MenuViewer' }"
            class="bg-orange-500 shadow hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300"
          >
            Sip Through Our Bar Menu
          </router-link>
        </div>
        <img 
          :src="trispy" 
          alt="Turtle Cutout" 
          class="w-full  max-w-sm sm:mt-8 sm:mx-auto sm:top-auto sm:right-auto transform transition-all duration-300 hover:scale-105"
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
     <section class="py-0 px-6 sm:px-12 lg:px-24 relative overflow-hidden" data-aos="fade-up shadow">
    <div class="text-center my-8">
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800">What Our Customers Say</h2>
      
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Review Card 1 -->
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <img src="/review3.jpg" alt="Google Review Screenshot 1" class="rounded-lg mb-4">
            <p class="text-gray-700">"I am genuinely surprised at the ratings, while I do understand it was afternoon, late evening when I went and was genuinely not expecting a crowd, etc.

However, the majority of the items in the menu were not available, even though it was the weekend.

I was requested to take the goa  standard garlic prawns and basic starters.

The cocktails are very decent.

Yes, the prices are competitive, and roughly 15% cheaper than the shacks bang on the beach, please note this place is not on the beach, but like 200 meters away from it on a parallel road, beach is not visible from here.

The staff were very courteous, the place was definitely kept clean and the bathrooms were clean as well."</p>
            <span class="block mt-2 text-gray-500 text-sm">- vivian chacko</span>
        </div>

        <!-- Review Card 2 -->
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <img src="/review1.jpg" alt="Google Review Screenshot 2" class="rounded-lg mb-4">
            <p class="text-gray-700">"Reached here for a late lunch…. Perfect ambience adjacent to the beach and cordial hospitality for an off-crowd hangout. Ordered Prawns Golden Fry and Fish & Chips that were perfectly fried and most importantly delicious, while the Pork Chilli tasted good, however meat could have been evenly cut and cooked. Just a fall out in my opinion. All otherwise, really good… Worth regular visits"</p>
            <span class="block mt-2 text-gray-500 text-sm">- Rachel Jenilyn</span>
        </div>

        <!-- Review Card 3 -->
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <img src="/review2.jpg" alt="Google Review Screenshot 3" class="rounded-lg mb-4">
            <p class="text-gray-700">"Turtles Restaurant is an absolute gem! The service is truly incredible – the staff go above and beyond to ensure a wonderful dining experience. The food is exceptional, with every dish prepared to perfection and bursting with flavor.

It’s also a fantastic spot for families; the child-friendly atmosphere makes it easy to relax and enjoy your meal, even with little ones in tow. The location is simply stunning, especially at sunset when the golden light filters through the palm trees – it’s breathtaking!

The cocktails are another highlight, crafted to perfection and full of fresh, vibrant flavors. Adding to the charm is the restaurant’s proximity to turtle nesting sites, which adds a unique and memorable touch to the experience.

If you’re looking for a mix of great food, stellar service, and a magical setting, Turtles Restaurant is a must-visit."</p>
            <span class="block mt-2 text-gray-500 text-sm">- David Rowley</span>
        </div>
    </div>
</section>




   
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
   
  </div>
</template>
    
<script setup>
// Single import for Vue composables
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

// Image imports
import slide1 from "../assets/banner1.jpg";
import slide2 from "../assets/5.png";
import slide3 from "../assets/4.png";
import food1 from "../assets/food/Thai+Cuisine.png";
import food2 from "../assets/food/tibitan.jpg";
import food3 from "../assets/food/continental.jpg";
import food4 from "../assets/food/indian.jpeg";
import food5 from "../assets/food/chinise.jpeg";
import food6 from "../assets/food/italian.jpg";

import trispy from "../assets/11.png";
import gall1 from "../assets/IMG-20250208-WA0011.jpg";
import gall2 from "../assets/IMG-20250208-WA0012.jpg";
import gall3 from "../assets/gallery/9.jpg";
import gall4 from "../assets/gallery/4.jpg";
import gall5 from "../assets/WhatsApp Image 2025-02-08 at 15.47.09_0e65695c.jpg";
import gall6 from "../assets/gallery/8.jpg";
import gall7 from "../assets/gallery/7.jpg";
import gall8 from "../assets/IMG-20250208-WA0015.jpg";

// Hero slides data
const heroSlides = [
  {
    id: 1,
    title: 'Sea, Eat, Repeat.',
    description: 'Your table near the shore is just a click away!',
    image: slide1,
    ctaText: 'Book a Table',
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
    ctaLink: '/menu'
  }
];

// Reactive references
const currentSlide = ref(0);
const slideInterval = ref(null);
const currentSlides = ref(0);
const sliderContainer = ref(null);
const menuSlideInterval = ref(null);

const events = ref([]);
const loading = ref(true);
const error = ref(null);

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



// Format date function
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format time function
const formatTime = (timeString) => {
  return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

// Fetch events from backend
const fetchEvents = async () => {
  try {
    loading.value = true;
    const response = await axios.get('https://turtles-steel.vercel.app/api/events');
    events.value = response.data.data;
  } catch (err) {
    console.error('Error fetching events:', err);
    error.value = 'Failed to load events. Please try again later.';
  } finally {
    loading.value = false;
  }
};

// Data
const menuHighlights = [
  { id: 1, name: 'THAI', image: food1, description: 'Experience the exotic flavors of Thailand with our authentic Thai dishes, crafted with fresh ingredients and aromatic spices.' },
  { id: 2, name: 'TIBETAN', image: food2, description: 'Delight in the unique and hearty flavors of Tibetan cuisine, featuring traditional recipes and rich, savory dishes.' },
  { id: 3, name: 'CONTINENTAL', image: food3, description: 'Savor the diverse and refined tastes of Continental cuisine, offering a variety of classic European dishes.' },
  { id: 4, name: 'INDIAN', image: food4, description: 'Indulge in the vibrant and diverse flavors of Indian cuisine, with a range of spicy, tangy, and aromatic dishes.' },
  { id: 5, name: 'CHINESE', image: food5, description: 'Enjoy the bold and flavorful tastes of Chinese cuisine, featuring a mix of sweet, sour, and savory dishes.' },
  { id: 6, name: 'ITALIAN', image: food6, description: 'Relish the rich and comforting flavors of Italian cuisine, with a selection of pasta, pizza, and other classic dishes.' },
  {id: 7, name: 'THAI', image: food1, description: 'Experience the exotic flavors of Thailand with our authentic Thai dishes, crafted with fresh ingredients and aromatic spices.' },
  { id: 8, name: 'TIBETAN', image: food2, description: 'Delight in the unique and hearty flavors of Tibetan cuisine, featuring traditional recipes and rich, savory dishes.' },
  { id: 9, name: 'CONTINENTAL', image: food3, description: 'Savor the diverse and refined tastes of Continental cuisine, offering a variety of classic European dishes.' },
  { id: 10, name: 'INDIAN', image: food4, description: 'Indulge in the vibrant and diverse flavors of Indian cuisine, with a range of spicy, tangy, and aromatic dishes.' },
  { id: 11, name: 'CHINESE', image: food5, description: 'Enjoy the bold and flavorful tastes of Chinese cuisine, featuring a mix of sweet, sour, and savory dishes.' },
  { id: 12, name: 'ITALIAN', image: food6, description: 'Relish the rich and comforting flavors of Italian cuisine, with a selection of pasta, pizza, and other classic dishes.' },

];

const customerPhotos = [
  gall1, gall2, gall3, gall4, gall5, gall6, gall7, gall8
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

  fetchEvents();
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
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

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
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

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
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

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
.shadow{
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

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

/* Add any additional styles here */
.grid {
  margin: 0 auto;
  max-width: 1200px;
}

/* Center single event card */
@media (min-width: 640px) {
  .col-start-1.sm\:col-start-1 {
    grid-column: 1 / -1;
    justify-self: center;
  }
}

@media (min-width: 1024px) {
  .lg\:col-start-2 {
    grid-column: 2 / 3;
  }
}
  </style>
  