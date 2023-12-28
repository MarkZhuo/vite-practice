export const constantRoute = [
  {
    path: '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/404',
    name: 'NotFount',
    component: () => import('@/views/404/index')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404'
  }
];
