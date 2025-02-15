<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
};
</script>

<!-- <style scoped>
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style> -->
