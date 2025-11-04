import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Success from '@/views/Success.vue';
import Cancel from '@/views/Cancel.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    // Placeholder routes for future details
    { path: '/announcements/:id', component: HomePage },
    { path: '/matches/:id', component: HomePage },
    { path: '/success', component: Success },
    { path: '/cancel', component: Cancel },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

