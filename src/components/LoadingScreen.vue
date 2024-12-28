<template>
    <div class="loading-screen">
      <div class="turtle-container">
        <div class="turtle">
          <div class="turtle-head"></div>
          <div class="turtle-shell"></div>
          <div class="flipper left"></div>
          <div class="flipper right"></div>
        </div>
      </div>
      <h2 class="loading-text font-pacifico">Breathe in the Ocean. Savor the Flavors.</h2>
      <div class="wave-container">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed for the loading component
  </script>
  
  <style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #faf1e8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    overflow: hidden;
  }
  
  /* Updated wave container with increased height */
  .wave-container {
    background: #00BCD4;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px; /* Increased height */
    overflow: hidden;
    transform: rotate(180deg); /* Flip the container upside down */
  }
  
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23faf1e8' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") repeat-x;
    animation: waveUp 20s linear infinite;
    transform-origin: center bottom;
  }
  
  .wave1 {
    animation: waveUp 20s linear infinite;
    opacity: 1;
    z-index: 1000;
  }
  
  .wave2 {
    animation: waveUp 15s linear infinite;
    opacity: 0.5;
    z-index: 999;
  }
  
  .wave3 {
    animation: waveUp 10s linear infinite;
    opacity: 0.2;
    z-index: 998;
  }
  
  /* Updated wave animation to move upwards */
  @keyframes waveUp {
    0% {
      transform: translateX(0) translateY(0) scaleY(1);
    }
    50% {
      transform: translateX(-25%) translateY(-10px) scaleY(0.5);
    }
    100% {
      transform: translateX(-50%) translateY(0) scaleY(1);
    }
  }
  
  .turtle-container {
    position: relative;
    width: 120px;
    height: 120px;
    animation: float 3s ease-in-out infinite;
    z-index: 1001; /* Ensure turtle stays above waves */
  }
  
  .turtle {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .turtle-shell {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 80%;
    height: 60%;
    background: #3A6507;
    border-radius: 50%;
    transform: rotate(-10deg);
  }
  
  .turtle-head {
    position: absolute;
    top: 30%;
    left: 70%;
    width: 30%;
    height: 25%;
    background: #3A6507;
    border-radius: 50%;
    transform: rotate(20deg);
  }
  
  .flipper {
    position: absolute;
    width: 30%;
    height: 15%;
    background: #3A6507;
    border-radius: 50%;
  }
  
  .flipper.left {
    top: 40%;
    left: 0;
    transform: rotate(-45deg);
    animation: swim-left 1s ease-in-out infinite;
  }
  
  .flipper.right {
    top: 40%;
    right: 0;
    transform: rotate(45deg);
    animation: swim-right 1s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  @keyframes swim-left {
    0%, 100% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-15deg);
    }
  }
  
  @keyframes swim-right {
    0%, 100% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(15deg);
    }
  }
  
  .loading-text {
    margin-top: 2rem;
    color: #3A6507;
    font-size: 2rem;
    animation: pulse 1.5s ease-in-out infinite;
    z-index: 1001; /* Ensure text stays above waves */
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .wave-container {
      height: 200px; /* Adjusted height for mobile */
    }
    
    .turtle-container {
      width: 80px;
      height: 80px;
    }
  
    .loading-text {
      font-size: 1.5rem;
    }
  }
  </style>