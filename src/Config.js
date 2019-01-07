var fs = require('fs');
var getPort = require('./getPort');

var Config = function (configPath) {
    this._configPath = configPath
    this._custom = this.getCustomConfig();
}

Config.prototype.getHost = function () {
    return this._custom.host || 'http://127.0.0.1';
}

Config.prototype.getPort = function (cb) {
    getPort(9000, cb);
}

Config.prototype.getHtml = function () {
    return this._custom.html || `${process.cwd()}/dist/index.html`;
}


Config.prototype.getStaticRoot = function () {
    return this._custom.staticRoot || `${process.cwd()}/dist`;
}


Config.prototype.getProxy = function () {
    return this._custom.proxy || {};
}


Config.prototype.getCustomConfig = function () {
    if (fs.existsSync(this._configPath)) {
        return require(this._configPath)
    } else {
        return {}
    }
}

module.exports = Config;
