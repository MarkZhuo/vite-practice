import type { RouteRecordRaw } from 'vue-router';

export interface userState {
  token: string | null;
  menusRoutes: RouteRecordRaw[];
  userName: string;
  avatar: string;
}
