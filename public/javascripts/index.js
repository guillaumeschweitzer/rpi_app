


$(document).on('click', 'div#showPicture a', function(){
    postRequestToCopyPicture(function(error, result) {
        if (!error) 
            console.log(result, typeof result);
        else {
            $('div#linkToDisplay').append("<a href='/showPicture'>Show me Picture</a>");
            window.location.redirect('/showPicture');
        	// Quand la photo est prise, on affiche ok + un lien vers showPicture ! 
        	// Display link ! 
        }
    });
});