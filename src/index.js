var express = require('express');
var app = express();
var proxy = require('http-proxy-middleware');
var Config = require('./Config');
var config = new Config(`${process.cwd()}/server.config.js`);

//设置静态文件
app.use(express.static(config.getStaticRoot()));

//设置请求代理
var proxyObj = config.getProxy();
Object.keys(proxyObj).forEach(function (key) {
    app.use(proxy(key, proxyObj[key]));
})

//其他请求返回html
app.get('*', function (req, res) {
    res.sendFile(config.getHtml());
});

//获取可用端口
config.getPort(function (port) {
    app.listen(port);

    console.log('App running at:')
    console.log(`- Local:   ${config.getHost()}:${port}`);
})

