import { defineStore } from 'pinia';

const useInfoStore = defineStore('info', {
  state: () => {
    return {
      count: 99
    };
  },
  actions: {
    plusCount() {
      this.count++;
    }
  },
  getters: {}
});

export default useInfoStore;
