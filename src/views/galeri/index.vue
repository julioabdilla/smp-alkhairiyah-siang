<template>
  <div class="gallery text-left w-full">
    <span class="text-2xl font-semibold">HARI GURU TAHUN AJARAN 2023-2024</span>
    <photo-grid class="pt-2" :photos="hari_guru_2024" :large="true" :detailPage="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">APEL & PELANTIKAN OSIS</span>
    <photo-grid class="pt-2" :photos="apel_pelantikan_osis" :large="true" :detailPage="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">HARI SANTRI</span>
    <photo-grid class="pt-2" :photos="hari_santri" :large="true" :detailPage="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">JUMAT BERKAH</span>
    <photo-grid class="pt-2" :photos="jumat_berkah" :large="true" :detailPage="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">ANBK TAHUN AJARAN 2022-2023</span>
    <photo-grid class="pt-2" :photos="anbk" :large="true" :detailPage="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">HARI GURU TAHUN AJARAN 2022-2023</span>
    <photo-grid class="pt-2" :photos="hari_guru" :large="true" :detailPage="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">LOMBA 17 AGUSTUS 2023</span>
    <photo-grid class="pt-2" :photos="lomba" :large="true" :detailPage="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">MAULID TAHUN AJARAN 2022-2023</span>
    <photo-grid class="pt-2" :photos="maulid" :large="true" :detailPage="true" />
    <div class="border-t border-grey-800 my-6"></div>
    <span class="text-2xl font-semibold">KUNJUNGAN MUSEUM REKOR MURI</span>
    <photo-grid class="pt-2" :photos="muri" :large="true" :detailPage="true" />
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
      hari_santri: [
        {
          url: require('@/assets/images/gallery/hari_santri/1.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_santri/2.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_santri/3.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_santri/4.jpg'),
        },
      ],
      apel_pelantikan_osis: [
        {
          url: require('@/assets/images/gallery/apel_pelantikan_osis/1.jpg'),
        },
        {
          url: require('@/assets/images/gallery/apel_pelantikan_osis/2.jpg'),
        },
        {
          url: require('@/assets/images/gallery/apel_pelantikan_osis/3.jpg'),
        },
        {
          url: require('@/assets/images/gallery/apel_pelantikan_osis/4.jpg'),
        },
        {
          url: require('@/assets/images/gallery/apel_pelantikan_osis/5.jpg'),
        },
        {
          url: require('@/assets/images/gallery/apel_pelantikan_osis/6.jpg'),
        },
      ],
      hari_guru_2024: [
        {
          url: require('@/assets/images/gallery/hari_guru_2024/1.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru_2024/2.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru_2024/3.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru_2024/4.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru_2024/5.jpg'),
        },
        {
          url: require('@/assets/images/gallery/hari_guru_2024/6.jpg'),
        },
      ],
      jumat_berkah: [
        {
          url: require('@/assets/images/gallery/jumat_berkah/1.jpg'),
        },
        {
          url: require('@/assets/images/gallery/jumat_berkah/2.jpg'),
        },
        {
          url: require('@/assets/images/gallery/jumat_berkah/3.jpg'),
        },
        {
          url: require('@/assets/images/gallery/jumat_berkah/4.jpg'),
        },
      ],
      anbk: [
        {
          url: require('@/assets/images/gallery/anbk/IMG-20220920-WA0011.jpg'),
        },
        {
          url: require('@/assets/images/gallery/anbk/IMG-20220920-WA0014.jpg'),
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
