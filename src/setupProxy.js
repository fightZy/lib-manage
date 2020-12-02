const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports=function(app){
    app.use(createProxyMiddleware('/api',
    {
        target:"http://localhost:7777",
        pathRewrite:{
            '^/api':'',
            
        },
        changeOrigin:true,
        secure:false,// 是否验证证书
        ws:true, // 启用websocket
    }))
}