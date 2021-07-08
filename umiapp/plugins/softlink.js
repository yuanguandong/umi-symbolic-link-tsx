

export default api => {
  api.addBeforeMiddlewares((a,b,c,d) => {
    console.log(1,a,b,c,d)
    return (req, res, next) => {
      console.log('req',req)
      console.log('res',res)
      console.log('next',next)
    };
  });
  api.describe({
    key: 'softlink',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  })
}