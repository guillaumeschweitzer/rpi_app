var express = require('express');
var _config = require('../conf/config.js');
var routes = require('./routes');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname+"/views");


app.use(express.static(__dirname+"/public"));

// Statiques 
app.get("/", routes.index);
app.get("/index", routes.index);
app.get("/picture", routes.picture);
app.get("/elasticsearch", routes.elasticsearch);
app.get("/showPicture", routes.showPicture);


// Services
app.get('/service_get_picture/:fileName?', routes.service_get_picture);
app.get('/service_take_picture/:fileName?', routes.service_take_picture);

app.get('/service_copy_file', routes.service_copy_file);

app.listen(_config.connexion.port);




// app.get("/service_case1/:record_id?", routes.service_case1);
// app.get("/case1", routes.case1);
// app.get("/service_case2/:record_id?", routes.service_case2);
// app.get("/case2", routes.case2);
