<template>
    <div class="body">
      <div class="heroarea" :style=" { backgroundImage: `url(${slides[currentIndex]})` }">
     

     <!-- Text and Button -->
     <div class="hero-content">
        <h1>Welcome To Turtles</h1>
        <p>
          Experience the best cuisines with a touch of elegance. Reserve your table today for an unforgettable experience.
        </p>
        <button class="cta-button-primarys"><a href="/reserve">Reserve Now</a></button>
      </div>

        <!-- Carousel Controls -->
        <div class="carousel-controls">
          <button class="carousel-control left" @click="prevSlide">
            &#9664;
          </button>
          <button class="carousel-control right" @click="nextSlide">
            &#9654;
          </button>
        </div>
  
        <!-- Dots -->
        <div class="carousel-dots">
          <span
            v-for="(dot, index) in slides"
            :key="index"
            class="dot"
            :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
  
        <!-- Wave Structure -->
        <div class="wave">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#faf1e8"
              fill-opacity="1"
              d="M0,320L48,300C96,280,192,240,288,250C384,260,480,300,576,290C672,280,768,240,864,230C960,220,1056,260,1152,270C1248,280,1344,260,1392,250L1440,240L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    <div class="call-to-action-area">
      <h2>Relax, we've got the food, drinks, and ocean sounds covered.</h2>
      <h1>You just need to show up!</h1>
      <button class="cta-button-secondary"><a href="/contact">Navigate To Turtles</a></button>
    </div>

      <!-- Event Section with New Carousel -->
      <div class="event-section">
          <div class="event-container">
            <div class="event-carousel">
              <div
                class="event-carousel-images"
                :style="{ transform: `translateX(calc(-100% * ${eventIndex}))` }"
              >
                <img
                  v-for="(eventSlide, index) in eventSlides"
                  :key="index"
                  :src="eventSlide"
                  :alt="`Event Image ${index + 1}`"
                />
              </div>

              <!-- Event Carousel Controls -->
              <button class="event-carousel-control left" @click="prevEventSlide">
                &#9664;
              </button>
              <button class="event-carousel-control right" @click="nextEventSlide">
                &#9654;
              </button>
              <!-- Event Carousel Dots -->
              <div class="event-carousel-dots">
                <span
                  v-for="(dot, index) in eventSlides"
                  :key="index"
                  class="dot"
                  :class="{ active: eventIndex === index }"
                  @click="goToEventSlide(index)"
                ></span>
              </div>

              <!-- Text and Button Over the Carousel -->
              <div class="carousel-text">
                <div class="borderbox"> <h2>31st dec 2024</h2></div>
                
                <h2>Turtles After Night<br>
                Progressive Techno<br>6 Pm Onwards</h2>
                <!-- <button class="cta-button">Learn More</button> -->
              </div>
            </div>
          </div>
      </div>


    <div class="reserve-spot">
      <img src="../assets/happyturtles.png" alt="helllo">
      <button class="cta-button-primary"><a href="/reserve">Reserve Your Spot</a></button>

    </div>



    <div class="food-caroser-area">
        <h2>Not Your Everyday Dish</h2>
       <h1>– Chef’s Special!</h1>

       <SliderTurtles />



    
</div>


    <div class="trisply-turtles">
    <div class="trisply-content">
        <h2>Oh, and don’t miss out on</h2>
        <h1>The Tipsy Turtle!</h1>
        <p>one per person, please!</p>
        <button class="cta-button-secondary"><a href="/reserve">Through Our Bar Menu</a> </button>

    </div>
    <div class="trispy-img">
        <img :src="trispy" height="400px"/>
    </div>



    </div>
    <div class="turtles-good-time">
    <h2>Turtley Good Times</h2>

    <div class="gallery">
      <!-- First Row of 4 Images -->
      <div class="row">
        <img src="../assets/7.jpg" alt="Image 1" />
        <img src="../assets/8.jpg" alt="Image 2" />
        <img src="../assets/9.jpg" alt="Image 3" />
        <img src="../assets/10.jpg" alt="Image 4" />
      </div>

      <!-- Second Row of 5-6 Images -->
      <div class="row">
        <img src="../assets/1.jpg" alt="Image 5" />
        <img src="../assets/2.jpg" alt="Image 6" />
        <img src="../assets/3.png" alt="Image 7" />
        <img src="../assets/4.png" alt="Image 8" />
        
      </div>
    </div>
    <h1>Come for the food, stay for the vibes ..</h1>
  </div>

     


    </div>
  </template>
  
    
<script>
            import img1 from "../assets/2.jpg";
            import img2 from "../assets/img2.jpg";
            import img3 from "../assets/img3.jpg";
            import trispy from "../assets/11.png";
            import eventImg1 from "../assets/1.jpg";
            import eventImg2 from "../assets/img2.jpg";
            import eventImg3 from "../assets/img3.jpg";
            
            import SliderTurtles from "./SliderTurtles.vue";
            export default {
                name: "HomeTurtles",
                components :{
                  SliderTurtles,
                },
                data() {
                return {
                    // Original Hero Carousel
                    slides: [img1, img2, img3],
                    currentIndex: 0,
            
                    // New Event Carousel
                    eventSlides: [eventImg1, eventImg2, eventImg3],
                    eventIndex: 0,
                    trispy,
                };
                
                },
                methods: {
                // Original Hero Carousel Methods
                nextSlide() {
                    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
                },
                prevSlide() {
                    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
                },
                goToSlide(index) {
                    this.currentIndex = index;
                },
            
                // New Event Carousel Methods
                nextEventSlide() {
                    this.eventIndex = (this.eventIndex + 1) % this.eventSlides.length;
                },
                prevEventSlide() {
                    this.eventIndex = (this.eventIndex - 1 + this.eventSlides.length) % this.eventSlides.length;
                },
                goToEventSlide(index) {
                    this.eventIndex = index;
                },
                },
            };
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
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: #3A6507;
  }
  p{
    color: #333333;
    font-family: "Raleway", sans-serif;
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

  </style>
  
