import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: () => import('@/views/front/IndexView'),
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: () => import('@/views/admin/MainView'),
  },
  {
    path: '/login',
    name: 'loginView',
    component: () => import('@/views/login/LoginView'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;