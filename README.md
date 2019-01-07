# vue-cli3-dist-server

#### config
    文件名为server.config.js
    
```
module.exports = {
    host: 'http://xxx.xxx.xxx',
    html: `${process.cwd()}/dist/index.html`,
    staticRoot: `${process.cwd()}/dist`,
    proxy: {
        '/api': { target: 'http://xxx.xxx.xxx:9999' },
    }
}
```