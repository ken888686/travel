import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Tour from '@/views/Tour.vue';
import Food from '@/views/Food.vue';
import Hotel from '@/views/Hotel.vue';
import MyJourney from '@/views/MyJourney.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour,
  },
  {
    path: '/food',
    name: 'Food',
    component: Food,
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: Hotel,
  },
  {
    path: '/my-journey',
    name: 'MyJourney',
    component: MyJourney,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
