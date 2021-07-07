import path from 'path';

export default (config:any) => {
  config.merge({
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [{ 
        test: /\.(js|ts|tsx)$/, 
        include:[path.join(__dirname, '../symboliclinkpage')],
        exclude: [/demo/,/example/],
        use: [{
          loader: "ts-loader"
        }]
      }]
    },
  });
};
