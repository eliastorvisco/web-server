var express = require('express');
var app = express();
const PORT = 3000;

var middleware = require('./middleware.js');

//app.use(middleware.requireAuthentication); //It is important to locate it above app.get ... in the code.
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
    response.send('About us!');
});

app.use(express.static(__dirname + '/public')); //expose a folder. It needs the entire address.
app.listen(PORT, function() {
    console.log('Express server started at port ' + PORT + '!');
});
