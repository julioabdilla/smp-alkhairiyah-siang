<template>
  <div class="gallery text-left w-full">
    <span class="text-2xl font-semibold">ANBK TAHUN AJARAN 2022-2023</span>
    <photo-grid class="pt-2" :photos="anbk" :large="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">HARI GURU TAHUN AJARAN 2022-2023</span>
    <photo-grid class="pt-2" :photos="hari_guru" :large="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">LOMBA 17 AGUSTUS 2023</span>
    <photo-grid class="pt-2" :photos="lomba" :large="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">MAULID TAHUN AJARAN 2022-2023</span>
    <photo-grid class="pt-2" :photos="maulid" :large="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">KUNJUNGAN MUSEUM REKOR MURI</span>
    <photo-grid class="pt-2" :photos="muri" :large="true" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PhotoGrid from '../../components/photogrid/PhotoGrid.vue'

export default defineComponent({
  name: 'Galeri',
  components: { PhotoGrid },
  data() {
    return {
      anbk: [
        {
          url: require('@/assets/images/gallery/anbk/IMG-20220919-WA0052.jpg'),
        },
        {
          url: require('@/assets/images/gallery/anbk/IMG-20220920-WA0011.jpg'),
        },
        {
          url: require('@/assets/images/gallery/anbk/IMG-20220920-WA0014.jpg'),
        },
        {
          url: require('@/assets/images/gallery/anbk/IMG-20220920-WA0024.jpg'),
        },
      ],
      hari_guru: [
        {
          url: require('@/assets/images/gallery/hari_guru/20221125_135401.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru/20221125_135420.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru/20221125_135434.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru/20221125_142642.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru/20221125_144556.jpg'),
        },
      ],
      lomba: [
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220815-WA0021.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220815-WA0041.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220815-WA0043.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220815-WA0044.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220815-WA0045.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220815-WA0049.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220815-WA0050.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220816-WA0008.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/IMG-20220816-WA0009.jpg'),
        },
        {
          url: require('@/assets/images/gallery/lomba_17_agustus/WhatsApp Image 2022-08-11 at 19.17.12.jpeg'),
        },
      ],
      maulid: [
        {
          url: require('@/assets/images/gallery/maulid/20221020_131037.jpg'),
        },
        {
          url: require('@/assets/images/gallery/maulid/20221020_131134.jpg'),
        },
        {
          url: require('@/assets/images/gallery/maulid/20221020_132709.jpg'),
        },
        {
          url: require('@/assets/images/gallery/maulid/20221020_134015.jpg'),
        },
        {
          url: require('@/assets/images/gallery/maulid/20221020_134436.jpg'),
        },
        {
          url: require('@/assets/images/gallery/maulid/20221020_154439.jpg'),
        },
      ],
      muri: [
        {
          url: require('@/assets/images/gallery/kunjungan_museum_muri/IMG-20230117-WA0008.jpg'),
        },
        {
          url: require('@/assets/images/gallery/kunjungan_museum_muri/IMG-20230117-WA0010.jpg'),
        },
        {
          url: require('@/assets/images/gallery/kunjungan_museum_muri/IMG-20230117-WA0012.jpg'),
        },
        {
          url: require('@/assets/images/gallery/kunjungan_museum_muri/IMG-20230117-WA0023.jpg'),
        },
      ]
    }
  },
})
</script>
