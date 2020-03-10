import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/home/index' },
        { path: '/world', component: '@/pages/world/index' },
        { path: '/user', component: '@/pages/user/index' },
        { path: '/topic', component: '@/pages/topic/index' },
        { path: '/message', component: '@/pages/message/index' },
      ],
    },
  ],
});
