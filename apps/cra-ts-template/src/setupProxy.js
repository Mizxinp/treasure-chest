const {createProxyMiddleware: proxy} =require('http-proxy-middleware') ; 

module.exports = function(app){
  app.use(
    proxy('/api',{ 
      target: 'http://175.178.118.138:8080/admin',
      changeOrigin:true,
      pathRewrite:{'^/api': ''}
    })
  )
}