var express = require('express');
var _config = require('../conf/config.js');
var routes = require('./routes');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname+"/views");


app.use(express.static(__dirname+"/public"));

app.get("/index", routes.index);
app.get("/", routes.index);
app.get("/picture", routes.picture);

app.get('/service_picture/:fileName?',routes.service_picture);

// app.get("/service_case1/:record_id?", routes.service_case1);
// app.get("/case1", routes.case1);
// app.get("/service_case2/:record_id?", routes.service_case2);
// app.get("/case2", routes.case2);

app.listen(_config.connexion.port);

