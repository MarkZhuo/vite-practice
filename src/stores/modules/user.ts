import { defineStore } from 'pinia';
import { reqLogin, reqUserInfo } from '@/api/user';
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
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data);
      if (result.code === 200) {
        this.token = result.data.token as string;
        SET_TOKEN(result.data.token as string);
        return 'ok';
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
    async userInfo() {
      const result = await reqUserInfo();
      if (result.code === 200) {
        this.userName = result.data.checkUser.username;
        this.avatar = result.data.checkUser.avatar;
        return 'ok';
      } else {
        return Promise.reject('获取用户信息失败');
      }
    },
    userLogout() {
      this.token = '';
      this.avatar = '';
      this.userName = '';
      REMOVE_TOKEN();
    }
  },
  getters: {}
});

export default userStore;
