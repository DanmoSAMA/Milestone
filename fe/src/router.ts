import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('./pages/Home/Home.vue');
const Posts = () => import('./pages/Posts/Posts.vue');
const NotFound = () => import('./pages/NotFound/NotFound.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    path: '/:foo',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
