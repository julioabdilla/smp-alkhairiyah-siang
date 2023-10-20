<template>
  <div class="home text-left w-fill">
    <welcome />
    <div class="border-t border-grey-800 my-6"></div>
    <a href="/galeri">
      <div class="flex items-center">
        <photo-icon class="w-6 h-auto mr-2" />
        <span class="text-2xl font-semibold">Galeri »</span>
      </div>
    </a>
    <photo-grid class="pt-2" :photos="gallery" :large="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <a href="/guru">
      <div class="flex items-center">
        <user-icon class="w-6 h-auto mr-1.5 mb-0.5" />
        <span class="text-2xl font-semibold">Guru & Staff »</span>
      </div>
    </a>
    <photo-grid class="pt-2" :photos="guru" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Welcome from './components/Welcome.vue'
import PhotoGrid from '../../components/photogrid/PhotoGrid.vue'
import { PhotoIcon, UserIcon } from '@heroicons/vue/24/solid'
import staffData from '@/assets/datas/guru.json'

const staffDataHome = JSON.parse(JSON.stringify(staffData)).slice(0, 6).map(data => {
  return {
    url: require(`@/assets/images/guru/${data}`),
    title: data.replace(/\.[^/.]+$/, ""),
  }
})
export default defineComponent({
  name: 'Home',
  components: { Welcome, PhotoGrid, PhotoIcon, UserIcon },
  data() {
    return {
      gallery: [
        {
          url: require('@/assets/images/gallery/anbk/IMG-20220920-WA0011.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru/20221125_135401.jpg'),
        },
        {
          url: require('@/assets/images/gallery/kunjungan_dpd/20221103_125108.jpg'),
        },
        {
          url: require('@/assets/images/gallery/kunjungan_museum_muri/IMG-20230117-WA0008.jpg'),
        },
      ],
      guru: staffDataHome,
    }
  },
})
</script>
