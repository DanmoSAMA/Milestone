import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('./pages/Home/Home.vue');
const Posts = () => import('./pages/Posts/Posts.vue');
const Tags = () => import('./pages/Tags/Tags.vue');
const Search = () => import('./pages/Search/Search.vue');
const Resume = () => import('./pages/Resume/Resume.vue');
const Album = () => import('./pages/Album/Album.vue');
const Edit = () => import('./pages/Edit/Edit.vue');
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
    path: '/tags',
    name: 'tags',
    component: Tags,
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume,
  },
  {
    path: '/album',
    name: 'album',
    component: Album,
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
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
