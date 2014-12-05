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
	console.log(res);
	// console.log(JSON.stringify(getParams(req)));
	// res.status(200).send('okkkkkk');
	// res.json('okkkkkk');
	res.send("json");
};

exports.index = function(req, res){
  res.render('index', { title: ' * ', data : {}});
};

exports.picture = function(req, res){
  res.render('picture', { title: ' Taking Picture Module ', data : {}});
};

exports.elasticsearch = function(req, res){
  res.render('elasticsearch', { title: ' ElasticSearch ', data : {}});
};