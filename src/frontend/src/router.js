import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/main/Main'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;