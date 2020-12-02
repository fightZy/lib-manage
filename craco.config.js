const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                //'@primary-color': '#e6f7ff', // 全局主色
               '@link-color': '#e6f7ff', // 链接色
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};