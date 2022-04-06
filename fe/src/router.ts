import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const SideBar = () => import('./components/SideBar/Sidebar.vue')
const Footer = () => import('./components/Footer/Footer.vue')

const Posts = () => import('./pages/Posts/Posts.vue')
const Post = () => import('./pages/Post/Post.vue')
const Tags = () => import('./pages/Tags/Tags.vue')
const Search = () => import('./pages/Search/Search.vue')
const Edit = () => import('./pages/Edit/Edit.vue')
const Login = () => import('./pages/Login/Login.vue')
const NotFound = () => import('./pages/NotFound/NotFound.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts/',
    name: 'posts',
    meta: { title: '文章列表 | Milestone' },
    components: {
      default: SideBar,
      main: Posts,
      footer: Footer
    }
  },
  {
    path: '/post',
    name: 'post',
    components: {
      default: SideBar,
      main: Post,
      footer: Footer
    }
  },
  {
    path: '/tags',
    name: 'tags',
    meta: { title: '标签 | Milestone' },
    components: {
      default: SideBar,
      main: Tags,
      footer: Footer
    }
  },
  {
    path: '/search',
    name: 'search',
    meta: { title: '搜索 | Milestone' },
    components: {
      default: SideBar,
      main: Search,
      footer: Footer
    }
  },
  {
    path: '/edit',
    name: 'edit',
    meta: { title: '编辑 | Milestone' },
    components: {
      default: SideBar,
      main: Edit,
      footer: Footer
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登陆 | Milestone' },
    component: Login
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404 | Milestone' },
    component: NotFound
  },
  {
    path: '/:foo',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // 改变标题
    document.title = to.meta.title as string
  }
  next()
})

export default router
