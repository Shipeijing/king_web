import { defineConfig } from 'umi';
export default defineConfig({
  dva: {
    hmr: true,
    //skipModelValidate: true
  },
  request: {
    dataField: 'data',
  },
  proxy: {
    '/king': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/king': '' },
    },
  },
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