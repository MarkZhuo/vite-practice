import router from '@/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import pinia from './stores';
import userStore from '@/stores/modules/user';
import setting from '../setting';

const useUserStore = userStore(pinia);
NProgress.configure({ showSpinner: false });

// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = `${setting.title} ｜ ${to.meta.title}`;
  NProgress.start();
  const TOKEN = useUserStore.token;
  const USER_NAME = useUserStore.userName;
  if (TOKEN) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (USER_NAME) {
        next();
      } else {
        try {
          await useUserStore.userInfo();
          next();
        } catch (error) {
          await useUserStore.userLogout();
          next({ path: '/login', query: { redirect: to.path } });
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
  }
});

// 全局后置守卫
router.afterEach((to: any, from: any) => {
  NProgress.done();
});
