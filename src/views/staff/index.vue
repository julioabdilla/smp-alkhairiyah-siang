<template>
  <div id="staff" ref="scrollTarget" class="items-left text-left w-full">
    <span class="text-2xl font-semibold">Guru & Staff</span>
    <photo-grid class="pt-2" :photos="guru" />
    <paging class="pt-4"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="changePage"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PhotoGrid from '../../components/photogrid/PhotoGrid.vue'
import Paging from '../../components/paging/Paging.vue'
import staffData from '@/assets/datas/guru.json'

const staffDataPage = JSON.parse(JSON.stringify(staffData)).map(data => {
  return {
    url: require(`@/assets/images/guru/${data}`),
    title: data.replace(/\.[^/.]+$/, ""),
  }
})

export default defineComponent({
  name: 'Staff',
  components: {
    Paging,
    PhotoGrid,
  },
  mounted() {
    // This method will be executed when the component is mounted
    this.initPage();
  },
  data() {
    return {
      guru: staffDataPage,
      currentPage: 1,
      totalPages: 1,
    };
  },
  methods: {
    initPage(){
      this.totalPages = Math.ceil(this.guru.length / 12)
      this.guru = JSON.parse(JSON.stringify(staffDataPage)).slice(0, 12)
    },
    changePage(page) {
      const targetElement = this.$refs.scrollTarget // Replace with your desired target tag or ID
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
      this.currentPage = page
      const startIndex = (page - 1) * 12
      const endIndex = startIndex + 12
      this.guru = JSON.parse(JSON.stringify(staffDataPage)).slice(startIndex, endIndex)
      // Fetch data for the new page
    }
  }
})
</script>
