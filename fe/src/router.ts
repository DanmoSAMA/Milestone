import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const SideBar = () => import('./components/SideBar/Sidebar.vue');
const Footer = () => import('./components/Footer/Footer.vue');

const Posts = () => import('./pages/Posts/Posts.vue');
const Post = () => import('./pages/Post/Post.vue');
const Tags = () => import('./pages/Tags/Tags.vue');
const Search = () => import('./pages/Search/Search.vue');
const Resume = () => import('./pages/Resume/Resume.vue');
const Album = () => import('./pages/Album/Album.vue');
const Edit = () => import('./pages/Edit/Edit.vue');
const NotFound = () => import('./pages/NotFound/NotFound.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/posts',
  },
  {
    path: '/posts/',
    name: 'posts',
    components: {
      default: SideBar,
      main: Posts,
      footer: Footer,
    },
  },
  {
    path: '/post',
    name: 'post',
    components: {
      default: SideBar,
      main: Post,
      footer: Footer,
    },
  },
  {
    path: '/tags',
    name: 'tags',
    components: {
      default: SideBar,
      main: Tags,
      footer: Footer,
    },
  },
  {
    path: '/search',
    name: 'search',
    components: {
      default: SideBar,
      main: Search,
      footer: Footer,
    },
  },
  {
    path: '/resume',
    name: 'resume',
    components: {
      default: SideBar,
      main: Resume,
      footer: Footer,
    },
  },
  {
    path: '/album',
    name: 'album',
    components: {
      default: SideBar,
      main: Album,
      footer: Footer,
    },
  },
  {
    path: '/edit',
    name: 'edit',
    components: {
      default: SideBar,
      main: Edit,
      footer: Footer,
    },
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
