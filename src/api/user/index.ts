import request from '@/utils/request';
import { loginForm, loginResponseData, userResponseData } from './type';

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info'
}

export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);

export const reqUserInfo = (data: any) =>
  request.get<any, userResponseData>(API.USERINFO_URL, data);
