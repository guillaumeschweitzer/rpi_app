var _config = require('../../conf/config.js');

exports.service_picture = function(req, res){
	// function (req, res) {
	// 	console.log("smthning");

	// 	var options = {
	// 		root: __dirname + '/public/',
	// 		dotfiles: 'deny',
	// 		headers: {
	// 			'x-timestamp': Date.now(),
	// 			'x-sent': true
	// 		}
	// 	};

	// 	var fileName = req.params.name;
	// 	console.log("File: "+fileName);
	// 	res.sendFile(fileName, options, function (err) {
	// 		if (err) {
	// 			console.log(err);
	// 			res.status(err.status).end();
	// 		}
	// 		else {
	// 			console.log('Sent: ', fileName);
	// 		}
	// 	});
	// };
	var getParams = function(req){
		return {
			param : req.params.fileName
		}
	}
	console.log(JSON.stringify(getParams(req)));
	var resp = res.send("C:\\Users\\Guillaume\\Desktop\\Projets\\RPI\\appli\\appli_rpi\\public\\test.png");
	console.log(resp);
};

exports.index = function(req, res){
  res.render('index', { title: ' * ', data : {}});
};

exports.picture = function(req, res){
  res.render('picture', { title: ' * ', data : {}});
};