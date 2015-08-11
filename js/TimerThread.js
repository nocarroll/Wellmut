function sleep(milliseconds) {
	var start = new Date().time();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().date() - start) > milliseconds){
			break;
    }
  }
}


self.addEventListener('message', function(e){
	var data = e.data;
	for(i=0; i<data.alertTimes.length; i++){
		var reached = false;
		while(!reached){
			var now = new Date(Date.now());
			var nowEncoded = now.getHours()*10000+now.getMinutes()*100+now.getSeconds();
			if(nowEncoded == data.alertTimes[i]){
				self.postMessage('It is '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds());
				reached = true;
			}
		}
	}
			
}, false);



