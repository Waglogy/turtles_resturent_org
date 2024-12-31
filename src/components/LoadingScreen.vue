<template>
  <div class="loading-container">
    <div class="turtle-container">
      <!-- Green Turtle SVG -->
      <svg class="turtle" viewBox="0 0 512 512" width="100" height="100">
        <!-- Shell -->
        <path class="shell" d="M373.288,426.299c-21.305,23.343-48.495,40.179-78.82,48.518c-30.325,8.339-62.572,8.339-92.897,0
          c-30.325-8.339-57.515-25.175-78.82-48.518c-21.305-23.343-35.995-52.179-42.456-83.518c-6.461-31.339-2.771-63.675,9.69-93.193
          c12.461-29.518,34.151-55.354,62.956-74.693c23.713-20.253,51.572-35.285,81.285-44.274c17.828-5.519,36.339-8.526,55.039-9.145
          c17.7-0.593,35.326,0.895,52.251,4.419c29.713,8.989,57.572,24.021,81.285,44.274c28.805,19.339,50.495,45.175,62.956,74.693
          c12.461,29.518,16.151,61.854,9.69,93.193C409.283,374.12,394.593,402.956,373.288,426.299z"/>
        
        <!-- Shell Pattern -->
        <path class="shell-pattern" d="M256,140 
          a116,116 0 0,1 0,232 
          a116,116 0 0,1 0,-232
          M256,180
          a76,76 0 0,0 0,152
          a76,76 0 0,0 0,-152"/>
        
        <!-- Head -->
        <path class="head" d="M200,256 
          c-20,-20 -20,-60 0,-80
          c20,-20 60,-20 80,0
          c20,20 20,60 0,80
          c-20,20 -60,20 -80,0"/>
        
        <!-- Flippers -->
        <path class="flippers" d="M150,200 
          c-30,-30 -30,-80 0,-110
          c30,-30 80,-30 110,0
          M150,312
          c-30,30 -30,80 0,110
          c30,30 80,30 110,0
          M362,200
          c30,-30 30,-80 0,-110
          c-30,-30 -80,-30 -110,0
          M362,312
          c30,30 30,80 0,110
          c-30,30 -80,30 -110,0"/>
      </svg>
    </div>
    
    <!-- Wave Animation with increased height -->
    <div class="wave-container">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.turtle-container {
  position: absolute;
  z-index: 2;
  animation: float 3s ease-in-out infinite;
}

.turtle {
  transform-origin: center;
  animation: swim 2s ease-in-out infinite;
}

/* Turtle Colors */
.shell {
  fill: #2E7D32; /* Dark green for main shell */
}

.shell-pattern {
  fill: #4CAF50; /* Lighter green for shell pattern */
}

.head {
  fill: #81C784; /* Light green for head */
}

.flippers {
  fill: #81C784; /* Light green for flippers */
}

.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px; /* Increased from 100px to 200px */
  overflow: hidden;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 200px; /* Increased from 100px to 200px */
  background: rgba(0, 188, 212, 0.3);
  border-radius: 50% 50% 0 0;
  animation: wave 3s linear infinite;
}

.wave:nth-child(2) {
  bottom: 20px; /* Increased from 10px to 20px */
  animation: wave 3s linear infinite;
  animation-delay: 0.5s;
  opacity: 0.5;
}

.wave:nth-child(3) {
  bottom: 40px; /* Increased from 20px to 40px */
  animation: wave 3s linear infinite;
  animation-delay: 1s;
  opacity: 0.3;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes swim {
  0%, 100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
}

@keyframes wave {
  0% {
    transform: translateX(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) scaleY(0.9);
  }
  100% {
    transform: translateX(-50%) scaleY(1);
  }
}
</style>