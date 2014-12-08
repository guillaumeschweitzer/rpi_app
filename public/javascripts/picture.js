function getPicture(path){

    //$("div#display").append("<img height=\"500px\" width=\"600px\" src=\""+path+"\" />");

};

// $(document).on('click', 'div button', function(){
//     var fileName = $('input#path').val();
//     postRequestToGetPicture(fileName, function(error, result) {
//         if (!error) 
//             console.log(result, typeof result);
//         	// on peut récupérer un fichier 
//     });
// });

$(document).on('click', 'div button', function(){
    var fileName = $('input#path').val();

    // Check fileName ! 

    postRequestToTakePicture(fileName, function(error, result) {
        if (!error) {
            // console.log(result, typeof result);
        	postRequestToCopyPicture(function(err, res){
        		if (!err) {
		        	$('div#linkToDisplay').append("<a href='/showPicture'>Show me Picture</a>");
		        	// Quand la photo est prise, on affiche ok + un lien vers showPicture ! 
		        	// Display link ! 
        		}
        		else 
        			alert('erreur dans la copie du fichier');
        	})
        }
        else {
        	alert("Erreur dans la caputre image : '", error, "', '", result,"'");
        }
    });
});