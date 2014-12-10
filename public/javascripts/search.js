function postRequest(action, options, callback) {
    $.ajax({
        url: action,
        type: 'GET',
        dataType: 'text',
        contentType: 'application/text',
        data: JSON.stringify(options),
        timeout: 120000,
        error : function (xhr) {
            console.log("xhr", xhr)
            // logError(xhr);
            callback('Error From Server : '+ JSON.stringify(xhr), null);
        },
        success: function (data){
            console.log(data);
            callback(null, data);
        }
    });
};

function postRequestToGetPicture(action, callback) {
    var url = "service_picture/"+action;
    var options = "";
    postRequest(url, options, function(error, result) {
        if (!error) {
            callback(result);
            console.log("Pas d'erreur", result);
        }
        else
            console.log("error : ", error);
    })
};