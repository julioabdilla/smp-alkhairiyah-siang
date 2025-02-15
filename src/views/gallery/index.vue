<template>
  <div class="gallery text-left w-full">
    <div v-for="gallery in galleries">
      <router-link :to="{
        name: 'GalleryDetail',
        params: {
          galleryId: gallery.id
        },
        query: {
          title: gallery.title
        }
      }">
        <span class="text-2xl font-semibold">{{gallery.title.toUpperCase()}} »</span>
      </router-link>
      <photo-grid class="pt-2" :photos="gallery.items" :large="true" :detailPage="true" />
    </div>
    <paging class="pt-4"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="changePage"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue'
import { useLoadingStore } from "../../stores/loading";
import PhotoGrid from '@/components/photogrid/PhotoGrid.vue'
import Paging from '@/components/paging/Paging.vue'

export default defineComponent({
  name: 'Gallery',
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
      galleries: [],
      currentPage: 1,
      totalPages: 1,
      perPage: 10,
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/gallery`, {
          params: {
            page: this.currentPage,
            perpage: this.perPage,
            item: 2,
          },
        })
        this.totalPages = parseInt(response.headers.get('x-total-page'))
        this.galleries = response.data.map(gallery => {
          return {
            ...gallery,
            items: gallery.items.map(item => {
              return {
                title: item.caption,
                url: item.image_url
              }
            })
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
