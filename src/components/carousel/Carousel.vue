<template>
  <div class="carousel w-full px-40 md:px-20 lg:px-36 xl:px-60 2xl:px-80">
    <!-- <button @click="prevImage" class="carousel-control prev">Previous</button> -->
    <div class="carousel-content w-full h-auto">
      <img :src="require(`@/assets/images/banner/${images[currentImage]}`)" :alt="currentImage" class="w-full h-auto object-cover" />
    </div>
    <!-- <button @click="nextImage" class="carousel-control next">Next</button> -->
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      currentImage: 0,
      images: [
        'banner3.jpeg',
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.carousel-control.prev {
  left: 0;
}

.carousel-control.next {
  right: 0;
}

.carousel-content {
  position: relative;
  max-width: 100%;
}
</style>