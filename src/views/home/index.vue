<template>
  <div class="home text-left">
    <welcome />
    <div class="border-t border-grey-800 my-6"></div>
    <a href="#/galeri">
      <span class="text-2xl font-semibold">Galeri</span>
    </a>
    <photo-grid class="pt-2" :photos="gallery" :large="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <a href="#/guru">
      <span class="text-2xl font-semibold">Guru</span>
    </a>
    <photo-grid class="pt-2" :photos="guru" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Welcome from './components/Welcome.vue'
import PhotoGrid from '../../components/photogrid/PhotoGrid.vue'

export default defineComponent({
  name: 'Home',
  components: { Welcome, PhotoGrid },
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
      guru: [
        {
          url: require('@/assets/images/profile-placeholder.jpeg'),
          title: 'Nama 1',
        },
        {
          url: require('@/assets/images/profile-placeholder.jpeg'),
          title: 'Nama 1',
        },
        {
          url: require('@/assets/images/profile-placeholder.jpeg'),
          title: 'Nama 1',
        },
        {
          url: require('@/assets/images/profile-placeholder.jpeg'),
          title: 'Nama 1',
        },
        {
          url: require('@/assets/images/profile-placeholder.jpeg'),
          title: 'Nama 1',
        },
        {
          url: require('@/assets/images/profile-placeholder.jpeg'),
          title: 'Nama 1',
        },
      ],
    }
  },
})
</script>
