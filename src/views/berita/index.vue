<template>
  <div class="news text-left w-full">
    <span class="text-2xl font-semibold">Berita</span>
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

export default defineComponent({
  name: 'Berita',
  components: {
    Paging,
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
