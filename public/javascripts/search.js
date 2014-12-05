function postRequest(action, options, callback) {
    $.ajax({
        url: action,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(options),
        timeout: 120000,
        success: function (data){
            // console.log(data);
            callback(null, data);
        },
        error : function (xhr) {
            console.log("xhr", xhr)
            // logError(xhr);
            callback('Error From Server : '+ JSON.stringify(xhr), null);
        }
    });
};

function postRequestToGetPicture(action, callback) {
    var url = "service_picture/"+action;
    var options = "";
    postRequest(url, options, function(error, result) {
        if (!error) 
            console.log("Pas d'erreur");
        callback(result);
    })
};