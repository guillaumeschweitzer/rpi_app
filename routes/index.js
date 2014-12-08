var _config = require('../../conf/config.js');
var childProcess = require('child_process').exec;

exports.service_get_picture = function(req, res){
	
	var getParams = function(req){
		return {
			param : req.params.fileName
		}
	}
	// generate page with file 
	childProcess('nodejs -v', function(err, stdout, stderr) {
		console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (err !== null) {
	        console.log('exec error: ' + err);
	    }
	    res.send(stdout);
	});
};

exports.service_take_picture = function(req, res){
	var getFileName = function(req){
		return "-o "+req.params.fileName;
	};

	var rep = "/home/pi/RaspiCam";
	var width = "-w 1920";
	var height = "-h 1080";
	var options = "-vf -hf -q 100 -t 500";
	var sep = " ";
	var name = getFileName(req);
	
    childProcess('cd '+rep+'; raspistill '+width+sep+height+sep+options+sep+name, function(error, outSTD, errSTD) {
    	if (error !== null) {
    		console.log('Capture exec error : '+error);
    		res.send('Problème sur la capture d\'image')
    		console.log("end of capture");
    	}
    	else {
    		res.send("Worked");
    		console.log("end of capture");
    	}
    });
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

exports.showPicture = function(req, res){
	res.render('showPicture', { title: ' Picture Image.png ', data : {}});
};

exports.page404 = function(req, res) {
	res.render('404', { title: ' FAIL ', data : {}});
};

// move picture from rapsiCam to public/images
exports.service_copy_file = function(req, res){
	childProcess('cp /home/pi/RaspiCam/image.png /home/pi/nodeApp/app/public/images', function(err, stdout, stderr) {
    	if (err !== null) {
    		console.log('File copy error : ' + err);
    		res.send("fail");
    	}
    	else {
    		res.send("ok");
    	}
    });
};