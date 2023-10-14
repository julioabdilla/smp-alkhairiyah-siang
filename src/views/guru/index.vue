<template>
  <div class="about text-left">
    <span class="text-2xl font-semibold">Guru</span>
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
  name: 'Guru',
  components: {
    Paging,
  },
  mounted() {
    // This method will be executed when the component is mounted
    this.initPage();
  },
  data() {
    return {
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
      currentPage: 1,
      totalPages: 1 // Set the total number of pages
    };
  },
  methods: {
    initPage(){
      this.totalPages = Math.ceil(this.guru.length / 9);
    },
    changePage(page) {
      this.currentPage = page;
      // Fetch data for the new page
    }
  }
})
</script>
