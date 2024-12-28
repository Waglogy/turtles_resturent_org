import { createRouter, createWebHistory } from 'vue-router';
import HomeTurtles from '@/components/HomeTurtles.vue';
import Contactturtles from '@/components/ContactTurtles.vue';
import Reserveturtles from '@/components/ReserveTurtles.vue';
import BookEvent  from '@/components/BookEvent.vue';
import FooterTurtles from '@/components/FooterTurtles.vue';
import AboutTurtles from '@/components/AboutTurtles.vue';


//Admin routes
import AdminLogin from "../components/Admin/TurtlesLogin.vue"

import TurtlesEvents from '@/components/Admin/TurtlesEvents.vue';
const routes = [
  {
    path: '/',
    name: 'HomeTurtles',
    component: HomeTurtles,
  },
  {
    path: '/contact',
    name: 'Contactturtles',
    component: Contactturtles,
  },
  {
    path: '/book-event',
    name:'BookEvent',
    component: BookEvent,
  },
  {
    path: '/about',
    name: 'Aboutturtles',
    component: AboutTurtles,
  },
  {
    path: '/reserve',
    name: 'Reserveturtles',
    component: Reserveturtles,
  },
  {
    path: '/footer',
    name: 'FooterTurtles',
    component: FooterTurtles,
  }, 
  {
    path: '/Admin-login',
    name: 'AdminLogin',
    component: AdminLogin,
  },
  
   {
    path: '/add-events',
    name: 'TurtlesEvents',
    component: TurtlesEvents ,
  },

];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;
