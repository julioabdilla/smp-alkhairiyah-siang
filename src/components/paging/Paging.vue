<template>
  <div class="grid grid-cols-auto">
    <div class="paging flex space-x-2 text-sm">
      <button
        @click="changePage('prev')"
        :disabled="currentPage === 1"
        class="px-2 py-1 rounded text-white"
      >
        «
      </button>
      <div class="flex space-x-2">
        <button
          v-for="page in (totalPages || 1)"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-2 py-1 rounded',
            currentPage === page ? 'active text-white' : 'bg-gray-100'
          ]"
        >
          {{ page }}
        </button>
      </div>
      <button
        @click="changePage('next')"
        :disabled="currentPage === totalPages"
        class="px-2 py-1 rounded text-white"
      >
        »
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  props: {
    currentPage: Number,     // Current page number
    totalPages: Number       // Total number of pages
  },
  methods: {
    changePage(direction) {
      if (direction === 'prev' && this.currentPage > 1) {
        this.$emit('page-change', this.currentPage - 1);
      } else if (direction === 'next' && this.currentPage < this.totalPages) {
        this.$emit('page-change', this.currentPage + 1);
      }
    },
    goToPage(page) {
      this.$emit('page-change', page);
    }
  }
};
</script>

<style scoped>
.paging > button {
  background-color: #0a8801;
}
/* .paging > button:disabled {
  background-color: #f3f4f6;
  color: black;
} */
.paging .active {
  background-color: #0a8801;
}
</style>