<template>
  <div class="news text-left w-full flex flex-col">
    <span class="text-2xl font-semibold">{{ article.title }}</span>
    <span class="text-xs text-gray-500">{{ article.published_at }}</span><span v-if="article.created_by"> &middot; oleh: {{ article.created_by }}</span>
    <div class="article-content text-wrap text-sm mt-2" v-html="article.content"></div>
  </div>
</template>

<script>
import moment from 'moment'
require('moment/locale/id')
moment.locale('id')

import axios from 'axios'
import { defineComponent } from 'vue'
import Paging from '../../components/paging/Paging.vue'

export default defineComponent({
  name: 'ArticleDetail',
  components: {
    Paging,
  },
  data() {
    return {
      article: {},
      currentPage: 1,
      totalPages: 1
    }
  },
  async mounted() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const { data: article } = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/article/${this.$route.params.articleId}`)
        this.article = article;
        if (this.article.published_at) {
          this.article.published_at = moment(this.article.published_at).format('DD MMMM YYYY, HH:mm')
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
})
</script>

<style scoped>
::v-deep(.article-content ul) {
  list-style: disc !important;
  padding-left: 1.5rem;
}

::v-deep(.article-content ol) {
  list-style: decimal !important;
  padding-left: 1.5rem;
}

::v-deep(.article-content a) {
  color: #1a73e8;
  text-decoration: none;
}

::v-deep(.article-content a:hover) {
  text-decoration: underline;
}
</style>