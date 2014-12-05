function start(){

}

function formatResult(result){
	console.log(result);
}

$(document).ready(function(){
    $(document).on('click','div.query button', function(){
    	var id = $("div.query input").val();
    	var action = "/service_case1/"+id;
    	postRequest(action, "", function(error, result){
    		if (error) {
    			console.log("Erreur dans le traitement de la requete : ", error)


    			$('#tree1').tree(parseData(result));
				$('#tree2').tree({
					data: [{
						label: 'node1',
						children: [{ 
							label: 'child1' 
						},{ 	
							label: 'child2' 
						}]
					},{
						label: 'node2',
						children: [{ 
							label: 'child3' 
						}]
					}]
				});

    		}
    		else
    		{
    			console.log(result);

				$('#tree1').tree(parseData(result));
				$('#tree2').tree({
					data: [{
						label: 'node1',
						children: [{ 
							label: 'child1' 
						},{ 	
							label: 'child2' 
						}]
					},{
						label: 'node2',
						children: [{ 
							label: 'child3' 
						}]
					}]
				});
    		}
    	})
    })
})

function postRequest(action, options, callback) {
    $.ajax({
        url: action,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(options),
        timeout: 30000,
        success: function (data){
            // console.log(data);
            callback(null, data);
        },
        error : function (xhr) {
            // console.log("xhr", xhr)
            // logError(xhr);
            callback('Error');
        }
    });
};

function labObj(k, v){
	var data = {};
	data[k] = v;
	return data;
}

function parseData(o){
	var data = {};
	for (var i in o) {
		// chaque éléments
		var label = o[i]['ID'];
		var children = [];
		for (var u in o[i]) {
			if (u !== "ID") {
				children.push({label:o[i][u]});
			}
		}
		data.label = label;
		data.children = children;
		// console.log("label : ", label, "children : ", children);
	}
	return data;
}