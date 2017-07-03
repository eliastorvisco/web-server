var express = require('express');
var app = express();
const PORT = 3000;

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

//app.use(middleware.requireAuthentication); //It is important to locate it above app.get ... in the code.
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
    response.send('About us!');
});

app.use(express.static(__dirname + '/public')); //expose a folder. It needs the entire address.
app.listen(PORT, function() {
    console.log('Express server started at port ' + PORT + '!');
});
