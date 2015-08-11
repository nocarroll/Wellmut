//=============================== DB ================================
var EMAIL = "glenn@strong.com";
var PASSWORD = "1234";
var COLORS = ["#fd885c","#1db095","#e8a9e7","#e5e5da","#f0fd5c","#90fd5c","#5cfd88","#5ce0fd","#5c80fd","#FF0000","#FF0000","#FF0000"];
//==================================================================

//[USERID, DATAID, CREATED, VALUE:JSON, LOCATION]
var DATA = [[1, 1, '22-03-2015 10:25:00', '{"name":"sleep","type":"number","value":"6.4"}', [51.896892,-8.486316]],
            [1, 2, '23-03-2015 10:25:00', '{"name":"sleep","type":"number","value":"8.1"}', [51.890094,-8.481016]],
            [1, 3, '24-03-2015 10:25:00', '{"name":"sleep","type":"number","value":"7.8"}', [53.385847,-6.064684]],
            [1, 4, '25-03-2015 10:25:00', '{"name":"sleep","type":"number","value":"7.5"}', [53.271198,-9.048378]],
            
            [1, 5, '22-03-2015 10:25:00', '{"name":"sports","type":"number","value":"1.2"}', [51.896892,-8.486316]],
            [1, 6, '23-03-2015 10:25:00', '{"name":"sports","type":"number","value":"0.2"}', [51.890094,-8.481016]],
            [1, 7, '24-03-2015 10:25:00', '{"name":"sports","type":"number","value":"1.3"}', [53.385847,-6.064684]],
            [1, 8, '25-03-2015 10:25:00', '{"name":"sports","type":"number","value":"1.8"}', [53.271198,-9.048378]],
            
            [1, 9, '22-03-2015 10:25:00', '{"name":"reading","type":"number","value":"2.5"}', [51.896892,-8.486316]],
            [1, 10, '23-03-2015 10:25:00', '{"name":"reading","type":"number","value":"2.1"}', [51.890094,-8.481016]],
            [1, 11, '24-03-2015 10:25:00', '{"name":"reading","type":"number","value":"1.0"}', [53.385847,-6.064684]],
            [1, 12, '25-03-2015 10:25:00', '{"name":"reading","type":"number","value":"0.4"}', [53.271198,-9.048378]],
            
            [1, 13, '18-03-2015 10:25:00', '{"name":"mood","type":"number","value":"1"}', [53.385847,-6.064684]], //Howth
            [1, 14, '19-03-2015 10:25:00', '{"name":"mood","type":"number","value":"2"}', [53.360712,-6.251209]], //Croke Park
            [1, 15, '20-03-2015 10:25:00', '{"name":"mood","type":"number","value":"4"}', [53.351242,-6.260779]], //O'Connell Street
            [1, 16, '21-03-2015 10:25:00', '{"name":"mood","type":"number","value":"3"}', [53.343306,-6.244762]], // Westland Square
            [1, 17, '22-03-2015 10:25:00', '{"name":"mood","type":"number","value":"3"}', [51.896892,-8.486316]], // Western Road, Cork
            [1, 18, '23-03-2015 10:25:00', '{"name":"mood","type":"number","value":"5"}', [51.889146, -8.485531]], //Lough Park, Cork
            [1, 19, '24-03-2015 10:25:00', '{"name":"mood","type":"number","value":"5"}', [51.873891, -8.505915]], //Wilton, Cork
            [1, 20, '25-03-2015 10:25:00', '{"name":"mood","type":"number","value":"1"}', [51.928823, -8.571123]], //Blarney Stone, Cork
			[1, 21, '26-03-2015 10:25:00', '{"name":"mood","type":"number","value":"5"}', [52.276248, -9.688764]], // Neil's House, Tralee
			[1, 22, '27-03-2015 10:25:00', '{"name":"mood","type":"number","value":"4"}', [52.265913, -9.705163]], //Tralee Town Park
			[1, 23, '28-03-2015 10:25:00', '{"name":"mood","type":"number","value":"1"}', [53.377236, -6.355161]], // Conor's House
			[1, 24, '29-03-2015 10:25:00', '{"name":"mood","type":"number","value":"4"}', [53.386970, -6.204591]], // Cian's House
			[1, 25, '30-03-2015 10:25:00', '{"name":"mood","type":"number","value":"3"}', [53.354439, -6.309437]], // Phoenix Park
			[1, 26, '31-03-2015 10:25:00', '{"name":"mood","type":"number","value":"2"}', [53.422008, -6.247639]], //Dublin Airport
			[1, 27, '01-04-2015 10:25:00', '{"name":"mood","type":"number","value":"1"}', [53.295793, -6.133676]], //Dun Laoghaire
			[1, 28, '02-04-2015 10:25:00', '{"name":"mood","type":"number","value":"5"}', [53.343197, -6.271439]], //Christ Church
			[1, 29, '03-04-2015 10:25:00', '{"name":"mood","type":"number","value":"5"}', [53.338379, -6.257692]], //Stephen's Green
			[1, 30, '04-04-2015 10:25:00', '{"name":"mood","type":"number","value":"3"}', [53.343699, -6.256464]], //TCD Campus
			[1, 31, '05-04-2015 10:25:00', '{"name":"mood","type":"number","value":"2"}', [53.370798, -6.274575]]]; // Glasnevin
