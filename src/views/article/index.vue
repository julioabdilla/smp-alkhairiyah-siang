<template>
  <div class="news text-left w-full">
    <div v-for="article in articles" :key="article.id">
      <div class="flex cursor-pointer" @click="goToDetail(article.id)">
        <img v-if="getFirstImageSrc(article.content)" :src="getFirstImageSrc(article.content)" class="w-48 h-28 object-cover aspect-video mr-4" />
        <div class="flex flex-col py-1">
          <div class="flex items-center text-center">
            <span class="text-xs text-gray-500">Diterbitkan {{ article.published_at }}</span><span v-if="article.created_by" class="text-xs text-gray-500 ml-1">oleh {{ article.created_by }}</span>
          </div>
          <span class="text-lg font-bold">{{ article.title }}</span>
          <div class="text-wrap text-sm brief-content leading-tight mt-1" v-html="getBriefContent(article.content)"></div>
          <!-- <a v-if="isContentTruncated(article.content)" @click="goToDetail(article.id)" class="text-blue-500 hover:text-blue-700 cursor-pointer text-sm">lihat selengkapnya</a> -->
        </div>
      </div>
      <div class="border-t border-gray-300 my-5"></div>
    </div>
    <paging class="pt-4"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="changePage"
    />
  </div>
</template>

<script>
import moment from 'moment'
require('moment/locale/id')
moment.locale('id')

import axios from 'axios'
import truncate from 'html-truncate'
import { defineComponent } from 'vue'
import Paging from '../../components/paging/Paging.vue'

export default defineComponent({
  name: 'Article',
  components: {
    Paging,
  },
  data() {
    return {
      articles: [],
      currentPage: 1,
      totalPages: 1,
      perPage: 10
    }
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/article/published`, {
          params: {
            page: this.currentPage,
            perpage: this.perPage,
            sort: 'published_at.desc'
          },
        })
        this.totalPages = parseInt(response.headers.get('x-total-page'))
        this.articles = response.data.map(article => {
          let format = 'DD MMMM';
          if (!moment().isSame(moment(article.published_at), 'year')) {
            format = 'DD MMM YYYY'
          }
          return {
            id: article.id,
            title: article.title,
            content: article.content,
            published_at: moment(article.published_at).format(format),
            created_by: article.created_by,
          }
        })
      } catch (e) {
        console.error(e)
      }
    },
    getBriefContent(content) {
      const maxLength = 100
      const sanitizedContent = content.replace(/<br\s*\/?>|\n|<\/?p>/g, ' ')
      return truncate(sanitizedContent, maxLength);
    },
    isContentTruncated(content) {
      const maxLength = 100
      const sanitizedContent = content.replace(/<br\s*\/?>|\n|<\/?p>/g, ' ')
      return sanitizedContent.length > maxLength
    },
    getFirstImageSrc(content) {
      const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/)
      // return imgTagMatch ? imgTagMatch[1] : require('@/assets/images/image-placeholder.jpg')
      return imgTagMatch ? imgTagMatch[1] : null
    },
    changePage(page) {
      this.currentPage = page;
      // Fetch data for the new page
    },
    goToDetail(articleId) {
      this.$router.push({ name: 'ArticleDetail', params: { articleId } });
    }
  }
})
</script>

<style scoped>
.brief-content {
  @apply max-h-28 overflow-hidden text-ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
}
</style>