<template>
    <footer class="footer">
     

        <div class="footer-info">
          <h2>About Us</h2>
          <p>
            Welcome to Turtles Beach Restaurant! Experience the finest dining in Goa.
            Enjoy the view, food, and a relaxing atmosphere.
          </p>
        </div>
  
        <div class="footer-social">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> Facebook</a>
            </li>
            <li>
              <a href="#" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
            </li>
            <li>
              <a href="#" target="_blank"><i class="fab fa-youtube"></i> YouTube</a>
            </li>
          </ul>
        </div>
  
        <div class="footer-contact">
          <h2>Contact Us</h2>
          <ul>
            <li><i class="fas fa-phone-alt"></i> Phone: 1234567890</li>
            <li><i class="fas fa-envelope"></i> Email: contact@turtles.in</li>
          </ul>
        </div>

    
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterTur",
  };
  </script>
  
  <style scoped>
  .footer {
    background: url('../assets/21.jpg') center/cover no-repeat;
    color: white;
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    max-width: 1200px;
  }
  
  .footer-info,
  .footer-social,
  .footer-contact {
    flex: 1;
    margin: 0 20px;
  }
  
  .footer-info h2,
  .footer-social h2,
  .footer-contact h2 {
    font-size: 1.5em;
    margin-bottom: 15px;
    
  }
  
  .footer-info p,
  .footer-social ul li,
  .footer-contact ul li {
    font-size: 1em;
    line-height: 1.8em;
    color:#333333;
  }
  
  .footer-social ul,
  .footer-contact ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-social ul li,
  .footer-contact ul li {
    margin-bottom: 10px;
    color:#333333;
  }
  
  .footer-social a {
    color:#333333;
    text-decoration: none;
    font-size: 1em;
    transition: color 0.3s ease;
  }
  
  .footer-social a:hover {
    color: #ff6347;
  }
  
  .footer-social i,
  .footer-contact li {
    margin-right: 10px;
    font-size: 1em;
    
  }
  
  @media screen and (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
    .footer{
      flex-direction: column;
    }
  
    .footer-info,
    .footer-social,
    .footer-contact {
      margin: 0px 0;
      text-align: center;
    }
  }
  </style>
  