var DATA_ID_COUNTER = 13;


//================================ GETTER ========================================

/**
 * Validates the user by email and password.
 *
 * @param {string} email - Email address of the user
 * @param {string} password - Password of the user
 * @return {array, false} Returns the details of the user in an array, if the input validated or false if it didn't. Details array looks like:
 * [user_id, email, password, firstname, lastname, score, registered, last_active]
 */
function dbValidateUser(email, password) {
	if(email == EMAIL && password==PASSWORD) return [1, EMAIL, PASSWORD, "Glenn", "Strong", "1000000", "12-03-2015 10:10:00", "12-03-2015 10:15:00"];
	else return false;              
}



/**
 * Finds and returns the data of the primary diagram of a user.
 * The method also fills in the data to be visualised into the content JSON.
 *
 * @param {number} userID - ID of the user for the requested data.
 * @param {number} planID - ID of the plan the user is in
 * @return {array, false} Returns the details of the diagram in an array, if a diagram was found and false if it didn't. Details array looks like:
 * [diagram_id, plan_id, user_id, content, enabled, primary, created]
 */
function dbGetPrimaryDiagramOfUserAsHighChart(userID, planID){
	var diagramSpec = JSON.parse(	'{"diagram":{'+
										'"type":"multipleLineChart",'+
										'"datasets":['+
											'{"name":"sleep","datarange":"4"},'+
										    '{"name":"sports","datarange":"4"},'+
										    '{"name":"reading","datarange":"4"}],'+
										'"highcharts":{'+
											'"title":{"text":""},'+
										    '"xAxis":{"title":{"text":"days ago"},"categories":[4,3,2,1]},'+
										    '"yAxis":{"title":{"text": "average hours per day"}},'+										    
										    '"legend":{"layout":"vertical","align":"right","verticalAlign":"middle","borderWidth":0},'+
										    '"series":[]'+
										'}'+
									'}}');
	diagramSpec = dbFillDiagramSpecWithData(userID, diagramSpec);
	return [1,1,1,diagramSpec,true,true,"12-03-2015 10:20:00"];
}

function dbFillDiagramSpecWithData(userID, diagramSpec){
	if(diagramSpec.diagram.datasets.length >0){
		switch(diagramSpec.diagram.type){
			case "multipleLineChart":
				var seriesObj = [];
				for (i = 0; i < diagramSpec.diagram.datasets.length; i++) { 
					var data = [];
					var range = parseInt(diagramSpec.diagram.datasets[i].datarange);
					while(range > 0){
						for (j = DATA.length-1; j >= 0; j--) {
							if(DATA[j][0] == userID){
								var value = JSON.parse(DATA[j][3]);
								if(value.name == diagramSpec.diagram.datasets[i].name){
									data[range-1] = parseInt(value.value);
									range--;
								}
							}
						}
					}
					var seriesEntry = {
								"name":diagramSpec.diagram.datasets[i].name,
								"color":COLORS[i],
								"data":data
						};
					seriesObj[i] = seriesEntry;
				}
				
				diagramSpec.diagram.highcharts.series = seriesObj;
				break;
			case "pieChart":
				for (i = 0; i < diagramSpec.diagram.datasets.length; i++) { 
					diagramSpec.diagram.highcharts.series[i].name = diagramSpec.diagram.datasets[i].name;
					var dataArray = diagramSpec.diagram.highcharts.series[i].data;
					
					if(!isNaN(diagramSpec.diagram.datasets[i].datarange)){
						var range = parseInt(diagramSpec.diagram.datasets[i].datarange);
						while(range > 0){
							for (j = DATA.length-1; j >= 0; j--) {
								if(DATA[j][0] == userID){
									var value = JSON.parse(DATA[j][3]);
									if(value.name == diagramSpec.diagram.datasets[i].name){
										dataArray[parseInt(value.value)-1].y ++;
										dataArray[parseInt(value.value)-1].color = COLORS[parseInt(value.value)-1];
										range--;
									}
								}
							}
						}
					}
					diagramSpec.diagram.highcharts.series[i].data = dataArray;
				}
			break;
		}
		return diagramSpec;
	}else return false;
}


