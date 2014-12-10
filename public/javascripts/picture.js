function getPicture(path){

    //$("div#display").append("<img height=\"500px\" width=\"600px\" src=\""+path+"\" />");

};

$(document).on('click', 'div button', function(){
    var args = $('input#path').val();
    console.log("Arguments envoyés : ", args);
    postRequestToGetPicture(args, function(error, result) {
        if (!error) 
            console.log(result, typeof result);
    });
})