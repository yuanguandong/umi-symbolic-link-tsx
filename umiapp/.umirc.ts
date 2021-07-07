
export default {
  routes: [
    { path: '/', component: './index' },
    { path: '/symboliclinkpage', component: './symboliclinkpage' },
  ],
  plugins:[
    [
      'umi-plugin-react',
      {
        dva: {
          hmr: true,
        }
      }
    ]
  ]
};
