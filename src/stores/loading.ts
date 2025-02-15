import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('mainLoading', {
  state: () => ({
    loading: false
  }),
  actions: {
    setLoading(state: boolean) {
      this.loading = state
    }
  },
})
