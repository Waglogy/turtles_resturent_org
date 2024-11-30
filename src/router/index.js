import { createRouter, createWebHistory } from 'vue-router';
import HomeTurtles from '@/components/HomeTurtles.vue';
import Contactturtles from '@/components/ContactTurtles.vue';
import Reserveturtles from '@/components/ReserveTurtles.vue';
import Menuturtles from '@/components/MenuTurtles.vue';
import FooterTurtles from '@/components/FooterTurtles.vue';

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
    path: '/menu',
    name: 'Menuturtles',
    component: Menuturtles,
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
  }
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;
