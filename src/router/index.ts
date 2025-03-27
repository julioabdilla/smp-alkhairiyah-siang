import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/index.vue'),
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../views/staff/index.vue'),
  },
  // {
  //   path: '/siswa',
  //   name: 'Kesiswaan',
  //   component: () => import('../views/siswa/index.vue'),
  // },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/gallery/index.vue'),
  },
  {
    path: '/gallery/:galleryId',
    name: 'GalleryDetail',
    component: () => import('../views/gallery_detail/index.vue'),
    props: route => ({
      galleryId: route.params.galleryId,
      title: route.query.title
    }),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/article/index.vue'),
  },
  {
    path: '/article/:articleId',
    name: 'ArticleDetail',
    component: () => import('../views/article_detail/index.vue'),
    props: route => ({
      articleId: route.params.articleId,
      title: route.query.title
    }),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
