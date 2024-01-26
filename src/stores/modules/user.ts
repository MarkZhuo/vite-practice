import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user';
import type { loginForm, loginResponseData } from '@/api/user/type';
import type { userState } from './types/types';
import { SET_TOKEN, GET_TOKEN } from '@/utils/token';
import { constantRoute } from '@/router/routers';

const userStore = defineStore('user', {
  // 存储数据
  state: (): userState => {
    return {
      token: GET_TOKEN(),
      menusRoutes: constantRoute
    };
  },
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data);
      if (result.code === 200) {
        this.token = result.data.token as string;
        SET_TOKEN(result.data.token as string);
        return 'ok';
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    }
  },
  getters: {}
});

export default userStore;
