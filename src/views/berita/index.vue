<template>
  <div class="news text-left w-full">
    <div class="flex flex-col">
      <span class="text-2xl font-semibold">PPDP Tahun Ajaran 2025</span>
      <span class="mt-2">Penerimaan Peserta Didik Baru (PPDP) tahun ajaran 2025 telah dibuka.</span>
      <span>Jurusan yang tersedia:</span>
      <ul class="list-disc pl-4 text-gray-800">
        <li><span class="flex items-center">Reguler <a href="/Brosur SMP Al Khairiyah - Reguler.pdf" download class="flex justify-center text-xs text-blue-500 pl-1">(<link-icon class="h-auto w-2"/>unduh brosur)</a></span></li>
        <li><span class="flex items-center">Tahfiz <a href="/Brosur SMP Al Khairiyah - Tahfiz.pdf" download class="flex justify-center text-xs text-blue-500 pl-1">(<link-icon class="h-auto w-2"/>unduh brosur)</a></span></li>
      </ul>
    </div>
    <paging class="pt-4"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="changePage"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Paging from '../../components/paging/Paging.vue'
import { LinkIcon } from '@heroicons/vue/24/solid';

export default defineComponent({
  name: 'Berita',
  components: {
    Paging, LinkIcon
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 1 // Set the total number of pages
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      // Fetch data for the new page
    }
  }
})
</script>
