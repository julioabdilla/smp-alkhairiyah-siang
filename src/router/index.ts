import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/index.vue'),
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import(/* webpackChunkName: "profile" */ '../views/staff/index.vue'),
  },
  // {
  //   path: '/siswa',
  //   name: 'Kesiswaan',
  //   component: () => import(/* webpackChunkName: "profile" */ '../views/siswa/index.vue'),
  // },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "profile" */ '../views/gallery/index.vue'),
  },
  {
    path: '/gallery/:galleryId',
    name: 'GalleryDetail',
    component: () => import(/* webpackChunkName: "profile" */ '../views/gallery_detail/index.vue'),
    props: route => ({
      galleryId: route.params.galleryId,
      title: route.query.title
    }),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "profile" */ '../views/article/index.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "profile" */ '../views/contact/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
