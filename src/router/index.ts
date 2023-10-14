import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profil/index.vue'),
  },
  {
    path: '/guru',
    name: 'Guru',
    component: () => import(/* webpackChunkName: "profile" */ '../views/guru/index.vue'),
  },
  {
    path: '/siswa',
    name: 'Kesiswaan',
    component: () => import(/* webpackChunkName: "profile" */ '../views/siswa/index.vue'),
  },
  {
    path: '/galeri',
    name: 'Galeri',
    component: () => import(/* webpackChunkName: "profile" */ '../views/galeri/index.vue'),
  },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import(/* webpackChunkName: "profile" */ '../views/berita/index.vue'),
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import(/* webpackChunkName: "profile" */ '../views/kontak/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
