# spa-static-server

为打包过后单页应用（spa）提供一个服务
- 能够路由静态文件（js、css 等）
- 能够代理接口
- 将默认地址指向同一个html文件

#### config
    在执行目录下创建server.config.js
    
```
module.exports = {
    host: 'http://xxx.xxx.xxx',                 // 启动域名
    html: `${process.cwd()}/dist/index.html`,   // html位置
    staticRoot: `${process.cwd()}/dist`,        // 静态文件根目录
    proxy: {                                    // 接口代理配置，http-proxy-middleware
        '/api': { target: 'http://xxx.xxx.xxx:9999' },
    }
}
```