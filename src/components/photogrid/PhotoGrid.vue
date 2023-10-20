<template>
  <div v-if="large" class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
    <div v-for="(photo, index) in photos" :key="index" class="flex bg-gray-300 items-center">
      <img :src="photo.url" alt="Photo" class="object-contain w-full h-full mx-auto">
    </div>
    <a v-if="detailPage" :href="`#${detailPage}`" class="bg-gray-200">
    </a>
  </div>
  <div v-else class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
    <div v-for="(photo, index) in photos" :key="index" class="relative w-full h-auto bg-gray-200">
      <img :src="photo.url" alt="Photo" class="w-full h-full object-fill">
      <div class="absolute inset-x-0 bottom-0 px-2 py-1 bg-black bg-opacity-60 text-white text-center text-sm">
        <p class="font-semibold text-xs xs:text-xs md:text-xs lg:text-xs xl:text-sm">{{ photo.title }}</p>
      </div>
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