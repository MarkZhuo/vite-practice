import { createRouter, createWebHistory } from 'vue-router';
const blankLayout = import('@/layout/blank-layout.vue');
const basicLayout = import('@/layout/basic-layout.vue');
const notFound = import('@/views/404');
const Login = import('@/views/login');

// noinspection TypeScriptValidateTypes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'blank-layout',
      component: blankLayout,
      children: [
        {
          path: '/:pathMatch(.*)',
          name: 'notFound',
          component: notFound,
          meta: {
            layout: 'blank-layout'
          }
        }
      ]
    },
    {
      name: 'basic-layout',
      component: basicLayout,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login,
          meta: {
            layout: 'basic-layout'
          }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('token')) next({ name: 'Login' });
  else next();
});

export default router;
