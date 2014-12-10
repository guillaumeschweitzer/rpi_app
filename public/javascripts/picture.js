function getPicture(path){

    //$("div#display").append("<img height=\"500px\" width=\"600px\" src=\""+path+"\" />");

};

var pattern = {
	fileName : "",
	width : "",
	height : "",
	quality : "",
	rot : ""
}

$(document).on('click', 'div button#ok', function(){
    // if($('div#optionList').css('display') != 'none')
    // 	getAdvancedOptions();
    // else 
    var vals = getSimpleOptions();
    // var args = $('input#path').val();
    // console.log("Arguments envoyés : ", args);
    postRequestToGetPicture(vals, function(error, result) {
        if (!error) 
            console.log(result, typeof result);
    });
})

$(document).on('click', 'div button#options', function() {
	$('#optionList').toggle();
})

function getValues(name) {
	var label = '#'+name;
	var val = $(label).val();
	console.log(label, val);
	return val;
}

function checkLength(val) {
	if (val.length > 0)
		return true
	else 
		return false
}

function getAdvancedOptions() {
	var optionList = [{label:"fileName", command:"-o"},
	{label:"width", command:"-w"},
	{label:"height",commande:"-h"},
	{label:"quality",commande:"-q"},
	{label:"timeout",commande:"-t"},
	{label:"timestamp",commande:"-tl"},
	{label:"rotation",commande:"-rot"},
	{label:"sharpness",commande:"-sh"},
	{label:"contrast",commande:"-co"},
	{label:"brightness",commande:"-br"},
	{label:"saturation",commande:"-sa"},
	{label:"iso",commande:"-iso"},
	{label:"verticalFlip",commande:"-vf"},
	{label:"horizontalFlip",commande:"-hf"},
	{label:"encoding",commande:"-e"},
	{label:"exposure",commande:"-ex"},
	{label:"awb",commande:"-awb"},
	{label:"imageEffect",commande:"-ifx"},
	{label:"metering",commande:"-mm"},
	{label:"drc",commande:"-drc"},
	{label:"shutter",commande:"ss"}]
}

function getSimpleOptions() {
	var optionList = [{label:"fileName", commande:"-o"},
	{label:"width", commande:"-w"},
	{label:"height",commande:"-h"},
	{label:"quality",commande:"-q"},
	{label:"encoding", commande:"-e"}]
	for (var i in optionList){
		optionList[i].value = typeof getValues(optionList[i].label) != "boolean" ? getValues(optionList[i].label) : false;
	}
	var args = [];
	for (var i in optionList) {
			args.push(""+optionList[i].commande+" "+optionList[i].value)
	}
	console.log(args.join(' '));
	return args;
}