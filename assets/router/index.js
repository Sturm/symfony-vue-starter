// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/list',
    component: () => import('../layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'List',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '../views/ListView.vue'),
      },
    ],
  },
  {
    path: '/login',
    children: [
      {
        path: '',
        name: 'LoginView',
        component: () => import(/* webpackChunkName: "home" */ '../views/LoginView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
