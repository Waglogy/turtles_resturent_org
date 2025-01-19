import { createRouter, createWebHistory } from 'vue-router';
import HomeTurtles from '@/components/HomeTurtles.vue';
import Contactturtles from '@/components/ContactTurtles.vue';
import Reserveturtles from '@/components/ReserveTurtles.vue';
import BookEvent  from '@/components/BookEvent.vue';
import FooterTurtles from '@/components/FooterTurtles.vue';
import AboutTurtles from '@/components/AboutTurtles.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import MenuViewer from '../components/MenuViewer.vue';
import FaQs from '../components/FandQues.vue'



const routes = [
  {
    path: '/loading',
    name: 'LoadingScreen',
    component: LoadingScreen,
  },
  {
   path: '/faqs',
   name: 'FandQues',
   component: FaQs,
  },
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
    path: '/menu-viewer',
    name: 'MenuViewer',
    component: MenuViewer
  },
  
  

];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;
