// export default {
//   nodeModulesTransform: {
//     type: 'none',
//   },
//   routes: [
//     { path: '/', component: '@/pages/index' },
//     { path: '/symboliclinkpage', component: '@/pages/symboliclinkpage' },
//   ],
//   fastRefresh: {},
//   extraBabelIncludes: [
//     path.join(__dirname, '../symboliclinkpage'),
//   ],
//   chainWebpack,
// };

export default {
  routes: [
    { path: '/', component: './index' },
    { path: '/symboliclinkpage', component: './symboliclinkpage' },
  ],
  // plugins: ['umi-plugin-react'],
};
