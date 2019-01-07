var detect = require('detect-port');

var getPort = function (port, cb) {

    detect(port, (err, _port) => {
        if (err) {
            console.log(err);
        }

        if (port == _port) {
            cb(port);
        } else {
            getPort(_port, cb);
        }
    });
}

module.exports = getPort;