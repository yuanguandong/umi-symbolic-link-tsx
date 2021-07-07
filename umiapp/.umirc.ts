import path from 'path';
import chainWebpack from './webpackconfig';

export default {
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/symboliclinkpage', component: '@/pages/symboliclinkpage' },
  ],
  fastRefresh: {},
  extraBabelIncludes: [
    path.join(__dirname, '../symboliclinkpage'),
  ],
  chainWebpack,
};
