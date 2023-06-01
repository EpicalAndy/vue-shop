import { defineStore } from "pinia";

export const useCommon = defineStore('common', {
  state: () => (
    {
      currency: '&#8381;'
    }
  )
})
