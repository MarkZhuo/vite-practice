import { defineStore } from 'pinia';
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user';
import type { loginForm, loginResponseData } from '@/api/user/type';
import type { userState } from './types/types';
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token';
import { constantRoute } from '@/router/routers';

const userStore = defineStore('user', {
  // 存储数据
  state: (): userState => {
    return {
      token: GET_TOKEN(),
      menusRoutes: constantRoute,
      userName: '',
      avatar: ''
    };
  },
  actions: {
    async userLogin(data: any) {
      const result: loginResponseData = await reqLogin(data);
      if (result.code === 200) {
        this.token = result.data as string;
        SET_TOKEN(result.data as string);
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    async userInfo() {
      const result = await reqUserInfo();
      if (result.code === 200) {
        this.userName = result.data.name;
        this.avatar = result.data.avatar;
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    async userLogout() {
      const result = await reqLogout();
      if (result.code === 200) {
        this.token = '';
        this.avatar = '';
        this.userName = '';
        REMOVE_TOKEN();
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }
    }
  },
  getters: {}
});

export default userStore;
