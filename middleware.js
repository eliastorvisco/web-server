//Use module exports to expose middleware

var middleware = {
    requireAuthentication: function (request, response, next) {
        console.log('private route hit!');
        next();
    },
    logger: function (request, response, next) { //allows to see the requests
        console.log('Request: ' + request.method + ' ' + request.originalUrl + ' [' + new Date().toString() + ']');
        next();
    }
};

module.exports = middleware;
