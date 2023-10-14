<template>
  <div v-if="large" class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
    <div v-for="(photo, index) in photos" :key="index" class="flex bg-gray-200 items-center">
      <img :src="photo.url" alt="Photo" class="object-cover w-full h-full mx-auto">
    </div>
    <a v-if="detailPage" :href="`#${detailPage}`" class="bg-gray-200">
    </a>
  </div>
  <div v-else class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(photo, index) in photos" :key="index" class="bg-gray-200">
      <img :src="photo.url" alt="Photo" class="w-full h-auto">
      <span v-if="photo.title" class="text-sm px-2">{{ photo.title }}</span>
    </div>
    <a v-if="detailPage" :href="`#${detailPage}`" class="bg-gray-200">
    </a>
  </div>
</template>

<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
  props: ['photos', 'detailPage', 'large'],
})
</script>

<style>
/* Add custom styles if needed */
</style>