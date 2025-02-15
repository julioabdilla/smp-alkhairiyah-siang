<template>
  <div class="gallery text-left w-full">
    <span class="text-2xl font-semibold">{{galleryTitle.toUpperCase()}}</span>
    <photo-grid class="pt-2" :photos="items" :large="true" :detailPage="true" />
  </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue'
import { useLoadingStore } from "../../stores/loading";
import PhotoGrid from '@/components/photogrid/PhotoGrid.vue'
import Paging from '@/components/paging/Paging.vue'

export default defineComponent({
  name: 'GelleryDetail',
  components: { 
    PhotoGrid,
    Paging,
  },
  async mounted() {
    // const loadingStore = useLoadingStore();
    // loadingStore.setLoading(true);
    await this.fetchData();
    // loadingStore.setLoading(false);
  },
  data() {
    return {
      galleryId: this.$route.params.galleryId,
      galleryTitle: this.$route.query.title,
      items: [],
      currentPage: 1,
      totalPages: 1,
      perPage: 1000,
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/gallery/${this.galleryId}/item`, {
          params: {
            page: this.currentPage,
            perpage: this.perPage,
          },
        })
        this.totalPages = parseInt(response.headers.get('x-total-page'))
        this.items = response.data.map(item => {
          return {
            title: item.caption,
            url: item.image_url
          }
        })
      } catch (e) {
        console.error(e)
      }
    },
    async changePage(page) {
      this.currentPage = page
      await this.fetchData()
      const targetElement = this.$refs.scrollTarget
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }
})
</script>