/**
 * Finds and returns the details of all secondary diagrams of a user.
 *
 * @param {number} planID - ID of the plan the user is in
 * @param {number} userID - ID of the user for the requested data.
 * @return {array, false} Returns the details of the all secondary diagrams in an array, if a dataset rows were found and false if it didn't. Details array looks like: 
 * [[diagram_id, plan_id, user_id, content, enabled, primary, created], ...]
 */
function dbGetSecondaryDiagramsOfUser(userID, planID){
	var diagramSpec = JSON.parse(	'{"diagram":{'+
										'"datasets":[{"name":"mood","datarange":"8"}],'+
										'"type":"pieChart",'+
										'"highcharts":{'+
											'"title":{"text": "Your mood"},'+
											'"plotOptions":{'+
												'"pie":{'+
													'"dataLabels":{'+
														'"enabled": "true",'+
														'"distance": -50,'+
														'"style":{'+
															'"color": "white"'+
														'}'+
													'},'+
													'"startAngle": "-90",'+
													'"endAngle": "90",'+
													'"center": ["50%", "75%"]'+
												'}'+
											'},'+
											'"series":[{'+
												'"type": "pie",'+
												'"name": "mood",'+
												'"innerSize": "50%",'+
												'"data":['+
													'{"name":"very sad",	"y":0, "color":"#000000"},'+
													'{"name":"sad",			"y":0, "color":"#000000"},'+
													'{"name":"ok",			"y":0, "color":"#000000"},'+
													'{"name":"happy",		"y":0, "color":"#000000"},'+
													'{"name":"very happy",	"y":0, "color":"#000000"}'+
												']'+
											'}]'+
										'}'+
									'}}');
	diagramSpec = dbFillDiagramSpecWithData(1, diagramSpec);
	
	var secondDiagramSpec = JSON.parse(	'{"diagram":{'+
										'"type":"multipleLineChart",'+
										'"datasets":['+
											'{"name":"sleep","datarange":"4"},'+
										    '{"name":"sports","datarange":"4"},'+
										    '{"name":"reading","datarange":"4"}],'+
										'"highcharts":{'+
											'"title":{"text":""},'+
										    '"xAxis":{"title":{"text":"days ago"},"categories":[4,3,2,1]},'+
										    '"yAxis":{"title":{"text": "average hours per day"}},'+										 
										    '"legend":{"layout":"vertical","align":"right","verticalAlign":"middle","borderWidth":0},'+
										    '"series":[]'+
										'}'+
									'}}');
	secondDiagramSpec = dbFillDiagramSpecWithData(1, secondDiagramSpec);
									
	return [[2,1,1,
	        diagramSpec
	        ,true,false,"12-03-2015 10:20:00"],
	        [3,1,1,
	        secondDiagramSpec
		    ,true,false,"12-03-2015 10:20:00"],
		    [4,1,1,
		    diagramSpec
		    ,true,false,"12-03-2015 10:20:00"]
			];
}

function dbGetMapDataWithMood(userID, planID, range){

	var x = (DATA.length - 1);
	var y = (x - range);
	var locations = [];
		for( i = x; i > y; i-- ){
			
			var z = DATA[i][4];
			
			z.push(JSON.parse(DATA[i][3]).value);
			
			locations.push(z);
			
			
		
		}
		
	return locations;	

}





//================================ GETTER end ========================================





//================================ SETTER ========================================

/**
 * Changes the password of a user.
 *
 * @param {string} email - Email address of the new user.
 * @param {string} password - Password of the new user..
 * @param {string} firstname - First name of the new user.
 * @param {string} lastname - Last name of the new user.
 * @return {array} Returns the details of the new user account. The details array looks like [user_id, email, password, firstname, lastname, score, registered, last_active].
 */
function dbCreateNewUser(email, password, firstname, lastname){
	return [];
}


/**
 * Changes the password of a user.
 *
 * @param {number} userID - ID of the user.
 * @param {string} password - New password.
 * @return {boolean} Returns true if it found the user and could change the password successfully and false if not.
 */
function dbSetNewPassword(userID, password){
	if(userID == 1){
		PASSWORD == password;
		return true;
	}else return false;
}

//"12-03-2015 10:20:00"
function dbSetNewData(userID, value, location){
	var now = new Date(Date.now());
	
	var locoArray = JSON.parse(location);
	DATA.push([userID
	           ,DATA_ID_COUNTER
	           ,""+now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()
	           ,value, locoArray]);
	DATA_ID_COUNTER++;
}


//================================ SETTER end ========================================



