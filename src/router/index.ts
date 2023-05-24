import { createRouter, createWebHistory } from 'vue-router';
import blankLayout from '@/layout/basic-layout.vue';
import basicLayout from '@/layout/basic-layout.vue';
import notFound from '@/views/404/index.vue';
import Login from '@/views/login/index.vue';

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
