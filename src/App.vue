<template>
  
    <!-- Add a navigation bar or links if needed -->
    

    <!-- Dynamic route rendering -->
     <NavBar/>
    <router-view />
  <FooterTurtles />
   


  
</template>

<script>
import FooterTurtles from './components/FooterTurtles.vue';
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    FooterTurtles,
    NavBar,
  },
};
</script>

<style>
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


  li {
    color: #333333;
    font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  }
 

</style>
