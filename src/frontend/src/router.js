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
  },
  {
    path: '/store/detail/1',
    name: 'StoreDetailView',
    component: () => import('@/views/store/StoreDetailView'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;