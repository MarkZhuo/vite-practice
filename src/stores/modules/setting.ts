import { defineStore } from 'pinia';

const useLayoutSettingStore = defineStore('settingStore', {
  state: () => {
    return {
      fold: false
    };
  }
});

export default useLayoutSettingStore;
