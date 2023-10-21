<template>
  <div v-if="large" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
    <div v-for="(photo, index) in photos" :key="index" class="flex bg-gray-300 items-center">
      <img :src="photo.url" @click="openImage(photo.url)" alt="Photo" class="object-cover w-full aspect-video mx-auto cursor-pointer">
    </div>
    <div v-if="selectedImage && detailPage" @click="closeImage" class="z-20 fixed top-0 left-0 bg-black bg-opacity-80 w-full h-full flex items-center justify-center">
      <div>
        <div class="bg-white bg-opacity-30 rounded-full mb-2 ml-auto w-8 p-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" @click="closeImage" class="w-6 h-6">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
          </svg>
        </div>
        <img :src="selectedImage" alt="Full Image" class="max-h-full max-w-full w-[50em] md:transform md:transition-transform hover:scale-125" />
      </div>
    </div>
  </div>
  <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
    <div v-for="(photo, index) in photos" :key="index" class="flex flex-col w-full h-auto bg-gray-200">
      <img :src="photo.url" alt="Photo" class="w-full h-full object-fill">
      <div class="w-full px-2 py-1 bg-black text-white text-center text-sm">
        <p class="font-medium text-xs xs:text-xs md:text-xs lg:text-xs xl:text-sm">{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'PhotoGrid',
  props: ['photos', 'detailPage', 'large'],
  data() {
    return {
      selectedImage: null,
    }
  },
  created() {
    document.addEventListener('keydown', this.handleEscKey);
  },
  destroyed() {
    document.removeEventListener('keydown', this.handleEscKey);
  },
  methods: {
    handleEscKey(event) {
      if (event.key === 'Escape' || event.key === 'Esc' || event.key === 'Backspace') {
        this.closeImage();
      }
    },
    openImage(image) {
      this.selectedImage = image;
    },
    closeImage() {
      this.selectedImage = null;
    },
  }
})
</script>

<style>
/* Add custom styles if needed */
</style>