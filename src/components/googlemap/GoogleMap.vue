<template>
  <div id="map" class="w-full">
    <iframe
      width="312"
      height="312"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.1747732073428!2d106.91091942339015!3d-6.115615459750455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1ff5a2d8e91f%3A0xd6d45c2235e82d7!2sMTs%2FSMK-2%20Al%20Khairiyah!5e0!3m2!1sen!2sid!4v1697296173605!5m2!1sen!2sid&gestureHandling=none"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
}
</script>

<style scoped>
#map {
  pointer-events: none;
}
</style>