import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/symboliclinkpage', component: '@/pages/symboliclinkpage' },
  ],
  fastRefresh: {},
});
