<template>
  <div class="home text-left w-fill">
    <welcome />
    <div class="border-t border-grey-800 my-6"></div>
    <a href="/berita">
      <div class="flex items-center">
        <document-icon class="w-6 h-auto mr-2" />
        <span class="text-2xl font-semibold">PPDB Tahun Ajaran 2025 »</span>
      </div>
    </a>
    <div class="flex flex-col">
      <span class="mt-2">Penerimaan Peserta Didik Baru (PPDB) tahun ajaran 2025 telah dibuka. Silahkan hubungi kami melalui whatsapp ke nomor <a class="text-blue-500" href="https://wa.me/6285211275433?text=Assalamualaikum,%20Saya%20ingin%20menanyakan%20tentang%20SMP%20AL-KHAIRIYAH%202%20SIANG" target="_blank">085211275433</a>.</span>
      <span>Jurusan yang tersedia:</span>
      <ul class="list-disc pl-4 text-gray-800">
        <li><span class="flex items-center">Reguler <a href="/Brosur SMP Al Khairiyah - Reguler.pdf" download class="flex justify-center text-xs text-blue-500 pl-1">(<link-icon class="h-auto w-2"/>unduh brosur)</a></span></li>
        <li><span class="flex items-center">Tahfiz <a href="/Brosur SMP Al Khairiyah - Tahfiz.pdf" download class="flex justify-center text-xs text-blue-500 pl-1">(<link-icon class="h-auto w-2"/>unduh brosur)</a></span></li>
      </ul>
    </div>
    <div class="border-t border-grey-800 my-6"></div>
    <a href="/galeri">
      <div class="flex items-center">
        <photo-icon class="w-6 h-auto mr-2" />
        <span class="text-2xl font-semibold">Galeri »</span>
      </div>
    </a>
    <photo-grid class="pt-2" :photos="gallery" :large="true" :detailPage="true" />
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
import { PhotoIcon, UserIcon, LinkIcon, DocumentIcon } from '@heroicons/vue/24/solid'
import staffData from '@/assets/datas/guru.json'

const staffDataHome = JSON.parse(JSON.stringify(staffData)).slice(0, 4).map(data => {
  return {
    url: require(`@/assets/images/guru/${data}`),
    title: data.replace(/\.[^/.]+$/, ""),
  }
})
export default defineComponent({
  name: 'Home',
  components: { Welcome, PhotoGrid, PhotoIcon, UserIcon, LinkIcon, DocumentIcon },
  data() {
    return {
      gallery: [
        {
          url: require('@/assets/images/gallery/hari_guru_2024/6.jpg'),
        },
        {
          url: require('@/assets/images/gallery/apel_pelantikan_osis/2.jpg'),
        },
        {
          url: require('@/assets/images/gallery/kunjungan_dpd/20221103_125108.jpg'),
        },
      ],
      guru: staffDataHome,
    }
  },
})
</script>
